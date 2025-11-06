// components/navbar.jsx
export default function Navbar() {
  return (
    <nav class="navbar">
      <a href="/" class="navbar-logo">
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
            <a href="/proyectos">Proyectos</a>
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
