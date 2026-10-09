"use client";

import { useState } from "react";

export function HashtagCopy({ hashtag }: { hashtag: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(hashtag);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = hashtag;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group relative inline-flex flex-col items-center gap-2 cursor-pointer"
      aria-label={`Copiar ${hashtag}`}
    >
      <span className="font-serif text-4xl sm:text-6xl text-primary group-hover:text-accent-dark transition-colors tracking-wide">
        {hashtag}
      </span>
      <span className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60">
        {copied ? "¡Copiado!" : "Toca para copiar"}
      </span>
    </button>
  );
}
