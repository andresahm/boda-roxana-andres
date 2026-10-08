import QRCode from "qrcode";
import { headers } from "next/headers";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { wedding } from "@/lib/wedding";

export default async function QrPage() {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:4123";
  const proto = h.get("x-forwarded-proto") ?? "http";
  const url = `${proto}://${host}/`;

  const dataUrl = await QRCode.toDataURL(url, {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 540,
    color: {
      dark: "#393e46",
      light: "#ffffff",
    },
  });

  return (
    <>
      <WeddingHeader compact />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-6 py-10 sm:py-14 text-center">
          <span className="hairline">Para los novios</span>
          <h1 className="font-serif text-4xl sm:text-5xl mt-5">
            Tu QR de invitados
          </h1>
          <div className="divider-ornament mt-5">
            <OrnamentFlourish />
          </div>
          <p className="text-foreground/70 mt-4 max-w-md mx-auto">
            Imprime este código y colócalo a la entrada del salón. Al
            escanearlo, cada invitado verá la página para buscar su mesa.
          </p>

          <div className="card mt-10 p-10 inline-flex flex-col items-center">
            <p className="font-serif text-3xl text-primary">
              {wedding.bride}{" "}
              <span className="text-accent-dark italic">&amp;</span>{" "}
              {wedding.groom}
            </p>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-foreground/60 mt-1">
              {wedding.dateShort} · {wedding.venue}
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={dataUrl}
              alt="Código QR"
              className="mt-6 w-64 h-64 sm:w-72 sm:h-72"
            />
            <p className="mt-4 text-xs text-foreground/70 break-all max-w-xs">
              {url}
            </p>
          </div>

          <p className="text-xs text-foreground/50 mt-6">
            Consejo: pide un acrílico o cartel estilo mesa de bienvenida con
            este código impreso en grande.
          </p>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
