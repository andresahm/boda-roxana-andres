import Link from "next/link";
import { OrnamentFlourish, WeddingFooter, WeddingHeader } from "@/components/WeddingHeader";
import { menu, wedding } from "@/lib/wedding";

export default function MenuPage() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Experiencia gastronómica</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">Menú de la noche</h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="font-serif italic text-foreground/70 mt-4">
              {wedding.bride} & {wedding.groom} · {wedding.dateLabel}
            </p>
          </div>

          <div className="card mt-10 p-8 sm:p-12">
            {menu.map((section, i) => (
              <div key={section.course} className={i > 0 ? "mt-10" : ""}>
                <div className="text-center">
                  <p className="chip">{section.course}</p>
                </div>
                <ul className="mt-5 space-y-5">
                  {section.dishes.map((dish) => (
                    <li key={dish.name} className="text-center">
                      <p className="font-serif text-2xl flex items-center justify-center gap-3">
                        {dish.name}
                        {dish.tag && (
                          <span className="chip text-[0.6rem]">{dish.tag}</span>
                        )}
                      </p>
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
