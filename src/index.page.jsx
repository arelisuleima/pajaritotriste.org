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
                Pasa el cursor para pausar ⏸
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
