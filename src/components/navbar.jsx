/** @param {{ currentUrl: string }} props */
export default function Navbar({ currentUrl }) {
  // Base para los botones
  const linkBase =
    "w-full sm:w-auto px-2 sm:px-4 md:px-5 py-2 md:py-2 rounded-2xl sm:rounded-full font-bold text-[11px] sm:text-sm tracking-normal sm:tracking-wide transition-all duration-300 flex items-center justify-center whitespace-nowrap text-center";

  // Función para determinar si una ruta está activa
  /** @param {string} path */
  const isActive = (path) => {
    if (path === "/") return currentUrl === "/";
    return currentUrl?.startsWith(path);
  };

  // Generador de clases para combinar colores activos e inactivos
  /**
   * @param {string} path
   * @param {string} hoverBgClass
   * @param {string} hoverTextClass
   * @param {string} defaultBgClass
   */
  const getLinkStyle = (
    path,
    hoverBgClass,
    hoverTextClass,
    defaultBgClass,
  ) => {
    if (isActive(path)) {
      return "bg-gradient-to-r from-purple-500 to-purple-950 text-white shadow-md shadow-purple-500/20 scale-[1.02] sm:scale-105";
    }
    return `${defaultBgClass} text-[#3a0159]/80 ${hoverBgClass} ${hoverTextClass} hover:scale-105 hover:shadow-xs`;
  };

  return (
    <nav class="fixed bottom-0 left-0 right-0 z-50 p-2 pb-safe bg-purple-200 backdrop-blur-md border-t border-purple-100/80 shadow-lg sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:z-auto sm:p-0 sm:bg-transparent sm:backdrop-blur-none sm:border-none sm:shadow-none sm:flex sm:items-center sm:justify-between sm:w-full sm:py-1">
      {/* 1. LOGO E IDENTIDAD (Oculto en móvil, visible en escritorio) */}
      <a
        href="/"
        class="hidden sm:flex items-center gap-2 group shrink-0 pr-3 border-r border-[#3a0159]/10"
        title="Pajarito Triste - Inicio"
      >
        <img
          src="/img/logo-pajarito-rmv.png"
          class="w-9 h-9 md:w-15 md:h-15 object-contain group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
          alt="Logo Pajarito Triste"
        />
        <span class="font-black text-[#3a0159] text-base tracking-tight">
          Pajarito Triste
        </span>
      </a>

      {/* 2. MENÚ DE NAVEGACIÓN (En móvil ocupa el ancho completo en la parte inferior) */}
      <ul class="grid grid-cols-4 gap-1.5 sm:flex sm:items-center sm:gap-2 md:gap-3 w-full sm:w-auto ">
        <li>
          <a
            href="/"
            class={`${linkBase} ${
              getLinkStyle(
                "/",
                "hover:bg-purple-100",
                "hover:text-purple-900",
                "bg-purple-50/80",
              )
            } border-purple-300 border `}
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="/posts"
            class={`${linkBase} ${
              getLinkStyle(
                "/posts",
                "hover:bg-blue-100",
                "hover:text-blue-900",
                "bg-blue-50/80",
              )
            } border-blue-300 border `}
          >
            Posts
          </a>
        </li>

        <li>
          <a
            href="/about"
            class={`${linkBase} ${
              getLinkStyle(
                "/about",
                "hover:bg-emerald-100",
                "hover:text-emerald-900",
                "bg-emerald-50/80",
              )
            } border-green-300 border `}
          >
            Acerca
          </a>
        </li>

        <li>
          <a
            href="/cv"
            class={`${linkBase} ${
              getLinkStyle(
                "/cv",
                "hover:bg-amber-100",
                "hover:text-amber-900",
                "bg-amber-50/80",
              )
            } border-amber-300 border `}
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
