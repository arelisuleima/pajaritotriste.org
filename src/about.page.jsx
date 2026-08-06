/* PÁGINA ABOUT: Descripción acerca del sitio y propósito del blog */
export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
 const techs = [
  {
    name: "Lume",
    desc: "Generador estático ultrarrápido basado en Deno.",
    gradient: "from-emerald-50/90",
    border: "border-emerald-200/70",
    text: "text-emerald-950",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200/50",
   
    icon: "⚡",
  },
  {
    name: "Deno",
    desc: "Runtime moderno y seguro con soporte TypeScript.",
    gradient: "from-purple-50/90 ",
    border: "border-purple-200/70",
    text: "text-purple-950",
    badge: "bg-purple-100 text-purple-800 border-purple-200/50",
    
    icon: "🦕",
  },
  {
    name: "Tailwind CSS",
    desc: "Framework para interfaces responsivas y limpias.",
    gradient: "from-amber-50/90 ",
    border: "border-amber-200/70",
    text: "text-amber-950",
    badge: "bg-amber-100 text-amber-800 border-amber-200/50",
    
    icon: "🎨",
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
<section class="relative">
  {/* Título de sección en color sólido */}
  <div class="flex items-center gap-3 mb-8 px-2">
    <span class="text-2xl">🛠️</span>
    <h2 class="text-3xl md:text-4xl font-black text-[#3a0159] tracking-tight">
      Stack Tecnológico
    </h2>
  </div>

  {/* Grid de 4 columnas en desktop */}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    {techs.map((tech) => (
      <div
        class={`group relative overflow-hidden bg-linear-to-br ${tech.gradient} ${tech.border} border p-6 rounded-[2.2rem] shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between`}
      >
        {/* FORMAS DE FONDO DECORATIVAS (GLOW BLOBS) */}
        <div
          class={`absolute -right-6 -top-6 w-28 h-28 ${tech.glow} rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500`}
        ></div>
        <div
          class={`absolute -left-6 -bottom-6 w-20 h-20 ${tech.glow} rounded-full blur-lg pointer-events-none opacity-60 group-hover:scale-125 transition-transform duration-500`}
        ></div>

        {/* CONTENIDO DE LA TARJETA */}
        <div class="relative z-10">
          {/* Cabecera con ícono y badge */}
          <div class="flex items-center justify-between mb-5">
            <div class="w-12 h-12 rounded-2xl bg-white/90 border border-white/80 shadow-xs flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
              {tech.icon}
            </div>
           
            
          </div>

          {/* Nombre de la tecnología */}
          <h3 class={`text-xl font-extrabold ${tech.text} mb-2 tracking-tight`}>
            {tech.name}
          </h3>

          {/* Descripción */}
          <p class="text-xs md:text-sm text-[#3a0159]/75 font-medium leading-relaxed">
            {tech.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

    {/* SECCIÓN 3: FILOSOFÍA Y LICENCIA (Código con Propósito) */}
      <section class="bg-[#5d2e76] text-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-purple-950/15 relative overflow-hidden border border-purple-900/40">
        
        {/* FORMAS CURVAS ORGANICAS DE FONDO (SVG Blobs) */}
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

        <svg
          class="absolute -left-10 -top-10 w-64 h-64 text-purple-400/10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path
            d="M38.8,-52.1C50.2,-42.6,59.4,-30.8,63.1,-17.1C66.8,-3.4,65,12.2,58.3,25.8C51.6,39.4,40.1,51,26.4,57.8C12.7,64.6,-3.2,66.6,-18.2,62.7C-33.2,58.8,-47.2,49,-56.3,35.5C-65.4,22,-69.5,4.8,-66.2,-10.8C-62.9,-26.4,-52.2,-40.4,-39.2,-49.6C-26.2,-58.8,-13.1,-63.2,0.8,-64.3C14.7,-65.4,27.4,-61.6,38.8,-52.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <div class="relative z-10 max-w-3xl">
          <span class="inline-block bg-white/10 text-pink-200 text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest border border-white/15 backdrop-blur-xs">
            Open Source
          </span>

          {/* Título limpio sin degradado */}
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
            Código con Propósito
          </h2>

          <p class="text-purple-100/90 text-base md:text-lg mb-8 leading-relaxed font-normal">
            Este proyecto es de código abierto bajo la licencia{" "}
            <span class="text-pink-300 font-mono font-bold bg-white/10 px-2.5 py-1 rounded-lg border border-white/10 inline-block my-1">
              AGPL-3.0
            </span>
            . Creo firmemente en que el conocimiento debe ser libre: puedes estudiar,
            modificar y redistribuir este sitio siempre que mantengas esa misma
            libertad para los demás.
          </p>

          {/* Tarjetas en cuadrícula con transparencias suaves */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-bold text-purple-100">
            <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
              <span class="text-pink-300 text-xl bg-white/10 p-2 rounded-xl">✨</span>
              <span>Fuente siempre abierta</span>
            </div>

            <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
              <span class="text-emerald-300 text-xl bg-white/10 p-2 rounded-xl">🌱</span>
              <span>Comunidad y aprendizaje</span>
            </div>

            <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
              <span class="text-amber-300 text-xl bg-white/10 p-2 rounded-xl">🤝</span>
              <span>Mejora continua</span>
            </div>

            <div class="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-[1.02]">
              <span class="text-sky-300 text-xl bg-white/10 p-2 rounded-xl">🚀</span>
              <span>Transparencia total</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CONTACTO (¿Platicamos?) */}
      <section class="bg-white rounded-[3rem] p-8 md:p-12 text-center border border-purple-100/80 shadow-xs relative overflow-hidden">
        
        {/* ONDA / CURVA SUPERIOR DECORATIVA EN PASTEL */}
        <div class="absolute top-0 left-0 right-0 h-28 bg-pink-50/60 pointer-events-none">
          <svg
            class="absolute bottom-0 w-full h-8 text-white fill-current"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
          >
            <path d="M0,48 C280,0 720,50 1440,10 L1440,48 L0,48 Z"></path>
          </svg>
        </div>

        {/* CURVA DE FONDO ESQUINA INFERIOR */}
        <div class="absolute -bottom-10 -right-10 w-44 h-44 bg-emerald-50 rounded-full blur-xl pointer-events-none"></div>

        <div class="flex flex-col items-center max-w-lg mx-auto relative z-10 pt-2">
          
          {/* Avatar / Imagen dentro de círculo de doble borde */}
          <div class="relative w-28 h-28 bg-white rounded-full flex items-center justify-center mb-5  p-2 group hover:scale-105 transition-transform duration-300">
            <div class="w-full h-full  rounded-full flex items-center justify-center p-2">
              <img
                src="/img/pajarito-msj.png"
                alt="Pajarito frente a la computadora"
                class="w-25 h-25 object-contain group-hover:-rotate-6 transition-transform duration-300"
              />
            </div>
          </div>

          <h3 class="text-3xl font-black text-[#3a0159] mb-3 tracking-tight">
            ¿Platicamos?
          </h3>

          <p class="text-[#3a0159]/75 text-base md:text-lg mb-8 leading-relaxed font-medium">
            Si tienes dudas sobre SQL, quieres colaborar en un proyecto o
            simplemente decir 'hola', mi bandeja de entrada siempre está abierta.
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