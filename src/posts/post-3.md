---
title: "SQL y sus tipos de datos"
type: "post"
draft: false
tags:
  - SQL
  - sql-zero-to-hero
layout: "postLayout.jsx"
---

<p>
Los tipos de datos en SQL determinan qué tipo de dato puede almacenarse en cada columna de una tabla. Su correcta elección no solo asegura la consistencia de los datos, sino que también permite optimizar el uso del almacenamiento y mejorar el rendimiento de las consultas. Seleccionar el tipo de dato adecuado es un paso fundamental en el diseño de bases de datos, ya que impacta directamente en la integridad de los datos y en la eficiencia de las aplicaciones que dependen de ella.
  </p>

### ¿Cómo utilizar los tipos de datos en SQL?

Al momento de crear una nueva tabla en SQL, cada columna debe definirse con un
tipo de dato específico. Esto garantiza que la información almacenada en esa
columna cumpla con las características y restricciones propias de dicho tipo,
asegurando consistencia y precisión en la base de datos.

## 🧮 Tipos de datos numéricos

| Tipo de dato                   | Descripción                                                                      | Características clave                                  |
| ------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `INT`, `SMALLINT`, `BIGINT`    | Números enteros de distintos tamaños.                                            | Cambia el rango y el espacio en memoria según el tipo. |
| `DECIMAL(p,s)`, `NUMERIC(p,s)` | Valores numéricos exactos con decimales, usados para dinero o cálculos precisos. | No pierde precisión; ideal para finanzas.              |
| `FLOAT`, `REAL`                | Números con decimales aproximados (punto flotante).                              | Muy rápidos, pero pueden generar errores mínimos.      |

---

## 🔤 Tipos de datos de cadena y texto

| Tipo de dato | Descripción                                                                                                                                                                            | Características clave                                                 |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `CHAR(n)`    | "Carácter", cadena de longitud fija que acepta cualquier carácter alfanumérico. La 'n' indica la longitud deseada                                                                      | Siempre ocupa el mismo espacio; útil para claves.                     |
| `VARCHAR(n)` | "Carácter variable" Cadena de longitud variable que acepta cualquier carácter alfanumérico. La 'n' indica la longitud máxima. El valor minimo para 'n' es 1 y el valor máximo es 8000. | Usa solo el espacio necesario; el más común para texto.               |
| `TEXT`       | Texto largo o contenido extenso.                                                                                                                                                       | Ideal para descripciones y artículos; menos eficiente para búsquedas. |

---

## 🕒 Tipos de datos de fecha y hora

| Tipo de dato | Descripción                    | Características clave                                   |
| ------------ | ------------------------------ | ------------------------------------------------------- |
| `DATE`       | Fecha en formato `AAAA-MM-DD`. | No almacena hora.                                       |
| `TIME`       | Hora en formato `HH:MM:SS`.    | No incluye fecha.                                       |
| `DATETIME`   | Fecha y hora completas.        | Útil para registros o eventos.                          |
| `TIMESTAMP`  | Fecha y hora basada en UTC.    | Ideal para auditorías; suele ajustarse automáticamente. |

---

## ✔️ Tipo de datos booleanos

| Tipo de dato | Descripción                 | Características clave             |
| ------------ | --------------------------- | --------------------------------- |
| `BOOLEAN`    | Valores lógicos TRUE/FALSE. | Algunas BD usan `BIT(1)` o `0/1`. |

---

## 🧩 Tipos de datos especiales

| Tipo de dato | Descripción                                | Características clave                        |
| ------------ | ------------------------------------------ | -------------------------------------------- |
| `BLOB`       | Datos binarios (imágenes, archivos, PDFs). | Guarda bytes crudos; no es texto.            |
| `JSON`       | Datos estructurados en formato JSON.       | Muy útil para estructuras flexibles.         |
| `UUID`       | Identificadores únicos universales.        | Garantiza unicidad global.                   |
| `MONEY`      | Valores monetarios (según el motor SQL).   | Depende del motor; no es estándar universal. |

Es importante recordar que la disponibilidad y el comportamiento de ciertos
tipos de datos pueden variar según el motor de base de datos utilizado.\
Para más detalles, consulta la documentación oficial:\
[MySQL](https://dev.mysql.com/doc/refman/8.4/en/data-types.html),
[PostgreSQL](https://www.postgresql.org/docs/current/datatype.html),
[SQL Server](https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver17),
[Oracle](https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlqr/Data-Types.html)
