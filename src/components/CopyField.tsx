"use client";

import { useState } from "react";

type Size = "sm" | "lg";

export function CopyField({
  value,
  size = "sm",
  label,
}: {
  value: string;
  size?: Size;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  const textCls =
    size === "lg"
      ? "font-serif text-2xl sm:text-3xl tracking-wider text-primary select-all break-all"
      : "font-mono text-base sm:text-lg tracking-wider text-foreground select-all break-all";

  return (
    <button
      type="button"
      onClick={copy}
      className="group block w-full text-left"
      aria-label={`Copiar ${label ?? value}`}
    >
      {label && (
        <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60 mb-1">
          {label}
        </span>
      )}
      <div className="rounded-lg border border-border bg-muted/60 px-4 py-3 flex items-center justify-between gap-3 group-hover:border-accent transition-colors">
        <span className={textCls}>{value}</span>
        <span className="shrink-0 text-[0.65rem] uppercase tracking-widest text-primary">
          {copied ? "¡Copiado!" : "Copiar"}
        </span>
      </div>
    </button>
  );
}
