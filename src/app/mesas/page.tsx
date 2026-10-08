import Link from "next/link";
import { OrnamentFlourish, WeddingFooter, WeddingHeader } from "@/components/WeddingHeader";
import { getGuestsAtTable, menuLabel, tables } from "@/lib/wedding";

export default function MesasPage() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-5xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Distribución del salón</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">Orden de las mesas</h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              Un mapa pensado para que puedas encontrar fácilmente a tus familiares
              y amigos. La mesa de honor se encuentra al frente del salón.
            </p>
          </div>

          <SalonMap />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {tables.map((t) => {
              const guestsAtTable = getGuestsAtTable(t.id);
              return (
                <article key={t.id} className="card p-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-2xl">{t.name}</h2>
                    <span className="chip">#{t.id}</span>
                  </div>
                  <p className="text-foreground/70 italic mt-1">{t.description}</p>
                  <ul className="mt-4 space-y-2">
                    {guestsAtTable.map((g) => (
                      <li
                        key={g.name}
                        className="flex items-start justify-between gap-3 text-sm"
                      >
                        <span className="font-serif text-lg leading-tight">
                          {g.name}
                        </span>
                        {g.menu && (
                          <span className="chip whitespace-nowrap text-[0.6rem]">
                            {menuLabel[g.menu]}
                          </span>
                        )}
                      </li>
                    ))}
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
    <div className="card mt-10 p-6 sm:p-8">
      <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/60">
        <span>Entrada</span>
        <span>Pista de baile</span>
      </div>
      <div className="relative mt-4 w-full aspect-[4/3] rounded-xl bg-muted/70 border border-border overflow-hidden">
        <div className="absolute inset-0 opacity-20"
             style={{
               backgroundImage:
                 "linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.08) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.08) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.08) 25%, rgba(0,0,0,0.08) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.08) 76%, transparent 77%)",
               backgroundSize: "48px 48px",
             }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[52%] -translate-y-1/2 w-32 h-20 sm:w-40 sm:h-24 rounded-full border-2 border-dashed border-accent/70 flex items-center justify-center text-xs uppercase tracking-widest text-accent"
          aria-hidden
        >
          Pista
        </div>

        {tables.map((t) => (
          <div
            key={t.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ left: `${t.position.x}%`, top: `${t.position.y}%` }}
          >
            <div
              className={
                "shadow-md flex items-center justify-center font-serif " +
                (t.shape === "head"
                  ? "bg-primary text-white rounded-2xl w-28 h-10 text-sm"
                  : "bg-white border border-border rounded-full w-14 h-14 text-primary text-xl")
              }
              title={`${t.name} · ${t.description}`}
            >
              {t.shape === "head" ? "Mesa de honor" : t.id}
            </div>
            {t.shape !== "head" && (
              <span className="mt-1 text-[0.65rem] uppercase tracking-wider text-foreground/70 text-center max-w-[6rem] leading-tight">
                {t.description}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-foreground/60 text-center">
        Las posiciones son referenciales; el personal del salón te guiará a tu
        lugar a la llegada.
      </p>
    </div>
  );
}
