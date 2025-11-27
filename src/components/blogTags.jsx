import { tagUrl } from "../helpers/url.js";

/**
 * Este componente renderiza una lista de etiquetas que pertenecen a una
 * entrada de blog en específico, debe usarse únicamente dentro de los map(posts)
 * para que el arreglo de tags esté disponible.
 *
 * @param {{tags: string[]}} props - Objeto de props que contiene el array 'tags'
 * @returns {JSX.Component} - Un componente de JSX
 */
export const BlogTags = ({ tags }) => {
  console.log(`Got tags: ${tags}`);
  return (
    // He agregado un contenedor para manejar el flujo y espaciado
    <div class="flex flex-wrap gap-2 mt-2">
      {/* Usar 'tags?.map' es recomendable si vuelves a tener el error */}
      {tags?.map((tag) => (
        // Mantengo tu span original, pero añado 'key' para evitar advertencias de React
        <span class="inline-block" key={tag}> 
          <a 
            href={tagUrl(tag)} 
            // 👈 CLASES AGREGADAS AQUÍ para estilo y eliminar subrayado
            class="bg-blue-100 text-blue-900 border border-[#06b2fb] no-underline rounded px-2 py-1 text-xs font-medium hover:bg-[#06b2fb] transition"
          >
            {tag}
          </a>
        </span>
      ))}
    </div>
  );
};
