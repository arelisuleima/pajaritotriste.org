import { BlogTags } from "./components/blogTags.jsx";

export const title = "Publicaciones | Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  const posts = data.search.pages("type=post", "date=desc");
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  // Paleta de degradados suaves para las tarjetas del grid
  const cardGradients = [
    "from-emerald-500/10 via-teal-500/5 to-emerald-500/15 border-emerald-200/60",
    "from-purple-500/10 via-fuchsia-500/5 to-pink-500/15 border-purple-200/60",
    "from-pink-500/10 via-rose-500/5 to-orange-500/15 border-pink-200/60",
    "from-sky-500/10 via-blue-500/5 to-indigo-500/15 border-sky-200/60",
  ];

  return (
    <div class="space-y-10 md:space-y-14 mb-16">
      {/* ========================================== */}
      {/* 1. CABECERA Y BUSCADOR MODERNO            */}
      {/* ========================================== */}
      <header class="relative p-6 sm:p-8 md:p-12 bg-white rounded-4xl md:rounded-[3rem] border border-purple-100/80 shadow-xs overflow-hidden">
        {/* Decoraciones sutiles de fondo */}

        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-200/60 rounded-full blur-3xl pointer-events-none">
        </div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 bg-blue-200 text-[#3a0159] text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
              <span>📚</span> Bitácora & Recursos
            </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-black text-[#3a0159] tracking-tight">
              Publicaciones
            </h1>
            <p class="text-[#3a0159]/70 font-medium text-sm sm:text-base mt-2 leading-relaxed">
              Explora artículos, guías visuales y reflexiones sobre bases de
              datos, optimización y desarrollo de software.
            </p>
          </div>

          {/* Buscador estético (Lume Search inyectará aquí su input) */}

          {
            /*
          <div
            id="search"
            class="w-full md:w-80 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 border border-purple-200/80 shadow-xs text-sm font-medium focus-within:border-pink-400 focus-within:ring-2 focus-within:ring-pink-100 transition-all"
          >

          </div>

          */
          }
        </div>
      </header>

      {/* ========================================== */}
      {/* 2. PUBLICACIÓN DESTACADA (ÚLTIMO POST)    */}
      {/* ========================================== */}
      {featuredPost && (
        <section class="relative">
          <div class="flex items-center gap-2.5 mb-4 px-2">
            <span class="text-xl">⭐</span>
            <h2 class="text-sm font-black uppercase tracking-widest text-purple-900/60 text-shadow-xs">
              Última Publicación
            </h2>
          </div>

          <article class="group relative bg-linear-to-br from-yellow-500/10 via-orange-500/5 to-orange-500/15 bg-white/90 backdrop-blur-md rounded-4xl md:rounded-[3rem] p-6 sm:p-8 md:p-10 border border-yellow-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center overflow-hidden">
            {/* Miniatura Destacada */}
            <a
              href={featuredPost.url}
              class="w-full lg:w-1/2 h-60 sm:h-72 shrink-0 overflow-hidden rounded-2xl md:rounded-3xl bg-purple-50 border border-white/80 shadow-inner relative group"
            >
              {featuredPost.image
                ? (
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )
                : (
                  <div class="w-full h-full flex flex-col items-center justify-center bg-linear-to-br from-purple-100 to-pink-100 text-purple-900/40">
                    <span class="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      🐦
                    </span>
                    <span class="text-xs font-black uppercase tracking-wider">
                      Pajarito Triste
                    </span>
                  </div>
                )}
            </a>

            {/* Contenido Destacado */}
            <div class="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-4">
                  {featuredPost.date && (
                    <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#3a0159]/80 border border-purple-100 shadow-2xs">
                      📅{" "}
                      {new Date(featuredPost.date).toLocaleDateString("es-MX", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  )}
                  <span class="bg-pink-100 text-pink-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                    Destacado
                  </span>
                </div>

                <h2 class="text-2xl sm:text-3xl font-black text-[#3a0159] mb-4 leading-snug group-hover:text-pink-600 transition-colors">
                  <a href={featuredPost.url} class="no-underline">
                    {featuredPost.title}
                  </a>
                </h2>

                <p class="text-[#3a0159]/75 text-sm sm:text-base font-medium mb-6 line-clamp-3 leading-relaxed">
                  {featuredPost.description ||
                    "Explora los detalles completos de este tema en la publicación principal..."}
                </p>
              </div>

              <div class="pt-4 border-t border-[#3a0159]/10 flex flex-wrap items-center justify-between gap-4">
                <BlogTags tags={featuredPost.tags} />

                <a
                  href={featuredPost.url}
                  class="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3a0159] text-white text-xs font-black rounded-full hover:bg-pink-600 transition-all shadow-xs group-hover:translate-x-1"
                >
                  Leer artículo <span>→</span>
                </a>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ========================================== */}
      {/* 3. GRID DE ARTÍCULOS EN 3 COLUMNAS (DESKTOP) */}
      {/* ========================================== */}
      {remainingPosts.length > 0 && (
        <section class="space-y-6">
          <div class="flex items-center gap-2.5 px-2">
            <span class="text-xl">🗂️</span>
            <h2 class="text-sm font-black uppercase tracking-widest text-purple-900/60 text-shadow-xs">
              Todas las Entradas
            </h2>
          </div>

          {/* Grid de 1 columna en móvil, 2 en tablets (md) y 3 en escritorio (lg) */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {remainingPosts.map((post, index) => {
              const gradientClass = cardGradients[index % cardGradients.length];

              return (
                <article
                  class={`group relative bg-linear-to-br ${gradientClass} bg-white/80 backdrop-blur-md rounded-4xl p-5 sm:p-6 border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
                >
                  <div>
                    {/* Imagen / Placeholder */}
                    <a
                      href={post.url}
                      class="block w-full h-40 overflow-hidden rounded-2xl bg-white/90 border border-white/80 mb-4 relative group"
                    >
                      {post.image
                        ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        )
                        : (
                          <div class="w-full h-full flex items-center justify-center bg-purple-50/50 text-3xl text-purple-300">
                            🐦
                          </div>
                        )}
                    </a>

                    {/* Meta & Fecha */}
                    <div class="flex items-center justify-between mb-2.5">
                      {post.date && (
                        <span class="text-xs font-bold text-[#3a0159]/60">
                          {new Date(post.date).toLocaleDateString("es-MX", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>

                    {/* Título */}
                    <h3 class="text-lg font-bold text-[#3a0159] mb-2.5 leading-snug group-hover:text-pink-600 transition-colors line-clamp-2">
                      <a href={post.url} class="no-underline">
                        {post.title}
                      </a>
                    </h3>

                    {/* Descripción Corta */}
                    <p class="text-[#3a0159]/70 text-xs sm:text-sm font-medium mb-5 line-clamp-2 leading-relaxed">
                      {post.description ||
                        "Haz clic para leer el contenido completo de esta publicación..."}
                    </p>
                  </div>

                  {/* Footer de Tarjeta */}
                  <div class="pt-3.5 border-t border-[#3a0159]/10 flex items-center justify-between mt-auto">
                    <div class="flex flex-wrap gap-1">
                      <BlogTags tags={post.tags?.slice(0, 2)} />
                    </div>

                    <a
                      href={post.url}
                      class="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#3a0159] shadow-2xs border border-purple-100 flex items-center justify-center font-bold text-xs sm:text-sm group-hover:bg-pink-500 group-hover:text-white group-hover:border-pink-500 transition-all group-hover:translate-x-1 shrink-0"
                    >
                      →
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* ESTADO VACÍO (Si no hay publicaciones) */}
      {posts.length === 0 && (
        <div class="text-center py-20 bg-white/80 rounded-[3rem] border border-dashed border-purple-200 p-8">
          <div class="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            🐣
          </div>
          <h3 class="text-xl font-bold text-[#3a0159] mb-1">
            Aún no hay publicaciones
          </h3>
          <p class="text-[#3a0159]/60 text-sm font-medium">
            Pronto habrá nuevo contenido sobre bases de datos y software por
            aquí.
          </p>
        </div>
      )}
    </div>
  );
};
