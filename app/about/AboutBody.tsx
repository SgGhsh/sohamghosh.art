'use client';

import { useState } from 'react';

export default function AboutBody({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div
        className={
          expanded
            ? 'space-y-6 max-h-[65vh] overflow-y-auto pr-2'
            : 'space-y-6 relative max-h-[260px] overflow-hidden'
        }
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      <button
        onClick={() => setExpanded((o) => !o)}
        className="mt-3 text-xs uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors font-medium"
      >
        {expanded ? 'Read less' : '… Read more'}
      </button>
    </>
  );
}
