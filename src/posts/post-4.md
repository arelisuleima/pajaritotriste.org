---
title: "Introducción a SQL: 3. Lenguaje de Definición de Datos(DDL)"
type: "post"
draft: false
layout: "postLayout.jsx"
tags:
  - introduccion-sql
  - SQL
description: "Tipos de datos y creación de tablas"
date: 2026-03-19
image: "/img/post-4.png"
---

En nuestra entrada anterior aprendimos a consultar información con SELECT. Pero,
¿de dónde salen esas tablas? ¿Quién define que un salario debe ser un número y
no un texto? Aquí es donde entra el DDL (Data Definition Language).
Anteriormente explique que exiten diferentes tipos de declaraciones SQL que son
caracterizadas en distintos tipos o bien sublenguajes que agrupan las
declaraciones dependiendo del tipo de consulta que se vaya a realizar, en esta
publicación las explicare a detalle.

#### Tipos de datos

Pero antes de comenzar rapidamente te explicare que son los tipos de datos y es
que de manera superficial como se vio antes los tipos de datos se asignas a
columnas al momento de crear una tabla, esto para especificar que los datos
incorporados a esta columna cumplan con ese tipo de dato y que en caso de que el
dato no cumpla entonces marcara error. Esto no es solo por orden si no tambien
para que el motor de base de datos sepa cuanta memoria reservar y qué
operaciopnes permitir(por ejemplo, no puedes sumar 2 nombres, ni contar los
caracteres de un numero decimal).

Aunque cada motor de base de datos tiene sus propios tipos de datos que varian
uno de otro, esta ocasión los agrupare sencillamente en los siguientes:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">

<div class="rounded-4xl shadow-md bg-pink-50/50 p-6 border-t-8 border-pink-300 flex flex-col h-full">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-2xl">🔤</span>
      <h4 class="text-[#3a0159] font-extrabold text-xl m-0">Datos de Texto</h4>
    </div>
    <p class="text-sm text-gray-600 mb-4 italic">Para nombres, correos o cualquier combinación de letras y símbolos.</p>
    <ul class="text-sm text-gray-700 space-y-3 list-none p-0 m-0">
      <li class="flex gap-2"><strong>CHAR(n):</strong>  “Carácter”, acepta cualquier carácter alfanumérico. La 'n' indica la longitud deseada</li>
      <li class="flex gap-2"><strong>VARCHAR(n):</strong>  “Carácter variable”, acepta cualquier variable alfanumérica.La ‘n’ indica la longitud máxima y es necesario indicar la longitud. El valor mínimo para ’n’ es 1 y el valor máximo es 4,000 bytes.
</li>
      <li class="flex gap-2"><strong>TEXT / CLOB:</strong> "Objetos grandes". Se usa para textos largos de hasta 4GB.</li>
    </ul>
  </div>

<div class="rounded-4xl shadow-md bg-blue-50/50 p-6 border-t-8 border-blue-300 flex flex-col h-full">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-2xl">🔢</span>
      <h4 class="text-[#3a0159] font-extrabold text-xl m-0">Datos Numéricos</h4>
    </div>
    <p class="text-sm text-gray-600 mb-4 italic">Para los números.</p>
    <ul class="text-sm text-gray-700 space-y-3 list-none p-0 m-0">
      <li class="flex gap-2"><strong>INT / INTEGER:</strong> Números enteros. Ideales para contadores, IDs o cantidades de inventario.</li>
      <li class="flex gap-2"><strong>NUMBER(m,n):</strong>  Este tipo de dato acepta datos numéricos incluidos el cero, números positivos y negativos. La 'm' representa el número total máximo de dígitos significativos que puede tener el número (incluyendo los que están antes y después del punto decimal). La 'n' representa el número de dígitos a la derecha del punto decimal. Si se omite, por defecto es 0.
      <li class="flex gap-2"><strong>FLOAT / REAL:</strong> Punto flotante. Se usa para almacenar valores numéricos con decimales.</li>
    </ul>
  </div>

<div class="rounded-4xl shadow-md bg-green-50/50 p-6 border-t-8 border-green-300 flex flex-col h-full">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-2xl">📅</span>
      <h4 class="text-[#3a0159] font-extrabold text-xl m-0">Fecha y Hora</h4>
    </div>
    <p class="text-sm text-gray-600 mb-4 italic">SQL estandariza los formatos regionales para evitar errores.</p>
    <ul class="text-sm text-gray-700 space-y-3 list-none p-0 m-0">
      <li class="flex gap-2"><strong>DATE:</strong> Guarda año, mes y día. En Oracle, incluye la hora automáticamente.</li>
      <li class="flex gap-2"><strong>TIME:</strong> Almacena solo la hora (HH:MM:SS).</li>
      <li class="flex gap-2"><strong>TIMESTAMP:</strong> El más completo. Incluye milisegundos y zonas horarias.</li>
    </ul>
  </div>

<div class="rounded-4xl shadow-md bg-purple-50/50 p-6 border-t-8 border-purple-300 flex flex-col h-full">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-2xl">⚙️</span>
      <h4 class="text-[#3a0159] font-extrabold text-xl m-0">Especiales</h4>
    </div>
    <p class="text-sm text-gray-600 mb-4 italic">Tipos lógicos y almacenamiento de archivos binarios.</p>
    <ul class="text-sm text-gray-700 space-y-3 list-none p-0 m-0">
      <li class="flex gap-2"><strong>BOOLEAN:</strong> Verdadero (TRUE) o Falso (FALSE). <span class="text-[10px] text-purple-600 font-bold opacity-70">En Oracle usa CHAR(1)</span>.</li>
      <li class="flex gap-2"><strong>BLOB / BYTEA:</strong> Objetos binarios. Para guardar imágenes o PDFs directamente.</li>
    </ul>
  </div>

</div>

#### Consideraciones en la creación de objetos

Para que tu base de datos sea escalable, te recomiendo seguir estas reglas al
nombrar tablas, columnas o índices:

- **Unicidad y Espacios de Nombre (Namespace)**: Los nombres de los objetos
  deben ser únicos dentro de su esquema. No puedes tener una tabla y una vista
  con el mismo nombre en el mismo lugar.

- **Palabras Reservadas**: Nunca nombres un objeto como una función del lenguaje
  (ej. no llames a tu tabla SELECT, TABLE o WHERE). Esto generaría errores de
  sintaxis constantes.
- **Mayusculas o minusculas**: * Si creas un objeto (ej. CREATE TABLE
  empleados), el motor lo tratará como insensible a mayúsculas (aunque
  internamente lo guarde en mayúsculas). Podrás llamarlo como empleados,
  EMPLEADOS o Empleados sin problemas.

- **Longitud y Caracteres**: La mayoría de los motores (como Oracle o MySQL)
  tienen un límite de caracteres para los nombres (normalmente 30 o 128
  caracteres). Además, deben comenzar siempre con una letra y evitar caracteres
  especiales como espacios o guiones medios (-); en su lugar, usa el guion bajo
  (_).

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-10 border-l-8 border-amber-300">
<div class="md:float-right  md:mr-1  mx-1 ">
  <img src="/img/post-4-ex1.jpg" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>
  <p class="text-base md:text-lg font-bold mb-2">
    💡 TIP: Evita el uso de comillas en los nombres de los objetos.
  </p>
  <p class="text-base md:text-lg leading-relaxed italic">
Si usas comillas (ej. CREATE TABLE "Empleados"), obligas al motor a que sea sensible (Case-Sensitive). Esto significa que siempre, de por vida, tendrás que escribirlo exactamente igual y con comillas, lo cual complica mucho la programación y el mantenimiento.
  </p>

<p class="text-sm md:text-base  mt-4 leading-relaxed">
  Usa siempre minúsculas, mayúsculas o snake_case (ej. detalle_ventas) para mayor compatibilidad.
  </p>

</div>

### Creación de tablas y campos

Ahora si vamos a lo bueno, la creación de nuestro primer objeto en la base de
datos. La instrucción **CREATE TABLE** define una tabla en la base de datos. La
definición debe de incluir el nombre de la tabla y los nombres y atributos de
sus columnas. La estructura básica sigue este patrón:

```SQL
CREATE TABLE nombre_de_tabla (
    nombre_columna1 tipo_de_dato restricciones,
    nombre_columna2 tipo_de_dato restricciones,
    ...
    restricciones_de_tabla
);
```

**1. Definición de Columnas** Cada columna es un contenedor para un atributo
específico de tus datos. Al declararlas, debes seguir este orden:

- Identificador: El nombre del campo (ej. email, precio).
- Tipo de Dato: (Ej. INT, VARCHAR, DATE).
- Restricciones de Columna: Reglas inmediatas como NOT NULL (No
  nulo-obligatorio) o UNIQUE (único, no repetido).

**2. Las Restricciones (Constraints)** A diferencia de las restricciones de
columna, estas se suelen escribir al final de la lista de campos. Son reglas que
afectan a toda la tabla o relacionan varias columnas. La más importante es la
Primary Key.

#### Ejemplo práctico para Oracle SQL Developer

```sql
CREATE TABLE empleados (
  id_empleado NUMBER(10) PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  fecha_nacimiento DATE,
  salario NUMBER(10,2) DEFAULT 0,
  departamento VARCHAR(50) REFERENCES departamentos(nombre)
);
```

#### Diccionario de Datos: Tabla `empleados`

| Campo                | Descripción                         | Tipo de Dato   | Constraint / Atributo              |
| :------------------- | :---------------------------------- | :------------- | :--------------------------------- |
| **id_empleado**      | Identificador único del empleado.   | `NUMBER(10)`   | `PRIMARY KEY`                      |
| **nombre**           | Nombre(s)                           | `VARCHAR(50)`  | `NOT NULL`                         |
| **apellido**         | Apellido(s)                         | `VARCHAR(50)`  | `NOT NULL`                         |
| **fecha_nacimiento** | Fecha de nacimiento                 | `DATE`         | _Ninguna_                          |
| **salario**          | Remuneración económica mensual.     | `NUMBER(10,2)` | `DEFAULT 0`                        |
| **departamento**     | Nombre del área a la que pertenece. | `VARCHAR(50)`  | `REFERENCES departamentos(nombre)` |

<div class="md:float-left  md:mr-2  mx-2 md: ml-3">
  <img src="/img/post-4-ex2.jpg" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>
<div class="rounded-3xl shadow-md bg-blue-100 my-8 p-6 md:p-10 border-l-8 border-blue-300">

<p class="text-base md:text-lg font-bold mb-2">

    💡 TIP: Autoincrementables

</p>
  <p class="text-base md:text-lg leading-relaxed italic">
Algo muy común es que los ID se generen "solos", para esto te dejo algunas opciones de como lo podrias hacer segun el motor de base de datos que utilices:
  </p>

</div>

```sql
-- MySQL: 
id_empleado INT PRIMARY KEY AUTO_INCREMENT
--PostgreSQL:
 id_empleado SERIAL PRIMARY KEY
--SQL Server: 
id_empleado INT PRIMARY KEY IDENTITY(1,1)
---Oracle: 
id_empleado NUMBER GENERATED BY DEFAULT AS IDENTITY
```

### Modificando la estructura: ALTER TABLE

¿Qué pasa si después de crear nuestra tabla empleados nos damos cuenta de que
olvidamos el campo del correo electrónico o que el apellido debe ser más largo?
Para eso usamos ALTER TABLE. Esta instrucción nos permite modificar la
definición de una tabla existente sin necesidad de borrarla y volverla a crear
(lo cual borraría todos los datos).

**1. Agregar una nueva columna (ADD)** Si queremos añadir el campo de email,
usamos **ADD**.

```SQL
-- Se agrega la columna email
ALTER TABLE empleados 
ADD email VARCHAR2(100);
```

- Nota: No puedes añadir una columna como NOT NULL en una tabla que ya tiene
  datos, a menos que le des un valor por defecto (DEFAULT), porque SQL no sabría
  qué poner en las filas que ya existen.

<div class="md:float-right  md:mr-1.5  mx-1 ">
  <img src="/img/post-4-ex3.jpg" alt="Reaction pic asombro" class="rounded-4xl w-50 shadow-md">

</div>
<div class="rounded-3xl shadow-md bg-red-100 my-8 p-6 md:p-10 border-l-8 border-red-300">

<p class="text-base md:text-lg font-bold mb-2">
    🔴 Dato importante:
  </p>
  <p class="text-base md:text-lg leading-relaxed italic">
 Al agregar una columna a una tabla que ya tiene registros, SQL por defecto la creará con valores NULL para todos los empleados existentes.
  </p>

</div>

**2. Modificar una columna existente (MODIFY / ALTER)** Si el campo apellido se
quedó corto y necesitamos que acepte más caracteres, o si queremos cambiar un
tipo de dato.

- Nota: En Oracle se usa MODIFY, mientras que en SQL Server o PostgreSQL se usa
  ALTER COLUMN.

```SQL
-- Ejemplo en Oracle
ALTER TABLE empleados 
MODIFY apellido VARCHAR2(100);
```

**3. Eliminar una columna (DROP COLUMN)** Si decidimos que ya no necesitamos un
dato, podemos eliminar la columna permanentemente. Pero con cuidado ya que esto
borrará todos los datos contenidos en esa columna para siempre.

```SQL
--Se elimina la columna fecha_nacimiento
ALTER TABLE empleados 
DROP COLUMN fecha_nacimiento;
```

- Nota: Si intentas borrar una columna que es parte de una Primary Key o que
  está siendo referenciada por otra tabla (Foreign Key), el sistema te dará un
  error de integridad.

**4. Cambiar el nombre de una columna (RENAME COLUMN)** A veces el nombre
original no es lo suficientemente claro. Podemos renombrarlo sin afectar los
datos.

```SQL
-- Se renombra la columna salario a sueldo_mensual
ALTER TABLE empleados 
RENAME COLUMN salario TO sueldo_mensual;
```

### Conclusión

Yo se que al principìo puede parecer mucho texto y explicación como se crean las
tablas y los campos sin embargo con mucha practica despues sera facil reconocer
los tipos de datos y restricciones que existen. Abajo te dejo una lista de todos
los **tipos de datos** que existen segun el motor de base de datos que utilices
ya que dependiendo el caso podria variar:

<div class="rounded-3xl shadow-md bg-green-100 my-8 p-6 md:p-10 border-l-8 border-green-300">

### Documentación Oficial

| Motor de BD         | Enlace a Tipos de Datos y Constraints                                                                    | Nota del Dialecto                          |
| :------------------ | :------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| **Oracle Database** | [Ver documentación](https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Data-Types.html) | Utiliza `NUMBER` y `VARCHAR2`.             |
| **PostgreSQL**      | [Ver documentación](https://www.postgresql.org/docs/current/datatype.html)                               | Muy apegado al estándar SQL.               |
| **MySQL**           | [Ver documentación](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)                             | Popular por su manejo de `AUTO_INCREMENT`. |
| **SQL Server**      | [Ver documentación](https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql)      | Usa `IDENTITY` para llaves primarias.      |
| **SQLite**          | [Ver documentación](https://www.sqlite.org/datatype3.html)                                               | Sistema simplificado (ideal para móviles). |

</div>

Recuerda que sin una estructura sólida definida con CREATE y ALTER, la
información no tendría orden. Al entender cómo construir y modificar estos
objetos, ya tienes la base.

_**¿Qué sigue?**_ En la próxima entrada entraremos de lleno al DML (Data
Manipulation Language), donde aprenderás el famoso CRUD: Crear, Leer, Actualizar
y Borrar los registros dentro de tus tablas.

Nos vemos en la próxima consulta!
