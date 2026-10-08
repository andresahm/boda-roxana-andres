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
    <div className="card mt-10 p-5 sm:p-8">
      <div className="relative mt-2 w-full aspect-[16/9] rounded-xl salon-floor border border-border overflow-hidden">
        <div
          className="absolute top-[6%] left-1/2 -translate-x-1/2 px-6 py-2 rounded-lg bg-foreground/85 text-background text-xs tracking-widest uppercase"
          aria-hidden
        >
          DJ
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 top-[42%] -translate-y-1/2 w-[26%] h-[32%] rounded-full border-2 border-dashed border-accent-dark/60 flex items-center justify-center text-[0.65rem] uppercase tracking-[0.3em] text-accent-dark"
          aria-hidden
        >
          Pista de baile
        </div>

        {tables.map((t) => {
          const totals = tableTotals(t.id);
          const label =
            t.shape === "sweetheart"
              ? "R & A"
              : t.id;
          return (
            <div
              key={t.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{ left: `${t.position.x}%`, top: `${t.position.y}%` }}
            >
              <div
                className={`table-dot ${t.shape} flex items-center justify-center font-serif text-center shadow-md ${
                  t.shape === "sweetheart"
                    ? "px-3 py-2 text-xs"
                    : t.shape === "round"
                      ? "w-14 h-14 text-xl"
                      : "w-20 h-10 text-base"
                }`}
                title={`${t.label} · ${t.description}`}
              >
                {label}
              </div>
              {t.shape !== "sweetheart" && (
                <span className="mt-1 text-[0.6rem] uppercase tracking-wider text-foreground/70 text-center max-w-[6rem] leading-tight">
                  {totals.personas}/{t.capacity}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.65rem] uppercase tracking-widest text-foreground/60">
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full table-dot" />
          Mesa redonda
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-3 rounded-md table-dot rect" />
          Mesa rectangular
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block w-6 h-3 rounded-md table-dot sweetheart" />
          Mesa de novios
        </span>
      </div>
    </div>
  );
}
