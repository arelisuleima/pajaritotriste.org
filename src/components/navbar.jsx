export default function Navbar({ currentUrl }) {
  // Base del botón: ahora más redondeado (full) y con padding lateral extra
  const linkBase =
    "px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5";

  // Estilos inactivos: fondos pastel muy suaves que contrastan con el fondo rosa del body
  //const inactive = "bg-white/60 text-[#3a0159] hover:bg-white";

  // Estilo activo: El morado del pajarito
  const active = "bg-[#3a0159] text-white shadow-purple-200";

  // Función para determinar si el link está activo
  const isActive = (path) => {
    if (path === "/") return currentUrl === "/";
    return currentUrl.startsWith(path);
  };

  return (
    <nav class="flex items-center justify-center">
      <ul class="flex flex-wrap justify-center gap-3">
        <li>
          <a
            href="/"
            class={`${linkBase} ${
              isActive("/") ? active : "hover:text-purple-600 bg-purple-50"
            }`}
          >
            Inicio
          </a>
        </li>
          <li>
          <a
            href="/posts"
            class={`${linkBase} ${
              isActive("/posts") ? active : "hover:text-pink-700 bg-pink-200"
            }`}
          >
            Publicaciones
          </a>
        </li>

        <li>
          <a
            href="/about"
            class={`${linkBase} ${
              isActive("/about") ? active : "hover:text-green-700 bg-[#E0F5E9]"
            }`}
          >
            Acerca de
          </a>
        </li>


        <li>
          <a
            href="/cv"
            class={`${linkBase} ${
              isActive("/cv") ? active : "hover:text-yellow-700 bg-yellow-50"
            }`}
          >
            Currículum
          </a>
        </li>
      </ul>
    </nav>
  );
}
