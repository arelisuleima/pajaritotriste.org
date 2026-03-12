// Importa el archivo JSON con los datos curiosos
import curiousFacts from "../data/curiousFacts.json" with { type: "json" };

export default function CuriousBox() {
  // Generamos un dato aleatorio inicial en el build
  const randomFact =
    curiousFacts[Math.floor(Math.random() * curiousFacts.length)];

 

  return (
    <div class="
      relative
     bg-yellow-100
      border border-[#e9e5c2] 
      rounded-4xl 
      p-6 
      shadow-lg
      overflow-hidden
    ">
      {/* Decoración sutil: un círculo de color de fondo para dar profundidad */}
      <div class="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full"></div>

      <h3 class="font-bold text-gray-700 mb-3 flex items-center gap-2">
        <span class="text-xl">🗨️</span> 
        <span class="tracking-wide uppercase text-xs">¿Sabías que...?</span>
      </h3>
      
      <p 
        id="curious-fact" 
        class="text-gray-600 leading-relaxed font-medium italic text-[0.9rem]"
      >
        "{randomFact}"
      </p>

      {/* Script actualizado */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const facts = ${JSON.stringify(curiousFacts)};
            const factElement = document.getElementById("curious-fact");
            setInterval(() => {
              factElement.style.opacity = 0;
              setTimeout(() => {
                const random = Math.floor(Math.random() * facts.length);
                factElement.textContent = '"' + facts[random] + '"';
                factElement.style.opacity = 1;
              }, 500);
            }, 180000); 
          `,
        }}
      >
      </script>

      {/* Estilo para la transición suave de opacidad */}
      <style>{`
        #curious-fact {
          transition: opacity 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}