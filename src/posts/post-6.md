---
title: "Introducción a SQL: 5. Conectando tablas con JOINs"
type: "post"
draft: false
layout: "postLayout.jsx"
tags:
  - SQL
  - introduccion-sql

description: "Domina los JOINs: la herramienta para combinar datos de múltiples tablas"
image: "/img/post-6.png"
date: 2026-08-26
---

En la entrada anterior explique el **SELECT**: cómo
recuperar datos de una sola tabla, filtrarlos, ordenarlos y transformarlos. Pero
aquí viene la realidad: en una base de datos real, los datos nunca viven
aislados en una sola tabla.

Imagina una empresa. Los empleados viven en una tabla, los departamentos en
otra, los proyectos en una tercera. El verdadero poder de SQL radica en nuestra
capacidad de **conectar esas tablas** y extraer información que tiene sentido
en el contexto del negocio: "¿Quién trabaja en IT?" o "¿Qué empleados todavía
no tienen departamento asignado?"

Para eso existen los **JOINs**, y es momento de dominarlos. Se que esta entrada puede ser un poco larga y tediosa, sin embargo la ventaja de este blog es que lo puedes releer una y otra vez, trate de usar un
mismo grupo de tablas de ejemplo durante todo el post, así que tómate un
segundo para familiarizarte con ellas ya que las vas a ver una y otra vez.

![Tablas de ejemplo usadas en este post: empleados, departamentos, proyectos y empleado_proyecto](/img/post-6-tablas-ejemplo.svg)


---

#### 1. ¿Por qué los JOINs? La normalización en acción

Antes de entender cómo funcionan, necesitamos entender _por qué existen_.

En una base de datos bien diseñada, aplicamos un principio llamado
**normalización**: evitamos repetir información. Si guardáramos el nombre del
departamento en cada fila de empleados, tendríamos "IT" repetido mil veces, lo
que consume memoria y crea inconsistencias (¿qué pasa si alguien lo escribe como
"it"?🤡).

En su lugar, creamos una tabla `departamentos` con un identificador único
(`id_departamento`), y en la tabla `empleados` guardamos solo ese identificador
como una **clave foránea** (`foreign key`): un campo que no contiene el dato en
sí, sino que "apunta" al identificador de una fila en otra tabla.

Los **JOINs** son el mecanismo que SQL ofrece para "reunir" esa información
fragmentada, permitiéndonos consultar como si los datos estuvieran en una sola
tabla.

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-3 border-l-8 border-amber-300 flex flex-col md:flex-row items-center gap-6">

<div class="shrink-0">
    <img src="/img/post6-ex-2.png" alt="JOINs unidos" class="rounded-3xl w-80 md:w-100 shadow-lg">
  </div>

<p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
    A primera vista, un JOIN puede parecer mágico: <strong>¿Cómo sabe SQL qué filas conectar?🤷‍♀️</strong> La respuesta está en las <strong>claves foráneas</strong> —el "pegamento" que une tablas. Sin ellas, estaríamos perdidos entre los datos .
  </p>

</div>

---

#### 2. La anatomía de un JOIN

Un JOIN combina filas de dos o más tablas basándose en una **condición de
conexión**. La estructura básica es:

```sql
SELECT e.nombre, d.nombre_departamento
FROM empleados e
JOIN departamentos d ON e.id_departamento = d.id_departamento;
```

Aquí suceden varias cosas:

- **FROM empleados e**: Comenzamos con la tabla empleados, y le damos el alias
  `e` para escribir menos. De aquí en adelante, a esta la llamaremos la **tabla
  izquierda** — vas a ver por qué ese nombre importa dentro de un momento.
- **JOIN departamentos d**: Indicamos que queremos conectar con departamentos,
  alias `d`. Esta es la **tabla derecha**.
- **ON e.id_departamento = d.id_departamento**: Esta es la condición de
  conexión; SQL emparejará filas donde el `id_departamento` coincida en ambas
  tablas.

Veámoslo con datos reales. Esta es la tabla de empleados que usaremos durante
todo el post — fíjate que Luis no tiene departamento asignado (`NULL`):

**Tabla empleados**

| id_empleado | nombre | id_departamento | salario |
| :---------: | ------ | :--------------: | :-----: |
|      1      | Juan   |         1         |  3000   |
|      2      | María  |         2         |  3500   |
|      3      | Carlos |         1         |  3000   |
|      4      | Ana    |         2         |  4000   |
|      5      | Luis   |       NULL        |  2800   |

**Tabla departamentos**

| id_departamento | nombre_departamento |
| :--------------: | -------------------- |
|         1         | IT                    |
|         2         | HR                    |
|         3         | Finanzas              |

Fíjate que Finanzas (id 3) no tiene ningún empleado asignado. Esto es
intencional: nos va a servir para ver cómo se comporta cada tipo de JOIN.

**Resultado del JOIN de arriba**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| María  | HR                    |
| Carlos | IT                    |
| Ana    | HR                    |

> 🔎 **Nota:** ¿Dónde están Luis y Finanzas?🤔, Luis no aparece porque su
> `id_departamento` es `NULL` — no coincide con nada. Finanzas no aparece
> porque ningún empleado pertenece a ese departamento. Esto **no es un error**,
> es el comportamiento por defecto de `JOIN`. En la siguiente sección explicare
>  exactamente por qué pasa esto, y cómo hacer que Luis y Finanzas
> sí aparezcan si los necesitas.

#### 3. Los cuatro tipos de JOIN

**INNER JOIN**

Es el JOIN más restrictivo y el más usado. Solo devuelve las filas que tienen
coincidencia en ambas tablas. De hecho, el resultado que vimos arriba **es**
exactamente un INNER JOIN, aunque no lo escribimos explícitamente.

Si un empleado no tiene asignado un departamento (`id_departamento = NULL`), no
aparecerá en el resultado. Igualmente, un departamento sin empleados no
aparecerá.

```sql
-- INNER JOIN: Solo empleados con departamento asignado
SELECT e.nombre, d.nombre_departamento
FROM empleados e
INNER JOIN departamentos d ON e.id_departamento = d.id_departamento;
```

<div class="rounded-3xl shadow-md bg-blue-100 my-8 p-6 md:p-10 border-l-8 border-blue-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">💡 PRO TIP: INNER es el default</p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">Si escribes <strong>JOIN</strong> sin especificar el tipo, SQL asume que es <strong>INNER JOIN</strong>. Los dos comandos son equivalentes:</p>
  <div class="mt-4 bg-black bg-opacity-50 rounded-xl p-4">
    <pre><code class="text-white">-- Ambas consultas son idénticas
SELECT e.nombre FROM empleados e
  JOIN departamentos d ON e.id_departamento = d.id_departamento;

SELECT e.nombre FROM empleados e INNER JOIN departamentos d ON e.id_departamento
= d.id_departamento;</code></pre>
  </div>
</div>

**Caso de uso**: Cuando solo te interesa la información "completa". Por ejemplo,
generar un reporte de empleados con sus departamentos: no tiene sentido incluir
empleados sin departamento.

**LEFT JOIN (LEFT OUTER JOIN)**

Devuelve TODAS las filas de la tabla izquierda (la del `FROM`), y las filas
coincidentes de la tabla derecha (la del `JOIN`). Si no hay coincidencia, las
columnas de la tabla derecha aparecen como `NULL`.

```sql
-- LEFT JOIN: Todos los empleados, tengan o no departamento asignado
SELECT e.nombre, d.nombre_departamento
FROM empleados e
LEFT JOIN departamentos d ON e.id_departamento = d.id_departamento;
```

**Resultado**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| María  | HR                    |
| Carlos | IT                    |
| Ana    | HR                    |
| Luis   | NULL                  |

Ahí está Luis, con `nombre_departamento` en `NULL`. LEFT JOIN garantiza que
ningún empleado desaparezca, tenga o no departamento. Finanzas, en cambio,
sigue sin aparecer: LEFT JOIN solo promete "todas las filas de la izquierda",
no de la derecha.

<div class="rounded-3xl shadow-md bg-green-100 my-8 p-6 md:p-10 border-l-8 border-green-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">💡 PRO TIP: Detectar "huérfanos"</p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">Un LEFT JOIN seguido de <strong>WHERE d.id_departamento IS NULL</strong> es la técnica clásica para encontrar registros en la tabla izquierda que NO tienen coincidencia en la derecha. Útil para auditar datos incompletos.</p>
  <div class="mt-4 bg-black bg-opacity-50 rounded-xl p-4">
    <pre><code class="text-white">-- ¿Qué empleados NO tienen departamento asignado?
SELECT e.nombre
FROM empleados e
LEFT JOIN departamentos d ON e.id_departamento = d.id_departamento
WHERE d.id_departamento IS NULL;
-- Resultado: solo "Luis"</code></pre>
  </div>
</div>

**Caso de uso**: Cuando necesitas asegurar que los datos de la tabla izquierda
no desaparezcan. Por ejemplo, un reporte de todos los clientes y sus órdenes: si
un cliente nunca ha comprado, seguirá siendo visible (con órdenes = `NULL`).

**RIGHT JOIN (RIGHT OUTER JOIN)**

Es el opuesto del `LEFT JOIN`. Devuelve TODAS las filas de la tabla derecha (la
del `JOIN`), y las coincidencias de la tabla izquierda.

```sql
-- RIGHT JOIN: Todos los departamentos, aunque no tengan empleados
SELECT e.nombre, d.nombre_departamento
FROM empleados e
RIGHT JOIN departamentos d ON e.id_departamento = d.id_departamento;
```

**Resultado**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| Carlos | IT                    |
| María  | HR                    |
| Ana    | HR                    |
| NULL   | Finanzas              |

Ahora es Finanzas quien aparece (sin empleados, columna `nombre` en `NULL`).
Pero fíjate que **Luis desaparece** 😨: RIGHT JOIN garantiza las filas de la tabla
derecha (departamentos), no las de la izquierda, así que un empleado sin
departamento simplemente no tiene cabida aquí.

<div class="rounded-3xl shadow-md bg-orange-100 my-8 p-6 md:p-10 border-l-8 border-orange-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">⚠️ Nota de compatibilidad</p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic"><strong>RIGHT JOIN</strong> funciona en PostgreSQL, MySQL, SQL Server y, desde la versión 3.39 (2022), también en SQLite. Aun así, muchos desarrolladores prefieren evitarlo y reescribir la consulta como <strong>LEFT JOIN</strong> invirtiendo el orden de las tablas, lo que es más legible:</p>
  <div class="mt-4 bg-black bg-opacity-50 rounded-xl p-4">
    <pre><code class="text-white">-- Estas dos consultas son equivalentes
SELECT e.nombre FROM empleados e
  RIGHT JOIN departamentos d ON e.id_departamento = d.id_departamento;

SELECT e.nombre FROM departamentos d
  LEFT JOIN empleados e ON e.id_departamento = d.id_departamento;</code></pre>
  </div>
</div>

**Caso de uso**: Cuando el "lado derecho" es tu tabla de referencia. Rara vez es
la opción más clara; casi siempre puedes reescribir con `LEFT JOIN`.

**FULL OUTER JOIN (FULL JOIN)**

Devuelve TODAS las filas de ambas tablas. Si no hay coincidencia, aparecen
`NULL` del lado que falte. Es como combinar `LEFT` y `RIGHT`.

```sql
-- FULL OUTER JOIN: Todos los empleados Y todos los departamentos
SELECT e.nombre, d.nombre_departamento
FROM empleados e
FULL OUTER JOIN departamentos d ON e.id_departamento = d.id_departamento;
```

**Resultado**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| María  | HR                    |
| Carlos | IT                    |
| Ana    | HR                    |
| Luis   | NULL                  |
| NULL   | Finanzas              |

Aquí no se pierde nadie: ni Luis ni Finanzas.

<div class="rounded-3xl shadow-md bg-purple-100 my-8 p-6 md:p-10 border-l-8 border-purple-300">
  <p class="text-base md:text-lg text-amber-900 font-bold mb-2">⚠️ Nota de compatibilidad</p>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic"><strong>FULL OUTER JOIN</strong> funciona en PostgreSQL, SQL Server y, desde la versión 3.39 (2022), en SQLite. En MySQL <strong>no existe</strong>, pero puedes emularlo con la técnica UNION:</p>
  <div class="mt-4 bg-black bg-opacity-50 rounded-xl p-4">
    <pre><code class="text-white">SELECT e.nombre, d.nombre_departamento
FROM empleados e
LEFT JOIN departamentos d ON e.id_departamento = d.id_departamento
UNION
SELECT e.nombre, d.nombre_departamento
FROM empleados e
RIGHT JOIN departamentos d ON e.id_departamento = d.id_departamento;</code></pre>
  </div>
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic mt-4">¿Por qué funciona esto? <strong>UNION</strong> (a diferencia de <strong>UNION ALL</strong>) elimina automáticamente filas duplicadas. Las filas que sí coinciden (Juan-IT, María-HR...) aparecen idénticas en ambos JOINs, así que UNION las fusiona en una sola. Lo que queda son esas filas compartidas, más Luis (exclusivo del LEFT) y Finanzas (exclusivo del RIGHT).</p>
</div>

**Caso de uso**: Auditoría. Encontrar tanto empleados sin
departamento como departamentos vacíos en una sola consulta.

#### 4. Tabla comparativa: Visualizando los JOINs

Con los cuatro tipos ya vistos en acción, aquí va el resumen:

| Tipo de JOIN     | Filas de A (izquierda)    | Filas de B (derecha)      | Sin coincidencia...                    |
| ----------------- | -------------------------- | --------------------------- | ---------------------------------------- |
| INNER JOIN         | Solo las que coinciden     | Solo las que coinciden      | Se excluyen ambas                        |
| LEFT JOIN          | **Todas**                  | Solo las que coinciden      | El lado B se rellena con `NULL`          |
| RIGHT JOIN         | Solo las que coinciden     | **Todas**                   | El lado A se rellena con `NULL`          |
| FULL OUTER JOIN    | **Todas**                  | **Todas**                   | Se rellena con `NULL` el lado que falte  |
| CROSS JOIN         | Todas × todas, sin condición | Todas × todas, sin condición | No aplica — no hay "coincidencia" que evaluar |

> 🔎 **Nota:** CROSS JOIN no encaja del todo en la metáfora del diagrama de
> Venn de abajo, porque no se trata de "qué tanto se solapan" dos conjuntos,
> sino de multiplicar todas las combinaciones posibles. Lo vemos con detalle en
> la sección 7.

![Diagrama de Venn de los 4 tipos de JOIN](/img/joins-venn-diagram.svg)

#### 5. JOINs múltiples: Conectando más de dos tablas

En la vida real, raramente conectas solo dos tablas. Imagina que quieres:
"Mostrar empleados, su departamento y los proyectos en los que trabajan."

Esto requiere conectar al menos tres tablas: `empleados`, `departamentos` y
`proyectos`, más una tabla intermedia `empleado_proyecto` que registra quién
trabaja en qué (porque un empleado puede tener varios proyectos, y un proyecto
puede tener varios empleados — una relación "muchos a muchos").

**Tabla proyectos**

| id_proyecto | nombre_proyecto |
| :---------: | ---------------- |
|      1      | Rediseño Web      |
|      2      | App Móvil         |

**Tabla empleado_proyecto**

| id_empleado | id_proyecto |
| :---------: | :---------: |
|      1      |      1      |
|      1      |      2      |
|      2      |      1      |
|      3      |      2      |

(Juan trabaja en los dos proyectos, María solo en Rediseño Web, Carlos solo en
App Móvil. Ana y Luis no están asignados a ningún proyecto.)

```sql
-- JOINs múltiples
SELECT 
  e.nombre AS empleado,
  d.nombre_departamento,
  p.nombre_proyecto
FROM empleados e
INNER JOIN departamentos d ON e.id_departamento = d.id_departamento
INNER JOIN empleado_proyecto ep ON e.id_empleado = ep.id_empleado
INNER JOIN proyectos p ON ep.id_proyecto = p.id_proyecto;
```

**Resultado**

| empleado | nombre_departamento | nombre_proyecto |
| -------- | -------------------- | ----------------- |
| Juan     | IT                    | Rediseño Web       |
| Juan     | IT                    | App Móvil          |
| María    | HR                    | Rediseño Web       |
| Carlos   | IT                    | App Móvil          |

El flujo es secuencial: primero conecta empleados con departamentos, luego ese
resultado con empleado_proyecto, y finalmente con proyectos.

> 🔎 **Nota:** Ana y Luis no aparecen: Ana no está asignada a ningún proyecto, y
> Luis ni siquiera tiene departamento. Como encadenamos puros `INNER JOIN`,
> basta con que un solo eslabón de la cadena no tenga coincidencia para que el
> empleado entero desaparezca del resultado. Si quisieras verlos igual (con
> `nombre_proyecto` en `NULL`), cambiarías el `INNER JOIN` contra
> `empleado_proyecto` por un `LEFT JOIN`.

<div class="rounded-3xl shadow-md bg-blue-100 my-8 p-6 md:p-3 border-l-8 border-blue-300 flex flex-col md:flex-row items-center gap-6">

<div class="shrink-0">
    <img src="/img/post-6-ex-3.png" alt="JOINs unidos" class="rounded-3xl w-80 md:w-50 shadow-lg">
  </div>


  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">Aunque SQL es flexible con el orden de los JOINs en términos de resultado, <strong>el rendimiento puede variar drásticamente</strong>. Los motores modernos optimizan automáticamente, pero un buen desarrollador entiende que el orden puede afectar cuántos datos intermedios se procesan.</p>

</div>


#### 6. Self-JOIN: Uniendo una tabla consigo misma

A veces necesitas comparar filas dentro de la misma tabla. Por ejemplo,
encontrar todos los empleados que tienen el mismo salario.

```sql
-- Self-join: Empleados con el mismo salario
SELECT 
  e1.nombre AS empleado1,
  e2.nombre AS empleado2,
  e1.salario
FROM empleados e1
INNER JOIN empleados e2 ON e1.salario = e2.salario
  AND e1.id_empleado < e2.id_empleado;
```

**Resultado**

| empleado1 | empleado2 | salario |
| --------- | --------- | :-----: |
| Juan      | Carlos    |  3000   |

En nuestra tabla, Juan y Carlos ganan lo mismo (3000), así que es el único par
que aparece. Nota la condición `e1.id_empleado < e2.id_empleado`: evita que un
empleado se empareje consigo mismo y que aparezcan duplicados — sin ella,
verías tanto "Juan + Carlos" como "Carlos + Juan", lo cual es información
redundante.

#### 7. CROSS JOIN: El producto cartesiano

Un `CROSS JOIN` conecta cada fila de la tabla A con CADA fila de la tabla B, sin
condición alguna. El resultado tiene `A.filas × B.filas` registros.

```sql
-- CROSS JOIN: Todas las combinaciones posibles
SELECT 
  e.nombre,
  p.nombre_proyecto
FROM empleados e
CROSS JOIN proyectos p;
```

Con nuestros 5 empleados y 2 proyectos (la tabla `proyectos` de la sección
anterior), obtenemos 5 × 2 = 10 filas:

**Resultado**

| nombre | nombre_proyecto |
| ------ | ----------------- |
| Juan   | Rediseño Web       |
| Juan   | App Móvil          |
| María  | Rediseño Web       |
| María  | App Móvil          |
| Carlos | Rediseño Web       |
| Carlos | App Móvil          |
| Ana    | Rediseño Web       |
| Ana    | App Móvil          |
| Luis   | Rediseño Web       |
| Luis   | App Móvil          |

Fíjate que hasta Luis aparece 😉, aunque no tenga departamento asignado —
`CROSS JOIN` no evalúa ninguna condición de coincidencia, así que le da
exactamente igual si existe alguna relación lógica entre las tablas o no.
Simplemente combina todo con todo.

<div class="rounded-3xl shadow-md bg-red-100 my-8 p-6 md:p-3 border-l-8 border-red-300 flex flex-col md:flex-row items-center gap-6">

<div class="shrink-0">
    <img src="/img/post-6-ex-4.png" alt="JOINs unidos" class="rounded-3xl w-80 md:w-50 shadow-lg">
  </div>

    <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">  <strong>⚠️ CUIDADO:</strong> Un CROSS JOIN sin una cláusula WHERE clara puede generar resultados <strong>exponencialmente grandes</strong>, consumiendo memoria y tiempo. Si tuvieras 100 empleados y 20 proyectos, obtendrías 2000 filas. Úsalo deliberadamente cuando realmente necesites todas las combinaciones (calendarios, matrices de precios, etc.), no por accidente.</p>

</div>

**Caso de uso legítimo**: Generar un calendario de todos los días de un mes
combinado con todos los empleados (para asignaciones de turnos).

#### 8. Filtrado en JOINs: WHERE vs ON

Una pregunta común: ¿Dónde va el filtro, en `ON` o en `WHERE`? La diferencia
parece sutil, pero cambia por completo el resultado. Comparemos con datos
reales, filtrando por el departamento IT:

```sql
-- Opción 1: Filtro en ON
SELECT e.nombre, d.nombre_departamento
FROM empleados e
LEFT JOIN departamentos d ON e.id_departamento = d.id_departamento
  AND d.nombre_departamento = 'IT';
```

**Resultado (Opción 1 — filtro en ON): 5 filas**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| María  | NULL                  |
| Carlos | IT                    |
| Ana    | NULL                  |
| Luis   | NULL                  |

```sql
-- Opción 2: Filtro en WHERE
SELECT e.nombre, d.nombre_departamento
FROM empleados e
LEFT JOIN departamentos d ON e.id_departamento = d.id_departamento
WHERE d.nombre_departamento = 'IT';
```

**Resultado (Opción 2 — filtro en WHERE): 2 filas**

| nombre | nombre_departamento |
| ------ | -------------------- |
| Juan   | IT                    |
| Carlos | IT                    |

**La diferencia es crítica con LEFT/RIGHT/FULL JOINs:**

- **Con ON**: El filtro ocurre antes del JOIN, así que en el LEFT JOIN,
  seguimos viendo a todos los empleados, pero con `nombre_departamento = NULL`
  para quienes no están en IT.
- **Con WHERE**: El filtro ocurre después del JOIN, eliminando esas filas con
  `NULL`, transformando efectivamente el `LEFT JOIN` en un `INNER JOIN` — por
  eso pasamos de 5 filas a solo 2.

Con `INNER JOINs` no hay diferencia práctica en el resultado, pero la
legibilidad es distinta: usa `ON` para la lógica de conexión, `WHERE` para
filtrar resultados finales.

## Conclusión

Los JOINs son la espina dorsal(y aveces un dolor de cabeza) de cualquier consulta SQL medianamente compleja.
Entenderlos profundamente — cuándo usar `INNER`, cuándo `LEFT`, cómo evitar el
producto cartesiano — es la diferencia entre un desarrollador que "hace
funcionar las cosas" y uno que entiende realmente cómo los datos fluyen a través
de la base de datos.

La normalización divide los datos por eficiencia, los JOINs los reconstruyen
por claridad.

En la próxima entrada aprenderemos sobre **agregaciones**: `COUNT`, `SUM`,
`AVG`, y la cláusula `GROUP BY`. Veremos cómo transformar millones de filas
individuales en resúmenes significativos: "¿Cuántos empleados por departamento?"
o "¿Cuál es el salario promedio por región?"

¡Nos vemos en la próxima consulta! 😉


