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
          {/* === Barra de navegación === */}
          <Navbar />

          {/* === CONTENEDOR PRINCIPAL === */}
          <div class="layout-container flex flex-col items-center px-4">
            
            {/* === Barra de búsqueda === */}
            <div id="search" class="w-full max-w-2xl my-6">
             
            </div>

            {/* === CONTENIDO PRINCIPAL === */}
            <main class="main-content w-full max-w-3xl">
              {children}
            </main>
          </div>
        </body>
      </html>
    </>
  );
};
