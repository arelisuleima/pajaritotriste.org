---
title: "Introducción a SQL: 3. Lenguaje de Manipulación de Datos (DML)"
type: "post"
draft: false
tags:
  - SQL
  - introduccion-sql
layout: "postLayout.jsx"
image: "/img/post-5.png"
date: 2026-05-25
---

En la entrada anterior hablamos del **DDL (Data Definition Language)**, que es
el conjunto de instrucciones que nos permite _construir_ la estructura de
nuestra base de datos: crear tablas, definir columnas y establecer tipos de
datos. En pocas palabras, el DDL levanta los muros del edificio.

Ahora bien, un edificio vacío no sirve de mucho. Es aquí donde entra el **DML
(Data Manipulation Language)**: el subconjunto de SQL que nos permite _vivir
dentro_ de esa estructura. Insertar datos, consultarlos, modificarlos y
eliminarlos cuando ya no los necesitamos.

Si el DDL construye el recipiente, el DML es todo lo que pasa adentro.

---

## El CRUD: el ciclo de vida de cualquier dato

<div class="md:float-right  md:mr-2  mx-2 md: ml-3">
  <img src="/img/post-5-ex3.png" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>

Antes de ver las instrucciones una por una, hay un concepto que vale la pena
grabarse: **CRUD**.

CRUD es un acrónimo que resume las cuatro operaciones fundamentales que se
pueden realizar sobre cualquier conjunto de datos, sin importar si estás
construyendo una red social, el sistema de una clínica o la app de notas de tu
teléfono:

| Letra | Operación           | Instrucción SQL |
| ----- | ------------------- | --------------- |
| **C** | Create (Crear)      | **INSERT**      |
| **R** | Read (Leer)         | **SELECT**      |
| **U** | Update (Actualizar) | **UPDATE**      |
| **D** | Delete (Eliminar)   | **DELETE**      |

Cada vez que interactúas con una aplicación estás ejecutando, de fondo, alguna
combinación de estas cuatro operaciones. Veámoslas en detalle.

---

## 1. INSERT — Añadiendo nuevos registros

La instrucción **INSERT** es la que usamos para añadir filas nuevas a una tabla.
Su sintaxis básica es la siguiente:

```sql
INSERT INTO nombre_tabla (columna1, columna2, columna3)
VALUES (valor1, valor2, valor3);
```

Usando la tabla **empleados** que creamos en la entrada anterior, un ejemplo
real se vería así:

```sql
INSERT INTO empleados (id_empleado, nombre, apellido, salario)
VALUES (1, 'Eugenio', 'Cangrejo', 5000.00);
```

Algunas reglas importantes a tener en cuenta:

- **El orden importa.** Los valores en **VALUES** deben corresponder, posición
  por posición, con las columnas que especificaste.
- **Los textos van entre comillas simples.** Los números no las necesitan.
- **No repitas la PRIMARY KEY.** Si intentas insertar un **id_empleado** que ya
  existe en la tabla, el motor de base de datos te devolverá un error. Las
  llaves primarias son únicas por definición.

### Insertando varios registros a la vez

No es necesario escribir un **INSERT** por cada fila. Puedes insertar múltiples
registros en una sola instrucción separando cada conjunto de valores con una
coma:

```sql
INSERT INTO empleados (id_empleado, nombre, apellido, salario)
VALUES
  (2, 'Bob',   'Esponja',  3200.00),
  (3, 'Arenita', 'Mejillas', 4800.00),
  (4, 'Calamardo', 'Tentáculos', 3900.00);
```

Esto es mucho más eficiente que lanzar tres instrucciones separadas,
especialmente cuando tienes que cargar datos de forma masiva.

---

## 2. SELECT — Consultando la información

El **SELECT** es, sin exageración, la instrucción más importante y más usada en
SQL. Todo el trabajo de modelado, inserción y mantenimiento de datos existe, en
última instancia, para poder _consultarlo_ de forma útil.

<div class="md:float-right  md:mr-2  mx-2 md: ml-3">
  <img src="/img/post-5-ex2.png" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>

Su forma más básica recupera todas las columnas de una tabla:

```sql
SELECT *
FROM empleados;
```

El asterisco `*` significa "todas las columnas". Pero en la práctica casi nunca
querrás traer todo: es más limpio y más eficiente especificar exactamente qué
columnas necesitas:

```sql
SELECT nombre, apellido, salario
FROM empleados;
```

### Filtrando resultados con WHERE

La cláusula **WHERE** es lo que convierte un **SELECT** genérico en una consulta
precisa. Permite filtrar las filas que cumplan una condición:

```sql
SELECT nombre, apellido, salario
FROM empleados
WHERE salario > 4000;
```

Esta consulta devolvería únicamente a Eugenio Cangrejo y a Arenita Mejillas, que
son quienes tienen salario mayor a 4,000.

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-10 border-l-8 border-amber-300">

💡 Nota: Por convención, las palabras reservadas de SQL (SELECT, FROM, WHERE) se
escriben en mayúsculas, y los nombres definidos por el usuario —tablas,
columnas— en minúsculas. No es obligatorio, pero hace el código mucho más
legible y es la práctica estándar en equipos profesionales.

</div>

El **SELECT** tiene muchísimas más capacidades —ordenar resultados, agrupar,
combinar tablas, funciones de agregación— que iremos explorando en profundidad
en las próximas entradas de esta serie. Por ahora, lo esencial es entender que
es tu principal herramienta para _leer_ datos.

---

## 3. UPDATE — Modificando registros existentes

Los datos cambian. Los empleados reciben aumentos, se corrigen errores de
captura, se actualizan estados. Para eso existe el **UPDATE**.

```sql
UPDATE empleados
SET salario = 5500.00
WHERE id_empleado = 1;
```

Esta instrucción encuentra al empleado con **id_empleado = 1** (Eugenio
Cangrejo) y actualiza su salario a 5,500.

También puedes actualizar varias columnas en la misma instrucción, separándolas
con comas dentro del **SET**:

```sql
UPDATE empleados
SET salario = 5500.00,
    apellido = 'Harold-Cangrejo'
WHERE id_empleado = 1;
```

### ⚠️ La regla de oro del UPDATE: nunca olvides el WHERE

<div class="md:float-left  md:mr-2  mx-2 md: ml-3">
  <img src="/img/post-5-ex4.png" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>

Si ejecutas un **UPDATE** sin **WHERE**, no actualizas un registro. Actualizas
**todos** los registros de la tabla:

```sql
-- ¡PELIGRO! Esto le asigna salario 5500 a TODOS los empleados
UPDATE empleados
SET salario = 5500.00;
```

Este es uno de los errores más costosos que puede cometer alguien que trabaja
con bases de datos en producción. Antes de ejecutar cualquier **UPDATE**,
acostúmbrate a verificar dos veces que tu cláusula **WHERE** sea correcta y
específica.

---

## 4. DELETE — Eliminando registros

Cuando un dato ya no debe existir, lo eliminamos con **DELETE**:

```sql
DELETE FROM empleados
WHERE id_empleado = 4;
```

<div class="md:float-left  md:mr-2  mx-2 md: ml-3">
  <img src="/img/post-5-ex1.png" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>

Esto elimina únicamente la fila del empleado con **id_empleado = 4**. La misma
advertencia del **UPDATE** aplica aquí con el doble de urgencia: un **DELETE**
sin **WHERE** borra _**todas las filas**_ de la tabla.

```sql
-- ¡Cuidado! Esto vacía toda la tabla empleados
DELETE FROM empleados;
```

### DELETE vs. TRUNCATE: ¿cuál es la diferencia?

Es común confundir estas dos instrucciones porque ambas eliminan registros, pero
son fundamentalmente distintas:

|                       | **DELETE**                     | **TRUNCATE**                     |
| --------------------- | ------------------------------ | -------------------------------- |
| **Pertenece a**       | DML                            | DDL                              |
| **Velocidad**         | Más lento (fila por fila)      | Muy rápido (de una sola vez)     |
| **Filtros con WHERE** | ✅ Sí permite                  | ❌ No permite                    |
| **Se puede deshacer** | ✅ Sí (con ROLLBACK)           | ❌ No (en la mayoría de motores) |
| **Uso típico**        | Eliminar registros específicos | Vaciar completamente una tabla   |

Si necesitas borrar algunos registros puntuales, usa **DELETE**. Si necesitas
limpiar una tabla entera para recargarla —como en procesos de carga de datos—
**TRUNCATE** es más eficiente, pero úsalo con precaución.

---

## El concepto que une todo: Transacciones, COMMIT y ROLLBACK

A diferencia del DDL, donde los cambios son inmediatos e irreversibles, el DML
opera bajo el concepto de **transacciones**.

Una transacción es un grupo de operaciones que se ejecutan como una unidad.
Mientras no confirmes los cambios explícitamente, estos viven en un estado
temporal: ya los puedes ver desde tu sesión, pero aún pueden deshacerse.

Para controlar ese estado existen dos instrucciones:

**COMMIT** — Confirma y hace permanentes todos los cambios realizados desde la
última transacción.

```sql
UPDATE empleados SET salario = 6000 WHERE id_empleado = 2;
-- Verificamos que todo esté correcto...
COMMIT; -- Ahora el cambio es permanente
```

**ROLLBACK** — Deshace todos los cambios realizados desde la última transacción,
como si nunca hubieran ocurrido.

```sql
DELETE FROM empleados WHERE id_empleado = 3;
-- Nos arrepentimos...
ROLLBACK; -- El registro de Sandy Mejillas vuelve a existir
```

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-10 border-l-8 border-amber-300">
 ⚠️Importante: El comportamiento de las transacciones depende del motor de base de datos y de su configuración. Muchos entornos tienen activado el autocommit por defecto, lo que significa que cada instrucción se confirma automáticamente al ejecutarse, sin posibilidad de ROLLBACK. Siempre verifica cómo está configurado tu entorno antes de asumir que puedes deshacer un cambio.
 </div>

La regla práctica: antes de ejecutar cualquier **UPDATE** o **DELETE** sobre
datos reales, asegúrate de saber si tienes una red de seguridad o no.

---

## Resumen

El DML es el conjunto de instrucciones con el que interactúas con los datos día
a día. Hoy vimos las cuatro que forman el CRUD:

- **INSERT** para agregar registros nuevos.
- **SELECT** para consultar y leer la información.
- **UPDATE** para modificar registros existentes (siempre con **WHERE**).
- **DELETE** para eliminar registros (siempre con **WHERE**).

Y el mecanismo de **transacciones** — **COMMIT** y **ROLLBACK** — que te da
control sobre cuándo los cambios se vuelven permanentes.

En la próxima entrada profundizaremos en el **SELECT**, que merece su propia
serie de entradas: filtros avanzados, ordenamiento, funciones de agregación y la
operación que más pánico genera entre quienes aprenden SQL: los **JOINs**.
