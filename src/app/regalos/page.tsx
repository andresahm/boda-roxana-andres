import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { CopyField } from "@/components/CopyField";
import { wedding } from "@/lib/wedding";

export default function RegalosPage() {
  const { liverpool, transfer } = wedding.gifts;

  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Mesa de regalos</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Nuestros regalos
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              Tu presencia es nuestro mejor regalo. Si además quieres apoyarnos
              para empezar esta nueva etapa, aquí te dejamos dos opciones.
            </p>
          </div>

          {/* Liverpool */}
          <div className="card mt-10 p-8 sm:p-10 text-center">
            <p className="chip chip-accent">Opción 1</p>
            <h2 className="font-serif text-3xl sm:text-4xl mt-4">Liverpool</h2>
            <p className="text-foreground/70 mt-3 max-w-md mx-auto">
              Elige el regalo que más te guste de nuestra mesa en la tienda
              de tu preferencia o directamente desde el sitio web.
            </p>

            <div className="mt-6 inline-flex flex-col items-center">
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-foreground/60">
                Número de mesa
              </span>
              <p className="font-serif text-5xl sm:text-6xl text-primary mt-2 tracking-wider">
                #{liverpool.number}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={liverpool.url}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Abrir mesa de regalos →
              </a>
              <a
                href="https://mesaderegalos.liverpool.com.mx"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Ir a liverpool.com.mx
              </a>
            </div>

            <p className="text-xs text-foreground/50 mt-5 italic">
              En Liverpool también puedes ir a cualquier sucursal, mencionar
              nuestro número de mesa y escoger ahí.
            </p>
          </div>

          {/* Transferencia */}
          <div className="card mt-6 p-8 sm:p-10">
            <div className="text-center">
              <p className="chip">Opción 2</p>
              <h2 className="font-serif text-3xl sm:text-4xl mt-4">
                Transferencia bancaria
              </h2>
              <p className="text-foreground/70 mt-3 max-w-md mx-auto">
                También puedes enviarnos una aportación por transferencia
                directa. Toca cada campo para copiarlo.
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <CopyField label="CLABE" value={transfer.clabe} size="lg" />
              <CopyField label="Beneficiario" value={transfer.beneficiary} />
              <CopyField label="Institución" value={transfer.institution} />
            </div>

            <p className="text-xs text-foreground/60 mt-5 text-center">
              Compatible con transferencias SPEI desde cualquier banco
              mexicano.
            </p>
          </div>

          {/* Agradecimiento */}
          <div className="card mt-10 p-6 sm:p-8 text-center">
            <OrnamentFlourish />
            <p className="font-serif italic text-xl mt-3 text-foreground/80">
              Gracias de todo corazón por acompañarnos en este día tan
              importante.
            </p>
            <p className="font-serif text-lg text-primary mt-2">
              Roxana &amp; Andrés
            </p>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              ← Volver al inicio
            </Link>
            <Link href="/evento" className="btn-ghost">
              Información del evento
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
