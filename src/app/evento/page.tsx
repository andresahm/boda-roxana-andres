import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { wedding } from "@/lib/wedding";

export default function EventoPage() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Nuestro gran día</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Información del evento
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="font-serif italic text-foreground/70 mt-4">
              {wedding.dateLabel}
            </p>
          </div>

          <div className="card mt-10 p-8">
            <h2 className="font-serif text-2xl flex items-center gap-3">
              Lugar
              <OrnamentFlourish />
            </h2>
            <p className="font-serif text-3xl mt-3 text-primary">
              {wedding.venue}
            </p>
            <p className="text-foreground/70 mt-2">{wedding.address}</p>
            <a
              href={wedding.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-5 inline-flex"
            >
              Abrir en Google Maps →
            </a>
          </div>

          <div className="card mt-6 p-8">
            <h2 className="font-serif text-2xl flex items-center gap-3">
              Itinerario
              <OrnamentFlourish />
            </h2>
            <ul className="mt-5 divide-y divide-border/60">
              {wedding.schedule.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between py-4"
                >
                  <span className="font-serif text-xl">{item.label}</span>
                  <span className="chip chip-accent">{item.time} h</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 mt-6">
            <div className="card p-6">
              <h2 className="font-serif text-2xl flex items-center gap-3">
                Código de vestimenta
              </h2>
              <p className="font-serif text-3xl mt-3 text-primary">
                {wedding.dressCode}
              </p>
              <p className="text-foreground/70 mt-2 text-sm">
                Te sugerimos tacones no demasiado delgados por si el salón
                tiene áreas de pasto.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="font-serif text-2xl flex items-center gap-3">
                Confirmación
              </h2>
              <p className="text-foreground/70 mt-3">
                Puedes confirmar o actualizar tu asistencia directo en la
                invitación oficial.
              </p>
              <a
                href={wedding.invitationUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-4 inline-flex"
              >
                Abrir invitación →
              </a>
            </div>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              Encontrar mi mesa
            </Link>
            <Link href="/mesas" className="btn-ghost">
              Ver mesas
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
