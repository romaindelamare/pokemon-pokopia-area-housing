import { useDroppable } from '@dnd-kit/core';
import type { PokopiaArea, Pokemon, Specialty } from '../types';
import { SPECIALTY_META, ALL_SPECIALTIES, LITTER_RESOURCE_META } from '../types';
import { HouseGroup } from './HouseGroup';

interface AreaColumnProps {
  area: PokopiaArea;
  pokemonDb: Record<string, Pokemon>;
  onAddHouse: (areaId: string) => void;
  onRemoveHouse: (areaId: string, houseId: string) => void;
  activeDragCount: number;
}

export function AreaColumn({ area, pokemonDb, onAddHouse, onRemoveHouse, activeDragCount }: AreaColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: area.id,
    data: { type: 'area', areaId: area.id },
  });

  const coveredSpecialties = new Set<Specialty>(
    area.houses.flatMap((h) =>
      h.pokemonIds.flatMap((pid) => pokemonDb[pid]?.specialties ?? [])
    )
  );

  // Collect unique litter resource types present in this area
  const litterResourcesInArea = Array.from(
    new Set(
      area.houses.flatMap((h) =>
        h.pokemonIds.flatMap((pid) => pokemonDb[pid]?.litterResources ?? [])
      )
    )
  );

  const totalPokemon = area.houses.reduce((sum, h) => sum + h.pokemonIds.length, 0);

  return (
    <div
      ref={setNodeRef}
      className={`area-column${isOver ? ' area-over' : ''}`}
      style={{ borderTopColor: area.color }}
      aria-label={`${area.name} – ${totalPokemon} Pokémon`}
    >
      <div className="area-header" style={{ backgroundColor: area.color }}>
        <span className="area-icon">{area.icon}</span>
        <span className="area-name">{area.name}</span>
        <span className="area-poke-count">{totalPokemon}</span>
      </div>

      <div className="area-specialties" aria-label="Specialty coverage">
        {ALL_SPECIALTIES.map((s) => {
          const meta = SPECIALTY_META[s];
          const covered = coveredSpecialties.has(s);
          return (
            <span
              key={s}
              className={`specialty-badge${covered ? ' covered' : ' missing'}`}
              style={
                covered
                  ? { backgroundColor: meta.bg, color: meta.color, borderColor: meta.color }
                  : {}
              }
              title={covered ? `${meta.label} – covered` : `${meta.label} – missing`}
            >
              {meta.icon}
            </span>
          );
        })}
      </div>

      {litterResourcesInArea.length > 0 && (
        <div className="area-litter-resources" aria-label="Litter resources in this area">
          <span className="area-litter-label">🧹</span>
          {litterResourcesInArea.map((r) => {
            const meta = LITTER_RESOURCE_META[r];
            if (!meta) return null;
            return (
              <span
                key={r}
                className="area-litter-chip"
                style={{ backgroundColor: meta.bg, color: meta.color }}
                title={meta.label}
              >
                {meta.icon} {meta.label}
              </span>
            );
          })}
        </div>
      )}

      <div className="area-houses">
        {area.houses.length === 0 && !isOver && (
          <div className="area-empty">
            <div className="area-empty-icon">{area.icon}</div>
            <p>Drag Pokémon here</p>
          </div>
        )}

        {area.houses.map((house, idx) => {
          const housePokemon = house.pokemonIds
            .map((pid) => pokemonDb[pid])
            .filter(Boolean) as Pokemon[];
          return (
            <HouseGroup
              key={house.id}
              house={house}
              houseNumber={idx + 1}
              pokemonList={housePokemon}
              areaId={area.id}
              onRemoveHouse={() => onRemoveHouse(area.id, house.id)}
              activeDragCount={activeDragCount}
            />
          );
        })}

        {isOver && area.houses.length === 0 && (
          <div className="area-drop-hint">Drop here to create a house</div>
        )}
      </div>

      <div className="area-footer">
        <button
          className="add-house-btn"
          onClick={() => onAddHouse(area.id)}
          title="Add a new empty house"
          aria-label={`Add house to ${area.name}`}
        >
          + Add House
        </button>
      </div>
    </div>
  );
}
