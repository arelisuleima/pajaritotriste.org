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
          {/* === CONTENEDOR GENERAL === */}
          <div class="pt-5 w-full flex flex-col lg:flex-row">
            {/* === SIDEBAR (arriba en móvil, izquierda en desktop) === */}
            <aside class="
              bg-[#3a0159]
              p-4
              rounded-xl
              m-4
              
              lg:w-[280px]
              lg:h-[400px]
              flex flex-col items-center
            ">
              <a href="/" class="mt-3 w-full flex justify-center p-2">
                <img
                  src="/img/banner-inicio-rmv.png"
                  class="w-3/5 sm:w-2/5 lg:w-4/5"
                  alt="Pajarito Triste"
                />
              </a>

              {/* Curiosidades — oculto en móvil */}
              <div class="hidden lg:block">
                <CuriousBox />
              </div>

              <IconsMedia />

              <p class="text-center text-sm text-[#dfc7f8] mt-4">
                @pajaritotriste
              </p>
            </aside>

            {/* === CONTENIDO PRINCIPAL === */}
            <div class="flex-1">
              {/* NAVBAR */}
              <div class="w-full flex justify-center mt-2 mb-4">
                <Navbar currentUrl={url} />
              </div>

              {/* CONTENIDO */}
              <main class="
              w-full max-w-full 
              px-4 sm:px-6 
              mx-auto py-6 
              prose 
              prose-lg 
              sm:prose-lg 
              lg:prose-xl 
              prose-headings:font-bold 
               prose-headings:text-purple-900
               prose-p:text-gray-800
            prose-p:leading-relaxed
              ">
                {children}
              </main>
            </div>
          </div>

          {/* === FOOTER === */}
          <footer class="mt-auto text-center flex flex-col items-center border-t border-purple-900 bg-purple-50 p-4">
            <p class="text-sm text-gray-700">
              © {new Date().getFullYear()} Pajarito Triste.
            </p>

            <p class="mt-0 text-xs text-gray-500">
              Hecho con{" "}
              <a
                href="https://lume.land"
                target="_blank"
                class="text-purple-700 hover:underline font-semibold"
              >
                Lume
              </a>{" "}
              🩵 por un pajarito triste.
            </p>

            <img src="/img/logo-pajarito-rmv.png" class="w-10 mt-2" />
          </footer>
        </body>
      </html>
    </>
  );
};
