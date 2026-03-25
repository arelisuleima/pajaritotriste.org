---
title: "Introducción a SQL: 1. Del diseño a la consulta"
type: "post"
draft: false
layout: "postLayout.jsx"
tags:
  - SQL
  - introduccion-sql

description: "Entendiendo los esquemas y relaciones entre las tablas"
image: "/img/zero-to-hero.png"
date: 2026-03-13
---

En mi anterior publicación di un panorama muy general de como funcionaban los
datos, sin embargo lo que pretendo con mis siguientes entradas es enseñarte como
funcionan las bases de datos. Para esto lo principal es saber como comunicarse
con ellas.

### SQL(Structured Query Language)

Es un lenguaje de consulta estructurado utilizado para interactuar con bases de
datos relacionales. Aunque principalmente se utiliza para interactuar con datos,
se clasifica como un lenguaje declarativo de dominio especifico(DSL), no es como
tal un lenguaje de programación porque por ejemplo a comparacion de Python o
Java, no se utiliza para crear aplicaciones completas por si solo, si no que se
utiliza especificamente para interacfturar con los datos de una base de datos.

Sus fundamentos incluyen:

- **Declarativo**: SQL indica al motor de la base de datos qué hacer, no cómo
  hacerlo. El motor de base de datos es el que se encarga de procesar la
  consulta.
- **Independencia del sistema**: SQL funciona en cualquier sistema de base de
  datos relacional, sin importar el fabricante.
- **Estructurado**: Utiliza una sintaxis específica para consultas y comandos.
- **Basado en conjuntos**: SQL es un lenguaje basado en conjuntos, quiere decir
  que trabaja con conjuntos de datos en vez de operar con un solo registro a la
  vez. Esto garantiza integridad y consistencia de los datos.

### Esquemas

Antes de comenzar a escribir nuestra primera consulta, es importante conocer
cómo se organizan los datos.

En el mundo de las bases de datos (especialmente en entornos como Oracle), un
esquema (schema) es una colección lógica de objetos como tablas, índices y
vistas. Para entenderlo de forma simple: el esquema es el "contenedor" de todo
lo que creas.

Algo curioso es que un esquema suele estar ligado directamente a una cuenta de
usuario; de hecho, tiene su mismo nombre. Así, cuando decimos "el esquema de
Juan", nos referimos a todos los objetos sobre los cuales Juan tiene control y
privilegios.

Para identificar qué hay dentro de nuestra base de datos, solemos utilizar
representaciones visuales. El estándar es el **Diagrama Entidad-Relación
(ERD)**, que nos muestra de manera clara cómo se conectan los objetos entre sí.

<div class="md:float-right md:ml-4 text-center">
  <img src="/img/database-schemas.png" alt="Tipos de esquemas" class=" w-150 shadow-md">

</div>
Sin embargo mi intención no es explicar a detalle este tipo de diagrama,
unicamente utilizare por esta ocasión diagramas sencillos para que entiendas de manera clara la relación de las tablas o de los objetos que vayamos creando.

Aunque actualmente herramientas como SQL Developer o PostgreSQL nos permiten ver
listas de tablas y columnas en un panel lateral, ver el mapa completo es vital.
Es la diferencia entre leer una lista de direcciones y ver un mapa de la ciudad.
Aunque existan esquemas gigantescos que no caben en una sola pantalla, siempre
es bueno entender los cimientos.

Para que entiendas mejor por que los esquemas son importantes,veamos un ejemplo:

#### Ejemplo: La tabla infinita

Imagina que atiendes una tienda de electronica y tu jefe te solicita que envies
a los clientes por correo una factura de sus compras del mes que incluya que
compraron y el monto que pagaron por el producto.

Al principio para llevar un registro podrias pensar en guardar todo en una sola
tabla:

| Cliente | Correo        | Producto  | Precio | Fecha      |
| ------- | ------------- | --------- | ------ | ---------- |
| Juan    | juan@mail.com | Audifonos | 500    | 01/02/2025 |
| Ana     | ana@mail.com  | Mouse     | 200    | 02/02/2025 |
| Juan    | juan@mail.com | Bocina    | 700    | 04/02/2025 |

Pero, ¿cúal es el problema aqui?. Que pasa si Juan cambia su correo en la
siguiente compra, tendras que actualizarlo en cada fila donde aparezca, esto
podria generar duplicidad en los datos y posibles errores como que a Juan le
llegue incompleto el resumen de sus compras.

#### Paso 1: La solución.

Para evitar el caos anterior,lo primero que haremos será crear un diagrama. En
lugar de una gran tabla, dividimos la información en entidades lógicas(tablas) y
las conectamos.

Vamos a crear 3 tablas:

- Tabla CLIENTES
- Tabla PRODUCTOS
- Tabla PEDIDOS

<div class=" text-center">
  <img src="/img/diagrama-ejemplo1.png" alt="Diagrama" class="rounded-4xl w-200 shadow-md">
  <p class="text-xs text-purple-500 mt-2 italic">Diagrama ERD de ejemplo</p>
</div>

Como puedes ver en la imagen en algunas partes señale las iniciales **PK** y
**FK**, lo cual son lo que yo considero unas de las cosas mas importantes para
relacionar las tablas, es importante definir reglas especificas que queremos que
cumplan nuestras tablas ya que _**¿cómo sabe el sistema que el Juan que compró
unos audífonos es el mismo Juan que compró la bocina?**_, aquí es dode entran
las famosas llaves:

#### 🔑 Primary Key (PK): Identificador Único.

Imagina que en tu tienda entran dos clientes llamados "Juan Pérez". Si solo usas
el nombre, eso ya es un gran problema.

La Primary Key (Llave Primaria) es un dato que no se puede repetir y que
identifica de forma exacta a cada registro. En nuestro ejemplo, a cada cliente
le asignaremos un _ID_CLIENTE_.

**Reglas de una PK:**

- Nunca se repite: No puede haber dos clientes con el ID 1.
- Nunca es nula: No puedes tener un cliente sin ID.
- Es fija: Si a Juan le das el ID 1, ese será su identificador para siempre.

#### 🔑 Foreign Key (FK): El vínculo entre tablas

Ahora que tenemos nuestra tabla de _CLIENTES_ con su **PK**, ¿cómo la conectamos
con las compras?

No queremos volver a escribir "Juan" y "juan@mail.com" en la tabla de compras
(porque volveríamos al problema del inicio). En su lugar, en la tabla de
_COMPRAS_ solo ponemos el _ID_CLIENTE_. Ese número en la tabla de compras seria
nuestra Foreign Key (Llave Foránea). Es un valor que exite en nuestra tabla
_COMPRAS_ pero que hace referencia a la llave primaria de la tabla _CLIENTES_.

**Reglas de una FK:**

- Debe existir en el origen: No puedes registrar una compra para el cliente 99
  si ese ID no existe primero en la tabla de CLIENTES.
- No es única: A diferencia de la PK, aquí el ID 1 puede repetirse muchas veces
  (esto permite que Juan haga 20 compras distintas).
- Puede ser nula: Un registro puede no tener una FK asignada (por ejemplo, una
  venta donde el cliente no quiso dar sus datos), a menos que tú decidas que sea
  obligatoria.
- Protege la relación: No puedes borrar a un cliente si todavía tiene compras
  amarradas a su ID en la otra tabla; el sistema te detendrá para no dejar
  "datos huérfanos".

_**¿Para qué sirve?**_ Gracias a la FK, si Juan cambia su correo en la tabla de
CLIENTES, el cambio se refleja automáticamente para todas sus compras, porque la
tabla de COMPRAS solo sabe que "el cliente 1 compró algo", y siempre irá a
buscar los datos actuales del "cliente 1".

<div class="rounded-3xl shadow-md bg-amber-100 my-8 p-6 md:p-10 border-l-8 border-amber-300">
  <p class="text-base md:text-lg text-amber-900 leading-relaxed italic">
    Las llaves son un pilar fundamental de las bases de datos relacionales. Decidí explicarlas ahora porque quería mostrarte cómo se conectan las tablas de forma visual antes de pasar al código.
    <br><br>
    Entender estos detalles es vital si queremos construir diagramas sólidos y, sobre todo, porque en las siguientes publicaciones haremos consultas que involucran varias tablas a la vez. Aunque después te explicaré sobre cómo funcionan las <b>CONSTRAINTS</b>, por ahora es bueno saber cómo se relacionan entre sí; eso te ahorrará muchos dolores de cabeza cuando empecemos a escribir SQL.
  </p>
</div>

### Tipos de declaraciones en SQL

Para trabajar con SQL se utilizan sistemas de gestión de bases de datos como
**MySQL**, **Microsoft SQL Server**, **PostgreSQL** y **Oracle Database**.\
Aunque todos ellos se basan en el mismo estándar, cada motor incorpora sus
propias variaciones en la implementación de los comandos, lo que se conoce como
_dialectos de SQL_.\
Estas diferencias pueden generar cierta confusión al inicio, especialmente si
estas comenzando a aprender el lenguaje, pero te recomiendo centrarte solo en un
dialecto asi será mas fácil entender despues los demás.

Como lo dije al inicio, SQL es un lenguaje muy versátil ya que permite crear
tablas, insertar y modificar registros, añadir índices, consultar información y
mucho más.\
Para entender mejor todas las operaciones que se pueden realizar en una base de
datos, resulta útil dividir SQL en distintos **sublenguajes**, cada uno enfocado
en un tipo específico de tarea:

<div class=" md:float-right  md:ml-4 text-center">
  <img src="/img/sublenguajes.png" alt="Dialectos de SQL" class="rounded-4xl w-110 shadow-md">
  <p class="text-xs text-purple-500 mt-2 italic">Sublenguajes SQL</p>
</div>

- **Lenguaje de Consulta de Datos (DQL)**: Son las declaraciones que se encargan
  de leer o consultar la información almacenada en la base de datos. En SQL,
  esto corresponde principalmente al comando `SELECT`.

- **Lenguaje de Manipulación de Datos (DML)**: Se refiere a las declaraciones
  que son usadas para trabajar con los datos en los objetos existentes. Se
  utiliza para añadir, actualizar o eliminar registros dentro de las tablas.
  Aquí entran los comandos `INSERT`, `UPDATE` y `DELETE`.

- **Lenguaje de Definición de Datos (DDL)**: Son declaraciones usadas para
  construir objetos. Especificamente define la estructura de la base de datos,
  es decir, cómo se organizan los datos. Incluye comandos como `CREATE TABLE`,
  `ALTER TABLE` y `DROP TABLE`.

- **Lenguaje de Control de Datos (DCL)**: Gestiona la seguridad y administración
  de la base de datos, especialmente los permisos de acceso para los usuarios.
  Los comandos más comunes son `GRANT`, `REVOKE` y `DENY`.

- **Lenguaje de Control de Transacciones (TCL)**: Se encarga de gestionar los
  cambios realizados por las sentencias DML. Permite agrupar operaciones para
  que se ejecuten como una sola unidad de trabajo, asegurando que los cambios
  sean permanentes o se deshagan en caso de error. Sus comandos clave son
  `COMMIT`, `ROLLBACK` y `SAVEPOINT`.

En esta sección dedicada a los fundamentos de SQL, exploraremos a fondo el uso
de cada uno de estos comandos. Te invito a seguir pendiente de las próximas
entradas, donde pasaremos de la teoría a la acción.

#### Conclusión

Entender SQL no se trata solo de escribir código, sino de comprender la
estructura de los datos que vamos a manipular. Con esta publicación, espero
haberte transmitido por qué es importante tener un buen diseño previo antes de
siquiera escribir nuestra primer consulta

Sé que al principio la teoría puede parecer un poco pesada (créeme, a mí también
me costaba), pero es el cimiento que nos permitirá entender el qué y el porqué
de lo que estamos haciendo. En la próxima entrega, por fin escribiremos nuestra
primer consulta y aprenderemos a "interrogar" a nuestra base de datos con el
comando SELECT.

_**¡Gracias por leer y nos vemos en la próxima consulta!**_
