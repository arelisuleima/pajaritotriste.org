{/*PÁGINA ABOUT: Descripción acerca del sitio y proposito del blog */}
export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  return (
    <main class="max-w-none p-4">
      <section class="p-6 bg-[#dfc7f8] rounded-2xl shadow-xl border border-purple-400 mb-8">
        <h1 class="text-3xl sm:text-5xl font-bold text-purple-900 mb-6">
          Acerca de
        </h1>

        <p class="mb-4 leading-relaxed">
          <span class="font-semibold">Pajarito Triste</span>{" "}
          es un proyecto creado con la intención de acercar a más personas al
          mundo de los datos, la tecnología y el desarrollo de software. A
          través de publicaciones, guías, reflexiones y ejemplos prácticos, se
          busca explicar cómo funcionan los datos en el entorno digital de forma
          clara y accesible.
        </p>

        <p class="mb-4 leading-relaxed">
          Mi propósito es demostrar que aprender sobre tecnología no tiene que
          ser complicado. Entender bases de datos, programación o
          infraestructura puede ser parte de la vida diaria, y este sitio existe
          para acompañar ese aprendizaje, compartir mi experiencia profesional y
          documentar mi propio camino como desarrolladora.
        </p>

        {/* === TECNOLOGÍAS UTILIZADAS === */}
        <h2 class="text-2xl font-bold text-purple-900 mt-10">
          Tecnologías utilizadas
        </h2>

        <p class="mb-2">
          Este sitio está construido con un stack moderno y minimalista, pensado
          para ser rápido, mantenible y completamente abierto:
        </p>

        <section class="mt-6">
          <div class="overflow-x-auto">
            <table class="min-w-full border border-blue-500 text-left text-gray-900">
              <thead class="bg-[#a5d8ff]">
                <tr>
                  <th class="px-4 py-2 font-semibold">Tecnología</th>
                  <th class="px-4 py-2 font-semibold">Descripción</th>
                  <th class="px-4 py-2 font-semibold">Licencia</th>
                </tr>
              </thead>

              <tbody class="bg-blue-100 divide-y divide-blue-300">
                {/* Lume */}
                <tr>
                  <td class="px-4 py-3">
                    <img
                      src="https://img.shields.io/badge/Lume-0A84FF?style=flat-square&logo=lightning&logoColor=white"
                      alt="Lume"
                      class="h-7"
                    />
                  </td>
                  <td class="px-4 py-3">
                    Generador de sitio estático rápido y minimalista basado en
                    Deno.
                  </td>
                  <td class="px-4 py-3">MIT</td>
                </tr>

                {/* Deno */}
                <tr>
                  <td class="px-4 py-3">
                    <img
                      src="https://img.shields.io/badge/Deno-000000?style=flat-square&logo=deno&logoColor=white"
                      alt="Deno"
                      class="h-7"
                    />
                  </td>
                  <td class="px-4 py-3">
                    Runtime moderno y seguro con soporte nativo para TypeScript.
                  </td>
                  <td class="px-4 py-3">MIT</td>
                </tr>

                {/* JavaScript */}
                <tr>
                  <td class="px-4 py-3">
                    <img
                      src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"
                      alt="JavaScript"
                      class="h-7"
                    />
                  </td>
                  <td class="px-4 py-3">
                    Lenguaje principal para la lógica y la composición de
                    componentes.
                  </td>
                  <td class="px-4 py-3">ECMA-262 (Estándar abierto)</td>
                </tr>

                {/* Tailwind CSS */}
                <tr>
                  <td class="px-4 py-3">
                    <img
                      src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white"
                      alt="Tailwind CSS"
                      class="h-7"
                    />
                  </td>
                  <td class="px-4 py-3">
                    Framework utility-first para dar estilo sin archivos CSS
                    personalizados.
                  </td>
                  <td class="px-4 py-3">MIT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* === LICENCIA === */}
        <h2 class="text-2xl font-bold text-purple-900 mt-10">
          Licencia del proyecto
        </h2>

        <p>
          Este sitio se distribuye bajo la{" "}
          <span class="font-semibold">AGPL-3.0 License</span>. Esto garantiza
          que:
        </p>

        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>El código fuente se mantiene abierto.</li>
          <li>
            Cualquier mejora o versión modificada debe compartirse también con
            la comunidad.
          </li>
          <li>
            Los usuarios tienen derecho a estudiar, modificar y redistribuir el
            proyecto.
          </li>
        </ul>
      </section>
      <section class="bg-amber-100 p-4 text-center rounded-xl mb-10">
        {/* === CONTACTO === */}
        <footer class="mt-1 text-center flex flex-col items-center ">
          <h3 class=" font-semibold text-purple-900">
            Conecta conmigo
          </h3>
          <p>
            Gracias por visitar este espacio. Espero que encuentres contenido
            útil, interesante o que te inspire a seguir aprendiendo más.
          </p>

          <img
            src="/img/pajarito-compu-rmv.png"
            width="150"
            height="100"
            alt="Pajarito frente a la computadora"
            class="rounded-lg"
          />

          <a
            href="mailto:contacto@pajaritotriste.org"
            class="mt-1 text-blue-500 font-medium hover:text-blue-400 transition"
          >
            contacto@pajaritotriste.org
          </a>
        </footer>
      </section>
    </main>
  );
}
