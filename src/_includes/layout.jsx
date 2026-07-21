import Navbar from "../components/navbar.jsx";



export default (data, _helpers) => {
  // === CORRECCIÓN: Añadimos site_url aquí para que Lume la reconozca ===
  const { title, children, lang, site, url, site_url } = data;

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

          {/* === OPEN GRAPH PARA EL HOME / GENERAL === */}
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content={site?.title || "Pajarito Triste"}
          />
          <meta
            property="og:title"
            content={title || site?.title || "Pajarito Triste"}
          />
          <meta
            property="og:description"
            content={site?.description || "Documentación y guías de SQL"}
          />

          {/* Usamos la variable site_url de tu _data.yml */}
          <meta property="og:url" content={site_url} />

          {/* Imagen por defecto para cuando compartan la raíz del blog */}
          <meta
            property="og:image"
            content={`${site_url}/img/logo-pajarito-rmv.png`}
            
          />

          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <style>
            {`
    body { font-family: 'Quicksand', sans-serif; scroll-behavior: smooth; font-size: 18px; }
    @media (max-width: 1024px) {
      body { font-size: 18px; } 
      h1 { font-size: 2.5rem !important; }
      p { font-size: 1.1rem !important; }
    }
    nav .bg-white\\/70 { max-width: 95vw; overflow-x: auto; scrollbar-width: none; }
    nav .bg-white\\/70::-webkit-scrollbar { display: none; }
  `}
          </style>
        </head>

        <body className="theme-blog flex flex-col min-h-screen bg-[#FFF0F5] antialiased">
          {/* === CABECERA MÓVIL === */}
          <header class="flex lg:hidden flex-col items-center pt-8 pb-2 px-4">
            <a href="/" class="transition-transform active:scale-95">
              <img
                src="/img/banner-inicio-rmv.png"
                class="w-32"
                alt="Pajarito Triste"
              />
            </a>
          </header>

          <div class="max-w-[1600px] mx-auto w-full gap-6 lg:gap-8 p-4 lg:p-10 items-start">
            {/* 1. Encabezado*/}
           
                {/* <IconsMedia />
              </div>
              <p class="mt-6 font-bold text-[#3a0159] opacity-60 text-sm">
                @pajaritotriste
              </p>*/}
          

            {/* 2. COLUMNA CENTRAL */}
            <div class="flex flex-col gap-6 lg:gap-8 w-full overflow-hidden">
              <nav class="flex justify-center sticky z-50 px-2">
                <div class="bg-white/80 backdrop-blur-lg rounded-full px-4 py-3 lg:py-2 shadow-md border border-white flex items-center">
                  <Navbar currentUrl={url} />
                </div>
              </nav>

              <main class="w-full">
                {children}
              </main>
            </div>
 </div>
          

          {/* === FOOTER === */}
          <footer class="mt-auto mb-10 mx-auto w-[92%] max-w-[1200px] bg-white/30 backdrop-blur-sm rounded-[2.5rem] p-10 text-center flex flex-col items-center border border-white/50 print:hidden">
            <div class="mb-6">
              <a
                href="/posts.rss"
                class="flex items-center gap-2 text-pink-400 font-bold text-sm hover:text-[#3a0159] transition-colors group"
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
        </body>
      </html>
    </>
  );
};
