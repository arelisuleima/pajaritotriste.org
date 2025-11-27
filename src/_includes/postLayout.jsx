import Navbar from "../components/navbar.jsx";
import CuriousBox from "../components/curiousBox.jsx";
import IconsMedia from "../components/iconsMedia.jsx";
import { BlogTags } from "../components/blogTags.jsx"; 

export default (data, _helpers) => {
  // Desestructuramos todos los datos necesarios del post
  const { title, children, lang, site, date, tags } = data;

  // Función para formatear la fecha
  const formatDate = (dateString) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString("es-MX", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang={lang || "es"}>
        <head>
          <title>{title || site?.title || "Mi Blog"}</title>
          <meta charset="UTF-8" />
          <link rel="stylesheet" href="/styles.css" />
        </head>

        {/* 🛠️ CORRECCIÓN: Usar className */}
        <body className="theme-blog flex flex-col min-h-screen">
          <Navbar />

          {/* === CONTENEDOR GENERAL (sidebar + contenido) === */}
          <div className="flex w-full"> 
            
            {/* === SIDEBAR IZQUIERDO (Copiado de layout.jsx) === */}
            <aside className="side-bar">
              {/* Barra de búsqueda */}
              <div id="search" className="mb-6"></div>

              {/* Componente de datos curiosos */}
              <CuriousBox />
              <IconsMedia />
              <p className="text-center *:text-sm text-[#06b2fb] mt-4">
                @pajaritotriste
              </p>
            </aside>

            {/* === CONTENIDO PRINCIPAL DEL POST === */}
            <main className=" cv-intro flex-1 max-w-4xl mx-auto px-4 py-8">
                
                <article className="prose lg:prose-xl mx-auto">
                    
                    {/* 🏷️ Metadatos y Título del Post */}
                    <header className="mb-8 border-b pb-4 border-purple-900">
                      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                        {title}
                      </h1>
                      
                      {date && (
                        <p className="text-lg text-gray-500">
                          Publicado el: <strong>{formatDate(date)}</strong>
                        </p>
                      )}
                      
                      {/* INCLUSIÓN DE TAGS */}
                      <div className="mt-4">
                          {/* Renderiza tags solo si el array existe */}
                          {tags && <BlogTags tags={tags} />}
                      </div>

                    </header>

                    {/* 📦 Contenido del Post (viene del Markdown/MDX) */}
                    {children}

                </article>
            </main>
          </div>

        </body>
      </html>
    </>
  );
};