import { BlogTags } from "./components/blogTags.jsx";

export const title = "Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  const allPosts = data.search.pages("type=post", "date=desc");
  const featuredPosts = allPosts.slice(0, 6);

  return (
    <>
      <div class="flex flex-col gap-10 md:gap-16">
        {/* SECCIÓN 1: BANNER PRINCIPAL - Ajustado para ser gigante en móvil */}
        <section class="relative overflow-hidden p-8 md:p-16 bg-[#E0F5E9] rounded-[2.5rem] lg:rounded-[3.5rem] border border-[#c2e9d3] shadow-sm">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl">
          </div>

          <div class="relative z-10 max-w-3xl text-center md:text-left">
            <h1 class="text-5xl md:text-7xl font-extrabold text-[#3a0159] mb-6 tracking-tighter leading-none">
              Hola<span class="text-pink-500">.</span>
            </h1>

            <p class="text-xl md:text-2xl text-[#2D5A43] mb-10 leading-relaxed font-medium">
              Bienvenido a{" "}
              <span class="text-pink-500 italic">Pajarito Triste</span>.
              Transformando la manera en que aprendemos el mundo de los datos.
              <span class="block mt-4 text-[#3a0159]/70 text-lg md:text-xl">
                Recursos visuales diseñados para que cada concepto sea claro y
                práctico.
              </span>
            </p>

            <a
              href="/about"
              class="inline-block w-full md:w-auto text-center px-10 py-5 bg-pink-300 text-[#3a0159] font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg shadow-pink-100 text-lg"
            >
              Conoce más sobre mi proyecto
            </a>
          </div>
        </section>

        {/* SECCIÓN 2: ÚLTIMAS ENTRADAS */}
        <section>
          <div class="flex items-center justify-between mb-10 px-4">
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#3a0159]">
              Últimas Entradas
            </h2>
            <div class="h-1.5 flex-1 mx-6 bg-pink-100 rounded-full hidden lg:block">
            </div>
          </div>

          {/* Grid responsivo: 1 columna en móvil, 2 en tablets/desktop */}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8">
            {featuredPosts.map((post) => (
              <article class="group bg-white rounded-[2.5rem] border border-pink-50 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                {post.image && (
                  <a
                    href={post.url}
                    class="block overflow-hidden aspect-video relative"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    </div>
                  </a>
                )}

                <div class="p-8 md:p-10 flex flex-col flex-1">
                  <span class="inline-block text-xs uppercase tracking-[0.2em] text-pink-400 font-black mb-4 italic">
                    {new Date(post.date).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>

                  <h3 class="mb-6">
                    <a
                      href={post.url}
                      class="text-2xl md:text-2xl font-extrabold text-[#3a0159] hover:text-pink-500 transition-colors no-underline leading-tight block"
                    >
                      {post.title}
                    </a>
                  </h3>

                  <div class="flex items-center justify-between mt-auto pt-6 border-t border-pink-50/50">
                    <BlogTags tags={post.tags?.slice(0, 2)} />
                    <a
                      href={post.url}
                      class="w-12 h-12 flex items-center justify-center bg-purple-50 text-purple-600 rounded-2xl group-hover:bg-[#3a0159] group-hover:text-white transition-all transform group-hover:rotate-45"
                    >
                      <span class="text-2xl font-bold">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
