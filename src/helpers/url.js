/**
 * @param {string} tag - El tag en minusculas, sin espacios para generar la URL del component
 * @returns {string} - La URL del tag que se le pasó al componente
 */
export const tagUrl = (tag) => {
  return `/tags/${tag.trim().toLowerCase().replace(/\s+/g, "-")}/`;
};
