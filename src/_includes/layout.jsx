import Navbar from "../components/navbar.jsx";

export default (data, _helpers) => {
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
          <link rel="icon" type="image/png" href="/img/pt-logo-1.png" />
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
            content={site?.description ||
              "Recursos que te ayudarán a entender mejor las bases de datos "}
          />

          <meta property="og:url" content={site_url} />

          <meta
            property="og:image"
            content={`${site_url}/img/opengraph-pajarito.png`}
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
  `}
          </style>
        </head>

        <body className="theme-blog flex flex-col min-h-screen bg-[#f5e2e9] antialiased">
          {/* === CABECERA MÓVIL === */}
          {/* === CABECERA MÓVIL === */}
          <header className="flex md:hidden flex-col items-center pt-2 px-2">
            <a href="/" className="transition-transform active:scale-95">
              <img
                src="/img/logo-pajarito-rmv.png"
                className="w-15"
                alt="Pajarito Triste"
              />
            </a>
          </header>

          <div class="max-w-400 mx-auto w-full gap-6 lg:gap-8 p-4 lg:p-10 items-start">
            {/* COLUMNA CENTRAL (Se quitó overflow-hidden para liberar position: fixed) */}
            <div class="flex flex-col gap-6 lg:gap-8 w-full">
              {/* NAVBAR DIRECTA (Sin nav ni div envolvente que cree recuadros) */}
              <Navbar currentUrl={url} />

              <main class="w-full pb-3 sm:pb-0">
                {children}
              </main>
            </div>
          </div>

          {/* === FOOTER === */}
          <footer class="mt-auto mb-20 sm:mb-10 mx-auto w-[92%] max-w-300 p-2 text-center flex flex-col items-center  print:hidden">
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
