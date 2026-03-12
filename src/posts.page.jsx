{/*PÁGINA DE POSTS: Se visualiza la lista de posts publicados */}
import { BlogTags } from "./components/blogTags.jsx";

export const title = "Publicaciones | Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  const posts = data.search.pages("type=post", "date=desc");

  return (
    <div class="space-y-10">
      {/* CABECERA DE LA PÁGINA */}

      <header class="relative p-10   bg-[#E0F5E9] rounded-[3rem] borderborder-[#c2e9d3]  shadow-sm overflow-hidden">
        {/* Decoración de fondo sutil */}
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl">
        </div>

        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 class="text-4xl font-extrabold text-[#3a0159] mb-2 tracking-tight">
              Publicaciones
            </h1>
            <p class="text-gray-500 font-medium">
              Explora todos los artículos, guías y reflexiones sobre el mundo de
              los datos.
            </p>
          </div>

          {/* Espacio para el buscador (Search) con estilo redondeado */}
          <div
            id="search"
            class="w-full md:w-72 bg-pink-200 rounded-full px-4 py-1 border border-pink-300"
          >
            {/* Lume Search inyectará aquí el input */}
          </div>
        </div>
      </header>

      {/* LISTA DE POSTS TIPO FEED */}
      <div class="space-y-6">
        {posts.map((post) => (
          <article class="group relative bg-white rounded-[2.5rem] p-6 md:p-8 border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
            {/* MINIATURA (Opcional si quieres mantenerlo compacto) */}
            {post.image
              ? (
                <a
                  href={post.url}
                  class="w-full md:w-48 h-32 shrink-0 overflow-hidden rounded-3xl bg-gray-100"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </a>
              )
              : (
                <div class="w-full md:w-48 h-32 shrink-0 rounded-3xl bg-[#E0F5E9] flex items-center justify-center text-3xl">
                  🐦
                </div>
              )}

            {/* CONTENIDO */}
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-3">
                {post.date && (
                  <span class="text-[10px] uppercase tracking-widest text-pink-400 font-bold">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
                <div class="h-px flex-1 bg-pink-50"></div>
              </div>

              <h2 class="text-2xl font-bold text-[#3a0159] mb-3 leading-tight group-hover:text-pink-500 transition-colors">
                <a href={post.url} class="no-underline">
                  {post.title}
                </a>
              </h2>

              <p class="text-gray-500 text-sm mb-5 line-clamp-2 leading-relaxed">
                {post.description ||
                  "Explora más sobre este tema en la publicación completa..."}
              </p>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <BlogTags tags={post.tags} />

                <a
                  href={post.url}
                  class="flex items-center gap-2 text-xs font-bold text-[#3a0159] uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Leer publicación <span class="text-lg">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}

        {posts.length === 0 && (
          <div class="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <p class="text-gray-400 font-medium">
              Aún no hay publicaciones en esta sección. 🐣
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
