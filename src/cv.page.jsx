export const layout = "layout.jsx";
export const title = "Sobre mi 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  return (
    <main class="cv-section">
      <h1 class="cv-title font-bold">{title}</h1>

      <section class="cv-intro">
        <p>
          ¡Hola! Soy <strong>Areli Arias</strong>, desarrolladora con experiencia en 
          <strong> Oracle, PeopleSoft, SQL y desarrollo web</strong>. 
          Me apasiona crear soluciones eficientes, automatizar procesos 
          y aprender constantemente sobre nuevas tecnologías.
        </p>
      </section>

      <section class="cv-download">
        <h2>Descarga mi CV</h2>
        <p>
          Puedes ver o descargar mi currículum actualizado haciendo clic en el siguiente enlace:
        </p>
        <a 
          href="/areli-arias-cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          class="cv-button"
        >
          📄 Ver CV en PDF
        </a>
      </section>

    </main>
  );
}
