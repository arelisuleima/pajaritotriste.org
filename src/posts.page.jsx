export const title = "Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  const posts = data.search.pages("type=post", "date=desc");

  return (
     <section class="p-6 bg-[#dfc7f8] rounded-2xl shadow-xl border border-purple-400">
     <h1 class="text-2xl sm:text-4xl font-bold text-purple-900 mb-6">
          Publicaciones
        </h1>

      {/* LISTA DE POSTS */}
      <ul class="space-y-6">
        {posts.map((post) => (
          <li class="border-b border-purple-500 pb-6">
            {/* Título del post */}
            <h2 class="text-2xl font-semibold mb-2">
              <a href={post.url} class="hover:underline text-blue-700">
                {post.title}
              </a>
            </h2>

            {/* Descripción */}
            <p class="text-gray-700 mb-3">
              {post.description || "Seguir leyendo..."}
            </p>

            {/* Fecha */}
            {post.date && (
              <p class="text-sm text-gray-500 mb-3">
                📅{" "}
                {new Date(post.date).toLocaleDateString("es-MX", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}

            {/* Leer más */}
            <a
              href={post.url}
              class="text-blue-600 font-semibold hover:underline"
            >
              Leer más →
            </a>
          </li>
        ))}

        {posts.length === 0 && <p>No hay publicaciones todavía.</p>}
      </ul>
    </section>
  );
};
