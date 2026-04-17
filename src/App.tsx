import { useState, useCallback } from 'react';
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  closestCenter,
} from '@dnd-kit/core';
import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { POKEMON_DB, INITIAL_AREAS } from './data';
import type { PokopiaArea, Pokemon, House } from './types';
import { MAX_HOUSE_SIZE } from './types';
import { PokemonPool } from './components/PokemonPool';
import { AreaColumn } from './components/AreaColumn';
import { PokemonCardOverlay } from './components/PokemonCard';
import './App.css';

let houseIdCounter = 1;
function newHouseId(): string {
  return `house-${houseIdCounter++}`;
}

function createHouse(pokemonIds: string[] = []): House {
  return { id: newHouseId(), pokemonIds };
}

function findLocation(
  areas: PokopiaArea[],
  pokemonId: string
): { areaId: string; houseId: string } | null {
  for (const area of areas) {
    for (const house of area.houses) {
      if (house.pokemonIds.includes(pokemonId)) {
        return { areaId: area.id, houseId: house.id };
      }
    }
  }
  return null;
}

function removePokemonFromAreas(areas: PokopiaArea[], ids: string[]): PokopiaArea[] {
  return areas.map((area) => ({
    ...area,
    houses: area.houses
      .map((h) => ({ ...h, pokemonIds: h.pokemonIds.filter((pid) => !ids.includes(pid)) }))
      .filter((h) => h.pokemonIds.length > 0),
  }));
}

function addPokemonToArea(
  areas: PokopiaArea[],
  targetAreaId: string,
  pokemonIds: string[],
  targetHouseId?: string
): PokopiaArea[] {
  return areas.map((area) => {
    if (area.id !== targetAreaId) return area;
    const houses = area.houses.map((h) => ({ ...h, pokemonIds: [...h.pokemonIds] }));

    if (targetHouseId) {
      const houseIdx = houses.findIndex((h) => h.id === targetHouseId);
      if (houseIdx !== -1) {
        let remaining = [...pokemonIds];
        let hi = houseIdx;
        while (remaining.length > 0) {
          const available = MAX_HOUSE_SIZE - houses[hi].pokemonIds.length;
          if (available > 0) {
            houses[hi].pokemonIds.push(...remaining.splice(0, available));
          }
          if (remaining.length > 0) {
            const newH = createHouse(remaining.splice(0, MAX_HOUSE_SIZE));
            houses.splice(hi + 1, 0, newH);
            hi++;
          }
        }
        return { ...area, houses };
      }
    }

    let remaining = [...pokemonIds];
    if (houses.length > 0) {
      const last = houses[houses.length - 1];
      const available = MAX_HOUSE_SIZE - last.pokemonIds.length;
      if (available > 0) {
        last.pokemonIds.push(...remaining.splice(0, available));
      }
    }
    while (remaining.length > 0) {
      houses.push(createHouse(remaining.splice(0, MAX_HOUSE_SIZE)));
    }
    return { ...area, houses };
  });
}

export default function App() {
  const [poolIds, setPoolIds] = useState<string[]>(Object.keys(POKEMON_DB));
  const [areas, setAreas] = useState<PokopiaArea[]>(INITIAL_AREAS);
  const [moveFamilyTogether, setMoveFamilyTogether] = useState(false);
  const [activeDragIds, setActiveDragIds] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor)
  );

  const getFamilyIds = useCallback(
    (pokemonId: string, currentPool: string[], currentAreas: PokopiaArea[]): string[] => {
      if (!moveFamilyTogether) return [pokemonId];
      const family = POKEMON_DB[pokemonId]?.family;
      if (!family) return [pokemonId];
      if (currentPool.includes(pokemonId)) {
        return currentPool.filter((pid) => POKEMON_DB[pid]?.family === family);
      }
      const loc = findLocation(currentAreas, pokemonId);
      if (loc) {
        const area = currentAreas.find((a) => a.id === loc.areaId);
        if (area) {
          const allInArea = area.houses.flatMap((h) => h.pokemonIds);
          return allInArea.filter((pid) => POKEMON_DB[pid]?.family === family);
        }
      }
      return [pokemonId];
    },
    [moveFamilyTogether]
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const pokemonId = (event.active.data.current as { pokemonId: string }).pokemonId;
      const ids = getFamilyIds(pokemonId, poolIds, areas);
      setActiveDragIds(ids);
    },
    [getFamilyIds, poolIds, areas]
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      setActiveDragIds([]);
      const { active, over } = event;
      if (!over) return;

      const pokemonId = (active.data.current as { pokemonId: string }).pokemonId;
      const draggedIds = getFamilyIds(pokemonId, poolIds, areas);

      const overType = (over.data.current as { type?: string })?.type;
      const overAreaId = (over.data.current as { areaId?: string })?.areaId;
      const overHouseId = (over.data.current as { houseId?: string })?.houseId;

      if (overType === 'pool' || over.id === 'pool') {
        setAreas((prev) => removePokemonFromAreas(prev, draggedIds));
        setPoolIds((prev) => {
          const existing = new Set(prev);
          const toAdd = draggedIds.filter((id) => !existing.has(id));
          return [...prev, ...toAdd];
        });
        return;
      }

      const targetAreaId = overAreaId;
      if (!targetAreaId) return;

      setPoolIds((prev) => prev.filter((id) => !draggedIds.includes(id)));
      setAreas((prev) => {
        const cleared = removePokemonFromAreas(prev, draggedIds);
        return addPokemonToArea(cleared, targetAreaId, draggedIds, overHouseId);
      });
    },
    [getFamilyIds, poolIds, areas]
  );

  const handleAddHouse = useCallback((areaId: string) => {
    setAreas((prev) =>
      prev.map((a) =>
        a.id === areaId ? { ...a, houses: [...a.houses, createHouse()] } : a
      )
    );
  }, []);

  const handleRemoveHouse = useCallback((areaId: string, houseId: string) => {
    setAreas((prev) =>
      prev.map((a) =>
        a.id === areaId ? { ...a, houses: a.houses.filter((h) => h.id !== houseId) } : a
      )
    );
  }, []);

  const poolPokemon = poolIds.map((id) => POKEMON_DB[id]).filter(Boolean);
  const activePokemon: Pokemon | null =
    activeDragIds.length > 0 ? POKEMON_DB[activeDragIds[0]] : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="app">
        <header className="app-header">
          <div className="header-title">
            <span className="header-pokeball">⚾</span>
            <h1>Pokopia Area Housing</h1>
          </div>
          <div className="header-controls">
            <label className="family-toggle" htmlFor="family-toggle-input">
              <span className="toggle-label">Move family together</span>
              <div
                className={`toggle-switch${moveFamilyTogether ? ' on' : ''}`}
                role="switch"
                aria-checked={moveFamilyTogether}
                onClick={() => setMoveFamilyTogether((v) => !v)}
              >
                <span className="toggle-thumb" />
              </div>
              <input
                id="family-toggle-input"
                type="checkbox"
                checked={moveFamilyTogether}
                onChange={(e) => setMoveFamilyTogether(e.target.checked)}
                className="sr-only"
                aria-label="Move family together"
              />
            </label>
          </div>
        </header>

        <main className="app-main">
          <PokemonPool pokemonList={poolPokemon} />
          <div className="areas-grid">
            {areas.map((area) => (
              <AreaColumn
                key={area.id}
                area={area}
                pokemonDb={POKEMON_DB}
                onAddHouse={handleAddHouse}
                onRemoveHouse={handleRemoveHouse}
              />
            ))}
          </div>
        </main>

        <DragOverlay dropAnimation={null}>
          {activePokemon && (
            <div className="drag-overlay-stack">
              {activeDragIds.length > 1 && (
                <div className="drag-overlay-badge">×{activeDragIds.length}</div>
              )}
              <PokemonCardOverlay pokemon={activePokemon} />
            </div>
          )}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
