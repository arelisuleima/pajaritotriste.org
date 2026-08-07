export const layout = "layout.jsx";
export const title = "Carta de Presentación & CV 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  const coreCompetencies = [
    {
      title: "Bases de Datos & SQL",
      desc: "Modelado, PL/SQL, optimización de consultas complejas y arquitectura en Oracle DB.",
      icon: "🗄️",
      bg: "bg-purple-50/80 border-purple-200/70 text-purple-950",
      accent: "bg-purple-200/80 text-purple-900",
    },
    {
      title: "Sistemas Enterprise",
      desc: "Integración, mantenimiento y desarrollo en plataformas Ellucian Banner y PeopleSoft.",
      icon: "🏛️",
      bg: "bg-amber-50/80 border-amber-200/70 text-amber-950",
      accent: "bg-amber-200/80 text-amber-900",
    },
    {
      title: "Desarrollo Moderno",
      desc: "Creación de herramientas web y scripts con Deno, Fresh, TypeScript, Python y Linux.",
      icon: "⚡",
      bg: "bg-emerald-50/80 border-emerald-200/70 text-emerald-950",
      accent: "bg-emerald-200/80 text-emerald-900",
    },
  ];

  return (
    <div class="space-y-10 md:space-y-14 mb-16 relative">
      {/* CSS Personalizado para animaciones de movimiento sutil */}
      <style>
        {`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-8px) rotate(1deg); }
          }
          @keyframes floatReverse {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(8px) rotate(-1deg); }
          }
          .animate-float-slow {
            animation: floatSlow 6s ease-in-out infinite;
          }
          .animate-float-reverse {
            animation: floatReverse 7s ease-in-out infinite;
          }
        `}
      </style>

      {/* ========================================================== */}
      {/* 1. HERO: CARTA DE PRESENTACIÓN & STATUS EN VIVO           */}
      {/* ========================================================== */}
     <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-purple-100/80 shadow-xs">
  {/* Adornos animados de fondo */}
 
  <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none animate-float-reverse"></div>

  <div class="relative z-10">
   

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Texto de la Carta de Presentación (Ocupa 8 columnas en pantallas grandes) */}
      <div class="lg:col-span-8 space-y-5">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-[#3a0159] tracking-tight leading-none">
          ¡Hola! Soy{" "}
          <span class="text-transparent bg-clip-text bg-linear-to-r from-[#e9aadd] via-[#be81dd] to-purple-950">
            Areli Suleima
          </span>
        </h1>

        <h2 class="text-xl md:text-2xl font-bold text-[#3a0159]/90">
          Desarrolladora de Software & Especialista en Sistemas Oracle / SQL 👩🏻‍💻
        </h2>

        <p class="text-base md:text-lg text-[#3a0159]/80 leading-relaxed font-medium">
          Apasionada por la arquitectura de datos, la optimización de procesos complejos y la creación de software con propósito. Cuento con experiencia sólida en ecosistemas de base de datos empresariales, integraciones ERP y automatización.
        </p>
      </div>

      {/* Imagen / Ilustración del lado derecho (Ocupa 4 columnas en pantallas grandes) */}
      <div class="lg:col-span-4 flex justify-center items-center">
        <img 
          src="/img/cv-pajarito.png" 
          alt="Ilustración Pajarito" 
          class="w-full max-w-65 md:max-w-75 h-auto "
        />
      </div>
    </div>
  </div>
</section>

      {/* ========================================================== */}
      {/* 2. BENTO GRID: PILARES & EXPERTISE TÉCNICO                */}
      {/* ========================================================== */}
      <section>
        <div class="flex items-center gap-3 mb-6 px-2">
          <span class="text-2xl">🎯</span>
          <h2 class="text-3xl font-black text-[#3a0159] tracking-tight">
            Áreas de Especialización
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coreCompetencies.map((comp) => (
            <div
              class={`${comp.bg} p-7 rounded-[2.5rem] border shadow-2xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              <div>
                <div class="flex items-center justify-between mb-4">
                  <span class="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {comp.icon}
                  </span>
                  <span
                    class={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${comp.accent}`}
                  >
                    Especialidad
                  </span>
                </div>

                <h3 class="text-xl font-extrabold mb-2 tracking-tight">
                  {comp.title}
                </h3>

                <p class="text-xs md:text-sm opacity-85 leading-relaxed font-medium">
                  {comp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================== */}
      {/* 3. PROYECTOS DESTACADOS CON MOCKUPS INTERACTIVOS          */}
      {/* ========================================================== */}
      <section class="space-y-8">
        <div class="flex items-center justify-between px-2">
          <div class="flex items-center gap-3">
            <span class="text-2xl">🚀</span>
            <h2 class="text-3xl font-black text-[#3a0159] tracking-tight">
              Proyectos en Desarrollo
            </h2>
          </div>
        </div>

        {/* PROYECTO 1: PANTRY */}
        <div class="bg-linear-to-br from-emerald-50/70 via-white to-emerald-100/50 rounded-[3rem] border border-emerald-200/80 p-6 md:p-10 shadow-xs hover:shadow-md transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mockup de Ventana / Navegador */}
            <div class="lg:col-span-5 w-full">
              <div class="bg-white rounded-2xl border border-emerald-200/80 shadow-md overflow-hidden group">
                {/* Barra de título del SO */}
                <div class="bg-cyan-950 px-4 py-2.5 flex items-center gap-2 border-b border-emerald-200/60">
                  <div class="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
                  <span class="text-[11px] font-mono text-white ml-2 font-bold truncate">
                    pantry.app - Dashboard
                  </span>
                </div>
                {/* Captura de pantalla */}
                <div class="overflow-hidden">
                  <img
                    src="/img/pantry-1.png"
                    alt="Pantry App"
                    class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Detalles */}
            <div class="lg:col-span-7 space-y-4">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-2xl font-black text-[#3a0159]">
                  Pantry: Control Financiero
                </h3>
                <span class="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300/60 rounded-full text-xs font-black">
                  Fullstack App
                </span>
              </div>

              <div class="flex flex-wrap gap-2">
                {["Fresh", "Deno", "Tailwind CSS", "TypeScript"].map((t) => (
                  <span class="px-3 py-1 bg-white text-emerald-900 font-bold rounded-lg text-xs border border-emerald-200/80 shadow-2xs">
                    {t}
                  </span>
                ))}
              </div>

              <p class="text-[#3a0159]/80 text-sm md:text-base font-medium leading-relaxed">
                Sistema de finanzas personales diseñado para transformar el registro de gastos diarios en métricas claras de ahorro y toma de decisiones.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#3a0159]/85 pt-2">
                <div class="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                  <span>📊</span> Historiales por periodo
                </div>
                <div class="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-emerald-100">
                  <span>🎯</span> Vinculación con metas
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* PROYECTO 2: PENSADERO */}
        <div class="bg-linear-to-br from-purple-50/70 via-white to-purple-100/50 rounded-[3rem] border border-purple-200/80 p-6 md:p-10 shadow-xs hover:shadow-md transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Detalles (Lado Izquierdo en Desktop) */}
            <div class="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <div class="flex flex-wrap items-center gap-3">
                <h3 class="text-2xl font-black text-[#3a0159]">
                  Pensadero: Desktop Widget
                </h3>
                <span class="px-3 py-1 bg-purple-100 text-purple-900 border border-purple-300/60 rounded-full text-xs font-black">
                  Linux / Desktop
                </span>
              </div>

              <div class="flex flex-wrap gap-2">
                {["EWW", "Python", "Linux", "KDE Plasma"].map((t) => (
                  <span class="px-3 py-1 bg-white text-purple-900 font-bold rounded-lg text-xs border border-purple-200/80 shadow-2xs">
                    {t}
                  </span>
                ))}
              </div>

              <p class="text-[#3a0159]/80 text-sm md:text-base font-medium leading-relaxed">
                Widget ultra ligero de notas rápidas para escritorio. Diseñado para capturar ideas al instante sin interrumpir el flujo de trabajo.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-[#3a0159]/85 pt-2">
                <div class="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-purple-100">
                  <span>📁</span> Estándar XDG Base Directory
                </div>
                <div class="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-purple-100">
                  <span>⚡</span> Consumo mínimo de RAM
                </div>
              </div>
            </div>

            {/* Mockup de Ventana */}
            <div class="lg:col-span-5 w-full order-1 lg:order-2">
              <div class="bg-white rounded-2xl border border-purple-200/80 shadow-md overflow-hidden group">
                <div class="bg-fuchsia-950 px-4 py-2.5 flex items-center gap-2 border-b border-purple-200/60">
                  <div class="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div class="w-3 h-3 rounded-full bg-purple-400"></div>
                  <span class="text-[11px] font-mono text-white ml-2 font-bold truncate">
                    pensadero.widget - Linux
                  </span>
                </div>
                <div class="overflow-hidden">
                  <img
                    src="/img/pensadero-1.png"
                    alt="Pensadero Widget"
                    class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* 4. FOOTER CARTA DE PRESENTACIÓN & DESCARGA PDF             */}
      {/* ========================================================== */}
      <section class="bg-[#5d2e76] text-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-purple-950/20 relative overflow-hidden border border-purple-900/50">
        
        {/* Curvas orgánicas de fondo */}
        <div class="absolute -right-16 -top-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 text-center max-w-2xl mx-auto space-y-6">
          <span class="inline-block bg-white/10 text-pink-200 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
            Conectemos
          </span>

          <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight">
            ¿Trabajamos en equipo?
          </h2>

          <p class="text-purple-100/90 text-base md:text-lg font-normal leading-relaxed">
            Si buscas una desarrolladora enfocada en optimización de datos, bases de datos Oracle o desarrollo de herramientas a medida, me encantaría conversar.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* CTA Principal: Email */}
            <a
              href="mailto:contacto@pajaritotriste.org"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#E0F5E9] text-[#2D5A43] font-black text-base rounded-full hover:bg-emerald-200 transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>✉️</span> Enviar mensaje
            </a>

            {/* CTA Secundario: Descargar CV PDF */}
            <a
              href="/areli-arias-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-black text-base rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <span>📄</span> Descargar CV en PDF
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}