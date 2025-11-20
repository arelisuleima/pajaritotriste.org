// Tu archivo index.page.jsx completo

export const title = "Pajarito Triste"; // El título de esta página en específico
export const layout = "layout.jsx"; // Le dice a Lume que use tu layout

/**
 * El cuerpo de la página principal, aquí se obtienen todos los datos
 * primero.
 * 
 * @param {Lume.Data} data - Los datos del sitio.
 */
export default (data, _helpers) => {

  /** @type {import("lume/core/file.ts").Data[]} */
  const posts = data.search.pages("type=post", "date=desc");

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
              <a href={post.url} class="post-title-link">
                {post.title}
              </a>
            </h2>

            {/* Descripción/Extracto del Post */}
            <p class="text-base mb-4">
              {post.description || "Seguir leyendo..."}
            </p>

            {/* Enlace de "Leer más" */}
            <a href={post.url} class="read-more-link">
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
