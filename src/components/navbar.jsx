export default function Navbar({ currentUrl }) {
  // Base para todos los botones de la barra
  const linkBase =
    "px-4 md:px-5 py-2 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center shrink-0";

  // Función para determinar si una ruta está activa
  const isActive = (path) => {
    if (path === "/") return currentUrl === "/";
    return currentUrl?.startsWith(path);
  };

  // Generador de clases para combinar colores activos e inactivos
  const getLinkStyle = (path, hoverBgClass, hoverTextClass, defaultBgClass) => {
    if (isActive(path)) {
      return "bg-gradient-to-r from-purple-400 to-purple-950 text-white shadow-md shadow-purple-500/25 scale-105";
    }
    return `${defaultBgClass} text-[#3a0159]/80 ${hoverBgClass} ${hoverTextClass} hover:scale-105 hover:shadow-xs`;
  };

  return (
    <nav class="flex items-center justify-between w-full gap-2 md:gap-6">
      {/* 1. LOGO E IDENTIDAD (Lado izquierdo) */}
      <a
        href="/"
        class="flex items-center gap-2.5 group shrink-0 pr-3 border-r border-[#3a0159]/10"
        title="Pajarito Triste - Inicio"
      >
        <img
          src="/img/pt-logo-1.png"
          class="w-9 h-9 md:w-10 md:h-10 object-contain group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
          alt="Logo Pajarito Triste"
        />
        <span class="hidden sm:inline-block font-black text-[#3a0159] text-base tracking-tight">
          Pajarito Triste</span>
        
      </a>

      {/* 2. MENÚ DE NAVEGACIÓN (Lado derecho) */}
      <ul class="flex items-center gap-1.5 md:gap-3 overflow-x-auto py-1 no-scrollbar">
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