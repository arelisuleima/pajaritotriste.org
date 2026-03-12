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
          <link rel="stylesheet" href="/styles.css" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap" rel="stylesheet" />
          <style>{`
            body { font-family: 'Quicksand', sans-serif; scroll-behavior: smooth; }
          `}</style>
        </head>

        <body className="theme-blog flex flex-col min-h-screen bg-[#FFF0F5]">
          
          {/* === CONTENEDOR MAESTRO DE 3 COLUMNAS === */}
          {/* Usamos items-start para que todas las columnas cuelguen desde el mismo punto arriba */}
          <div class="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[320px_1fr_300px] gap-8 p-4 lg:p-10 items-start">
            
            {/* 1. COLUMNA IZQUIERDA (Sidebar Pajarito) */}
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
                <img src="/img/banner-inicio-rmv.png" class="w-32 lg:w-40" alt="Pajarito Triste" />
              </a>

             

              <div class="mt-8">
                <IconsMedia />
              </div>

              <p class="mt-6 font-bold text-[#3a0159] opacity-60 text-sm">
                @pajaritotriste
              </p>
            </aside>

            {/* 2. COLUMNA CENTRAL (Contenido Principal) */}
            <div class="flex flex-col gap-8">
              {/* NAVBAR CENTRADA */}
              <nav class="flex justify-center sticky top-10 z-50">
                <div class="bg-white/70 backdrop-blur-md rounded-full px-2 py-2 shadow-sm border border-white">
                  <Navbar currentUrl={url} />
                </div>
              </nav>

              {/* EL CONTENIDO DE LAS PÁGINAS (BANNER + POSTS) */}
              <main class="w-full">
                {children}
              </main>
            </div>

            {/* 3. COLUMNA DERECHA (El espacio que marcaste en rojo) */}
            {/* Aquí es donde Lume inyectará el historial si lo pones en el index, 
                o puedes poner un componente global aquí mismo */}
     <aside id="right-column" class="hidden lg:flex flex-col sticky top-10 h-fit gap-6">
  
  {/* CARD: RECURSOS RECOMENDADOS (Libros/Videos) */}
  <div class="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-white">
    <h3 class="font-bold text-[#3a0159] mb-6 flex items-center gap-2 text-lg">
      <span class="text-xl">📚</span> 
      Caja de Herramientas
    </h3>
    
    <div class="flex flex-col gap-5">
      {/* Item 1: Video/Curso */}
      <a href="https://www.youtube.com/@Computerphile" target="_blank" class="group flex items-center gap-4 transition-all">
        <div class="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
          <span class="text-xl">📺</span>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-800 group-hover:text-pink-500 transition-colors">Computerphile</h4>
          <p class="text-[10px] text-gray-400">Conceptos de computación</p>
        </div>
      </a>

      {/* Item 2: Libro */}
      <a href="#" class="group flex items-center gap-4 transition-all">
        <div class="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          <span class="text-xl">📖</span>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-800 group-hover:text-pink-500 transition-colors">SQL Performance</h4>
          <p class="text-[10px] text-gray-400">Aprende a tunear queries</p>
        </div>
      </a>

      {/* Item 3: Blog/Artículos */}
      <a href="https://db-engines.com" target="_blank" class="group flex items-center gap-4 transition-all">
        <div class="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
          <span class="text-xl">🌐</span>
        </div>
        <div>
          <h4 class="text-xs font-bold text-gray-800 group-hover:text-pink-500 transition-colors">DB-Engines</h4>
          <p class="text-[10px] text-gray-400">Ranking de DBs</p>
        </div>
      </a>
    </div>
  </div>


   <div class="mt-8 w-full">
                <CuriousBox />
              </div>

 
</aside>

          </div>

          {/* === FOOTER === */}
          <footer class="mt-auto mb-10 mx-auto w-[90%] max-w-[1200px] bg-white/30 backdrop-blur-sm rounded-4xl p-8 text-center flex flex-col items-center border border-white/50">
            <p class="text-sm text-gray-400 font-medium">
              © {new Date().getFullYear()} Pajarito Triste
            </p>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-xs text-gray-300">Hecho con Lume 🩵</span>
              <img src="/img/logo-pajarito-rmv.png" class="w-6 h-6 grayscale opacity-50" />
            </div>
          </footer>
        </body>
      </html>
    </>
  );
};