import { useDraggable } from '@dnd-kit/core';
import type { Pokemon } from '../types';
import { SPECIALTY_META, LITTER_RESOURCE_META } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
  sourceId: string;
}

function cardColor(pokemon: Pokemon): string {
  const first = pokemon.specialties[0];
  return first ? (SPECIALTY_META[first]?.color ?? '#888') : '#888';
}

function LitterResourceRow({ pokemon }: { pokemon: Pokemon }) {
  if (!pokemon.specialties.includes('litter') || !pokemon.litterResources?.length) return null;
  return (
    <div className="litter-resources-row">
      <span className="litter-label">Litters:</span>
      {pokemon.litterResources.map((r) => {
        const meta = LITTER_RESOURCE_META[r] ?? { icon: '📦', label: r, color: '#374151', bg: '#f3f4f6' };
        return (
          <span
            key={r}
            className="litter-resource-chip"
            style={{ backgroundColor: meta.bg, color: meta.color }}
            title={`Litters ${meta.label}`}
          >
            {meta.icon} {meta.label}
          </span>
        );
      })}
    </div>
  );
}

export function PokemonCard({ pokemon, sourceId }: PokemonCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `drag-${pokemon.id}-from-${sourceId}`,
    data: { pokemonId: pokemon.id, sourceId },
  });

  const style: React.CSSProperties = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, zIndex: 999 }
    : {};

  const headerColor = cardColor(pokemon);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`pokemon-card${isDragging ? ' is-dragging' : ''}`}
      title={pokemon.name}
      aria-label={`${pokemon.name} – drag to move`}
    >
      <div className="pokemon-card-header" style={{ backgroundColor: headerColor }}>
        <span className="pokemon-name">{pokemon.name}</span>
      </div>
      <div className="pokemon-card-specialties">
        {pokemon.specialties.map((s) => {
          const meta = SPECIALTY_META[s];
          return (
            <span
              key={s}
              className="specialty-chip"
              style={{ backgroundColor: meta.bg, color: meta.color }}
              title={meta.label}
            >
              {meta.icon} {meta.label}
            </span>
          );
        })}
      </div>
      <LitterResourceRow pokemon={pokemon} />
    </div>
  );
}

export function PokemonCardOverlay({ pokemon }: { pokemon: Pokemon }) {
  const headerColor = cardColor(pokemon);

  return (
    <div className="pokemon-card overlay-card">
      <div className="pokemon-card-header" style={{ backgroundColor: headerColor }}>
        <span className="pokemon-name">{pokemon.name}</span>
      </div>
      <div className="pokemon-card-specialties">
        {pokemon.specialties.map((s) => {
          const meta = SPECIALTY_META[s];
          return (
            <span
              key={s}
              className="specialty-chip"
              style={{ backgroundColor: meta.bg, color: meta.color }}
            >
              {meta.icon} {meta.label}
            </span>
          );
        })}
      </div>
      <LitterResourceRow pokemon={pokemon} />
    </div>
  );
}
