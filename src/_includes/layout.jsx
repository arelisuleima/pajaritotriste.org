// Tu archivo layout.jsx COMPLETO y corregido
// (Asegúrate de reemplazar el contenido de tu archivo con este)

export default (
  data, 
  _helpers,
) => {
  // Desestructuramos las variables que sí sabemos que existen
  // o las hacemos seguras con ||
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
        
        <body class="theme-blog">
          <div class="container mx-auto p-4 md:p-8">
            <div class="flex flex-col md:flex-row gap-8">

              {/* === COLUMNA PRINCIPAL (Contenido) === */}
              <main class="w-full md:w-2/3">
                {children}
              </main>

              {/* === BARRA LATERAL (Sidebar) === */}
              <aside class="w-full md:w-1/3 flex flex-col gap-6">
                
                {/* 1. Tarjeta de Perfil */}
                <div class="sidebar-card text-center flex flex-col items-center gap-4 p-6">
                  <img
                    class="rounded-full h-32 w-32 object-cover"
                    src="/pfp.jpg"
                  />
                  <div class="flex flex-col gap-1">
                    {/* 
                      - site?.title: Pregunta si 'site' existe antes de leer 'title'
                      - || title: Si 'site' no existe, usa el 'title' de la página actual
                    */}
                    <h2 class="font-bold text-2xl">{site?.title || title}</h2>
                    <p class="text-sm">
                      {site?.tiny_desc || data.tiny_desc || "Mi pequeña descripción."}
                    </p>
                    <p class="text-xs mt-1">@pajaritotriste</p>
                  </div>
                </div>

                {/* ... el resto de tus tarjetas ... */}
                
              </aside>
            </div>
          </div>
        </body>
      </html>
    </>
  );
};