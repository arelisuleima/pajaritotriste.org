{/*PÁGINA ABOUT: Descripción acerca del sitio y proposito del blog */}
export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  const techs = [
    {
      name: "Lume",
      desc: "Generador de sitios estáticos rápido basado en Deno.",
      color: "bg-[#E0F5E9]",
      text: "text-[#2D5A43]",
      icon: "⚡",
    },
    {
      name: "Deno",
      desc: "Runtime moderno y seguro con soporte nativo para TypeScript.",
      color: "bg-purple-50",
      text: "text-purple-700",
      icon: "🦕",
    },
    {
      name: "Tailwind CSS",
      desc: "Framework de diseño para interfaces rápidas y modernas.",
      color: "bg-pink-50",
      text: "text-pink-700",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      desc: "Lógica y composición de componentes dinámica.",
      color: "bg-yellow-50",
      text: "text-yellow-700",
      icon: "📜",
    },
  ];

  return (
    <div class="space-y-10">
      {/* SECCIÓN INTRODUCCIÓN */}
      <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-pink-50 shadow-sm">
        {/* Círculo decorativo de fondo */}
        <div class="absolute -bottom-12 -right-12 w-38 h-48 bg-green-50 rounded-full z-0">
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-[#3a0159] mb-8 tracking-tight">
          Acerca de
        </h1>

        <div class="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            <span class="font-bold text-[#3a0159]">Pajarito Triste</span>{" "}
            es un rincón digital diseñado para humanizar el mundo de los datos.
            Mi misión es romper la barrera de que la tecnología es "difícil" y
            transformarla en algo visual, claro y, sobre todo, aplicable.
          </p>
          <p>
            Como{" "}
            <span class="text-purple-500 font-semibold">desarrolladora</span>,
            creo que las bases de datos y el software no son solo herramientas
            técnicas, sino lenguajes que nos permiten entender mejor nuestra
            realidad. Aquí comparto mi camino, mis tropiezos y mis aprendizajes.
          </p>
        </div>
      </section>

      {/* SECCIÓN TECNOLOGÍAS (BENTO GRID) */}
      <section>
        <h2 class="text-2xl font-bold text-[#3a0159] mb-6 px-4 flex items-center gap-2">
          <span>🛠️</span> Stack Tecnológico
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techs.map((tech) => (
            <div
              class={`${tech.color} ${tech.text} p-6 rounded-/[2rem/] border border-white/50 shadow-sm transition-transform hover:scale-[1.02]`}
            >
              <div class="flex items-center gap-3 mb-2">
                <span class="text-2xl">{tech.icon}</span>
                <h3 class="font-bold text-lg">{tech.name}</h3>
              </div>
              <p class="text-sm opacity-80 leading-snug">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LICENCIA Y FILOSOFÍA */}
      <section class="bg-[#3a0159] text-white rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
        {/* Círculo decorativo */}
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl">
        </div>

        <div class="relative z-10">
          <h2 class="text-2xl font-bold mb-4">Código con Propósito</h2>
          <p class="text-purple-100 mb-6 max-w-2xl">
            Este proyecto es de código abierto bajo la licencia{" "}
            <span class="text-pink-300 font-mono">AGPL-3.0</span>. Creo
            firmemente en que el conocimiento debe ser libre: puedes estudiar,
            modificar y redistribuir este sitio siempre que mantengas esa misma
            libertad para los demás.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-purple-200">
            <li class="flex items-center gap-2">✨ Fuente siempre abierta</li>
            <li class="flex items-center gap-2">🌱 Comunidad y aprendizaje</li>
            <li class="flex items-center gap-2">🤝 Mejora continua</li>
            <li class="flex items-center gap-2">🚀 Transparencia total</li>
          </ul>
        </div>
      </section>

      {/* CONTACTO (FOOTER DE LA PÁGINA) */}
      <section class="bg-white rounded-[2.5rem] p-8 text-center border border-pink-50 shadow-sm">
        <div class="flex flex-col items-center">
          <div class="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center mb-4">
            <img
              src="/img/pajarito-compu-rmv.png"
              alt="Pajarito frente a la computadora"
              class="w-20 object-contain"
            />
          </div>
          <h3 class="text-2xl font-bold text-[#3a0159] mb-2">¿Platicamos?</h3>
          <p class="text-gray-500 mb-6 max-w-md mx-auto">
            Si tienes dudas sobre SQL, quieres colaborar en un proyecto o
            simplemente decir hola, mi bandeja de entrada siempre está abierta.
          </p>
          <a
            href="mailto:contacto@pajaritotriste.org"
            class="px-8 py-3 bg-[#E0F5E9] text-[#2D5A43] font-bold rounded-full hover:bg-[#2D5A43] hover:text-white transition-all duration-300"
          >
            contacto@pajaritotriste.org
          </a>
        </div>
      </section>
    </div>
  );
}
