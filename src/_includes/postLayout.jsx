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
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
          />
          <title>{title} | {site?.title || "Pajarito Triste"}</title>
          <link rel="stylesheet" href="/styles.css" />

          {/* Estilo especial para forzar calidad, márgenes y limpiar el PDF */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @media print {
              @page { margin: 2cm; }
              body { background-color: white !important; -webkit-print-color-adjust: exact; }
              .prose { max-width: none !important; }
              a[href]:after { content: none !important; } /* Evita que salgan las URLs escritas al lado de los links */
              
              /* Hack visual: forzamos que el fondo de los bloques de código sea blanco en el PDF 
                 y el texto negro para máxima legibilidad y ahorro de tinta */
              pre {
                background-color: white !important;
                border: 1px solid #e5e7eb;
              }
              pre code {
                color: black !important;
                text-shadow: none !important;
              }
            }
          `,
            }}
          />
        </head>

        <body className="bg-[#fff5f7] text-gray-900 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
          {/* Barra de progreso - OCULTA EN PDF */}
          <div
            id="progress-bar"
            class="fixed top-0 left-0 h-1.5 bg-pink-300 z-100 transition-all duration-150 w-0 print:hidden"
          >
          </div>

          {/* Navbar - OCULTA EN PDF */}
          <div className="w-full flex justify-center mt-6 mb-10 px-4 print:hidden">
            <Navbar currentUrl={url} />
          </div>

          <main className="flex-1 max-w-5xl mx-auto px-4 md:px-6 pb-20 w-full">
            <article>
              {/* === ENCABEZADO EXCLUSIVO PARA PDF (Oculto en web) === */}
              <div className="hidden print:flex flex-col items-center mb-10 border-b-2 border-pink-100 pb-6 w-full text-center">
                <img
                  src="/img/banner-inicio-rmv.png"
                  className="w-28"
                  alt="Pajarito Triste"
                />
                <p className="text-[10px] text-pink-400 font-bold mt-2 uppercase tracking-[0.3em]">
                  Documentación
                </p>
              </div>

              {/* === CABECERA DEL POST === */}
              <header className="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-12 md:mb-16">
                <div className="w-full md:w-1/2 text-left">
                  {/* === Oculta el tiempo de lectura en PDF === */}
                  <div className="inline-block px-4 py-1 bg-white text-[#3a0159] rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-pink-100 shadow-sm print:hidden">
                    <span>🕒</span> {readingInfo?.minutes || 5} min de lectura
                  </div>

                  <h1 className="text-3xl md:text-5xl font-extrabold text-[#3a0159] leading-tight mb-4 wrap-break-word">
                    {title}
                  </h1>

                  {/* === Oculta la fecha de publicación en PDF === */}
                  {date && (
                    <p className="text-gray-400 font-medium mb-6 uppercase text-[11px] tracking-[0.2em] print:hidden">
                      Publicado el {new Date(date).toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </p>
                  )}

                  {/* === Oculta las etiquetas (Tags) en PDF === */}
                  <div className="flex flex-wrap gap-2 print:hidden">
                    <BlogTags tags={tags} />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  {image && (
                    <div className="rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-10 border-white transform rotate-0 md:rotate-2 print:rotate-0 print:shadow-none print:border-2 transition-all duration-500">
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
              <div className="prose prose-pink max-w-none 
                prose-headings:text-[#3a0159] prose-headings:font-extrabold
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-[1rem] md:prose-p:text-[1.1rem]
                prose-img:rounded-3xl md:prose-img:rounded-4xl prose-img:shadow-lg
                prose-blockquote:border-l-4 prose-blockquote:border-pink-300 prose-blockquote:bg-pink-50/50 prose-blockquote:rounded-r-3xl
                prose-a:text-pink-400 prose-a:font-bold hover:prose-a:text-[#3a0159]
                overflow-x-hidden print:prose-p:text-black">
                {children}
              </div>

              {/* BOTONES DE ACCIÓN - OCULTOS EN PDF */}
              <div class="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 mb-20 print:hidden">
                <button
                  type="button"
                  onClick="window.print()"
                  className="px-8 py-4 bg-white border-2 border-pink-200 text-[#3a0159] font-bold rounded-full hover:bg-pink-200 transition-all shadow-md active:scale-95 flex items-center gap-2"
                >
                  <span>📥</span> Descargar PDF
                </button>

                <a
                  href="/"
                  class="px-10 py-4 bg-[#3a0159] border border-pink-100 text-pink-200 font-bold rounded-full hover:bg-purple-800 transition-all shadow-md active:scale-95"
                >
                  Volver al inicio
                </a>
              </div>

              {/* === FOOTER - OCULTO EN PDF === */}
              <footer class="mx-auto w-full md:w-[92%] bg-white/30 backdrop-blur-sm rounded-4xl p-8 md:p-10 text-center flex flex-col items-center border border-white/50 print:hidden">
                {/* === BOTÓN RSS  === */}
                <div class="mb-6">
                  <a
                    href="/posts.rss"
                    class="flex items-center gap-2 text-pink-400 font-bold text-sm hover:text-[#3a0159] transition-colors group"
                    title="Suscribirse al feed RSS"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 fill-current group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6.5v2.8c5.4 0 9.8 4.4 9.8 9.8h2.8c0-7-5.6-12.6-12.6-12.6zm0-4.7v2.8c8.1 0 14.7 6.6 14.7 14.7h2.8c0-9.7-7.8-17.5-17.5-17.5z" />
                    </svg>
                    <span>Suscribirse vía RSS</span>
                  </a>
                </div>
                <p class="text-sm md:text-base text-gray-400 font-medium">
                  © {new Date().getFullYear()} Pajarito Triste
                </p>
                <div class="flex items-center gap-2 mt-4">
                  <img
                    src="/img/logo-pajarito-rmv.png"
                    class="w-6 h-6 md:w-8 md:h-8 grayscale opacity-60"
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
              const bar = document.getElementById("progress-bar");
              if (bar) bar.style.width = scrolled + "%";
            };
          `,
            }}
          />
        </body>
      </html>
    </>
  );
};
