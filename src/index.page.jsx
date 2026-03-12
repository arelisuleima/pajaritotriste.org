import { BlogTags } from "./components/blogTags.jsx";

export const title = "Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  // Obtenemos todos los posts
  const allPosts = data.search.pages("type=post", "date=desc");
  // Los primeros 4 o 6 para las tarjetas visuales centrales
  const featuredPosts = allPosts.slice(0, 6);

  return (
    <>
      {/* --- COLUMNA CENTRAL (Contenido Dinámico) --- */}
      <div class="space-y-12">
        {/* SECCIÓN 1: BANNER PRINCIPAL */}
        <section class="relative overflow-hidden p-8 md:p-12 bg-[#E0F5E9] rounded-[3rem] border border-[#c2e9d3] shadow-sm">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl">
          </div>

          <div class="relative z-10 max-w-2xl">
            <h1 class="text-5xl md:text-6xl font-extrabold text-[#3a0159] mb-6 tracking-tight">
              Hola
            </h1>
            <p class="text-lg md:text-xl text-[#2D5A43] mb-8 leading-relaxed font-medium">
              Transformando la manera en que aprendemos y comprendemos el mundo
              de los datos.
              <span class="block mt-2 text-[#3a0159]/70">
                Recursos visuales diseñados para que cada concepto sea claro y
                práctico.
              </span>
            </p>

            <a
              href="/about"
              class="inline-block px-8 py-4 bg-pink-300 text-[#3a0159] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-md shadow-pink-100"
            >
              Conoce más sobre pajaritotriste
            </a>
          </div>
        </section>

        {/* SECCIÓN 2: ÚLTIMAS ENTRADAS (GRID DE 2 COLUMNAS) */}
        <section>
          <div class="flex items-center justify-between mb-8 px-4">
            <h2 class="text-3xl font-bold text-[#3a0159]">
              Últimas Entradas
            </h2>
            <div class="h-1 flex-1 mx-6 bg-pink-100 rounded-full hidden sm:block">
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article class="group bg-white rounded-[2.5rem] border border-pink-50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                {post.image && (
                  <a href={post.url} class="block overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </a>
                )}

                <div class="p-8">
                  <span class="inline-block text-[10px] uppercase tracking-widest text-pink-400 font-bold mb-3">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "short",
                    })}
                  </span>

                  <h3 class="mb-4">
                    <a
                      href={post.url}
                      class="text-xl font-bold text-[#3a0159] hover:text-pink-400 transition-colors no-underline leading-tight"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <BlogTags tags={post.tags?.slice(0, 2)} />
                    <a
                      href={post.url}
                      class="w-8 h-8 flex items-center justify-center bg-purple-50 text-purple-600 rounded-full group-hover:bg-[#3a0159] group-hover:text-white transition-all"
                    >
                      →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* --- ESTO SE MOVERÁ A LA COLUMNA ROJA (DERECHA) --- */}
      {
        /* En Lume puedes usar fragmentos o simplemente dejar que el layout
          maneje este bloque si lo defines como un componente aparte */
      }
      <template slot="right-column-content">
        <div class="bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 border border-white shadow-sm">
          <h3 class="font-bold text-[#3a0159] mb-6 flex items-center gap-2">
            <span class="text-xl">📚</span> Historial
          </h3>
          <ul class="space-y-5">
            {allPosts.map((post) => (
              <li class="group">
                <a href={post.url} class="block no-underline">
                  <span class="text-sm font-bold text-gray-600 group-hover:text-pink-500 transition-colors leading-snug block">
                    {post.title}
                  </span>
                  <span class="text-[9px] uppercase tracking-tighter text-gray-400 block mt-1">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </a>
                <div class="h-px w-full bg-pink-100/50 mt-4 group-last:hidden">
                </div>
              </li>
            ))}
          </ul>
          <a
            href="/posts"
            class="mt-8 block text-center text-[10px] font-bold text-purple-400 hover:text-[#3a0159] uppercase tracking-widest transition-colors"
          >
            Ver todo el archivo
          </a>
        </div>
      </template>
    </>
  );
};
