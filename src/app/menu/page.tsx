import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { menu, wedding } from "@/lib/wedding";

export default function MenuPage() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Experiencia gastronómica</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Menú de la noche
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="font-serif italic text-foreground/70 mt-4">
              {wedding.bride} &amp; {wedding.groom} · {wedding.dateLabel}
            </p>
            <p className="text-xs tracking-[0.25em] uppercase text-foreground/60 mt-1">
              {wedding.venue}
            </p>
          </div>

          <div className="card mt-10 p-8 sm:p-12">
            {menu.map((section, i) => (
              <div key={section.course} className={i > 0 ? "mt-10" : ""}>
                <div className="text-center">
                  <p className="chip chip-accent">{section.course}</p>
                  {section.subtitle && (
                    <p className="mt-2 text-[0.7rem] tracking-[0.25em] uppercase text-foreground/60">
                      {section.subtitle}
                    </p>
                  )}
                </div>
                {section.image && (
                  <figure className="mt-6">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={section.image.src}
                      alt={section.image.alt}
                      className="w-full rounded-xl border border-border shadow-sm"
                    />
                  </figure>
                )}
                <ul className="mt-5 space-y-5">
                  {section.dishes.map((dish) => (
                    <li key={dish.name} className="text-center">
                      <p className="font-serif text-2xl">{dish.name}</p>
                      {dish.description && (
                        <p className="text-foreground/70 italic mt-1 max-w-xl mx-auto">
                          {dish.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
                {i < menu.length - 1 && (
                  <div className="divider-ornament mt-10">
                    <OrnamentFlourish />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-foreground/50 text-center mt-6 italic">
            Si tienes alguna alergia o restricción alimentaria, avísale a
            cualquier capitán de meseros al llegar a tu mesa.
          </p>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Encontrar mi mesa
            </Link>
            <Link href="/mesas" className="btn-ghost">
              Ver orden de las mesas
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
