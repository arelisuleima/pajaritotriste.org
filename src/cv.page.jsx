export const layout = "layout.jsx";
export const title = "Currículum 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  return (
    <div class="space-y-8">
      {/* === TARJETA PRINCIPAL: PERFIL === */}
      <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-pink-50 shadow-sm">
        {/* Decoración sutil */}
        <div class="absolute top-0 right-0 w-32 h-32 bg-[#E0F5E9] rounded-bl-[5rem] z-0 opacity-50"></div>
        
        <div class="relative z-10">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="flex-1">
              <h1 class="text-4xl font-extrabold text-[#3a0159] mb-6 tracking-tight">
                {title}
              </h1>
              
              <p class="text-xl text-gray-700 mb-6 leading-relaxed">
                ¡Hola! Soy <span class="text-[#3a0159] font-bold underline decoration-pink-300">Areli Suleima</span>.
              </p>

              <p class="text-gray-600 mb-6">
                Desarrolladora  especializada en <strong>Sistemas Oracle, SQL y automatización de datos</strong>. Mi enfoque principal es la optimización de procesos complejos y la creación de soluciones que conviertan los datos en herramientas funcionales.
              </p>
            </div>

            {/* GIF / AVATAR */}
            <div class="w-full md:w-1/3 shrink-0">
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXo4ZzNuYzlrNDczcHB5NGh6djBzd25xN2RoNGV4dmVnMzB1czR6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LvlaXOfUxg9mPNGNBK/giphy.gif"
                alt="Areli Coding"
                class="w-full rounded-[2.5rem] shadow-lg border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* === GRID DE PROYECTOS Y FOCO ACTUAL (Bento Style) === */}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta: Foco Actual */}
        <div class="bg-[#E0F5E9] p-8 rounded-[2.5rem] border border-[#c2e9d3]">
          <h3 class="text-lg font-bold text-[#2D5A43] mb-4 flex items-center gap-2">
            <span>🚀</span> Foco Actual
          </h3>
          <ul class="space-y-4">
            <li class="flex gap-3">
              <span class="text-xl">🐦</span>
              <div>
                <strong class="text-[#3a0159] block">Pajarito Triste</strong>
                <span class="text-sm text-[#2D5A43]/80">Divulgación técnica sobre SQL y bases de datos.</span>
              </div>
            </li>
            <li class="flex gap-3">
              <span class="text-xl">📝</span>
              <div>
                <strong class="text-[#3a0159] block">Pensadero</strong>
                <span class="text-sm text-[#2D5A43]/80">Productividad en Linux con Python + EWW.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Tarjeta: Expertise Técnico */}
        <div class="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100">
          <h3 class="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <span>⚡</span> Expertise
          </h3>
          <div class="flex flex-wrap gap-2">
            {["Oracle DB", "PL/SQL", "Ellucian Banner", "PeopleSoft", "Java"].map(skill => (
              <span class="px-4 py-1.5 bg-white text-purple-600 rounded-full text-xs font-bold border border-purple-100 shadow-sm">
                {skill}
              </span>
            ))}
          </div>
          <p class="mt-6 text-sm text-purple-800/70 italic">
            "Siempre aprendiendo, experimentando y construyendo software escalable."
          </p>
        </div>
      </div>

      {/* === SECCIÓN DOWNLOAD PDF === */}
      <section class="bg-white rounded-[3rem] p-8 md:p-12 text-center border border-pink-50 shadow-sm relative overflow-hidden">
        {/* Círculo decorativo de fondo */}
        <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-50 rounded-full z-0"></div>
        
        <div class="relative z-10">
          <h2 class="text-2xl font-bold text-[#3a0159] mb-2">¿Necesitas el CV completo?</h2>
          <p class="text-gray-500 mb-8 max-w-md mx-auto">
            Para detalles sobre mi trayectoria profesional y proyectos corporativos, puedes descargar mi CV en formato PDF.
          </p>

          <a
            href="/areli-arias-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-10 py-4 bg-[#3a0159] text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-200"
          >
            <span class="text-xl">📄</span> Descargar CV Actualizado
          </a>
        </div>
      </section>
    </div>
  );
}