import Navbar from "../components/navbar.jsx";
import CuriousBox from "../components/curiousBox.jsx";
import IconsMedia from "../components/iconsMedia.jsx";

export default (data, _helpers) => {
  const { title, children, lang, site, url } = data;

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
          <Navbar currentUrl={url} />

          {/* === CONTENEDOR GENERAL (sidebar + contenido) === */}
          <div class="pt-5 flex w-full">
            {/* === SIDEBAR IZQUIERTO === */}
            <aside class=" side-bar ">
              {/* Barra de búsqueda */}
              <div id="search" class=" mb-6"></div>

              {/* Componente de datos curiosos */}
              <CuriousBox />
              <IconsMedia />
              <p class="text-center *:text-sm text-[#06b2fb] mt-4">
                @pajaritotriste
              </p>
            </aside>

            {/* === CONTENIDO PRINCIPAL === */}
            <main class="flex-1 max-w-3xl mx-auto px-4 py-6 prose">
              {children}
            </main>
          </div>

          {/* === FOOTER === */}
          <footer className="mt-auto py-6 border-t border-purple-900 bg-purple-50 text-center">
            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Pajarito Triste.
            </p>

            <p className="mt-2">
              <a
                href="/"
                className="text-purple-700 font-semibold hover:underline"
              >
                Ir al inicio
              </a>
            </p>

            <p className="mt-2 text-xs text-gray-500">
              Hecho con{" "}
              <a
                href="https://lume.land"
                target="_blank"
                className="text-purple-700 hover:underline font-semibold"
              >
                Lume
              </a>
              , 🩵 por un pajarito triste.
            </p>
          </footer>
        </body>
      </html>
    </>
  );
};
