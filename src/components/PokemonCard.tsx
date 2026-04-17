import { useDraggable } from '@dnd-kit/core';
import type { Pokemon } from '../types';
import { SPECIALTY_META, TYPE_COLORS } from '../types';

interface PokemonCardProps {
  pokemon: Pokemon;
  sourceId: string;
}

export function PokemonCard({ pokemon, sourceId }: PokemonCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `drag-${pokemon.id}-from-${sourceId}`,
    data: { pokemonId: pokemon.id, sourceId },
  });

  const style: React.CSSProperties = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, zIndex: 999 }
    : {};

  const typeColor = TYPE_COLORS[pokemon.type] ?? '#888';
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNumber}.png`;

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
      <div className="pokemon-card-header" style={{ backgroundColor: typeColor }}>
        <img
          src={spriteUrl}
          alt={pokemon.name}
          className="pokemon-sprite"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
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
    </div>
  );
}

export function PokemonCardOverlay({ pokemon }: { pokemon: Pokemon }) {
  const typeColor = TYPE_COLORS[pokemon.type] ?? '#888';
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.dexNumber}.png`;

  return (
    <div className="pokemon-card overlay-card">
      <div className="pokemon-card-header" style={{ backgroundColor: typeColor }}>
        <img
          src={spriteUrl}
          alt={pokemon.name}
          className="pokemon-sprite"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
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
    </div>
  );
}
