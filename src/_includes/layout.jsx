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
          <title>{title || site?.title || "Pajarito Triste"}</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" type="image/png" href="/img/logo-pajarito-rmv.png" />
          <link rel="stylesheet" href="/styles.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <style>
            {`
            body { font-family: 'Quicksand', sans-serif; scroll-behavior: smooth; font-size: 18px; }
            @media (max-width: 1024px) {
              body { font-size: 18px; } /* Aumenta tamaño base de fuente en móvil */
              h1 { font-size: 2.5rem !important; }
              p { font-size: 1.1rem !important; }
            }
            nav .bg-white\\/70 { max-width: 95vw; overflow-x: auto; scrollbar-width: none; }
            nav .bg-white\\/70::-webkit-scrollbar { display: none; }
          `}
          </style>
        </head>

        <body className="theme-blog flex flex-col min-h-screen bg-[#FFF0F5] antialiased">
          {/* === CABECERA MÓVIL (Solo aparece en pantallas pequeñas) === */}
          <header class="flex lg:hidden flex-col items-center pt-8 pb-2 px-4">
            <a href="/" class="transition-transform active:scale-95">
              <img
                src="/img/banner-inicio-rmv.png"
                class="w-32"
                alt="Pajarito Triste"
              />
            </a>
          </header>

          {/* === CONTENEDOR MAESTRO === */}
          <div class="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[320px_1fr_300px] gap-6 lg:gap-8 p-4 lg:p-10 items-start">
            {/* 1. COLUMNA IZQUIERDA (Escritorio) */}
            <aside class="
              hidden lg:flex
              bg-white 
              shadow-[0_10px_40px_rgba(0,0,0,0.04)] 
              rounded-[2.5rem] 
              p-8 
              flex-col items-center
              sticky top-10
              h-fit
              border border-pink-50
            ">
              <a href="/" class="transition-transform hover:scale-105">
                <img
                  src="/img/banner-inicio-rmv.png"
                  class="w-40"
                  alt="Pajarito Triste"
                />
              </a>
              <div class="mt-8">
                <IconsMedia />
              </div>
              <p class="mt-6 font-bold text-[#3a0159] opacity-60 text-sm">
                @pajaritotriste
              </p>
            </aside>

            {/* 2. COLUMNA CENTRAL (Contenido Principal) */}
            <div class="flex flex-col gap-6 lg:gap-8 w-full overflow-hidden">
              {/* NAVBAR (Segunda en el orden móvil) */}
              <nav class="flex justify-center sticky   z-50 px-2">
                <div class="bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 lg:py-2 shadow-md border border-white flex items-center">
                  <Navbar currentUrl={url} />
                </div>
              </nav>

              {/* CONTENIDO (Bienvenida + Posts) */}
              <main class="w-full">
                {children}
              </main>
            </div>

            {/* 3. COLUMNA DERECHA (Se va al final en móvil) */}
            <aside
              id="right-column"
              class="flex flex-col gap-6 lg:sticky lg:top-10 h-fit w-full mt-8 lg:mt-0"
            >
              <div class="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white">
                <h3 class="font-bold text-[#3a0159] mb-6 flex items-center gap-2 text-xl lg:text-lg">
                  <span class="text-2xl lg:text-xl">📚</span>
                  Recomendaciones
                </h3>

                <div class="flex flex-col gap-6 lg:gap-5">
                  <a
                    href="https://sqlime.org/"
                    target="_blank"
                    class="group flex items-center gap-4"
                  >
                    <div class="w-14 h-14 lg:w-12 lg:h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                      <span class="text-2xl lg:text-xl">💻</span>
                    </div>
                    <div>
                      <h4 class="text-sm lg:text-xs font-bold text-gray-800">
                        SQLime
                      </h4>
                      <p class="text-xs lg:text-[10px] text-gray-400 italic">
                        Playground de SQLite
                      </p>
                    </div>
                  </a>
                  {/* ...otros items similares... */}
                </div>
              </div>

              <div class="w-full mb-10 lg:mb-0">
                <CuriousBox />
              </div>
            </aside>
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
        </body>
      </html>
    </>
  );
};
