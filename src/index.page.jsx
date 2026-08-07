import { BlogTags } from "./components/blogTags.jsx";
import CuriousBox from "./components/curiousBox.jsx";

export const title = "Pajarito Triste";
export const layout = "layout.jsx";

export default (data, _helpers) => {
  const allPosts = data.search.pages("type=post", "date=desc");
  const featuredPosts = allPosts.slice(0, 6);

  // Duplicamos la lista para que el carrusel no tenga interrupciones al hacer el ciclo infinito
  const carouselPosts = [...featuredPosts, ...featuredPosts];

  // Paleta de degradados suaves para las tarjetas
  const cardGradients = [
    "from-emerald-500/10 via-teal-500/5 to-emerald-500/20 text-[#155e75]",
    "from-purple-500/10 via-fuchsia-500/5 to-pink-500/20 text-[#581c87]",
    "from-pink-500/10 via-rose-500/5 to-orange-500/15 text-[#831843]",
    "from-amber-500/10 via-yellow-500/5 to-lime-500/20 text-[#713f12]",
    "from-sky-500/10 via-blue-500/5 to-indigo-500/20 text-[#1e3a8a]",
  ];

  return (
    <>
      {/* CSS Inline para la animación fluida del carrusel */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}
      </style>

      <div class="flex flex-col gap-8 md:gap-16 mb-12 md:mb-20">
        {/* SECCIÓN 1: BANNER PRINCIPAL */}
        <section class="relative pt-4 pb-8 md:pt-10 md:pb-12 px-2 sm:px-4 flex flex-col items-center text-center overflow-hidden">
          <h1 class="text-4xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black text-[#3a0159] mb-4 md:mb-6 tracking-tighter leading-[0.98] md:leading-[0.95] max-w-5xl relative z-10">
            <span class="text-[#ec94d3] inline-block hover:rotate-45 transition-transform duration-300">
              *
            </span>{" "}
            Hola, bienvenid@ a<br class="hidden md:block" />{" "}
            <span class="text-transparent bg-clip-text bg-linear-to-r from-[#e9aadd] via-[#be81dd] to-purple-950">
              Pajarito Triste.
            </span>
          </h1>

          <p class="text-base sm:text-xl md:text-2xl text-[#3a0159]/75 max-w-2xl font-semibold relative z-10 mb-6 md:mb-8 leading-relaxed px-2">
            Recursos que te ayudarán a entender mejor las bases de datos de una
            forma visual, accesible y sin complicaciones.
          </p>

          <a
            href="/about"
            class="relative z-10 inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-purple-400 to-purple-950 text-white rounded-full text-base md:text-lg font-bold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
          >
            Conoce más <span class="text-lg md:text-xl leading-none">→</span>
          </a>

          {/* Fondo sutil con trazo SVG */}
          <div class="absolute inset-0 pointer-events-none opacity-15 z-0 flex items-center justify-center">
            <svg
              viewBox="0 0 1000 500"
              class="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 250 C 300 0, 700 500, 1000 250"
                fill="transparent"
                stroke="#10B981"
                stroke-width="3"
                stroke-dasharray="8 8"
              />
            </svg>
          </div>
        </section>

        {/* SECCIÓN 2: ÚLTIMAS ENTRADAS (CARRUSEL INFINITO EN CONTENEDOR DEGRADADO) */}
        <section class="w-full">
          {/* Contenedor principal con degradado pastel y bordes ajustados a móvil */}
          <div class="relative bg-linear-to-br from-[#FDF2F8] via-[#F3E8FF] to-[#E0F2FE] rounded-4xl md:rounded-[3rem] p-5 sm:p-8 md:p-12 shadow-sm border border-white/60 overflow-hidden">
            {/* Cabecera del contenedor adaptable */}
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-6 md:mb-8 px-1 sm:px-2 relative z-10">
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-pink-400 animate-pulse shrink-0">
                </span>
                <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#3a0159] tracking-tight">
                  Últimas Entradas
                </h2>
              </div>
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-purple-600/60 bg-white/60 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-white/80">
                Pasa encima para pausar ⏸
              </span>
            </div>

            {/* Máscara de desvanecimiento lateral + Carrusel */}
            <div class="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
              <div class="animate-marquee gap-4 sm:gap-6 py-2 md:py-4">
                {carouselPosts.map((post, index) => {
                  const gradientClass =
                    cardGradients[index % cardGradients.length];

                  return (
                    <article
                      class={`w-67.5 sm:w-75 md:w-90 shrink-0 bg-linear-to-br ${gradientClass} bg-white/80 backdrop-blur-md rounded-3xl md:rounded-4xl p-5 md:p-7 border border-white/80 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group`}
                    >
                      <div>
                        {/* Fecha */}
                        <div class="mb-3 md:mb-4">
                          <span class="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#3a0159]/70 shadow-xs border border-white">
                            {new Date(post.date).toLocaleDateString("es-MX", {
                              day: "numeric",
                              month: "long",
                            })}
                          </span>
                        </div>

                        {/* Imagen opcional suave */}
                        {post.image && (
                          <div class="mb-4 md:mb-5 h-36 sm:h-40 rounded-2xl overflow-hidden border border-white/60 shadow-inner">
                            <img
                              src={post.image}
                              alt={post.title}
                              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Título */}
                        <h3 class="text-xl md:text-2xl font-bold text-[#3a0159] leading-snug mb-4 md:mb-6 group-hover:text-pink-600 transition-colors line-clamp-3">
                          <a href={post.url}>
                            {post.title}
                          </a>
                        </h3>
                      </div>

                      {/* Footer de la tarjeta con Tags y Flecha */}
                      <div class="pt-3 md:pt-4 border-t border-[#3a0159]/5 flex items-center justify-between mt-auto">
                        <div class="flex flex-wrap gap-1">
                          <BlogTags tags={post.tags?.slice(0, 2)} />
                        </div>

                        <a
                          href={post.url}
                          class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-[#3a0159] shadow-sm flex items-center justify-center font-bold group-hover:bg-pink-500 group-hover:text-white transition-all transform group-hover:translate-x-1 shrink-0 text-sm md:text-base"
                        >
                          →
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: REPOSOTORIO / ORIGEN DEL BLOG */}
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

          <div class="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            <div class="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                ¿Por qué nació este blog?
              </h2>

              <p class="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl">
                Todo comenzó reuniendo notas, ejercicios y consultas complejas
                en mi repositorio de{" "}
                <strong class="text-pink-300 font-semibold">
                  SQL y PL/SQL
                </strong>. Con el tiempo me di cuenta de que muchos conceptos
                necesitaban explicaciones más profundas, amables y visuales. Así
                fue como este repositorio se convirtió en el corazón y la razón
                de ser de <strong>Pajarito Triste</strong>.
              </p>
            </div>

            {/* Tarjeta interactiva del repositorio de Github */}
            <div class="w-full lg:w-auto shrink-0 flex justify-center">
              <div class="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-3xl text-left flex flex-col justify-between gap-6 shadow-2xl hover:border-pink-300/40 transition-all duration-300 hover:-translate-y-1">
                <div class="flex items-start justify-between gap-4">
                  <div class="flex items-center gap-3">
                    {/* Icono de GitHub en SVG */}
                    <div class="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                      <svg
                        class="w-6 h-6 fill-current text-white"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 13.79.202 1.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span class="text-xs text-purple-200 font-mono block">
                        arelisuleima /
                      </span>
                      <h3 class="font-bold text-lg text-white group-hover:text-pink-200 transition-colors">
                        SQL-and-PL-SQL
                      </h3>
                    </div>
                  </div>
                </div>

                <p class="text-xs sm:text-sm text-purple-100/80 leading-relaxed font-normal">
                  Scripts, procedimientos almacenados y modelos de datos en SQL
                  y PL/SQL que dieron inicio a este blog.
                </p>

                <a
                  href="https://github.com/arelisuleima/SQL-and-PL-SQL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2.5 px-5 py-3 bg-white text-[#5d2e76] font-extrabold text-xs md:text-sm rounded-full hover:bg-pink-100 transition-all duration-300 shadow-md hover:scale-105"
                >
                  Explorar Repositorio ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: BOX CURIOSO */}
        <div class="w-full mb-10 lg:mb-0 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          {/* Imagen estática del lado izquierdo */}
          <div class="shrink-0">
            <img
              src="/img/pajarito-curious.png"
              alt="Ilustración Pajarito"
              class="w-28 sm:w-36 md:w-44 h-auto mix-blend-multiply object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div class="flex-1 w-full">
            <CuriousBox />
          </div>
        </div>
      </div>
    </>
  );
};
