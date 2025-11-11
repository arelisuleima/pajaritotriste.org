// Tu archivo index.page.jsx completo

export const title = "Pajarito Triste"; // El título de esta página en específico
export const layout = "layout.jsx"; // Le dice a Lume que use tu layout

// 'data' contiene todo: search, site, etc.
export default (data, _helpers) => {
  // 1. Usamos data.search para buscar todas las páginas
  //    que tengan la etiqueta "posts"
  const posts = data.search.pages("tags=posts", "date=desc");

  return (
    // 2. Este <section> es lo que se inyectará en el 'children' del layout
    <section>
      <h1 class=" cv-intro text-4xl font-bold mb-6">Últimas Entradas</h1>

      {/* 3. Creamos un contenedor para todos los posts */}
      <div class="flex flex-col gap-6">
        {/* 4. Hacemos un loop (map) sobre cada post encontrado */}
        {posts.map((post) => (
          <article class="post-card p-6">
            {/* Título del Post */}
            <h2 class="text-2xl font-bold mb-2">
              <a href={post.data.url} class="post-title-link">
                {post.data.title}
              </a>
            </h2>

            {/* Descripción/Extracto del Post */}
            <p class="text-base mb-4">
              {post.data.description || "Seguir leyendo..."}
            </p>

            {/* Enlace de "Leer más" */}
            <a href={post.data.url} class="read-more-link">
              Leer más &rarr;
            </a>
          </article>
        ))}

        {/* Mensaje por si no se encuentran posts */}
        {posts.length === 0 && <p>Aún no hay publicaciones. ¡Vuelve pronto!</p>}
      </div>
    </section>
  );
};
