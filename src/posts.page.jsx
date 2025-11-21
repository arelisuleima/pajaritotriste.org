export const title = "Pajarito Triste";
export const layout = "layout.jsx";

/**
 * Página principal: muestra los posts más recientes
 * @param {Lume.Data} data
 */
export default (data, _helpers) => {
  const posts = data.search.pages("type=post", "date=desc");

  return (
    <section>
      

      {/* GRID DE TARJETAS */}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {posts.map((post) => (
          <article class="p-6 rounded-xl shadow-md bg-yellow-200 border border-gray-200 transition hover:shadow-lg">
            
            {/* Título */}
            <h2 class="text-xl font-bold mb-2">
              <a href={post.url} class="hover:underline">
                {post.title}
              </a>
            </h2>

            {/* Descripción del post */}
            <p class="text-gray-700 mb-4">
              {post.description || "Seguir leyendo..."}
            </p>

            {/* Fecha si existe */}
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
              class="text-blue-600 font-semibold hover:underline"
            >
              Leer más →
            </a>
          </article>
        ))}

        {posts.length === 0 && (
          <p>Aún no hay publicaciones. ¡Vuelve pronto!</p>
        )}
      </div>
    </section>
  );
};
