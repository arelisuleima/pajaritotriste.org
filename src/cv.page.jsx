export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  return (
    <main class="cv-container">
      {/* === INTRO PERSONAL === */}
      <section class="p-6 bg-[#dfc7f8] rounded-2xl shadow-xl border border-purple-400">
        <h1 class="text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
          {title}
        </h1>

        <div class="cv-header">
          <div class="cv-text">
            <p>
              ¡Hola! Soy <strong>Areli Suleima</strong>
            </p>

            <p>
              Soy una <strong>desarrolladora</strong> especializada en{" "}
              <strong>
                SQL, Oracle Technologies, PeopleSoft y automatización
              </strong>. Me encanta optimizar procesos, crear soluciones basadas
              en datos y desarrollar herramientas funcionales que realmente
              ayuden a las personas.
            </p>
            {/* GIF A LA DERECHA */}
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXo4ZzNuYzlrNDczcHB5NGh6djBzd25xN2RoNGV4dmVnMzB1czR6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LvlaXOfUxg9mPNGNBK/giphy.gif"
              style="float: right; width: 30%; margin-left: 15px;"
            />
            <p>
              Actualmente trabajo en:
            </p>
            <ul class="cv-list">
              <li>
                🐦 <strong>Pajarito Triste</strong>{" "}
                — mi blog sobre SQL, bases de datos y tecnología.
              </li>
              <li>
                📝 <strong>Pensadero</strong>{" "}
                — widget de notas para Linux hecho con <code>Python</code> +
                {" "}
                <code>EWW</code>.
              </li>
            </ul>

            <p>
              Siempre estoy aprendiendo, experimentando y construyendo software
              escalable, claro y eficiente.
            </p>
          </div>
        </div>
      </section>

      {/* === CV PDF === */}
      <section>
        <h2 class=" text-purple-900">Currículum</h2>

        <p>
          Puedes ver o descargar mi currículum actualizado haciendo clic en el
          siguiente botón:
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
