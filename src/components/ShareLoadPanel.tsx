import { useEffect, useRef, useState } from 'react';
import type { AppState } from '../utils/persistence';
import { encodeState, decodeState } from '../utils/persistence';
import { Icon } from './Icon';

interface ShareLoadPanelProps {
  state: AppState;
  onLoad: (state: AppState) => void;
}

export function ShareLoadPanel({ state, onLoad }: ShareLoadPanelProps) {
  const [showShare, setShowShare] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [shareCode, setShareCode] = useState('');
  const [loadCode, setLoadCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);
  const shareTextareaRef = useRef<HTMLTextAreaElement>(null);
  const loadTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Close popovers when clicking outside
  useEffect(() => {
    if (!showShare && !showLoad) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowShare(false);
        setShowLoad(false);
        setError('');
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showShare, showLoad]);

  // Generate share code and focus textarea when share panel opens
  useEffect(() => {
    if (showShare) {
      const encoded = encodeState(state);
      setShareCode(encoded);
      setTimeout(() => {
        shareTextareaRef.current?.focus();
        shareTextareaRef.current?.select();
      }, 50);
    }
  }, [showShare, state]);

  // Focus load textarea when load panel opens
  useEffect(() => {
    if (showLoad) setTimeout(() => loadTextareaRef.current?.focus(), 50);
  }, [showLoad]);

  const handleOpenShare = () => {
    setShowShare((v) => !v);
    setShowLoad(false);
    setCopied(false);
  };

  const handleCopyShare = async () => {
    await navigator.clipboard.writeText(shareCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenLoad = () => {
    setShowLoad((v) => !v);
    setShowShare(false);
    setError('');
  };

  const handleLoad = () => {
    if (!loadCode.trim()) {
      setError('Please paste a distribution code.');
      return;
    }
    const decoded = decodeState(loadCode.trim());
    if (!decoded) {
      setError('Invalid code — make sure you pasted the full string.');
      return;
    }
    onLoad(decoded);
    setShowLoad(false);
    setLoadCode('');
    setError('');
  };

  return (
    <div className="share-load-panel" ref={panelRef}>
      <button
        className={`header-btn${showShare ? ' btn-active' : ''}`}
        onClick={handleOpenShare}
        title="Share your current distribution"
      >
        <Icon name="link" /> Share
      </button>

      <button
        className={`header-btn${showLoad ? ' btn-active' : ''}`}
        onClick={handleOpenLoad}
        title="Load a distribution from a code"
      >
        <Icon name="download" /> Load
      </button>

      {showShare && (
        <div className="load-popover share-popover">
          <p className="load-popover-label">Your distribution code:</p>
          <textarea
            ref={shareTextareaRef}
            className="load-input"
            value={shareCode}
            readOnly
            rows={3}
            spellCheck={false}
          />
          <button
            className={`load-confirm-btn${copied ? ' btn-success' : ''}`}
            onClick={handleCopyShare}
          >
            {copied ? <><Icon name="check" /> Copied!</> : <><Icon name="content_copy" /> Copy code</>}
          </button>
        </div>
      )}

      {showLoad && (
        <div className="load-popover">
          <p className="load-popover-label">Paste a distribution code:</p>
          <textarea
            ref={loadTextareaRef}
            className="load-input"
            placeholder="eyJ2IjoxLCJwb29sSWRzIjpbLi4uXX0="
            value={loadCode}
            onChange={(e) => { setLoadCode(e.target.value); setError(''); }}
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
