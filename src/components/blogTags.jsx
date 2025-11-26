import { tagUrl } from "../helpers/url.js";

/**
 * Este componente renderiza una lista de etiquetas que pertenecen a una
 * entrada de blog en específico, debe usarse únicamente dentro de los map(posts)
 * para que el arreglo de tags esté disponible.
 *
 * Ver un ejemplo de su uso en el componente src/index.page.jsx
 *
 * @param {{tags: string[]}} props - Objeto de props que contiene el array 'tags'
 * @returns {JSX.Component} - Un componente de JSX
 */
export const BlogTags = ({ tags }) => {
  console.log(`Got tags: ${tags}`);
  return (
    <>
      {tags.map((tag) => (
        <span class="mx-1">
          <a href={tagUrl(tag)}>
            {tag}
          </a>
        </span>
      ))}
    </>
  );
};
