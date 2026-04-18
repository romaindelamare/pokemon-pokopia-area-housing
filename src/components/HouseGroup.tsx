import { useDroppable } from '@dnd-kit/core';
import type { House, Pokemon } from '../types';
import { MAX_HOUSE_SIZE } from '../types';
import { PokemonCard } from './PokemonCard';
import { Icon } from './Icon';

interface HouseGroupProps {
  house: House;
  houseNumber: number;
  pokemonList: Pokemon[];
  areaId: string;
  onRemoveHouse: () => void;
  activeDragCount: number;
}

export function HouseGroup({
  house,
  houseNumber,
  pokemonList,
  areaId,
  onRemoveHouse,
  activeDragCount,
}: HouseGroupProps) {
  // A house cannot accept a drop when there isn't enough room for all dragged Pokémon.
  const canAcceptDrop =
    activeDragCount === 0 || pokemonList.length + activeDragCount <= MAX_HOUSE_SIZE;

  const { setNodeRef, isOver } = useDroppable({
    id: `house-${house.id}`,
    data: { type: 'house', houseId: house.id, areaId },
    disabled: !canAcceptDrop,
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

  return (
    <div
      ref={setNodeRef}
      className={`house-group${isOver && canAcceptDrop ? ' house-over' : ''}${isFull ? ' house-full' : ''}${!canAcceptDrop && activeDragCount > 0 ? ' house-no-space' : ''}`}
      aria-label={`House ${houseNumber} – ${pokemonList.length}/${MAX_HOUSE_SIZE} Pokémon`}
    >
      <div className="house-header">
        <Icon name="home" className="house-icon" />
        <span className="house-title">House {houseNumber}</span>

        {hasLitter && (
          <span
            className={`house-synergy-chip ${hasGather ? 'synergy-ok' : 'synergy-warn'}${hasGather ? '' : ' missing'}`}
            title={
              hasGather
                ? `Litter (${litterResourceTypes.join(', ')}) is being gathered`
                : `Litter (${litterResourceTypes.join(', ')}) needs gathering`
            }
          >
            <Icon name="eco" />
            <span>Gathering</span>
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
            <Icon name="close" />
          </button>
        )}
      </div>

      {pokemonList.length === 0 ? (
        <div className={`house-empty-slot${isOver && canAcceptDrop ? ' house-over' : ''}`}>
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

      {!canAcceptDrop && activeDragCount > 0 && (
        <div className="house-full-msg">Not enough space ({MAX_HOUSE_SIZE - pokemonList.length} free, {activeDragCount} dragging)</div>
      )}
      {canAcceptDrop && isFull && isOver && (
        <div className="house-full-msg">House is full (max {MAX_HOUSE_SIZE})</div>
      )}

      {allItems.length > 0 && (
        <div className="house-items">
          <span className="house-items-label"><Icon name="star" /> Favorite items</span>
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
