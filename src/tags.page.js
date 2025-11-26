import { tagUrl } from "./helpers/url.js";

export const layout = "layout.jsx";

/**
 * @param {Lume.Data} search - Los datos de búsqueda de la función de lume
 */
export default function* ({ search }) {
  const allBlogTags = search.values("tags", "type=post");

  for (const tag of allBlogTags) {
    /** @type {Data[]} */
    const blogWithTag = search.pages(
      tag,
      "date=desc",
    );

    if (blogWithTag.length === 0) {
      continue;
    }

    yield {
      url: tagUrl(tag),
      title: `Entradas con la etiqueta: ${tag}`,
      tag: tag,
      posts: blogWithTag,
      content: `
            <h1>Entradas etiquetadas con: ${tag}</h1>
           <ul>
${
        blogWithTag.map((post) => {
          return `
                <li>
                <a href="${post.url}">${post.title}</a>
                </li>
                `;
        }).join("")
      }
</ul> 
            `,
    };
  }
}
