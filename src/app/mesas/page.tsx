import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import {
  getPartiesAtTable,
  tableTotals,
  tables,
  totalGuests,
} from "@/lib/wedding";

export default function MesasPage() {
  const guestCount = totalGuests();

  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Distribución del salón</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Orden de las mesas
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              16 mesas distribuidas alrededor de la pista de baile, con la mesa
              de los novios al centro. Son {guestCount} invitados en total.
            </p>
          </div>

          <SalonMap />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {[...tables]
              .filter((t) => t.id !== 0)
              .sort((a, b) => a.id - b.id)
              .map((t) => {
                const partiesAtTable = getPartiesAtTable(t.id);
                const totals = tableTotals(t.id);
                return (
                  <article key={t.id} className="card p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-2xl">{t.label}</h2>
                      <span className="chip">
                        {totals.personas} / {t.capacity}
                      </span>
                    </div>
                    <p className="text-foreground/70 italic mt-1">
                      {t.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {partiesAtTable.map((p) => {
                        const t2 = p.personas + (p.ninos ?? 0);
                        return (
                          <li
                            key={p.name}
                            className="flex items-start justify-between gap-3 text-sm"
                          >
                            <span className="font-serif text-lg leading-tight">
                              {p.name}
                            </span>
                            <span className="text-xs text-foreground/60 shrink-0 pt-1.5">
                              {t2 === 1 ? "1" : t2}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                );
              })}
          </div>

          <div className="text-center mt-12">
            <Link href="/" className="btn-primary">
              ← Encontrar mi mesa
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}

function SalonMap() {
  return (
    <div className="card mt-10 p-3 sm:p-5">
      <div className="relative w-full aspect-[2/1] rounded-xl salon-floor border border-border overflow-hidden">
        {/* DJ */}
        <div
          className="absolute top-[1%] left-1/2 -translate-x-1/2 w-[12%] h-[8%] rounded-md bg-white border border-foreground/70 flex items-center justify-center text-sm tracking-[0.3em] uppercase text-foreground font-medium"
          aria-hidden
        >
          DJ
        </div>

        {/* Pista */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[42%] -translate-y-1/2 w-[20%] h-[52%] rounded-md bg-white border-2 border-foreground/50 flex items-center justify-center font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-foreground/80 shadow-inner"
          aria-hidden
        >
          Pista de baile
        </div>

        {/* Mesas */}
        {tables.map((t) => {
          if (t.shape === "sweetheart") return null;
          const totals = tableTotals(t.id);
          const size = tableSize(t.shape, t.capacity);
          const isVertical = t.shape === "rect-v";
          return (
            <div
              key={t.id}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white shadow-md bg-primary border border-primary/70 ${
                t.shape === "round" ? "rounded-full" : "rounded-md"
              }`}
              style={{
                left: `${t.position.x}%`,
                top: `${t.position.y}%`,
                width: size.w,
                height: size.h,
              }}
              title={`${t.label} · ${totals.personas}/${t.capacity} personas`}
            >
              <div
                className={`leading-tight text-center ${isVertical ? "-rotate-90 whitespace-nowrap" : ""}`}
              >
                <p className="font-semibold text-[0.7rem] sm:text-[0.78rem] tracking-widest uppercase">
                  Mesa {t.id}
                </p>
                <p className="font-serif text-[0.72rem] sm:text-[0.8rem] mt-0.5 opacity-95">
                  {t.capacity} PAX
                </p>
              </div>
            </div>
          );
        })}

        {/* Mesa de novios */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ top: "91%" }}
        >
          <div className="px-6 py-2.5 rounded-md bg-accent-dark text-white border border-accent-dark shadow-md text-center">
            <p className="font-serif text-xs sm:text-sm tracking-[0.25em] uppercase">
              Roxana &amp; Andrés
            </p>
          </div>
        </div>

      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-widest text-foreground/60">
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-primary" />
          Mesa redonda
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-3 rounded-sm bg-primary" />
          Mesa rectangular
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-3 rounded-sm bg-accent-dark" />
          Mesa de novios
        </span>
      </div>
    </div>
  );
}

function tableSize(
  shape: "round" | "rect-v" | "rect-h" | "sweetheart",
  capacity: number,
): { w: string; h: string } {
  if (shape === "round") {
    const w = capacity >= 12 ? 10 : 9;
    return { w: `${w}%`, h: `${w * 2}%` };
  }
  if (shape === "rect-v") {
    const h = capacity >= 12 ? 28 : 24;
    return { w: "7%", h: `${h}%` };
  }
  if (shape === "rect-h") {
    const w = capacity >= 12 ? 14 : 12;
    return { w: `${w}%`, h: "11%" };
  }
  return { w: "14%", h: "9%" };
}
