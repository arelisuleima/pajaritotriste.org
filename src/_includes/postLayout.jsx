import Navbar from "../components/navbar.jsx";
import { BlogTags } from "../components/blogTags.jsx";

export default (data, _helpers) => {
  const { title, children, lang, site, date, tags, url } = data;

  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang={lang || "es"}>
        <head>
          <title>{title || site?.title || "Mi Blog"}</title>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="/styles.css" />
        </head>

        <body className="theme-blog flex flex-col min-h-screen bg-amber-50">
          {/* === NAVBAR === */}
          <div className="w-full flex justify-center mt-4">
            <Navbar currentUrl={url} />
          </div>

          {/* === CONTENIDO PRINCIPAL === */}
          <main className="p-4  flex-1 max-w-4xl mx-auto px-4 py-8">
            <article className="prose lg:prose-xl mx-auto text-4xl">
              <header className="mb-8 border-b pb-4 border-purple-900">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
                  {title}
                </h1>

                {date && (
                  <p className="text-lg text-gray-500">
                    Publicado el: <strong>{formatDate(date)}</strong>
                  </p>
                )}

                <p>🕒 {data.readingInfo.minutes} min de lectura</p>

                <div className="mt-4">
                  {tags && <BlogTags tags={tags} />}
                </div>
              </header>

              {children}
            </article>
          </main>

          {/* === BOTÓN FLOTANTE PARA VOLVER ARRIBA === */}
          <button
            type="button"
            id="backToTop"
            onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
            className="hidden fixed bottom-6 right-6 bg-purple-900 text-white p-3 rounded-full shadow-lg hover:bg-purple-900 transition-all"
          >
            🡹
          </button>

          {/* === FOOTER === */}
          <footer className="mt-auto text-center flex flex-col items-center border-t border-purple-900 bg-purple-50">
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Pajarito Triste.
            </p>

            <p className="mt-0 text-xs text-gray-500">
              Hecho con{" "}
              <a
                href="https://lume.land"
                target="_blank"
                className="text-purple-700 hover:underline font-semibold"
              >
                Lume
              </a>{" "}
              🩵 por un pajarito triste.
            </p>

            <img src="/img/logo-pajarito-rmv.png" style="width: 5%;" />
          </footer>

          {/* === SCRIPT PARA MOSTRAR/OCULTAR EL BOTÓN DE SUBIR === */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
      document.addEventListener("DOMContentLoaded", function () {
        const btn = document.getElementById("backToTop");
        if (!btn) return;

        window.addEventListener("scroll", () => {
          if (window.scrollY > 200) {
            btn.classList.remove("hidden");
          } else {
            btn.classList.add("hidden");
          }
        });
      });
    `,
            }}
          >
          </script>
        </body>
      </html>
    </>
  );
};
