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
          {/* === Contenedor principal === */}
          {/* === Barra de navegación === */}
          <Navbar />
          <div class="layout-container">
            {/* === CONTENIDO PRINCIPAL === */}

            <main class="main-content ">
              {children}
            </main>
          </div>
        </body>
      </html>
    </>
  );
};
