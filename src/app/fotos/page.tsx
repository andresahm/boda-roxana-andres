import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { HashtagCopy } from "@/components/HashtagCopy";
import { wedding } from "@/lib/wedding";

export default function FotosPage() {
  const { hashtag, instagram, googlePhotosUrl, whatsapp } = wedding.photos;

  return (
    <>
      <WeddingHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-10 sm:py-14">
          <div className="text-center">
            <span className="hairline">Comparte el momento</span>
            <h1 className="font-serif text-4xl sm:text-5xl mt-5">
              Sube tus fotos
            </h1>
            <div className="divider-ornament mt-5">
              <OrnamentFlourish />
            </div>
            <p className="text-foreground/70 mt-4 max-w-xl mx-auto">
              Queremos revivir cada instante de esta noche a través de tus
              ojos. Captura todo lo que quieras y súbelo a cualquiera de
              estos lugares para que lo veamos.
            </p>
          </div>

          <div className="card mt-10 p-8 sm:p-12 text-center">
            <p className="chip chip-accent">Nuestro hashtag</p>
            <div className="mt-6">
              <HashtagCopy hashtag={hashtag} />
            </div>
            <p className="text-foreground/70 mt-6 max-w-md mx-auto">
              Si subes tus fotos y videos a Instagram, Facebook o TikTok,
              etiqueta cada publicación con nuestro hashtag. Así juntamos
              todas las memorias en un solo lugar.
            </p>
            {instagram && (
              <a
                href={`https://instagram.com/${instagram.replace("@", "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-6 inline-flex"
              >
                Síguenos en Instagram @{instagram.replace("@", "")}
              </a>
            )}
          </div>

          {googlePhotosUrl ? (
            <div className="card mt-6 p-8 text-center">
              <p className="chip">Álbum compartido</p>
              <h2 className="font-serif text-3xl mt-4">
                Álbum de Google Photos
              </h2>
              <p className="text-foreground/70 mt-3 max-w-md mx-auto">
                El lugar perfecto para subir fotos sin importar el tamaño.
                No necesitas cuenta de Google para ver, y puedes subir
                desde cualquier celular.
              </p>
              <a
                href={googlePhotosUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Abrir el álbum →
              </a>
            </div>
          ) : (
            <div className="card mt-6 p-8 text-center border-dashed">
              <p className="chip">Próximamente</p>
              <h2 className="font-serif text-3xl mt-4">
                Álbum compartido de Google Photos
              </h2>
              <p className="text-foreground/70 mt-3 max-w-md mx-auto">
                Vamos a abrir un álbum compartido donde cualquiera podrá
                subir sus fotos y videos sin límite de tamaño ni calidad.
                El link aparecerá aquí muy pronto.
              </p>
            </div>
          )}

          {whatsapp && (
            <div className="card mt-6 p-8 text-center">
              <p className="chip">Rapidito</p>
              <h2 className="font-serif text-3xl mt-4">Envíanos por WhatsApp</h2>
              <p className="text-foreground/70 mt-3 max-w-md mx-auto">
                Si prefieres mandarlas directo, aquí nos llegan al instante.
              </p>
              <a
                href={`https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                  "¡Hola! Les mando mis fotos de la boda " + hashtag,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6 inline-flex"
              >
                Abrir WhatsApp →
              </a>
            </div>
          )}

          <div className="card mt-10 p-6 sm:p-8">
            <h3 className="font-serif text-xl flex items-center gap-3">
              Un consejo cariñoso
              <OrnamentFlourish />
            </h3>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Durante la ceremonia te pedimos guardar el celular un ratito,
              para que todos podamos vivir el momento con el corazón. Después
              del cóctel, ¡tira todas las fotos que quieras! Son nuestro
              regalo favorito.
            </p>
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">
              ← Volver al inicio
            </Link>
            <Link href="/mesas" className="btn-ghost">
              Encontrar mi mesa
            </Link>
          </div>
        </section>
      </main>
      <WeddingFooter />
    </>
  );
}
