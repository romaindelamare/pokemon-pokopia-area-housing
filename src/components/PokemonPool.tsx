import { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { Pokemon, Specialty } from '../types';
import { SPECIALTY_META, ALL_SPECIALTIES } from '../types';
import { PokemonCard } from './PokemonCard';
import { Icon } from './Icon';

interface PokemonPoolProps {
  pokemonList: Pokemon[];
}

export function PokemonPool({ pokemonList }: PokemonPoolProps) {
  const [search, setSearch] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState<Specialty | null>(null);

  const { setNodeRef, isOver } = useDroppable({
    id: 'pool',
    data: { type: 'pool' },
  });

  // Only show specialties present in the current pool
  const specialtiesInPool = new Set(pokemonList.flatMap((p) => p.specialties));
  const availableSpecialties = ALL_SPECIALTIES.filter((s) =>
    specialtiesInPool.has(s)
  ) as Specialty[];

  const filtered = pokemonList.filter((p) => {
    const matchesSearch =
      (p.name ?? '').toLowerCase().includes(search.toLowerCase()) ||
      (p.family ?? '').toLowerCase().includes(search.toLowerCase());
    const matchesSpecialty =
      filterSpecialty === null || p.specialties.includes(filterSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  /** Sort filtered list by JSON id order (numeric first, then S-ids alphabetically) */
  const SPECIAL_ID_OFFSET = 100_000;
  const CHAR_CODE_MULTIPLIER = 1_000;
  const idRank = (id: string) => {
    const n = parseInt(id, 10);
    return isNaN(n)
      ? SPECIAL_ID_OFFSET + id.charCodeAt(0) * CHAR_CODE_MULTIPLIER + (parseInt(id.slice(1), 10) || 0)
      : n;
  };

  const sorted = [...filtered].sort((a, b) => idRank(a.id) - idRank(b.id));

  const grouped = sorted.reduce<Record<string, Pokemon[]>>((acc, p) => {
    const key = p.family ?? `__solo__${p.id}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});

  return (
    <aside
      ref={setNodeRef}
      className={`pokemon-pool${isOver ? ' pool-over' : ''}`}
      aria-label="Pokémon pool – drag Pokémon from here to an area"
    >
      <h2 className="pool-title">
        <span><Icon name="catching_pokemon" /> Pokémon Pool</span>
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

      {availableSpecialties.length > 0 && (
        <div className="pool-filter-row" aria-label="Filter by specialty">
          {availableSpecialties.map((s) => {
            const meta = SPECIALTY_META[s];
            const active = filterSpecialty === s;
            return (
              <button
                key={s}
                className={`pool-filter-chip${active ? ' active' : ''}`}
                style={
                  active
                    ? { backgroundColor: meta.bg, color: meta.color, borderColor: meta.color }
                    : {}
                }
                title={`Filter: ${meta.label}`}
                aria-pressed={active}
                onClick={() => setFilterSpecialty(active ? null : s)}
              >
                <Icon name={meta.icon} />
              </button>
            );
          })}
        </div>
      )}

      {pokemonList.length === 0 ? (
        <div className="pool-empty">
          <Icon name="check_circle" className="pool-empty-icon" />
          <p>All Pokémon assigned!</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="pool-empty">
          <Icon name="search_off" className="pool-empty-icon" />
          <p>No Pokémon found.</p>
        </div>
      ) : (
        <div className="pool-list">
          {Object.entries(grouped).map(([family, members]) => (
            <div key={family} className="pool-family-group">
              {members.length > 1 && !family.startsWith('__solo__') && (
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
