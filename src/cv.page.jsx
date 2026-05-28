export const layout = "layout.jsx";
export const title = "Currículum 👩🏻‍💻";
export const type = "page";

export default function Cv() {
  return (
    <div class="space-y-8">
      {/* === TARJETA PRINCIPAL: PERFIL === */}
      <section class="relative overflow-hidden p-8 md:p-12 bg-white rounded-[3rem] border border-pink-50 shadow-sm">
        {/* Decoración sutil */}
        <div class="absolute top-0 right-0 w-32 h-32 bg-[#E0F5E9] rounded-bl-[5rem] z-0 opacity-50">
        </div>

        <div class="relative z-10">
          <div class="flex flex-col md:flex-row gap-8 items-start">
            <div class="flex-1">
              <h1 class="text-4xl font-extrabold text-[#3a0159] mb-6 tracking-tight">
                {title}
              </h1>

              <p class="text-xl text-gray-700 mb-6 leading-relaxed">
                ¡Hola! Soy{" "}
                <span class="text-[#3a0159] font-bold underline decoration-pink-300">
                  Areli Suleima
                </span>.
              </p>

              <p class="text-gray-600 mb-6">
                Desarrolladora especializada en{" "}
                <strong>Sistemas Oracle, SQL y automatización de datos</strong>.
                Mi enfoque principal es la optimización de procesos complejos y
                la creación de soluciones que conviertan los datos en
                herramientas funcionales.
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

      {/* === GRID DE FOCO ACTUAL Y EXPERTISE === */}
     

        {/* Tarjeta: Expertise Técnico */}
        <div class="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100">
          <h3 class="text-lg font-bold text-purple-900 mb-4 flex items-center gap-2">
            <span>⚡</span> Expertise
          </h3>
          <div class="flex flex-wrap gap-2">
            {["Oracle DB", "PL/SQL", "Ellucian Banner", "PeopleSoft", "Java"]
              .map((skill) => (
                <span class="px-4 py-1.5 bg-white text-purple-600 rounded-full text-xs font-bold border border-purple-100 shadow-sm">
                  {skill}
                </span>
              ))}
          </div>
          <p class="mt-6 text-sm text-purple-800/70 italic">
            "Siempre aprendiendo, experimentando y construyendo software
            escalable."
          </p>
        </div>
      

      {/* === NUEVA SECCIÓN: PROYECTOS DESTACADOS === */}
      <section class="space-y-8 mt-4">
        <h2 class="text-3xl font-extrabold text-[#3a0159] px-2 tracking-tight">
          Proyectos Destacados
        </h2>

        {/* Proyecto 1: Pantry */}
        <div class="bg-orange-100 rounded-[3rem] border border-pink-50 shadow-sm overflow-hidden flex flex-col md:flex-row group">
          {/* Contenedor de Imagen */}
          <div class="md:w-2/5 bg-orange-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-gray-100">
            
            <div class="w-full h-full min-h-[250px] bg-gray-200 rounded-2xl flex items-center justify-center  border-gray-300">
              
            </div>
            <img src="/img/pantry-1.png" alt="Dashboard de Pantry" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" /> 
          </div>
          
          <div class="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
            <h3 class="text-2xl font-bold text-[#3a0159] mb-3">
              Pantry: Sistema de Gestión de Gastos
               <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold animate-pulse">
                En desarrollo🚀
              </span></h3>
            
            <div class="flex flex-wrap gap-2 mb-5">
              {["Fresh", "Deno", "Tailwind CSS", "TypeScript"].map((tech) => (
                <span class="px-3 py-1 bg-[#E0F5E9] text-[#2D5A43] rounded-full text-xs font-bold">
                  {tech}
                </span>
              ))}
            </div>
            <p class="text-gray-600 mb-5 leading-relaxed text-sm">
              Sistema financiero personal que transforma el registro técnico de datos en una herramienta intuitiva para la toma de decisiones. Permite el seguimiento riguroso de egresos diarios y su vinculación estratégica con metas de ahorro.
            </p>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-pink-400 mt-0.5">✦</span>
                <span><strong>Centralización de Datos:</strong> Registro estructurado con persistencia en tiempo real.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-pink-400 mt-0.5">✦</span>
                <span><strong>Vinculación de Metas:</strong> Asociación de egresos a objetivos para visualizar el avance.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-pink-400 mt-0.5">✦</span>
                <span><strong>Análisis Dinámico:</strong> Historiales agrupados por días o semanas para identificar patrones de consumo.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Proyecto 2: Pensadero */}
        <div class="bg-blue-100 rounded-[3rem] border border-pink-50 shadow-sm overflow-hidden flex flex-col md:flex-row-reverse group">
          {/* Contenedor de Imagen */}
          <div class="md:w-2/5 bg-gray-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-l border-gray-100">
             {/* TODO: Reemplaza este div con tu etiqueta <img> */}
             <div class="w-full h-full min-h-[250px] bg-gray-200 rounded-2xl flex items-center justify-center  border-gray-300">
           
            </div>
             <img src="/img/pensadero-1.png" alt="Widget Pensadero" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" /> 
          </div>
          
          <div class="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
            <div class="flex items-center gap-4 mb-3">
              <h3 class="text-2xl font-bold text-[#3a0159]">Pensadero</h3>
              <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold animate-pulse">
                Update próximo 🚀
              </span>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
              {["EWW", "Python", "Linux"].map((tech) => (
                <span class="px-3 py-1 bg-[#F3E8FF] text-[#6B21A8] rounded-full text-xs font-bold">
                  {tech}
                </span>
              ))}
            </div>
            <p class="text-gray-500 italic text-sm mb-4 border-l-4 border-purple-200 pl-3">
              "La mente no es un libro que pueda abrirse a voluntad y examinarse a placer." Pero tus notas, sí 😉
            </p>
            <p class="text-gray-600 mb-5 leading-relaxed text-sm">
              Un widget ligero de notas de escritorio diseñado con una interfaz limpia y minimalista, ideal para organizar ideas sin depender de aplicaciones pesadas.
            </p>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-0.5">✦</span>
                <span>Soporte para múltiples notas con creación, edición y eliminación desde el widget.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-0.5">✦</span>
                <span>Almacenamiento persistente usando <em>XDG Base Directory</em> para facilitar el respaldo.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-0.5">✦</span>
                <span>Totalmente ligero y rápido, sin dependencias pesadas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* === SECCIÓN DOWNLOAD PDF === */}
      <section class="bg-white rounded-[3rem] p-8 md:p-12 text-center border border-pink-50 shadow-sm relative overflow-hidden">
        {/* Círculo decorativo de fondo */}
        <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-pink-50 rounded-full z-0">
        </div>

        <div class="relative z-10">
          <h2 class="text-2xl font-bold text-[#3a0159] mb-2">
            ¿Necesitas el CV completo?
          </h2>
          <p class="text-gray-500 mb-8 max-w-md mx-auto">
            Para detalles sobre mi trayectoria profesional y proyectos
            corporativos, puedes descargar mi CV en formato PDF.
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