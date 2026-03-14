import Navbar from "../components/navbar.jsx";
import { BlogTags } from "../components/blogTags.jsx";

export default (data, _helpers) => {
  const { title, children, lang, site, date, tags, url, image, readingInfo } =
    data;

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang={lang || "es"}>
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title} | {site?.title || "Pajarito Triste"}</title>
          <link rel="stylesheet" href="/styles.css" />
        </head>

        <body className="bg-[#fff5f7] text-gray-900 min-h-screen flex flex-col font-sans">
          <div
            id="progress-bar"
            class="fixed top-0 left-0 h-1.5 bg-pink-300 z-100 transition-all duration-150 w-0"
          >
          </div>

          <div className="w-full flex justify-center mt-6 mb-10">
            <Navbar currentUrl={url} />
          </div>

          <main className="flex-1 max-w-5xl mx-auto px-6 pb-20">
            <article>
              {/* === NUEVA CABECERA EN DOS COLUMNAS === */}
              <header className="flex flex-col md:flex-row items-center gap-10 mb-16">
                {/* RECUADRO 1: Información (Texto) */}
                <div className="w-full md:w-1/2 text-left">
                  <div className="inline-block px-4 py-1 bg-white text-[#3a0159] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-pink-100 shadow-sm">
                    <span>🕒</span> {readingInfo?.minutes || 5} min de lectura
                  </div>

                  <h1 className="text-4xl md:text-5xl font-extrabold text-[#3a0159] leading-tight mb-4">
                    {title}
                  </h1>

                  {date && (
                    <p className="text-gray-400 font-medium mb-6 uppercase text-[11px] tracking-[0.2em]">
                      Publicado el {new Date(date).toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC", // Esto asegura que use la fecha exacta del Markdown sin restarle horas
                      })}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    <BlogTags tags={tags} />
                  </div>
                </div>

                {/* RECUADRO 2: Imagen Portada */}
                <div className="w-full md:w-1/2">
                  {image && (
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-10 border-white transform rotate-2 hover:rotate-0 transition-all duration-500">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-cover aspect-video md:aspect-square"
                      />
                    </div>
                  )}
                </div>
              </header>

              {/* CUERPO DEL POST */}
              <div className="prose prose-lg max-w-none 
                prose-headings:text-[#3a0159] prose-headings:font-extrabold
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[1.1rem]
                prose-img:rounded-4xl prose-img:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-pink-300 prose-blockquote:bg-pink-50/50 prose-blockquote:rounded-r-4xl
                prose-a:text-pink-400 prose-a:font-bold hover:prose-a:text-[#3a0159]">
                {children}
              </div>

              <div class="mt-10 text-center my-15">
                <a
                  href="/"
                  class="px-8 py-4 bg-[#3a0159] border border-pink-100 text-pink-400 font-bold rounded-full hover:bg-purple-200 transition-all shadow-sm"
                >
                  Volver al inicio
                </a>
              </div>

              {/* === FOOTER === */}
              <footer class="mt-auto mb-10 mx-auto w-[92%] max-w-[1200px] bg-white/30 backdrop-blur-sm rounded-[2.5rem] p-10 text-center flex flex-col items-center border border-white/50">
                <p class="text-base text-gray-400 font-medium">
                  © {new Date().getFullYear()} Pajarito Triste
                </p>
                <div class="flex items-center gap-2 mt-4">
                  <span class="text-sm text-gray-300">Hecho con Lume 🩵</span>
                  <img
                    src="/img/logo-pajarito-rmv.png"
                    class="w-8 h-8 grayscale opacity-50"
                  />
                </div>
              </footer>
            </article>
          </main>

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.onscroll = function() {
              const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              const scrolled = (winScroll / height) * 100;
              document.getElementById("progress-bar").style.width = scrolled + "%";
            };
          `,
            }}
          />
        </body>
      </html>
    </>
  );
};
