---
title: "SQL Zero to Hero"
type: "post"
draft: false
layout: "layout.jsx"
tags:
  - posts
  - pruebas
date: 2024-11-20
description: "Introducción a SQL"
---


# SQL Zero to Hero 🏛️
<img src="/img/zero-to-hero.png" alt="Hércules con el logo de SQL" style="float: right; width: 50%; margin-left: 15px;"> 

Inspirado en la canción de Hércules, esta sección busca llevarte **de cero a héroe en SQL**:  
"*He showed the moxie, brains, and spunk, from zero to hero 🎶*" 

En esta sección aprenderás paso a paso cómo funciona este lenguaje y cómo usarlo para trabajar con bases de datos.

Comencemos por conocer que es, SQL (Structured Query Language) es un lenguaje de programación utilizado
para interactuar con bases de datos relacionales. Sus fundamentos incluyen:

- **Declarativo**: SQL indica al motor de la base de datos qué hacer, no cómo hacerlo.
- **Independencia del sistema**: funciona en cualquier sistema de base de datos relacional, sin importar el fabricante.
- **Estructurado**: utiliza una sintaxis específica para consultas y comandos.
- **Basado en conjuntos**: trabaja con conjuntos de datos, no con registros individuales.
 
 ### Tipos de declaraciones en SQL


Para trabajar con SQL se utilizan sistemas de gestión de bases de datos como **MySQL**, **Microsoft SQL Server**, **PostgreSQL** y **Oracle Database**.  
Aunque todos ellos se basan en el mismo estándar, cada motor incorpora sus propias variaciones en la implementación de los comandos, lo que se conoce como *dialectos de SQL*.  
Estas diferencias pueden generar cierta confusión al inicio, especialmente si estas comenzando a aprender el lenguaje.

SQL es un lenguaje muy versátil ya que permite crear tablas, insertar y modificar registros, añadir índices, consultar información y mucho más.  
Para entender mejor todas las operaciones que se pueden realizar en una base de datos, resulta útil dividir SQL en distintos **sublenguajes**, cada uno enfocado en un tipo específico de tarea:

- **Lenguaje de Consulta de Datos (DQL)**: se encarga de leer o consultar la información almacenada en la base de datos. En SQL, esto corresponde principalmente al comando `SELECT`.  

- **Lenguaje de Manipulación de Datos (DML)**: se utiliza para añadir, actualizar o eliminar registros dentro de las tablas. Aquí entran los comandos `INSERT`, `UPDATE` y `DELETE`.  

- **Lenguaje de Definición de Datos (DDL)**: define la estructura de la base de datos, es decir, cómo se organizan los datos. Incluye comandos como `CREATE TABLE`, `ALTER TABLE` y `DROP TABLE`.  

- **Lenguaje de Control de Datos (DCL)**: gestiona la seguridad y administración de la base de datos, especialmente los permisos de acceso para los usuarios. Los comandos más comunes son `GRANT`, `REVOKE` y `DENY`.  

A continuación repasaremos estos sublenguajes a detalle, usaremos la tabla `BIRDS` para las consultas que realizaremos como ejemplo:

| ID | NAME   | COLOR  |
|----|--------|--------|
| 1  | EAGLE  | BROWN  |
| 2  | CANARY | YELLOW |
| 3  | SWAN   | WHITE  |

### Lenguaje de Consulta de Datos (DQL)

El DQL es la parte del SQL encargada exclusivamente de consultar datos, es decir, leer y recuperar información de una base de datos.

Aunque tradicionalmente se incluye dentro del DML, muchos motores y autores lo separan porque su objetivo no es modificar datos, sino extraerlos, transformarlos y presentarlos.

Para comprender qué es el Lenguaje de Consulta de Datos (DQL), basta con conocer un único comando: SELECT.
Este comando nos permite leer información de una tabla sin modificarla.


Primero el caso más simple: obtener todos los registros

```sql
SELECT * FROM BIRDS;
```
Ahora seleccionar algunas columnas

```sql
SELECT ID,NAME FROM BIRDS;
```
Si queremos seleccionar solo los pajaros de color blanco

```sql
SELECT * FROM BIRDS
WHERE COLOR = 'WHITE';
```
O si queremos ordenar alfabeticamente los resgistros

```sql
SELECT nombre, color
FROM birds
ORDER BY nombre ASC;
``` 


### Lenguaje de Manipulación de Datos (DML)

El DML agrupa los comandos que permiten trabajar directamente con la información almacenada en una base de datos.  
Con ellos podemos **insertar nuevas filas**, **modificar registros existentes** o **eliminar datos** de una tabla.


### INSERT
Si quisiéramos añadir un nuevo registro para un **parrot de color verde**, usaríamos el comando `INSERT`:

```sql
INSERT INTO BIRDS (ID, NAME, COLOR)
VALUES (4, 'PARROT', 'GREEN');
```

### UPDATE
Supongamos que queremos corregir el color del **CANARY** y cambiarlo a **ORANGE**. Para actualizar un registro utilizamos `UPDATE` junto con una condición:

```sql
UPDATE BIRDS
SET COLOR = 'ORANGE'
WHERE NAME = 'CANARY';
```
### DELETE
Finalmente, si deseamos eliminar el registro del SWAN, podemos hacerlo con el comando DELETE:

```sql
DELETE FROM BIRDS
WHERE NAME = 'SWAN';
```
## Lenguaje de Definición de Datos (DDL)

El **Lenguaje de Definición de Datos (DDL)** agrupa los comandos que permiten **crear, modificar y eliminar** la estructura de los objetos dentro de una base de datos.  
Con ellos definimos cómo estarán organizados los datos en las tablas, qué restricciones tendrán y cómo se relacionarán entre sí.


### CREATE TABLE
Para crear la tabla `BIRDS` desde cero, usamos el comando `CREATE TABLE`:

```sql
CREATE TABLE BIRDS (
    ID INT PRIMARY KEY,
    NAME VARCHAR(50),
    COLOR VARCHAR(20)
);
```
### ALTER TABLE
Si más adelante queremos añadir una nueva columna, por ejemplo `HABITAT`, podemos hacerlo con 'ALTER TABLE`:

```sql
ALTER TABLE BIRDS
ADD HABITAT VARCHAR(50);
```

También podemos modificar el tamaño de una columna existente:

```sql
ALTER TABLE BIRDS
MODIFY COLOR VARCHAR(30);
```

### DROP TABLE

Si ya no necesitamos la tabla `BIRDS`, podemos eliminarla con `DROP TABLE`:

```sql
DROP TABLE BIRDS;
```
Los comandos **CREATE, ALTER y DROP** son las operaciones fundamentales del DDL. Gracias a ellos definimos la estructura de nuestras bases de datos, mientras que los comandos del DML (como INSERT, UPDATE, DELETE) se encargan de manipular los datos que viven dentro de esa estructura.

## Lenguaje de Control de Datos (DCL)

El **Lenguaje de Control de Datos (DCL)** agrupa los comandos que permiten **gestionar la seguridad y los permisos** dentro de una base de datos.  
Con ellos podemos otorgar o revocar privilegios a los usuarios, controlando quién puede consultar, modificar o administrar los objetos de la base de datos.

Los comandos principales son:

- **GRANT**: concede permisos a un usuario.  
- **REVOKE**: elimina permisos previamente otorgados.  
- **DENY** (en algunos motores como SQL Server): bloquea explícitamente un permiso, incluso si fue concedido por otro rol.

---

### Continuamos usando como ejemplo la tabla `BIRDS`

| ID | NAME   | COLOR  |
|----|--------|--------|
| 1  | EAGLE  | BROWN  |
| 2  | CANARY | YELLOW |
| 3  | SWAN   | WHITE  |

#### GRANT
Si queremos permitir que el usuario **Ana** pueda consultar los datos de la tabla `BIRDS`, usamos:

```sql
GRANT SELECT ON BIRDS TO Ana;
```

#### REVOKE
Si más adelante decidimos quitarle ese permiso, utilizamos:
```sql
REVOKE SELECT ON BIRDS FROM Ana;
```
#### DENY (solo en SQL Server)
En SQL Server, además de REVOKE, existe DENY. Por ejemplo, para impedir que el usuario Carlos pueda eliminar registros de la tabla BIRDS:
```sql
DENY DELETE ON BIRDS TO Carlos;
```
#### 📌 Algunos cambian según el motor de base de datos
- Oracle y MySQL: utilizan principalmente `GRANT` y `REVOKE`.

- PostgreSQL: también soporta `GRANT` y `REVOKE`, pero con sintaxis distinta.

- SQL Server: además de `GRANT` y `REVOKE`, incluye `DENY` para mayor control.

En resumen, el DCL es fundamental para mantener la seguridad y control de acceso en una base de datos, asegurando que cada usuario tenga únicamente los permisos necesarios para realizar sus tareas.

###  Conclusión de esta sección

Hasta aquí hemos explorado tres pilares fundamentales de SQL:
- **DQL**: para leer o consultar los datos(SELECT)
- **DML**: para manipular los datos (INSERT, UPDATE, DELETE).  
- **DDL**: para definir la estructura de las tablas y otros objetos (CREATE, ALTER, DROP).  
- **DCL**: para gestionar permisos y seguridad (GRANT, REVOKE, DENY).  

Con estos comandos ya puedes **crear una tabla, llenarla con información, modificarla y controlar quién tiene acceso a ella**.  
Son las bases que todo héroe de SQL necesita dominar antes de avanzar hacia retos más complejos.




