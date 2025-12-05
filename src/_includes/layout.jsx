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
          {/* === CONTENEDOR GENERAL (sidebar + contenido) === */}
          <div class="pt-5 flex w-full">
            {/* === SIDEBAR IZQUIERTO === */}
            <aside class=" side-bar ">
              <a href="/" class="w-35 ml-5 mt-5 ">
                <img
                  src="/img/banner-inicio-rmv.png"
                  style="float: center; width: 80%; margin-left: 15px;"
                />
              </a>
              {/* Barra de búsqueda */}
              <div id="search" class=" mb-6 mt-5"></div>

              {/* Componente de datos curiosos */}
              <CuriousBox />
              <IconsMedia />
              <p class="text-center *:text-sm text-[#06b2fb] mt-4">
                @pajaritotriste
              </p>
            </aside>
            {/* === CONTENIDO PRINCIPAL === */}
            <div class="flex-1">
              {/*====NAVBAR === */}
              <div class="w-full flex justify-center mt-4">
                <Navbar currentUrl={url} />
              </div>

              {/* CONTENIDO */}
              <main class="max-w-3xl mx-auto px-4 py-6 prose">
                {children}
              </main>
            </div>
          </div>

          {/* === FOOTER === */}
          <footer className="mt-auto text-center flex flex-col items-center border-t border-purple-900 bg-purple-50 ">
            <p className="mt-2">
              <a
                href="/"
                className="text-gray-400 font-semibold hover:underline"
              >
                Volver al inicio ⬆️
              </a>
            </p>

            <p className="text-sm text-gray-700">
              © {new Date().getFullYear()} Pajarito Triste.
            </p>

            <p className="mt-0 text-xs text-gray-500 ">
              Hecho con{" "}
              <a
                href="https://lume.land"
                target="_blank"
                className="text-purple-700 hover:underline font-semibold"
              >
                Lume
              </a>
              🩵 por un pajarito triste.
            </p>
            <img src="/img/logo-pajarito-rmv.png" style=" width: 5%;" />
          </footer>
        </body>
      </html>
    </>
  );
};
