---
title: "Introducción a SQL: 2. El arte de la selección"
type: "post"
draft: false
layout: "postLayout.jsx"
tags:
  - SQL
  - introduccion-sql

description: "La sentencia SELECT a profundidad"
image: "/img/post-3.png"
date: 2026-03-19
---

Para poder empezar a interacturar con la base de datos lo pimero que debemos
conocer es la sentencia **SELECT**. Esta sentencia funciona para recuperar datos
especificos de una o varias tablas. Sin embargo, en la arquitectura de datos
profesional, el **SELECT** no es solo un comando de "lectura"; es un motor de
proyección y filtrado que nos permite transformar datos crudos en información
con valor de negocio.

#### 1. La anatomía de una consulta

Toda consulta **SELECT** sigue una estructura lógica que el motor de la base de
datos debe interpretar.

- **SELECT**: Define las columnas(atributos) que queremos ver.
- **FROM**: Especifica el origen (tabla o esquema) de donde provienen los datos.

```sql
-- Recuperamos solo el nombre y el salario de la tabla empleados

SELECT nombre, salario 
FROM empleados;
```

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-3 border-l-8 border-amber-300 flex flex-col md:flex-row items-center gap-6">

<div class="shrink-0">
    <img src="/img/select-meme.png" alt="Select all" class="rounded-3xl w-55 md:w-56 shadow-lg">
  </div>

<p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
    Aunque el uso de <strong>SELECT *</strong> (seleccionar todo) es muy común, en entornos productivos se considera una mala práctica. Es importante siempre especificar los nombres de las columnas para optimizar el ancho de banda y mejorar el rendimiento del sistema.
  </p>

</div>

#### 2.Personalización y filtrado

Los datos no se consultan de forma masiva sin un propósito. No basta con listar
a todos los empleados de una compañía; las decisiones de negocio requieren
**segmentación**. Habrá escenarios donde necesitemos identificar solo a los
empleados cuyo apellido comience con la letra "A", aquellos con una antigüedad
superior a tres años o quienes pertenezcan a un departamento específico.

Para lograr esta precisión, **SELECT** se apoya en cláusulas de filtrado:

- #### Clausula **WHERE**

Es la encargada de evaluar cada fila y decidir si entra o no en nuestro
conjunto.

```sql
-- Filtramos empleados del departamento de 'IT' 
--Filtramos que tengan salario mayor a 5000
SELECT nombre, puesto 
FROM empleados 
WHERE departamento = 'IT' 
  AND salario > 5000;
```

Aqui es donde aplicamos los operadores logicos y de comparación. Estos
operadores nos permiten combinar múltiples condiciones en una consulta, aunque
es importante tener en cuenta que SQL cuenta con muchas mas funciones y
operadores que los que menciono, esto dependera del motor de base de datos que
utilices, pero al ser los basicos funcionan bien en la mayoria.

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">

<div class="rounded-3xl shadow-md bg-green-50 p-6 border-t-8 border-green-400">
    <h4 class="text-amber-900 font-bold mb-4 text-center">Comparación</h4>
    <ul class="text-sm text-amber-900 space-y-2">
      <li><strong>=</strong> Igual a</li>
      <li><strong><> / !=</strong> Diferente de</li>
      <li><strong>> / <</strong> Mayor / Menor que</li>
      <li><strong>>= / <=</strong> Mayor o igual / Menor o igual</li>
      <li><strong>BETWEEN</strong> Entre un rango</li>
      <li><strong>IN</strong> Dentro de una lista</li>
    </ul>
  </div>

<div class="rounded-3xl shadow-md bg-orange-50 p-6 border-t-8 border-orange-400">
    <h4 class="text-amber-900 font-bold mb-4 text-center">Lógicos</h4>
    <ul class="text-sm text-amber-900 space-y-2">
      <li><strong>AND</strong> Devuelve TRUE si todas las condiciones son verdaderas.</li>
      <li><strong>OR</strong> Devuelve TRUE si al menos una condición es verdadera.</li>
      <li><strong>NOT</strong> Invierte el valor lógico de la condición.</li>
      <li><strong>IS NULL</strong> Verifica si un valor está vacío.</li>
    </ul>
  </div>

<div class="rounded-3xl shadow-md bg-purple-50 p-6 border-t-8 border-purple-400">
    <h4 class="text-amber-900 font-bold mb-4 text-center">Pattern Matching</h4>
    <ul class="text-sm text-amber-900 space-y-2">
      <li><strong>LIKE</strong> Busca un patrón específico.</li>
      <li><strong>%</strong> Comodín que representa cero o más caracteres.</li>
      <li><strong>_</strong> Comodín que representa un solo carácter.</li>
      <li><strong>ILIKE</strong> (En algunos motores) LIKE sin distinguir mayúsculas.</li>
    </ul>
  </div>

</div>

- #### Clausulas ORDER BY y DISTINCT

- **ORDER BY**: En SQL, los registros no tienen un orden natural. Si necesitas
  que tu lista aparezca organizada, debes usar ORDER BY. Si aplicamos el ORDER
  BY por si solo por defecto ordenara los datos de manera ascendente, pero si
  necesitaramos especificar en que orden los queremos usamos **ASC** para ir de
  menor a mayor (A-Z, 1-100) y **DESC** para ir de mayor a menor (Z-A, 100-1).

```sql
--Para ver quién tiene el salario más alto primero
SELECT nombre, salario 
FROM empleados 
ORDER BY salario DESC;
```

<div class="rounded-3xl shadow-md bg-blue-100 my-8 p-6 md:p-10 border-l-8 border-blue-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">
    💡 PRO TIP: Ordenamiento por posición
  </p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
    En SQL, puedes referenciar las columnas por su <strong>índice numérico</strong> en lugar de su nombre. En el ejemplo anterior, el número <strong>2</strong>representa la segunda columna definida en nuestro <strong>SELECT</strong>(salario).
  </p>

<div class="mt-4 bg-black bg-opacity-50 rounded-xl p-4">
    <code class="text-white">
      -- El resultado es idéntico al ordenar por 'salario'<br>
      SELECT nombre, salario <br>
      FROM empleados <br>
      ORDER BY 2 DESC;
    </code>
  </div>

<p class="text-sm md:text-base text-amber-800 mt-4 leading-relaxed">
    <strong>Nota extra:</strong> Aunque es muy útil para consultas rápidas, úsalo con precaución en aplicaciones reales. Si en el futuro añades o mueves columnas en tu <strong>SELECT</strong>, el número dejará de apuntar al dato correcto.
  </p>
</div>

<div class="md:float-right md:w-1/2 md:mr-6  mx-6 text-center">
  <img src="/img/select-distinct.png" alt="Uso de DISTINCT" class="rounded-4xl w-100 shadow-md">

</div>

- **DISTINCT** : En SQL se utiliza para devolver únicamente valores únicos (sin
  duplicados) de una columna o conjunto de columnas en una consulta. Elimina
  filas repetidas de los resultados. Funciona con COUNT para contar elementos
  únicos.

```SQL
SELECT DISTINCT departamento 
FROM empleados;
```

#### Transformación de datos

Un error común es pensar que el **SELECT** solo muestra lo que ya existe en la
tabla. Pero en realidad, nos permite crear "columnas calculadas" que no están
guardadas físicamente, pero que son útiles para reportes.

- **Operadores aritméticos** : Permiten realizar cálculos matemáticos básicos
  como sumar(**+**),restar (**-**), multiplicar (*) y dividir(**/**)
  directamente sobre columnas numéricas

```sql
-- Por ejemplo para calcular el salario anual de un empleado
SELECT nombre, (salario * 12) AS "Salario Anual"
FROM empleados;
```

_En este caso la columna 'Salario Anual' no existe en la tabla, sin embargo en
esa columna veremos reflejado el calculo de salario anual por cada empleado_

- **Concatenación** : Se usa para combinar dos o más cadenas de texto en una
  sola. En el estándar SQL y en Oracle, se utilizan las barras dobles **||**,
  sin embargo en otros motores como MySQL se suele usar **CONCAT()**.

```SQL
--Para mostrar un Nombre completo separado por un espacio 
SELECT nombre || ' ' || apellido AS "Nombre Completo"
FROM empleados;
```

_Las comillas simples ' ' sirven para añadir el espacio entre el nombre y el
apellido._

#### Alias de columnas

Cuando consultamos una tabla, los encabezados de las columnas suelen mostrar los
nombres técnicos definidos por el administrador de la base de datos. Estos
nombres suelen estar en mayúsculas, con guiones bajos o abreviaciones difíciles
de leer para un usuario final (por ejemplo: FECHA_NAC_USU o SAL_MEN).

Para solucionar esto, SQL nos permite utilizar Alias a través de **AS**. Un
alias es un nombre temporal que le asignamos a una columna (o a un cálculo) para
que el resultado de nuestra consulta sea mucho más claro.

```sql
-- Ejemplo 1: Alias sencillo
SELECT nombre AS Empleado, salario AS Sueldo
FROM empleados;

-- Ejemplo 2: Alias con espacios (Requiere comillas dobles "")
-- Si tu alias tiene espacios o caracteres especiales, DEBES usar comillas.
SELECT nombre, (salario * 12) AS "Salario Anual"
FROM empleados;
```

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-3 border-l-8 border-amber-300 flex flex-col md:flex-row items-center gap-6">

<p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
   <p class="text-base md:text-lg text-amber-900 font-bold ">
     💡
  </p>
   Recuerda que el alias solo cambia el nombre en el resultado de la consulta; no cambia el nombre real de la columna en la tabla. Además, debido al orden de ejecución de SQL (que vimos anteriormente), no puedes usar un alias dentro de la misma cláusula WHERE de esa consulta, ya que el alias se crea después de que el filtro se aplica.
  </p>

</div>

#### Conclusión

Dominar la sentencia **SELECT** es mucho más que aprender una sintaxis; es
adquirir la capacidad de interrogar a una base de datos. Como hemos visto, el
**SELECT** es la herramienta que transforma datos crudos en información para la
toma de decisiones.

Recuerda que, la eficiencia es la clave. Un desarrollador SQL no solo busca que
la consulta funcione, sino que sea rápida, legible y segura. Aplicar buenas
prácticas como evitar el SELECT * y entender el orden de ejecución te ayudará
cuando escribas consultas mas complejas.

Ahora que ya sabes cómo extraer y transformar información, el siguiente reto es
aprender a crear los contenedores donde vive esa información. En nuestra próxima
entrada, exploraremos el lenguaje **DDL (Data Definition Language)**, donde
aprenderemos a construir tablas desde cero y definir las reglas que mantienen el
orden de nuestros datos.

_**¡Gracias por leer y nos vemos en la próxima consulta!**_
