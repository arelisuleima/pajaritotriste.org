import { tagUrl } from "./helpers/url.js";

export const layout = "layout.jsx";

/**
 * @param {Lume.Data} search - Los datos de búsqueda de la función de lume
 */
export default function* ({ search }) {
  // Obtenemos todos los tags únicos de los posts
  const allBlogTags = search.values("tags", "type=post");

  for (const tag of allBlogTags) {
    const blogWithTag = search.pages(
      `type=post "${tag}"`, // Filtramos específicamente posts con ese tag
      "date=desc",
    );

    if (blogWithTag.length === 0) {
      continue;
    }

    yield {
      url: tagUrl(tag),
      title: `Explorando: #${tag}`,
      tag: tag,
      posts: blogWithTag,
      content: `
        <div class="max-w-4xl mx-auto py-10">
          <header class="mb-12 text-center">
            <span class="inline-block px-4 py-1 bg-white text-pink-500 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-pink-100 shadow-sm">
              Categoría
            </span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-[#3a0159] mb-4 italic">
              #${tag}
            </h1>
            <p class="text-gray-500 font-medium">
              Descubre todas las publicaciones relacionadas con este tema.
            </p>
          </header>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${blogWithTag.map((post) => `
              <article class="group bg-white rounded-[2.5rem] p-6 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                ${post.image ? `
                  <div class="rounded-[1.8rem] overflow-hidden mb-5 aspect-video border-4 border-pink-50/30">
                    <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                ` : ''}
                
                <div class="px-2">
                  <div class="flex items-center gap-3 mb-3">
                    <span class="text-[10px] font-bold text-pink-400 uppercase tracking-widest italic">
                      ${new Date(post.date).toLocaleDateString('es-MX', { month: 'short', year: 'numeric' })}
                    </span>
                    <span class="w-1.5 h-1.5 rounded-full bg-pink-100"></span>
                    <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      ${post.readingInfo?.minutes || 5} MIN
                    </span>
                  </div>

                  <h2 class="text-xl font-extrabold text-[#3a0159] leading-tight mb-4 group-hover:text-pink-500 transition-colors">
                    <a href="${post.url}">${post.title}</a>
                  </h2>

                  <a href="${post.url}" class="inline-flex items-center text-xs font-bold text-[#3a0159] opacity-40 group-hover:opacity-100 group-hover:text-pink-500 transition-all uppercase tracking-widest">
                    Leer más <span class="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            `).join("")}
          </div>

          <div class="mt-20 text-center">
            <a href="/" class="px-8 py-4 bg-white border border-pink-100 text-[#3a0159] font-bold rounded-full hover:bg-pink-50 transition-all shadow-sm">
              ← Volver al inicio
            </a>
          </div>
        </div>
      `,
    };
  }
}