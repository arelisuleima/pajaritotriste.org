export const layout = "layout.jsx";
export const title = "Sobre mí 👩🏻‍💻";
export const type = "page";

export default function About() {
  return (
    <main class=" prose prose-invert max-w-none">
      

      <section class="cv-intro  leading-relaxed">
          <h1 class="cv-title sm:text-5xl text-3xl font-bold text-purple-900 ">
        Acerca de
      </h1>
        <p class="mb-3" >
          Este espacio es un sitio dedicado a compartir mi recorrido, aprendizajes y experiencias  
          en el mundo del desarrollo de software.
          
        </p>

        <p>
          <b>¿Qué encontrarás aquí?</b>  
          <br />
          Una recopilación de conocimientos y aprendizajees sobre  
          tecnología.  
          Entre los temas que abordo, se incluyen:
        </p>

        <ul class="list-disc pl-6 space-y-2">
          <li>
            🧠 <strong>Apuntes y notas técnicas</strong> sobre las herramientas y lenguajes  
            que he aprendido y continúo perfeccionando.
          </li>
          <li>
            ⚙️ <strong>Guías y consejos prácticos de SQL</strong>, desde los fundamentos  
            hasta consultas avanzadas y soluciones útiles para el día a día.
          </li>
          <li>
            📘 <strong>Documentación y análisis de proyectos personales</strong>, acompañados  
            de observaciones y recomendaciones para otros desarrolladores.
          </li>
        </ul>
<br />
        <p>
          <strong>¿Por qué “Pajarito Triste”?</strong>
        </p>


        <p>
          El nombre simboliza la perseverancia frente a la frustración y recuerda  
          que <strong>cada error también forma parte del aprendizaje</strong>.  
          Es un toque de honestidad y melancolía que refleja la naturaleza constante  
          de quien sigue intentando mejorar día a día.
        </p>

        <p>
          <br />
          Gracias por visitar este espacio.  
          
        </p>
      

      {/* === Sección de contacto === */}
      <footer class="mt-10 text-center flex flex-col items-center gap-4">
        <h3 class="text-lg font-semibold text-purple-950">
          Conecta conmigo
        </h3>

        <img
          src="/img/pajarito-compu-rmv.png"
          width="150"
          height="100"
          alt="Pajarito frente a la computadora"
        />

        <p class="mt-1 text-blue-400 font-bold">
          <a href="mailto:contacto@pajaritotriste.org">
            contacto@pajaritotriste.org
          </a>
        </p>

        <p class="text-sm text-gray-200 mt-4">
          © 2025 Pajarito Triste. 
        </p>
      </footer>
      </section>
    </main>
    
  );
}
