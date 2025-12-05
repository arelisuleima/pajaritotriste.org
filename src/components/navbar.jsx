// components/navbar.jsx
export default function Navbar({ currentUrl }) {
  const linkBase =
    "px-4 py-2  rounded-xl font-medium transition-colors duration-200";

  const inactive =
    "bg-amber-100 text-purple-900 hover:bg-purple-900 hover:text-white";

  const active = "bg-purple-900 text-white ";

  return (
    <nav class=" items-center justify-center px-6 py-4">
      <ul class="flex gap-3">
        <li>
          <a
            href="/"
            class={`${linkBase} ${currentUrl === "/" ? active : inactive}`}
          >
            Inicio
          </a>
        </li>

        <li>
          <a
            href="/about"
            class={`${linkBase} ${
              currentUrl.startsWith("/about") ? active : inactive
            }`}
          >
            Acerca de
          </a>
        </li>

        <li>
          <a
            href="/posts"
            class={`${linkBase} ${
              currentUrl.startsWith("/posts") ? active : inactive
            }`}
          >
            Publicaciones
          </a>
        </li>

        <li>
          <a
            href="/cv"
            class={`${linkBase} ${
              currentUrl.startsWith("/cv") ? active : inactive
            }`}
          >
            Currículum
          </a>
        </li>
      </ul>
    </nav>
  );
}
