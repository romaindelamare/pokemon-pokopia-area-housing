import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Pokemon } from '../types';
import { PokemonCard } from './PokemonCard';

interface PokemonPoolProps {
  pokemonList: Pokemon[];
}

export function PokemonPool({ pokemonList }: PokemonPoolProps) {
  const [search, setSearch] = useState('');

  const { setNodeRef, isOver } = useDroppable({
    id: 'pool',
    data: { type: 'pool' },
  });

  const filtered = pokemonList.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.family.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, Pokemon[]>>((acc, p) => {
    if (!acc[p.family]) acc[p.family] = [];
    acc[p.family].push(p);
    return acc;
  }, {});

  return (
    <aside
      ref={setNodeRef}
      className={`pokemon-pool${isOver ? ' pool-over' : ''}`}
      aria-label="Pokémon pool – drag Pokémon from here to an area"
    >
      <h2 className="pool-title">
        <span>🎒 Pokémon Pool</span>
        <span className="pool-count">{pokemonList.length}</span>
      </h2>

      <input
        type="search"
        className="pool-search"
        placeholder="Search name or family…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search Pokémon"
      />

      {pokemonList.length === 0 ? (
        <div className="pool-empty">
          <span>🎉</span>
          <p>All Pokémon assigned!</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="pool-empty">
          <span>🔍</span>
          <p>No Pokémon found.</p>
        </div>
      ) : (
        <div className="pool-list">
          {Object.entries(grouped).map(([family, members]) => (
            <div key={family} className="pool-family-group">
              {members.length > 1 && (
                <div className="pool-family-label">{family} family</div>
              )}
              {members.map((p) => (
                <PokemonCard key={p.id} pokemon={p} sourceId="pool" />
              ))}
            </div>
          ))}
        </div>
      )}

      {isOver && (
        <div className="pool-drop-hint">↩ Return Pokémon to pool</div>
      )}
    </aside>
  );
}
