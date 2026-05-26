---
title: "Introducción a SQL: 4. El arte de la selección"
type: "post"
draft: false
layout: "postLayout.jsx"
tags:
  - SQL
  - introduccion-sql

description: "La sentencia SELECT a profundidad"
image: "/img/post-3.png"
date: 2026-05-26
---

En la entrada anterior conocimos el DML y sus cuatro operaciones fundamentales.
De todas ellas, el **SELECT** es sin duda la más importante y la que más usarás
a lo largo de tu carrera. Esta sentencia es la que nos permite recuperar datos
específicos de una o varias tablas, y aunque parece simple al principio, es una
herramienta profunda: no solo muestra lo que existe, sino que nos permite
transformar datos crudos en información con valor real para la toma de
decisiones.

Esta entrada le dedica su propio espacio, porque se lo merece.

---

#### 1. La anatomía de una consulta

Toda consulta **SELECT** sigue una estructura lógica que el motor de la base de
datos interpreta en orden:

- **SELECT**: Define las columnas (atributos) que queremos ver.
- **FROM**: Especifica la tabla de donde provienen los datos.

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
    Aunque el uso de <strong>SELECT *</strong> (seleccionar todo) es muy común, en entornos productivos se considera una mala práctica. Siempre es mejor especificar los nombres de las columnas para optimizar el ancho de banda y mejorar el rendimiento del sistema.
  </p>

</div>

---

#### 2. Filtrado con WHERE

Los datos no se consultan de forma masiva sin un propósito. Las decisiones de
negocio requieren **segmentación**: identificar solo a los empleados cuyo
apellido comience con "A", aquellos con salario superior a cierto umbral o
quienes pertenezcan a un departamento específico.

Para lograr esta precisión, **SELECT** se apoya en la cláusula **WHERE**, que
evalúa cada fila y decide si entra o no en nuestro resultado.

```sql
-- Filtramos empleados del departamento de 'IT' con salario mayor a 5000
SELECT nombre, puesto 
FROM empleados 
WHERE departamento = 'IT' 
  AND salario > 5000;
```

Dentro del `WHERE` aplicamos **operadores lógicos y de comparación**. Los más
comunes —y que funcionan en prácticamente todos los motores de base de datos—
son los siguientes:

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

---

#### 3. Ordenamiento y valores únicos

##### ORDER BY

En SQL, los registros no tienen un orden natural garantizado. Si necesitas que
tu resultado aparezca organizado, debes pedírselo explícitamente con `ORDER BY`.

Por defecto ordena de forma **ascendente** (ASC), pero puedes especificar
**DESC** para invertir el orden:

```sql
-- Para ver quién tiene el salario más alto primero
SELECT nombre, salario 
FROM empleados 
ORDER BY salario DESC;
```

<div class="rounded-3xl shadow-md bg-blue-100 my-8 p-6 md:p-10 border-l-8 border-blue-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">
    💡 PRO TIP: Ordenamiento por posición
  </p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
    En SQL puedes referenciar las columnas por su <strong>índice numérico</strong> en lugar de su nombre. En el ejemplo anterior, el número <strong>2</strong> representa la segunda columna definida en el <strong>SELECT</strong> (salario).
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
    <strong>Nota extra:</strong> Aunque es muy útil para consultas rápidas, úsalo con precaución en código que va a producción. Si en el futuro añades o reordenas columnas en tu <strong>SELECT</strong>, el número dejará de apuntar al dato correcto sin lanzar ningún error.
  </p>
</div>

##### DISTINCT

<div class="md:float-right md:w-1/2 md:mr-6 mx-6 text-center">
  <img src="/img/select-distinct.png" alt="Uso de DISTINCT" class="rounded-4xl w-100 shadow-md">
</div>

`DISTINCT` elimina las filas duplicadas del resultado, devolviendo únicamente
valores únicos por columna o combinación de columnas:

```sql
-- Devuelve cada departamento una sola vez, sin repeticiones
SELECT DISTINCT departamento 
FROM empleados;
```

También funciona combinado con `COUNT` para contar cuántos valores únicos
existen:

```sql
-- ¿Cuántos departamentos distintos hay en la empresa?
SELECT COUNT(DISTINCT departamento) AS total_departamentos
FROM empleados;
```

##### LIMIT

`LIMIT` restringe cuántas filas devuelve la consulta. Es útil para explorar
datos rápidamente o para paginación en aplicaciones:

```sql
-- Muestra solo los 5 empleados con mayor salario
SELECT nombre, salario
FROM empleados
ORDER BY salario DESC
LIMIT 5;
```

> ⚠️ **Nota de compatibilidad:** `LIMIT` funciona en PostgreSQL, MySQL y SQLite.
> En SQL Server se usa `TOP` y en Oracle `FETCH FIRST n ROWS ONLY`. La lógica es
> la misma; solo cambia la sintaxis según el motor.

---

#### 4. Transformación de datos con columnas calculadas

Un error común es pensar que el **SELECT** solo muestra lo que ya existe en la
tabla. En realidad, nos permite crear "columnas calculadas" que no están
guardadas físicamente pero que son útiles para reportes y análisis.

**Operadores aritméticos** — realizan cálculos directamente sobre columnas
numéricas:

```sql
-- Calculamos el salario anual de cada empleado
SELECT nombre, (salario * 12) AS "Salario Anual"
FROM empleados;
```

_La columna `Salario Anual` no existe en la tabla; es calculada al vuelo para
cada fila del resultado._

**Concatenación** — combina dos o más cadenas de texto en una sola. En el
estándar SQL y en Oracle se usan barras dobles `||`; en MySQL se usa la función
`CONCAT()`:

```sql
-- Mostramos nombre completo en una sola columna
SELECT nombre || ' ' || apellido AS "Nombre Completo"
FROM empleados;
```

_Las comillas simples `' '` agregan el espacio entre nombre y apellido._

---

#### 5. Alias con AS

Cuando consultamos una tabla, los encabezados de columna suelen mostrar nombres
técnicos definidos por el administrador de la base de datos: abreviaciones,
guiones bajos, mayúsculas. Para presentar resultados más legibles usamos
**alias** a través de `AS`.

```sql
-- Alias sencillo sin espacios
SELECT nombre AS Empleado, salario AS Sueldo
FROM empleados;

-- Alias con espacios: requiere comillas dobles
SELECT nombre, (salario * 12) AS "Salario Anual"
FROM empleados;
```

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-3 border-l-8 border-amber-300 flex flex-col md:flex-row items-center gap-6">

<p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
   <p class="text-base md:text-lg text-amber-900 font-bold ">
     💡
  </p>
   El alias solo cambia el nombre en el resultado de la consulta; no modifica el nombre real de la columna en la tabla. Además, no puedes reutilizar un alias dentro de la cláusula WHERE de esa misma consulta, ya que SQL procesa el WHERE antes de asignar los alias del SELECT.
  </p>

</div>

---

#### Conclusión

Dominar el **SELECT** es mucho más que aprender una sintaxis; es adquirir la
capacidad de interrogar una base de datos con precisión. Como vimos, no se
limita a mostrar columnas: filtra con `WHERE`, ordena con `ORDER BY`, elimina
duplicados con `DISTINCT`, limita resultados con `LIMIT`, y transforma datos con
cálculos y concatenaciones en tiempo real.

La eficiencia siempre importa. Un buen desarrollador SQL no solo busca que la
consulta funcione, sino que sea rápida y legible: evitar el `SELECT *`, nombrar
bien los alias y entender en qué orden ejecuta SQL cada cláusula son hábitos que
marcan la diferencia cuando las consultas se vuelven complejas.

En la próxima entrada daremos el salto a uno de los conceptos más importantes:
los **JOINs**. Aprenderemos a combinar información de múltiples tablas en una
sola consulta, que es donde el SQL empieza a volverse realmente útil.

_**¡Gracias por leer y nos vemos en la próxima consulta!**_
