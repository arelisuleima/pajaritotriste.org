export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  return (
    <main class="max-w-none p-4">
      <section class="p-6 bg-[#dfc7f8] rounded-2xl shadow-xl border border-purple-400">

        {/* === TÍTULO PRINCIPAL === */}
        <h1 class="text-3xl sm:text-5xl font-bold text-purple-900 mb-6">
          Acerca de 
        </h1>

        {/* === INTRO COMO README === */}
        <p class="mb-4 leading-relaxed">
          <span class="font-semibold">Pajarito Triste</span> es un proyecto
          creado con la intención de acercar a más personas al mundo de los datos,
          la tecnología y el desarrollo de software. A través de publicaciones,
          guías, reflexiones y ejemplos prácticos, busco explicar cómo funcionan
          los datos en el entorno digital de forma clara, accesible y sin
          tecnicismos innecesarios.
        </p>

        <p class="mb-4 leading-relaxed">
          Mi propósito es demostrar que aprender sobre tecnología no tiene que
          ser complicado. Entender bases de datos, programación o infraestructura
          puede ser parte de la vida diaria, y este sitio existe para acompañar
          ese aprendizaje, compartir mi experiencia profesional y documentar mi
          propio camino como desarrolladora.
        </p>

    

        {/* === TECNOLOGÍAS UTILIZADAS === */}
        <h2 class="text-2xl font-bold text-purple-800 mt-10">
          Tecnologías utilizadas
        </h2>
        <p class="mb-2">
          Este sitio está construido con un stack moderno y minimalista, pensado
          para ser rápido, mantenible y completamente abierto:
        </p>
        <div class="flex flex-wrap gap-3">
    <img src="https://img.shields.io/badge/Lume-0A84FF?style=for-the-badge&logo=lightning&logoColor=white" alt="Lume" />
    <img src="https://img.shields.io/badge/Deno-000000?style=for-the-badge&logo=deno&logoColor=white" alt="Deno" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    
  </div>

        <ul class=" pl-6 space-y-1">
          <li>
            <span class="font-semibold">Lume</span> – generador de sitio
            estático enfocado en simplicidad.
          </li>
          <li>
            <span class="font-semibold">Deno</span> – runtime seguro, moderno y
            con soporte nativo para TypeScript.
          </li>
          <li>
            <span class="font-semibold">JavaScript</span> – lógica general del
            sitio y componentes.
          </li>
          <li>
            <span class="font-semibold">Tailwind CSS</span> – framework para el
            estilo visual, sin necesidad de CSS adicional.
          </li>
          
        </ul>
        

        {/* === LICENCIA === */}
        <h2 class="text-2xl font-bold text-purple-800 mt-10">
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
            Cualquier mejora o versión modificada debe compartirse también con la
            comunidad.
          </li>
          <li>
            Los usuarios tienen derecho a estudiar, modificar y redistribuir el
            proyecto.
          </li>
        </ul>

        <p class="mt-6 leading-relaxed">
          Gracias por visitar este espacio. Espero que encuentres contenido útil,
          interesante o que te inspire a seguir aprendiendo más sobre tecnología.
        </p>

        {/* === CONTACTO === */}
        <footer class="mt-10 text-center flex flex-col items-center gap-4">
          <h3 class="text-lg font-semibold text-purple-800">
            Conecta conmigo
          </h3>

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

          <p class="text-sm text-blue-400 mt-4">
            © 2025 Pajarito Triste.
          </p>
        </footer>
      </section>
    </main>
  );
}

