// index.js

import { BlogTags } from "./components/blogTags.jsx";

export const title = "Pajarito Triste";
export const layout = "layout.jsx";

/**
 * Página principal: muestra los posts más recientes
 * @param {Lume.Data} data
 */
export default (data, _helpers) => {
  // Asegúrate de que 'posts' incluya la metadata de la imagen (post.image)
  const posts = data.search.pages("type=post", "date=desc");

  return (
    <main>
      {/* SECCIÓN 1: BANNER PRINCIPAL (sin cambios) */}
      <section class=" p-4 bg-[#dfc7f8] rounded-2xl shadow-xl border border-purple-400">
        <h1 class="text-4xl  text-purple-900 mb-4 leading-tight">
          Hola
        </h1>
        <p class="text-x0 text-purple-900 mb-4">
          Este espacio nace con la intención de transformar la manera en que
          aprendemos y comprendemos el mundo de los datos. Aquí encontrarás
          explicaciones precisas y recursos visuales diseñados para que cada
          concepto sea claro, práctico y aplicable. La meta es sencilla: que
          cada visita te acerque un paso más a dominar el lenguaje de los datos.
        </p>

        <a
          href="/about"
          class="inline-block px-6 py-3 bg-[#06b2fb] text-blue-100 font-semibold rounded-lg hover:bg-blue-500 transition duration-300 shadow-md"
        >
          Conoce más sobre pajaritotriste
        </a>
      </section>

      {/* --- */}

      {/* SECCIÓN 2: ÚLTIMAS ENTRADAS */}
      <section>
        <h2 class="text-3xl text-gray-800 mt-8 mb-4">
          Últimas Entradas
        </h2>

        {/* GRID DE TARJETAS */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {posts.map((post) => (
            <article class="rounded-xl shadow-lg bg-yellow-100 border border-yellow-500 overflow-hidden transition transform hover:shadow-xl hover:-translate-y-1 duration-300">
              {/* === NUEVO: IMAGEN DESTACADA === */}
              {post.image && (
                <a href={post.url} class="block">
                  <img
                    // La URL de la imagen debe venir de los metadatos del post
                    src={post.image}
                    alt={`Imagen destacada para ${post.title}`}
                    // Tailwind para que la imagen ocupe todo el ancho y sea responsiva
                    class="mx-auto mb-0 h-45 rounded-lg "
                  />
                </a>
              )}

              {/* === CONTENIDO DE LA TARJETA === */}

              <div class="p-5">
                {/* Título */}
                <h3>
                  <a
                    href={post.url}
                    class=" font-semibold text-amber-950 hover:text-yellow-600 transition no-underline"
                  >
                    {post.title}
                  </a>
                </h3>

                {/* Descripción del post */}
                <p class="text-gray-700 mb-4 line-clamp-3">
                  {post.description || "Seguir leyendo..."}
                </p>

                {/* Fecha */}
                {post.date && (
                  <p class="text-sm text-gray-500 mb-3">
                    📅 {new Date(post.date).toLocaleDateString("es-MX", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                )}

                {/* Botón leer más */}
                <a
                  href={post.url}
                  class="inline-flex items-center text-yellow-600 font-bold hover:text-yellow-700 transition"
                >
                  Leer más...
                </a>

                <div className="container">
                  <BlogTags tags={post.tags} />
                </div>
              </div>
            </article>
          ))}

          {posts.length === 0 && (
            <p class="col-span-full text-center text-gray-500 italic p-10 bg-gray-50 rounded-lg">
              Aún no hay publicaciones. ¡Vuelve pronto!
            </p>
          )}
        </div>
      </section>
    </main>
  );
};
