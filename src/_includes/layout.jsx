import Navbar from "../components/navbar.jsx";

export default (data, _helpers) => {
  const { title, children, lang, site } = data;

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang={lang || "es"}>
        <head>
          <title>{title || site?.title || "Mi Blog"}</title>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="/styles.css" />
        </head>

        <body class="theme-blog flex flex-col min-h-screen">

          <Navbar />

          {/* === CONTENEDOR GENERAL (sidebar + contenido) === */}
          <div class="flex w-full">

            {/* === SIDEBAR IZQUIERTO === */}
            <aside class=" side-bar ">

              {/* Barra de búsqueda */}
              <div id="search" class=" mb-6"></div>

              {/* aqui agrego lo de la sidebar*/}
             

            </aside>

            {/* === CONTENIDO PRINCIPAL === */}
            <main class="flex-1 max-w-3xl mx-auto px-4 py-6">
              {children}
            </main>

          </div>

        </body>
      </html>
    </>
  );
};
