import { useState, useCallback, useEffect } from 'react';
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
import { POKEMON_DB, POKEMON_ORDER, INITIAL_AREAS } from './data';
import type { PokopiaArea, Pokemon, House } from './types';
import { MAX_HOUSE_SIZE } from './types';
import { PokemonPool } from './components/PokemonPool';
import { AreaColumn } from './components/AreaColumn';
import { PokemonCardOverlay } from './components/PokemonCard';
import { ShareLoadPanel } from './components/ShareLoadPanel';
import {
  makeHouse,
  saveToLocalStorage,
  loadFromLocalStorage,
  type AppState,
} from './utils/persistence';
import './App.css';

function createHouse(pokemonIds: string[] = []): House {
  return makeHouse(pokemonIds);
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
    houses: area.houses.map((h) => ({
      ...h,
      pokemonIds: h.pokemonIds.filter((pid) => !ids.includes(pid)),
    })),
  }));
}

/** Only remove houses that were occupied *before* the drag but are now empty.
 *  User-created empty houses (always had 0 Pokémon) are preserved. */
function purgeSourceHouses(before: PokopiaArea[], after: PokopiaArea[]): PokopiaArea[] {
  return after.map((area) => {
    const beforeArea = before.find((a) => a.id === area.id);
    return {
      ...area,
      houses: area.houses.filter((h) => {
        if (h.pokemonIds.length > 0) return true;
        const houseBefore = beforeArea?.houses.find((bh) => bh.id === h.id);
        const wasOccupied = (houseBefore?.pokemonIds.length ?? 0) > 0;
        return !wasOccupied;
      }),
    };
  });
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
        // Only fill the targeted house — no overflow to other houses
        houses[houseIdx].pokemonIds.push(...pokemonIds);
        return { ...area, houses };
      }
    }

    // No specific house targeted → always create a brand-new house for these Pokémon
    houses.push(createHouse(pokemonIds));
    return { ...area, houses };
  });
}

export default function App() {
  const [poolIds, setPoolIds] = useState<string[]>(() => {
    const saved = loadFromLocalStorage();
    return saved ? saved.poolIds : POKEMON_ORDER;
  });
  const [areas, setAreas] = useState<PokopiaArea[]>(() => {
    const saved = loadFromLocalStorage();
    return saved ? saved.areas : INITIAL_AREAS;
  });
  const [moveFamilyTogether, setMoveFamilyTogether] = useState<boolean>(() => {
    try { return JSON.parse(localStorage.getItem('pokopia-move-family') ?? 'false'); }
    catch { return false; }
  });
  const [activeDragIds, setActiveDragIds] = useState<string[]>([]);

  // Auto-save distribution to localStorage on every state change
  useEffect(() => {
    saveToLocalStorage({ poolIds, areas });
  }, [poolIds, areas]);

  // Persist moveFamily toggle
  useEffect(() => {
    localStorage.setItem('pokopia-move-family', JSON.stringify(moveFamilyTogether));
  }, [moveFamilyTogether]);

  const handleLoadState = useCallback((state: AppState) => {
    setPoolIds(state.poolIds);
    setAreas(state.areas);
  }, []);

  const handleReset = useCallback(() => {
    if (!window.confirm('Reset all areas? All Pokémon will return to the pool.')) return;
    setAreas(INITIAL_AREAS);
    setPoolIds(POKEMON_ORDER);
  }, []);

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
        setAreas((prev) => {
          const cleared = removePokemonFromAreas(prev, draggedIds);
          return purgeSourceHouses(prev, cleared);
        });
        setPoolIds((prev) => {
          const existing = new Set(prev);
          const toAdd = draggedIds.filter((id) => !existing.has(id));
          return [...prev, ...toAdd];
        });
        return;
      }

      const targetAreaId = overAreaId;
      if (!targetAreaId) return;

      // Reject drop on a specific house if there isn't enough room for all dragged Pokémon.
      // We account for the dragged Pokémon already being in that house (they would be removed first).
      if (overHouseId) {
        const targetArea = areas.find((a) => a.id === targetAreaId);
        const targetHouse = targetArea?.houses.find((h) => h.id === overHouseId);
        if (targetHouse) {
          const alreadyInHouse = draggedIds.filter((id) =>
            targetHouse.pokemonIds.includes(id)
          ).length;
          const effectiveOccupied = targetHouse.pokemonIds.length - alreadyInHouse;
          const available = MAX_HOUSE_SIZE - effectiveOccupied;
          if (draggedIds.length > available) return;
        }
      } else {
        // Dropping on the area itself (not a house) → will create a new house.
        // Reject if the family is too large to fit in a single house.
        if (draggedIds.length > MAX_HOUSE_SIZE) return;
      }

      setPoolIds((prev) => prev.filter((id) => !draggedIds.includes(id)));
      setAreas((prev) => {
        const cleared = removePokemonFromAreas(prev, draggedIds);
        const updated = addPokemonToArea(cleared, targetAreaId, draggedIds, overHouseId);
        return purgeSourceHouses(prev, updated);
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
            <button
              className="header-btn btn-danger"
              onClick={handleReset}
              title="Reset all areas and return all Pokémon to the pool"
            >
              🗑️ Reset
            </button>
            <ShareLoadPanel state={{ poolIds, areas }} onLoad={handleLoadState} />
            <label className="family-toggle" htmlFor="family-toggle-input">
              <span className="toggle-label">Move family together</span>
              <div
                className={`toggle-switch${moveFamilyTogether ? ' on' : ''}`}
                role="switch"
                aria-checked={moveFamilyTogether}
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
                activeDragCount={activeDragIds.length}
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
