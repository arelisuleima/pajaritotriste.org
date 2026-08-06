export default function Navbar({ currentUrl }) {
  // Base para los botones: en móvil se expanden al ancho de su columna y reducen relleno
  const linkBase =
    "w-full sm:w-auto px-1 sm:px-4 md:px-5 py-1.5 md:py-2 rounded-full font-bold text-[11px] sm:text-sm tracking-normal sm:tracking-wide transition-all duration-300 flex items-center justify-center whitespace-nowrap text-center";

  // Función para determinar si una ruta está activa
  const isActive = (path) => {
    if (path === "/") return currentUrl === "/";
    return currentUrl?.startsWith(path);
  };

  // Generador de clases para combinar colores activos e inactivos
  const getLinkStyle = (path, hoverBgClass, hoverTextClass, defaultBgClass) => {
    if (isActive(path)) {
      return "bg-gradient-to-r from-purple-400 to-purple-950 text-white shadow-md shadow-purple-500/25 scale-[1.02] sm:scale-105";
    }
    return `${defaultBgClass} text-[#3a0159]/80 ${hoverBgClass} ${hoverTextClass} hover:scale-105 hover:shadow-xs`;
  };

  return (
    <nav class="flex items-center justify-between w-full py-1">
      {/* 1. LOGO E IDENTIDAD (Oculto en móvil, visible de tablet en adelante) */}
      <a
        href="/"
        class="hidden sm:flex items-center gap-2 group shrink-0 pr-3 border-r border-[#3a0159]/10"
        title="Pajarito Triste - Inicio"
      >
        <img
          src="/img/pt-logo-1.png"
          class="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
          alt="Logo Pajarito Triste"
        />
        <span class="font-black text-[#3a0159] text-base tracking-tight">
          Pajarito Triste
        </span>
      </a>

      {/* 2. MENÚ DE NAVEGACIÓN (En móvil usa 4 columnas exactas al 100% de ancho) */}
      <ul class="grid grid-cols-4 sm:flex items-center gap-1 sm:gap-2 md:gap-3 w-full sm:w-auto">
        <li>
          <a
            href="/"
            class={`${linkBase} ${getLinkStyle(
              "/",
              "hover:bg-purple-100",
              "hover:text-purple-900",
              "bg-purple-50/80"
            )}`}
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="/posts"
            class={`${linkBase} ${getLinkStyle(
              "/posts",
              "hover:bg-pink-100",
              "hover:text-pink-900",
              "bg-pink-50/80"
            )}`}
          >
            Publicaciones
          </a>
        </li>

        <li>
          <a
            href="/about"
            class={`${linkBase} ${getLinkStyle(
              "/about",
              "hover:bg-emerald-100",
              "hover:text-emerald-900",
              "bg-emerald-50/80"
            )}`}
          >
            Acerca de
          </a>
        </li>

        <li>
          <a
            href="/cv"
            class={`${linkBase} ${getLinkStyle(
              "/cv",
              "hover:bg-amber-100",
              "hover:text-amber-900",
              "bg-amber-50/80"
            )}`}
          >
            Currículum
          </a>
        </li>
      </ul>
    </nav>
  );
}