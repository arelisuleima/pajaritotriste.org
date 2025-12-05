export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  return (
    <main class="max-w-3xl mx-auto p-6 text-[#3f0058]">
      {/* === INTRO PERSONAL === */}
      <section class="bg-[#dfc7f8] p-6 rounded-2xl shadow-xl border border-purple-400 mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
          {title}
        </h1>

        <div class="flex flex-col">
          <div class="relative">
            {/* GIF A LA DERECHA */}
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXo4ZzNuYzlrNDczcHB5NGh6djBzd25xN2RoNGV4dmVnMzB1czR6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LvlaXOfUxg9mPNGNBK/giphy.gif"
              alt="Areli GIF"
              class="w-1/3 float-right ml-4 rounded-lg"
            />

            <p class="mb-3">
              ¡Hola! Soy <strong>Areli Suleima</strong>
            </p>

            <p class="mb-4">
              Soy una <strong>desarrolladora</strong> especializada en{" "}
              <strong>
                SQL, Oracle Technologies, PeopleSoft y automatización
              </strong>. Me encanta optimizar procesos, crear soluciones basadas
              en datos y desarrollar herramientas funcionales que realmente
              ayuden a las personas.
            </p>

            <p class="font-semibold mb-1">Actualmente trabajo en:</p>

            <ul class="list-disc pl-6 space-y-1 mb-4">
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
      <section class="bg-amber-100 p-4 text-center rounded-xl mb-10  ">
        <h2 class="text-2xl font-bold text-purple-900 mb-1">Currículum</h2>

        <p class="text-[15px] text-purple-900">
          Puedes ver o descargar mi currículum actualizado haciendo clic en el
          siguiente botón:
        </p>

        <a
          href="/areli-arias-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block mt-4 px-5 py-2 bg-purple-900 text-white rounded-lg font-medium hover:bg-[#06b2fb] transition-colors"
        >
          📄 Ver CV en PDF
        </a>
      </section>
    </main>
  );
}
