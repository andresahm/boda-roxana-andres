import Link from "next/link";
import { wedding } from "@/lib/wedding";

export function WeddingHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-5xl px-6 pt-8 pb-4 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <Monogram />
          <div className="hidden sm:block leading-tight">
            <p className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
              {wedding.bride} <span className="text-accent-dark italic">&</span>{" "}
              {wedding.groom}
            </p>
            <p className="text-[0.65rem] text-foreground/60 tracking-[0.3em] uppercase">
              {wedding.dateShort}
            </p>
          </div>
        </Link>
        {!compact && (
          <nav className="flex items-center flex-wrap gap-2 text-sm">
            <Link href="/mesas" className="btn-ghost">
              Mesas
            </Link>
            <Link href="/menu" className="btn-ghost">
              Menú
            </Link>
            <Link href="/evento" className="btn-ghost">
              Evento
            </Link>
            <Link href="/fotos" className="btn-ghost">
              Fotos
            </Link>
            <Link href="/regalos" className="btn-ghost">
              Regalos
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Monogram({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className="shrink-0 text-primary"
      aria-hidden
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeOpacity="0.15" />
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fontFamily="var(--font-cormorant), serif"
        fontStyle="italic"
        fontSize="18"
        fontWeight="600"
        fill="currentColor"
      >
        R<tspan dx="0.5" fill="var(--accent-dark)">&amp;</tspan>A
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
        <p className="font-serif italic text-foreground/70 text-lg">
          Con todo nuestro cariño, {wedding.bride} & {wedding.groom}
        </p>
        <p className="text-[0.65rem] text-foreground/50 mt-2 tracking-[0.3em] uppercase">
          {wedding.venue} · {wedding.dateShort}
        </p>
      </div>
    </footer>
  );
}

export function OrnamentFlourish() {
  return (
    <svg width="48" height="12" viewBox="0 0 48 12" fill="none" aria-hidden>
      <path
        d="M1 6 C 8 6, 10 1, 14 6 C 18 11, 22 1, 26 6 C 30 11, 34 1, 38 6 C 42 11, 46 6, 47 6"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
