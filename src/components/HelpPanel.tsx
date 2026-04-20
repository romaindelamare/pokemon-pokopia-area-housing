import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

export function HelpPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div className="help-panel" ref={panelRef}>
      <button
        className={`header-btn${open ? ' btn-active' : ''}`}
        onClick={() => setOpen((v) => !v)}
        title="How Pokopia Area Housing works"
      >
        <Icon name="help_outline" /> Help
      </button>

      {open && (
        <div className="load-popover help-popover">
          <p className="help-title">How it works</p>
          <p className="help-subtitle">
            Organize Pokemon across areas and houses while keeping specialties covered.
          </p>

          <ul className="help-list">
            <li>Drag Pokemon from the pool to a house to assign them.</li>
            <li>Drop on an area (not a house) to create a new house automatically.</li>
            <li>Houses hold up to 4 Pokemon. Full houses reject oversized drops.</li>
            <li>Use the family toggle to move all members of one family together.</li>
            <li>Search and specialty filters in the pool help find Pokemon faster.</li>
            <li>Use Share/Load to exchange layouts, Export TXT for reports, and Reset to start over.</li>
          </ul>

          <button className="load-confirm-btn" onClick={() => setOpen(false)}>
            Got it
          </button>
        </div>
      )}
    </div>
  );
}