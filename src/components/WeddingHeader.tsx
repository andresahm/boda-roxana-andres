import Link from "next/link";
import { wedding } from "@/lib/wedding";

export function WeddingHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Monogram />
          <div className="hidden sm:block leading-tight">
            <p className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
              {wedding.bride} <span className="text-accent">&</span> {wedding.groom}
            </p>
            <p className="text-xs text-foreground/60 tracking-widest uppercase">
              {wedding.dateShort}
            </p>
          </div>
        </Link>
        {!compact && (
          <nav className="flex items-center gap-2 sm:gap-3 text-sm">
            <Link href="/mesas" className="btn-ghost">
              Mesas
            </Link>
            <Link href="/menu" className="btn-ghost">
              Menú
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Monogram({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className="shrink-0"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeOpacity="0.3" />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontStyle="italic"
        fontSize="18"
        fill="currentColor"
      >
        S<tspan dx="1" fill="var(--accent)">&amp;</tspan>M
      </text>
    </svg>
  );
}

export function WeddingFooter() {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <div className="divider-ornament mb-4">
          <OrnamentFlourish />
        </div>
        <p className="font-serif italic text-foreground/70">
          Con todo nuestro amor, {wedding.bride} & {wedding.groom}
        </p>
        <p className="text-xs text-foreground/50 mt-2 tracking-widest uppercase">
          {wedding.venue} · {wedding.city}
        </p>
      </div>
    </footer>
  );
}

export function OrnamentFlourish() {
  return (
    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" aria-hidden>
      <path
        d="M1 6 C 8 6, 10 1, 14 6 C 18 11, 22 1, 26 6 C 30 11, 32 6, 39 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
