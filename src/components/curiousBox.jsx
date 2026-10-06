// Importa el archivo JSON con los datos curiosos
import curiousFacts from "../data/curiousFacts.json" with { type: "json" };

export default function CuriousBox() {
    // Generamos un dato aleatorio inicial en el build
    const randomFact =
        curiousFacts[Math.floor(Math.random() * curiousFacts.length)];

    return (
        <div class="relative bg-linear-to-br from-yellow-50/80 via-yellow-50/30 to-white border border-yellow-100/80 rounded-[2.5rem] p-6 shadow-xs hover:shadow-md transition-shadow overflow-hidden">
            {/* Decoración sutil: resplandores de fondo */}
            <div class="absolute -top-10 -right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl pointer-events-none">
            </div>
            <div class="absolute -bottom-10 -left-10 w-28 h-28 bg-orange-200/30 rounded-full blur-xl pointer-events-none">
            </div>

            <div class="relative z-10 flex flex-col justify-between h-full space-y-4">
                {/* Encabezado con Badge y Botón de Recarga */}
                <div class="flex items-center justify-between">
                    <div class="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200/60 px-3 py-1 rounded-full">
                        <span class="text-xs font-black text-[#3a0159] tracking-wider uppercase">
                            Sabías que...
                        </span>
                    </div>

                    {/* Botón interactivo para cambiar dato */}
                    <button
                        type="button"
                        id="refresh-fact-btn"
                        title="Siguiente dato"
                        class="text-[#3a0159]/60 hover:text-[#3a0159] hover:bg-purple-100/60 p-1.5 rounded-full transition-all duration-200 cursor-pointer active:scale-90"
                        aria-label="Obtener otro dato curioso"
                    >
                        <svg
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2.5"
                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Cuerpo del Dato Curioso */}
                <div class="relative pl-3.5 border-l-2 border-[#be81dd]/60 my-2">
                    <p
                        id="curious-fact"
                        class="text-[#3a0159]/90 text-sm md:text-base font-medium leading-relaxed italic transition-opacity duration-300"
                    >
                        "{randomFact}"
                    </p>
                </div>
            </div>

            {/* Script optimizado con soporte para cambio por clic + temporizador */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            (() => {
              const facts = ${JSON.stringify(curiousFacts)};
              const factElement = document.getElementById("curious-fact");
              const btn = document.getElementById("refresh-fact-btn");
              
              function updateFact() {
                if (!factElement) return;
                factElement.style.opacity = "0";
                setTimeout(() => {
                  const random = Math.floor(Math.random() * facts.length);
                  factElement.textContent = '"' + facts[random] + '"';
                  factElement.style.opacity = "1";
                }, 300);
              }

              if (btn) {
                btn.addEventListener("click", updateFact);
              }

              setInterval(updateFact, 180000);
            })();
          `,
                }}
            />
        </div>
    );
}
