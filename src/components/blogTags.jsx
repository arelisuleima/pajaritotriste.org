import { tagUrl } from "../helpers/url.js";

/**
 * @typedef {object} ListProps
 * @property {string[] | string | undefined} tags - Etiquetas a mostrar.
 */

/**
 * Renderiza etiquetas con estilo "Capsule" para el ecosistema Pajarito Triste.
 * @param {ListProps} props
 * @returns {JSX.Component | null}
 */
export const BlogTags = ({ tags }) => {
    const list = Array.isArray(tags) ? tags : tags ? [tags] : [];

    if (list.length === 0) return null;

    return (
        <div class="flex flex-wrap gap-2">
            {list.map((tag) => (
                <span class="inline-block" key={tag}>
                    <a
                        href={tagUrl(tag)}
                        class="
              inline-flex items-center
              bg-pink-50 text-[#3a0159] 
              border border-pink-100 
              no-underline 
              rounded-full 
              px-3 py-1 
              text-[10px] font-bold uppercase tracking-wider
              hover:bg-[#3a0159] hover:text-white hover:border-[#3a0159]
              transition-all duration-300
              shadow-sm
            "
                    >
                        <span class="opacity-50 mr-1">#</span>
                        {tag}
                    </a>
                </span>
            ))}
        </div>
    );
};
