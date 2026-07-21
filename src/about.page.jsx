/* PÁGINA ABOUT: Descripción acerca del sitio y propósito del blog */
export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  const techs = [
    {
      name: "Lume",
      desc: "Generador de sitios estáticos ultrarrápido basado en Deno.",
      color: "bg-emerald-50/80 hover:bg-emerald-100/80 border-emerald-100",
      text: "text-emerald-900",
      badge: "bg-emerald-200/60 text-emerald-900",
      icon: "⚡",
    },
    {
      name: "Deno",
      desc: "Runtime moderno y seguro con soporte nativo para TypeScript.",
      color: "bg-purple-50/80 hover:bg-purple-100/80 border-purple-100",
      text: "text-purple-900",
      badge: "bg-purple-200/60 text-purple-900",
      icon: "🦕",
    },
    {
      name: "Tailwind CSS",
      desc: "Framework de diseño para interfaces responsivas y limpias.",
      color: "bg-pink-50/80 hover:bg-pink-100/80 border-pink-100",
      text: "text-pink-900",
      badge: "bg-pink-200/60 text-pink-900",
      icon: "🎨",
    },
    {
      name: "JavaScript / JSX",
      desc: "Lógica responsiva y composición modular de componentes.",
      color: "bg-amber-50/80 hover:bg-amber-100/80 border-amber-100",
      text: "text-amber-900",
      badge: "bg-amber-200/60 text-amber-900",
      icon: "📜",
    },
  ];

  return (
    <div class="space-y-10 md:space-y-14 mb-16">
      
      {/* SECCIÓN 1: INTRODUCCIÓN */}
     <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-purple-100/80 shadow-sm">
  {/* Círculos decorativos de fondo suave */}
  <div class="absolute -top-12 -right-12 w-48 h-48 bg-pink-50 rounded-full blur-2xl pointer-events-none opacity-70"></div>
  <div class="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-50 rounded-full blur-2xl pointer-events-none opacity-70"></div>

  <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
    
    {/* LADO IZQUIERDO: TEXTO */}
    <div class="flex-1">
      <span class="inline-block bg-purple-100 text-[#3a0159] text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
        Sobre el proyecto
      </span>
      
      {/* Título limpio sin degradados */}
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#3a0159] mb-8 tracking-tight">
        Acerca de <span class="text-transparent bg-clip-text bg-linear-to-r from-[#e9aadd] via-[#be81dd] to-purple-950">
              Pajarito Triste.
            </span>
      </h1>

      <div class="space-y-6 text-[#3a0159]/80 leading-relaxed text-lg md:text-xl font-medium">
        <p>
          <strong class="font-black text-[#3a0159]">Pajarito Triste</strong>{" "}
          es un rincón digital diseñado para humanizar el mundo de los datos.
          Mi misión es romper la barrera de que la tecnología es "difícil" y
          transformarla en algo visual, claro y, sobre todo, fácil de aplicar.
        </p>
        <p>
          Como{" "}
          <span class="bg-[#e9aadd] text-[#944886] px-2 py-0.5 rounded-md font-bold">
            desarrolladora
          </span>
          , creo que las bases de datos no son solo conjuntos de tablas e índices, sino lenguajes que nos permiten estructurar y entender mejor nuestra realidad. Aquí comparto mi camino, guías prácticas y todo lo que voy aprendiendo.
        </p>
      </div>
    </div>

    {/* LADO DERECHO: IMAGEN */}
    <div class="shrink-0 flex items-center justify-center">
      <div class="relative md:w-90  p-4 flex items-center justify-center ">
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
      <section>
        <div class="flex items-center gap-3 mb-6 px-2">
          <span class="text-2xl">🛠️</span>
          {/* Título de sección en sólido */}
          <h2 class="text-3xl md:text-4xl font-black text-[#3a0159] tracking-tight">
            Stack Tecnológico
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          {techs.map((tech) => (
            <div
              class={`${tech.color} ${tech.text} p-7 rounded-[2.5rem] border backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl">{tech.icon}</span>
                    <h3 class="font-extrabold text-xl">{tech.name}</h3>
                  </div>
                  <span class={`text-xs font-bold px-3 py-1 rounded-full ${tech.badge}`}>
                    Core
                  </span>
                </div>
                <p class="text-base opacity-85 leading-relaxed font-medium">
                  {tech.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN 3: FILOSOFÍA Y LICENCIA */}
      <section class="bg-[#3a0159] text-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-purple-950/10 relative overflow-hidden">
        {/* Adorno orgánico de fondo */}
        <div class="absolute -bottom-16 -right-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl">
          <span class="inline-block bg-white/10 text-pink-200 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/10">
            Open Source
          </span>
          
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Código con Propósito
          </h2>
          
          <p class="text-purple-100 text-lg mb-8 leading-relaxed font-normal">
            Este proyecto es de código abierto bajo la licencia{" "}
            <span class="text-pink-300 font-mono font-bold bg-white/10 px-2 py-0.5 rounded">
              AGPL-3.0
            </span>
            . Creo firmemente en que el conocimiento debe ser libre: puedes estudiar,
            modificar y redistribuir este sitio siempre que mantengas esa misma
            libertad para los demás.
          </p>

          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-bold text-purple-100">
            <li class="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <span class="text-pink-300 text-lg">✨</span> Fuente siempre abierta
            </li>
            <li class="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <span class="text-emerald-300 text-lg">🌱</span> Comunidad y aprendizaje
            </li>
            <li class="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <span class="text-amber-300 text-lg">🤝</span> Mejora continua
            </li>
            <li class="flex items-center gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <span class="text-sky-300 text-lg">🚀</span> Transparencia total
            </li>
          </ul>
        </div>
      </section>

      {/* SECCIÓN 4: CONTACTO */}
      <section class="bg-white rounded-[3rem] p-8 md:p-12 text-center border border-purple-100/80 shadow-sm relative overflow-hidden">
        <div class="flex flex-col items-center max-w-lg mx-auto relative z-10">
          
          <div class="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-6 shadow-inner border border-pink-100">
            <img
              src="/img/pajarito-compu-rmv.png"
              alt="Pajarito frente a la computadora"
              class="w-16 h-16 object-contain"
            />
          </div>

          <h3 class="text-3xl font-black text-[#3a0159] mb-3">
            ¿Platicamos?
          </h3>

          <p class="text-[#3a0159]/70 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Si tienes dudas sobre SQL, quieres colaborar en un proyecto o
            simplemente decir hola, mi bandeja de entrada siempre está abierta.
          </p>

          <a
            href="mailto:contacto@pajaritotriste.org"
            class="inline-flex items-center gap-2 px-8 py-4 bg-[#E0F5E9] text-[#2D5A43] font-extrabold text-base rounded-full hover:bg-[#2D5A43] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
          >
            ✉️ contacto@pajaritotriste.org
          </a>
        </div>
      </section>

    </div>
  );
}