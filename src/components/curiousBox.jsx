// Importa el archivo JSON con los datos curiosos
import curiousFacts from "../data/curiousFacts.json" with { type: "json" };

export default function CuriousBox() {
  // Generamos un dato aleatorio en el build
  const randomFact =
    curiousFacts[Math.floor(Math.random() * curiousFacts.length)];

  return (
    <div class="curious-box bg-blue-100 border border-blue-400 rounded-xl p-4 shadow-sm text-sm text-gray-800">
      <h3 class="font-bold text-blue-900 mb-2">Un pajarito me dijo que...</h3>
      <p id="curious-fact">{randomFact}</p>

      {/* Script que actualiza el dato cada 3 minutos */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const facts = ${JSON.stringify(curiousFacts)};
            const factElement = document.getElementById("curious-fact");
            setInterval(() => {
              const random = Math.floor(Math.random() * facts.length);
              factElement.textContent = facts[random];
            }, 180000); // 3 minutos
          `,
        }}
      ></script>
    </div>
  );
}
