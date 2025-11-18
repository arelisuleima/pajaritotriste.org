// components/navbar.jsx
export default function Navbar() {
  return (
    <nav class="navbar">
      <a href="/" class="w-35 ml-5 mt-5">
        <img src="/img/banner-inicio-rmv.png" />
      </a>
      <div class="navbar-container">
        <ul class="navbar-links">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca de</a>
          </li>
          <li>
            <a href="/posts">Publicaciones</a>
          </li>
          <li>
            <a href="/cv">Currículum</a>
          </li>
        </ul>
      </div>
      {/* === Barra de búsqueda (a la derecha) === */}
    </nav>
  );
}
