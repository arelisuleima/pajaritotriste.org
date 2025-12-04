// components/navbar.jsx
export default function Navbar({ currentUrl }) {
  const linkBase =
    "px-4 py-2  rounded-xl font-medium transition-colors duration-200";

  const inactive =
    "bg-blue-100 text-[#243964] hover:bg-[#243964] hover:text-white";

  const active = "bg-[#243964] text-white ";

  return (
    <nav class="flex items-center justify-between px-6 py-4">
      <a href="/" class="w-35 ml-5 mt-5">
        <img src="/img/banner-inicio-rmv.png" />
      </a>

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
