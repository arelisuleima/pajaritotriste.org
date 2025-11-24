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
<section class="cv-intro leading-relaxed">

## SQL Zero to Hero 🏛️
Inspirado en la canción de Hércules, esta sección busca llevarte **de cero a héroe en SQL**:  
aprenderás paso a paso cómo funciona este lenguaje y cómo usarlo para trabajar con bases de datos.
![Hércules con el logo de SQL](/img/zero-to-hero.png)

SQL (Structured Query Language) es un lenguaje de programación utilizado
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

A continuación repasaremos estos sublenguajes a detalle

### Lenguaje de Consulta de Datos (DQL)

El DQL es la parte del SQL encargada exclusivamente de consultar datos, es decir, leer y recuperar información de una base de datos.

Aunque tradicionalmente se incluye dentro del DML, muchos motores y autores lo separan porque su objetivo no es modificar datos, sino extraerlos, transformarlos y presentarlos.

Para comprender qué es el Lenguaje de Consulta de Datos (DQL), basta con conocer un único comando: SELECT.
Este comando nos permite leer información de una tabla sin modificarla.

A continuación, usaremos la tabla `BIRDS` para saber cómo funciona.

| ID | NAME   | COLOR  |
|----|--------|--------|
| 1  | EAGLE  | BROWN  |
| 2  | CANARY | YELLOW |
| 3  | SWAN   | WHITE  |

El caso más simple: obtener todos los registros

```sql
SELECT * FROM BIRDS;
```

- Para formatear el código: `make fmt`
</section>
