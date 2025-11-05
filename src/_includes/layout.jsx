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
          <div class="layout-container">
            
            {/* === CONTENIDO PRINCIPAL === */}
            <main class="main-content">
              {/* === Barra de navegación === */}
              <Navbar />
              {children}
            </main>

            {/* === SIDEBAR FIJA A LA DERECHA === */}
            <aside class="sidebar">
              <div id="search"></div>
              
              <img
                class="sidebar-avatar"
                src="/logo-pajarito-rmv.png"
                alt="Pajarito Triste"
              />

              <h2 class="sidebar-title">Pajarito Triste</h2>
              <p class="sidebar-description">
                {site?.tiny_desc || data.tiny_desc || "Mi pequeña descripción."}
              </p>
              <p class="sidebar-handle">@pajaritotriste</p>

              <div class="sidebar-footer"></div>
            </aside>
          </div>
        </body>
      </html>
    </>
  );
};
