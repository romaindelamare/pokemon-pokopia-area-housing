import { useEffect, useRef, useState } from 'react';
import type { AppState } from '../utils/persistence';
import { encodeState, decodeState } from '../utils/persistence';

interface ShareLoadPanelProps {
  state: AppState;
  onLoad: (state: AppState) => void;
}

export function ShareLoadPanel({ state, onLoad }: ShareLoadPanelProps) {
  const [showLoad, setShowLoad] = useState(false);
  const [code, setCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Close load panel when clicking outside
  useEffect(() => {
    if (!showLoad) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowLoad(false);
        setError('');
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showLoad]);

  // Focus textarea when panel opens
  useEffect(() => {
    if (showLoad) setTimeout(() => textareaRef.current?.focus(), 50);
  }, [showLoad]);

  const handleShare = async () => {
    const encoded = encodeState(state);
    await navigator.clipboard.writeText(encoded);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLoad = () => {
    if (!code.trim()) {
      setError('Please paste a distribution code.');
      return;
    }
    const decoded = decodeState(code.trim());
    if (!decoded) {
      setError('Invalid code — make sure you pasted the full string.');
      return;
    }
    onLoad(decoded);
    setShowLoad(false);
    setCode('');
    setError('');
  };

  return (
    <div className="share-load-panel" ref={panelRef}>
      <button
        className={`header-btn${copied ? ' btn-success' : ''}`}
        onClick={handleShare}
        title="Copy distribution code to clipboard"
      >
        {copied ? '✓ Copied!' : '🔗 Share'}
      </button>

      <button
        className={`header-btn${showLoad ? ' btn-active' : ''}`}
        onClick={() => { setShowLoad((v) => !v); setError(''); }}
        title="Load a distribution from a code"
      >
        📥 Load
      </button>

      {showLoad && (
        <div className="load-popover">
          <p className="load-popover-label">Paste a distribution code:</p>
          <textarea
            ref={textareaRef}
            className="load-input"
            placeholder="eyJ2IjoxLCJwb29sSWRzIjpbLi4uXX0="
            value={code}
            onChange={(e) => { setCode(e.target.value); setError(''); }}
            rows={3}
            spellCheck={false}
          />
          {error && <p className="load-error">{error}</p>}
          <button className="load-confirm-btn" onClick={handleLoad}>
            Load Distribution
          </button>
        </div>
      )}
    </div>
  );
}
