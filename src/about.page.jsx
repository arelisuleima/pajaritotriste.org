/* PÁGINA ABOUT: Descripción acerca del sitio y propósito del blog */
export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  const techs = [
    {
      name: "Lume",
      desc: "Generador estático ultrarrápido basado en Deno.",
      icon: "⚡",
      iconBg: "bg-emerald-100 text-emerald-900",
    },
    {
      name: "Deno",
      desc: "Runtime moderno y seguro con soporte TypeScript.",
      icon: "🦕",
      iconBg: "bg-purple-100 text-purple-900",
    },
    {
      name: "Tailwind CSS",
      desc: "Framework para interfaces responsivas y limpias.",
      icon: "🎨",
      iconBg: "bg-amber-100 text-amber-900",
    },
  ];

  return (
    <div class="space-y-10 md:space-y-14 mb-16">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-purple-100/80 shadow-sm">
        {/* Círculos decorativos de fondo suave */}
        <div class="absolute -top-12 -right-12 w-48 h-48 bg-pink-50 rounded-full blur-2xl pointer-events-none opacity-70">
        </div>

        <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-purple-100/60 rounded-full blur-3xl pointer-events-none">
        </div>

        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* LADO IZQUIERDO: TEXTO */}
          <div class="flex-1">
            <span class="inline-block bg-purple-100 text-[#3a0159] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Sobre el proyecto
            </span>

            <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#3a0159] mb-8 tracking-tight">
              Acerca de{" "}
              <span class="text-transparent bg-clip-text bg-linear-to-r from-[#e9aadd] via-[#be81dd] to-purple-950">
                Pajarito Triste.
              </span>
            </h1>

            <div class="space-y-6 text-[#3a0159]/80 leading-relaxed text-lg md:text-xl font-medium">
              <p>
                <strong class="font-black text-[#3a0159]">
                  Pajarito Triste
                </strong>{" "}
                es un rincón digital diseñado para humanizar el mundo de los
                datos. Mi misión es romper la barrera de que la tecnología es
                "difícil" y transformarla en algo visual, claro y, sobre todo,
                fácil de aplicar.
              </p>
              <p>
                Como{" "}
                <span class="bg-[#e9aadd] text-[#944886] px-2 py-0.5 rounded-md font-bold">
                  desarrolladora
                </span>
                , creo que las bases de datos no son solo conjuntos de tablas e
                índices, sino lenguajes que nos permiten estructurar y entender
                mejor nuestra realidad. Aquí comparto mi camino, guías prácticas
                y todo lo que voy aprendiendo.
              </p>
            </div>
          </div>

          {/* LADO DERECHO: IMAGEN */}
          <div class="shrink-0 flex items-center justify-center">
            <div class="relative md:w-90 p-4 flex items-center justify-center">
              <img
                src="/img/pajarito-compu-rmv.png"
                alt="Pajarito frente a la computadora"
                class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: STACK TECNOLÓGICO */}
      <section class="px-2">
        <div class="flex items-center gap-3 mb-8">
          <span class="text-2xl">🛠️</span>
          <h2 class="text-3xl md:text-4xl font-black text-[#3a0159] tracking-tight">
            Stack Tecnológico
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techs.map((tech) => (
            <div key={tech.name} class="flex items-start gap-4 group">
              <div
                class={`w-12 h-12 shrink-0 rounded-2xl ${tech.iconBg} flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
              >
                {tech.icon}
              </div>
              <div>
                <h3 class="text-xl font-extrabold text-[#3a0159] mb-1 tracking-tight">
                  {tech.name}
                </h3>
                <p class="text-sm text-[#3a0159]/75 font-medium leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: FILOSOFÍA, TRANSPARENCIA Y REPOSITORIOS */}
      <section class="bg-[#5d2e76] text-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-purple-950/15 relative overflow-hidden border border-purple-900/40">
        {/* FORMAS CURVAS ORGÁNICAS DE FONDO */}
        <svg
          class="absolute -right-12 -bottom-16 w-80 h-80 text-pink-300/10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path
            d="M45.7,-59.1C58.9,-48.7,69.2,-33.4,72.5,-16.8C75.8,-0.2,72.1,17.7,63.4,32.2C54.7,46.7,41,57.8,25.4,63.8C9.8,69.8,-7.7,70.7,-24.1,65.3C-40.5,59.9,-55.8,48.2,-64.3,32.7C-72.8,17.2,-74.5,-2.1,-69.8,-19.3C-65.1,-36.5,-54,-51.6,-40,-61.8C-26,-72,-13,-77.3,1.9,-79.6C16.8,-81.9,32.5,-69.5,45.7,-59.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* LADO IZQUIERDO: IMAGEN */}
          <div class="shrink-0 flex items-center justify-center w-full lg:w-1/3">
            <div class="relative w-50 h-50 md:w-64 md:h-64 lg:w-full flex items-center justify-center">
              <img
                src="/img/pajarito-about.png"
                alt="Ilustración Pajarito Triste"
                class="w-200 h-200 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              />
            </div>
          </div>

          {/* LADO DERECHO: CONTENIDO */}
          <div class="flex-1 max-w-2xl">
            <span class="inline-block bg-white/10 text-pink-200 text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/15 backdrop-blur-xs">
              Open Source & Transparencia
            </span>

            <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Código con Propósito
            </h2>

            <p class="text-purple-100/90 text-base md:text-lg mb-4 leading-relaxed font-normal">
              Este proyecto es de código abierto bajo la licencia{" "}
              <span class="text-pink-300 font-mono font-bold bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 inline-block my-1">
                AGPL-3.0
              </span>
              . Creo firmemente en que el conocimiento debe ser libre: puedes
              estudiar, modificar y redistribuir este sitio siempre que
              mantengas esa misma libertad para los demás.
            </p>

            {/* Aclaración sobre el uso de IA y origen del contenido */}
            <p class="text-purple-100/90 text-sm md:text-base mb-8 leading-relaxed font-normal">
              💡{" "}
              <strong class="text-pink-200 font-bold">
                Nota de transparencia:
              </strong>{" "}
              Para el desarrollo de este sitio me apoyé en herramientas de
              Inteligencia Artificial como copiloto para agilizar partes del
              código y generar algunos recursos visuales. Sin embargo, la
              redacción y tutoriales del blog son totalmente de mi autoría y
              están basados en mi repositorio de GitHub sobre{" "}
              <strong class="text-pink-200 font-bold">Oracle SQL</strong>, donde
              puedes encontrar los temas documentados de forma más detallada.
            </p>

            {/* BOTONES A REPOSITORIOS (EN FILA REUTILIZABLE) */}
            <div class="mb-8 flex flex-wrap gap-3.5">
              <a
                href="https://github.com/arelisuleima/SQL-and-PL-SQL"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-[#5d2e76] font-extrabold text-xs md:text-sm rounded-full hover:bg-pink-100 transition-all duration-300 shadow-md hover:scale-105"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Repo Oracle SQL</span>
              </a>

              <a
                href="https://github.com/arelisuleima/pajaritotriste.org"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2.5 px-5 py-3 bg-white/10 text-white border border-white/20 font-extrabold text-xs md:text-sm rounded-full hover:bg-white/20 transition-all duration-300 shadow-md hover:scale-105"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Repo del Blog</span>
              </a>
            </div>

            {/* Tarjetas de principios */}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-bold text-purple-100">
              <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <span class="text-pink-300 text-xl bg-white/10 p-2 rounded-xl">
                  ✨
                </span>
                <span>Fuente siempre abierta</span>
              </div>

              <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <span class="text-emerald-300 text-xl bg-white/10 p-2 rounded-xl">
                  🌱
                </span>
                <span>Comunidad y aprendizaje</span>
              </div>

              <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <span class="text-amber-300 text-xl bg-white/10 p-2 rounded-xl">
                  🤝
                </span>
                <span>Mejora continua</span>
              </div>

              <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <span class="text-sky-300 text-xl bg-white/10 p-2 rounded-xl">
                  🤖
                </span>
                <span>Asistencia e innovación responsable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CONTACTO */}
      <section class="bg-white rounded-[3rem] p-8 md:p-12 text-center border border-purple-100/80 shadow-xs relative overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-28 bg-pink-50/60 pointer-events-none">
          <svg
            class="absolute bottom-0 w-full h-8 text-white fill-current"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path d="M0,48 C280,0 720,50 1440,10 L1440,48 L0,48 Z"></path>
          </svg>
        </div>

        <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-emerald-50 rounded-full blur-xl pointer-events-none">
        </div>

        <div class="flex flex-col items-center max-w-lg mx-auto relative z-10 pt-2">
          <div class="relative w-28 h-28 bg-white rounded-full flex items-center justify-center mb-5 p-2 group hover:scale-105 transition-transform duration-300">
            <div class="w-full h-full rounded-full flex items-center justify-center p-2">
              <img
                src="/img/pajarito-msj.png"
                alt="Pajarito con mensaje"
                class="w-25 h-25 object-contain group-hover:-rotate-6 transition-transform duration-300"
              />
            </div>
          </div>

          <h3 class="text-3xl font-black text-[#3a0159] mb-3 tracking-tight">
            ¿Platicamos?
          </h3>

          <p class="text-[#3a0159]/75 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Si tienes dudas sobre SQL, quieres colaborar en un proyecto o
            simplemente decir 'hola', mi bandeja de entrada siempre está
            abierta.
          </p>

          <a
            href="mailto:contacto@pajaritotriste.org"
            class="inline-flex items-center gap-3 px-8 py-4 bg-[#E0F5E9] text-[#2D5A43] border border-[#2D5A43]/10 font-extrabold text-base rounded-full hover:bg-[#2D5A43] hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:scale-105"
          >
            <span>✉️</span>
            <span>contacto@pajaritotriste.org</span>
          </a>
        </div>
      </section>
    </div>
  );
}
