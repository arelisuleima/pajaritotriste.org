---
description: Escribir un nuevo esqueleto de entrada de blog
agent: build
model: opencode-go/deepseek-v4-flash
---

En el directorio @drafts crea un nuevo articulo para mi blog (solo el outline)
con headers propuestos y un abtract para que yo lo lea como una propuesta para
una nueva publicacion. No escribas toda la entrada solo dame un punto de partida
actua como un escritor de blogs que lleva mas de 10 años publicando articulos
tecnologicos.

TODOS LOS ARTICULOS TIENEN UNA CABECERA YAML HASTA ARRIBA NUNCA OMITAS ESTA
CABECERA Y NO DEJES VACIOS NINGUNO DE SUS CAMPOS

```yaml
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
```

Mi estilo de escritura puedes tomarlo de @src/posts de los archivos .md que
estan ahi.

## Entregable

Un solo archivo .md en la carpeta drafts
