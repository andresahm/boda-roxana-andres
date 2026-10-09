import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";

type DownloadItem = {
  file: string;
  title: string;
  description: string;
  hint: string;
};

const items: DownloadItem[] = [
  {
    file: "/descargas/qr-20-por-hoja.pdf",
    title: "20 QRs por hoja",
    description:
      "Tarjetas chicas (~5×5 cm). Ideales para pegar como stickers o colocar en pequeños table tents.",
    hint: "Para 150 invitados: 8 hojas",
  },
  {
    file: "/descargas/qr-12-por-hoja.pdf",
    title: "12 QRs por hoja",
    description:
      "Tamaño cómodo (~6.5×6.5 cm). QR fácil de escanear y buen balance de papel.",
    hint: "Para 150 invitados: 13 hojas",
  },
  {
    file: "/descargas/qr-6-por-hoja.pdf",
    title: "6 QRs por hoja",
    description:
      "Tarjetas tipo save-the-date (~9.5×8.5 cm). La opción más elegante para dar en mano.",
    hint: "Para 150 invitados: 25 hojas",
  },
];

export default function DescargasPage() {
  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Para imprimir</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Descargas
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              PDFs listos para imprimir en hoja tamaño carta. Cada tarjeta
              tiene un código QR que lleva a esta página para que los invitados
              encuentren su mesa.
            </p>
          </div>

          <div className="grid gap-6 mt-10">
            {items.map((item) => (
              <article key={item.file} className="card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-2xl">{item.title}</h2>
                    <p className="text-foreground/70 mt-2">
                      {item.description}
                    </p>
                    <p className="chip chip-accent mt-3">{item.hint}</p>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <a
                      href={item.file}
                      download
                      className="btn-primary"
                    >
                      Descargar PDF
                    </a>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost text-sm"
                    >
                      Ver en el navegador
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="card mt-10 p-6 sm:p-8">
            <h3 className="font-serif text-xl flex items-center gap-3">
              Consejos para imprimir
              <OrnamentFlourish />
            </h3>
            <ul className="mt-4 space-y-2 text-foreground/70 text-sm leading-relaxed list-disc pl-5">
              <li>
                <strong>Tamaño</strong>: Carta (Letter, 8.5" × 11").
              </li>
              <li>
                <strong>Escala</strong>: 100 % · Tamaño real · NO
                &ldquo;ajustar a página&rdquo;.
              </li>
              <li>
                <strong>Papel</strong>: cartulina opalina 180-220 g para que
                las tarjetas se sientan firmes.
              </li>
              <li>
                <strong>Corte</strong>: tijera o pide corte con guillotina en
                la papelería (son líneas rectas).
              </li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="btn-primary">
              ← Volver al inicio
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
