import Link from "next/link";
import {
  OrnamentFlourish,
  WeddingFooter,
  WeddingHeader,
} from "@/components/WeddingHeader";
import { HashtagCopy } from "@/components/HashtagCopy";
import { wedding } from "@/lib/wedding";

export default function FotosPage() {
  const { hashtag, instagrams, albums, whatsapps } = wedding.photos;

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
              ojos. Elige el lugar que más te acomode para compartir tus
              fotos y videos con nosotros.
            </p>
          </div>

          {/* Hashtag */}
          <div className="card mt-10 p-8 sm:p-12 text-center">
            <p className="chip chip-accent">Nuestro hashtag</p>
            <div className="mt-6">
              <HashtagCopy hashtag={hashtag} />
            </div>
            <p className="text-foreground/70 mt-6 max-w-md mx-auto">
              Si publicas tus fotos o historias en Instagram, Facebook o
              TikTok, etiquétalas con nuestro hashtag. Así juntamos todo en
              un solo lugar.
            </p>
            {instagrams.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                <span className="text-xs tracking-widest uppercase text-foreground/60 w-full sm:w-auto">
                  Etiquétanos:
                </span>
                {instagrams.map((ig) => (
                  <a
                    key={ig.handle}
                    href={`https://instagram.com/${ig.handle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost text-sm"
                  >
                    {ig.label} · @{ig.handle}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Álbumes */}
          <div className="mt-6 text-center">
            <p className="chip">Álbumes compartidos</p>
            <h2 className="font-serif text-3xl mt-3">
              Sube todas las fotos que quieras
            </h2>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Elige el que ya uses. Las fotos quedan guardadas para siempre
              y en calidad original, sin importar cuántas subas.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 mt-6">
            {albums.map((album) => (
              <article key={album.name} className="card p-6 text-center">
                <h3 className="font-serif text-2xl">{album.name}</h3>
                <p className="text-foreground/70 mt-3 text-sm leading-relaxed">
                  {album.description}
                </p>
                <a
                  href={album.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-5 inline-flex"
                >
                  Abrir álbum →
                </a>
              </article>
            ))}
          </div>

          {/* WhatsApp */}
          {whatsapps.length > 0 && (
            <>
              <div className="mt-10 text-center">
                <p className="chip">Envío directo</p>
                <h2 className="font-serif text-3xl mt-3">
                  Mándanos por WhatsApp
                </h2>
                <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
                  ¿Te acomoda mejor WhatsApp? Mándanos tus fotos y videos
                  directo a cualquiera de los dos — nos llegan al instante.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 mt-6">
                {whatsapps.map((wa) => {
                  const digits = wa.phone.replace(/\D/g, "");
                  const text = encodeURIComponent(
                    `¡Hola ${wa.name}! Les mando mis fotos de la boda ${hashtag}`,
                  );
                  return (
                    <article key={wa.phone} className="card p-6 text-center">
                      <h3 className="font-serif text-2xl">{wa.name}</h3>
                      <p className="text-foreground/60 mt-2 text-sm">
                        +{digits.slice(0, 2)} {digits.slice(2, 4)} {digits.slice(4, 8)} {digits.slice(8)}
                      </p>
                      <a
                        href={`https://wa.me/${digits}?text=${text}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary mt-4 inline-flex"
                      >
                        Abrir WhatsApp →
                      </a>
                    </article>
                  );
                })}
              </div>
            </>
          )}

          {/* Consejo */}
          <div className="card mt-10 p-6 sm:p-8">
            <h3 className="font-serif text-xl flex items-center gap-3">
              Un consejo cariñoso
              <OrnamentFlourish />
            </h3>
            <p className="mt-3 text-foreground/70 leading-relaxed">
              Durante la ceremonia te pedimos guardar el celular un ratito
              para que todos podamos vivir el momento con el corazón.
              Después del cóctel, ¡tira todas las fotos que quieras! Son
              nuestro regalo favorito.
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
