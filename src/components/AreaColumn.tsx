import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import type { PokopiaArea, Pokemon, Specialty } from '../types';
import { SPECIALTY_META, ALL_SPECIALTIES, LITTER_RESOURCE_META, MAX_HOUSE_SIZE } from '../types';
import { POKEMON_DB } from '../data';
import { HouseGroup } from './HouseGroup';

// Specialties that exist in at least one Pokemon — avoids showing phantom entries.
const ACTIVE_SPECIALTIES = ALL_SPECIALTIES.filter((s) =>
  Object.values(POKEMON_DB).some((p) => p.specialties.includes(s))
);

interface AreaColumnProps {
  area: PokopiaArea;
  pokemonDb: Record<string, Pokemon>;
  onRemoveHouse: (areaId: string, houseId: string) => void;
  activeDragCount: number;
  isActiveDropArea: boolean;
}

export function AreaColumn({ area, pokemonDb, onRemoveHouse, activeDragCount, isActiveDropArea }: AreaColumnProps) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const metaRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);
  const housesRef = useRef<HTMLDivElement | null>(null);
  const pointerYRef = useRef<number | null>(null);
  const autoScrollFrameRef = useRef<number | null>(null);
  const [bodyHeight, setBodyHeight] = useState<number | null>(null);
  const [housesHeight, setHousesHeight] = useState<number | null>(null);

  const { setNodeRef, isOver } = useDroppable({
    id: area.id,
    data: { type: 'area', areaId: area.id },
  });
  const {
    setNodeRef: setNewHouseNodeRef,
    isOver: isOverNewHouseZone,
  } = useDroppable({
    id: `area-new-house-${area.id}`,
    data: { type: 'area-new-house', areaId: area.id },
    disabled: activeDragCount === 0,
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
  const showAreaDropHint = isActiveDropArea && activeDragCount > 0;
  const canCreateHouse = activeDragCount <= MAX_HOUSE_SIZE;
  const isDropHintActive = showAreaDropHint && canCreateHouse;
  const areaDropHintText = canCreateHouse
    ? 'Drop here to create a new house'
    : `Family is too large for one house (max ${MAX_HOUSE_SIZE})`;

  useLayoutEffect(() => {
    const updateHeights = () => {
      const columnHeight = columnRef.current?.clientHeight ?? 0;
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const metaHeight = metaRef.current?.offsetHeight ?? 0;
      const hintNode = hintRef.current;
      const hintHeight = hintNode?.offsetHeight ?? 0;
      const hintStyles = hintNode ? window.getComputedStyle(hintNode) : null;
      const hintMarginTop = hintStyles ? Number.parseFloat(hintStyles.marginTop) || 0 : 0;
      const hintMarginBottom = hintStyles ? Number.parseFloat(hintStyles.marginBottom) || 0 : 0;
      const hintOuterHeight = hintHeight + hintMarginTop + hintMarginBottom;
      const availableBodyHeight = Math.max(columnHeight - headerHeight - metaHeight, 0);
      const availableHousesHeight = Math.max(availableBodyHeight - hintOuterHeight, 0);
      setBodyHeight(availableBodyHeight);
      setHousesHeight(availableHousesHeight);
    };

    updateHeights();

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', updateHeights);
      return () => window.removeEventListener('resize', updateHeights);
    }

    const observer = new ResizeObserver(() => updateHeights());
    if (columnRef.current) observer.observe(columnRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    if (metaRef.current) observer.observe(metaRef.current);
    if (hintRef.current) observer.observe(hintRef.current);

    return () => observer.disconnect();
  }, [showAreaDropHint, area.houses.length, litterResourcesInArea.length, coveredSpecialties.size]);

  const setColumnNodeRef = (node: HTMLDivElement | null) => {
    columnRef.current = node;
    setNodeRef(node);
  };

  const setHintNodeRef = (node: HTMLDivElement | null) => {
    hintRef.current = node;
    setNewHouseNodeRef(node);
  };

  const handleHousesWheel = useCallback((event: React.WheelEvent<HTMLDivElement>) => {
    const node = housesRef.current;
    if (!node) return;

    const canScroll = node.scrollHeight > node.clientHeight;
    if (!canScroll) return;

    node.scrollTop += event.deltaY;
    event.preventDefault();
  }, []);

  useEffect(() => {
    if (activeDragCount === 0 || !isActiveDropArea) {
      pointerYRef.current = null;
      if (autoScrollFrameRef.current !== null) {
        cancelAnimationFrame(autoScrollFrameRef.current);
        autoScrollFrameRef.current = null;
      }
      return;
    }

    const edgeSize = 56;
    const maxStep = 16;

    const handlePointerMove = (event: PointerEvent) => {
      pointerYRef.current = event.clientY;
    };

    const tick = () => {
      const node = housesRef.current;
      const pointerY = pointerYRef.current;

      if (node && pointerY !== null) {
        const rect = node.getBoundingClientRect();
        if (pointerY >= rect.top && pointerY <= rect.bottom) {
          const topEdge = rect.top + edgeSize;
          const bottomEdge = rect.bottom - edgeSize;

          if (pointerY < topEdge) {
            const intensity = (topEdge - pointerY) / edgeSize;
            const step = Math.max(2, Math.ceil(maxStep * intensity));
            node.scrollTop -= step;
          } else if (pointerY > bottomEdge) {
            const intensity = (pointerY - bottomEdge) / edgeSize;
            const step = Math.max(2, Math.ceil(maxStep * intensity));
            node.scrollTop += step;
          }
        }
      }

      autoScrollFrameRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    autoScrollFrameRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      pointerYRef.current = null;
      if (autoScrollFrameRef.current !== null) {
        cancelAnimationFrame(autoScrollFrameRef.current);
        autoScrollFrameRef.current = null;
      }
    };
  }, [activeDragCount, isActiveDropArea]);

  return (
    <div
      ref={setColumnNodeRef}
      className={`area-column${isActiveDropArea || isOver ? ' area-over' : ''}`}
      style={{ borderTopColor: area.color }}
      aria-label={`${area.name} – ${totalPokemon} Pokémon`}
    >
      <div ref={headerRef} className="area-header" style={{ backgroundColor: area.color }}>
        <span className="area-icon">{area.icon}</span>
        <span className="area-name">{area.name}</span>
        <span className="area-poke-count">{totalPokemon}</span>
      </div>

      <div ref={metaRef} className="area-meta">
        <div className="area-specialties" aria-label="Specialty coverage">
          {ACTIVE_SPECIALTIES.map((s) => {
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
      </div>

      <div
        className="area-body"
        style={bodyHeight === null ? undefined : { height: `${bodyHeight}px` }}
      >
        <div
          ref={housesRef}
          className="area-houses"
          style={housesHeight === null ? undefined : { height: `${housesHeight}px` }}
          onWheelCapture={handleHousesWheel}
        >
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
        </div>

        {showAreaDropHint && (
          <div
            ref={setHintNodeRef}
            className={`area-drop-hint${canCreateHouse ? '' : ' invalid'}${isDropHintActive || isOverNewHouseZone ? ' area-drop-hint-over' : ''}`}
          >
            {areaDropHintText}
          </div>
        )}
      </div>
    </div>
  );
}
