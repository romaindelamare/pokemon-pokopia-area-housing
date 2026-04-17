import { useDroppable } from '@dnd-kit/core';
import type { House, Pokemon } from '../types';
import { MAX_HOUSE_SIZE, SPECIALTY_META } from '../types';
import { PokemonCard } from './PokemonCard';

interface HouseGroupProps {
  house: House;
  houseNumber: number;
  pokemonList: Pokemon[];
  areaId: string;
  onRemoveHouse: () => void;
}

export function HouseGroup({
  house,
  houseNumber,
  pokemonList,
  areaId,
  onRemoveHouse,
}: HouseGroupProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `house-${house.id}`,
    data: { type: 'house', houseId: house.id, areaId },
  });

  const allItems = Array.from(
    new Set(pokemonList.flatMap((p) => p.favoriteItems))
  );

  const isFull = pokemonList.length >= MAX_HOUSE_SIZE;

  const hasLitter = pokemonList.some((p) => p.specialties.includes('litter'));
  const hasGather = pokemonList.some((p) => p.specialties.includes('gather'));

  // Collect unique litter resource types from all litter Pokémon in this house
  const litterResourceTypes = Array.from(
    new Set(
      pokemonList
        .filter((p) => p.specialties.includes('litter'))
        .flatMap((p) => p.litterResources ?? [])
    )
  );

  const resourceIcons = litterResourceTypes
    .map((r) => SPECIALTY_META[r]?.icon ?? '')
    .join(' ');

  return (
    <div
      ref={setNodeRef}
      className={`house-group${isOver && !isFull ? ' house-over' : ''}${isFull ? ' house-full' : ''}`}
      aria-label={`House ${houseNumber} – ${pokemonList.length}/${MAX_HOUSE_SIZE} Pokémon`}
    >
      <div className="house-header">
        <span className="house-icon">🏠</span>
        <span className="house-title">House {houseNumber}</span>

        {hasLitter && (
          <span
            className={`house-synergy-badge${hasGather ? ' synergy-ok' : ' synergy-warn'}`}
            title={
              hasGather
                ? `Litter (${litterResourceTypes.join(', ')}) is being gathered ✅`
                : `Litter (${litterResourceTypes.join(', ')}) needs a gather Pokémon ⚠️`
            }
          >
            🧹{resourceIcons ? ` ${resourceIcons}` : ''} {hasGather ? '✅' : '⚠️'}
          </span>
        )}

        <span className="house-count">
          {pokemonList.length}/{MAX_HOUSE_SIZE}
        </span>
        {pokemonList.length === 0 && (
          <button
            className="house-remove-btn"
            onClick={onRemoveHouse}
            title="Remove empty house"
            aria-label="Remove empty house"
          >
            ✕
          </button>
        )}
      </div>

      {pokemonList.length === 0 ? (
        <div className={`house-empty-slot${isOver ? ' house-over' : ''}`}>
          Drop Pokémon here
        </div>
      ) : (
        <div className="house-pokemon-list">
          {pokemonList.map((p) => (
            <PokemonCard
              key={p.id}
              pokemon={p}
              sourceId={`house-${house.id}`}
            />
          ))}
        </div>
      )}

      {isFull && isOver && (
        <div className="house-full-msg">House is full (max {MAX_HOUSE_SIZE})</div>
      )}

      {allItems.length > 0 && (
        <div className="house-items">
          <span className="house-items-label">⭐ Favorite items</span>
          <div className="house-items-list">
            {allItems.map((item) => (
              <span key={item} className="house-item-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
