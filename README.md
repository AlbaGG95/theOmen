# THE OMEN - Horror Video Club

<p align="right"><a href="README_EN.md"><button style="background:#b91c1c;color:#fff;border:none;padding:6px 12px;border-radius:6px;">English</button></a></p>

**THE OMEN** es una aplicacion web SPA (Single Page Application) creada con **React** y una estetica inspirada en el terror, lo oculto y el cine ritual. Simula un archivo/coleccion de peliculas malditas con una UI oscura y cinematografica.

---

## Capturas

A continuacion, algunas capturas representativas del proyecto:

<div align="center">

![theOmer - Home](img/theOmer.png)

![Nuestro equipo](/img/theOmerNosotros.png)

</div>

---

## Que incluye

- SPA con **React.js** y **React Router DOM**
- **CRUD completo** sobre peliculas (Crear / Leer / Editar / Borrar)
- Consumo de backend real con **Spring Boot** y **Axios**
- **Paginacion** en la lista de peliculas
- Manejo de imagenes con **placeholder** cuando falla la carga
- Formulario con validaciones basicas (anio y rating numericos)
- Disenio **responsive** con **Tailwind CSS**

---

## Rutas importantes

- `/` -> Home (hero y resumen)
- `/movies` -> Seccion de peliculas (lista con paginacion)
- `/movies/:id` -> Detalle de pelicula
- `/form` o `/add-movie` -> Formulario para crear/editar peliculas
- `/aboutus` -> Sobre nosotros
- `/contact` -> Contacto

> Nota: El proyecto utiliza `/form` como ruta principal para crear/editar peliculas (el codigo tambien incluye `/add-movie` como alias).

---

## API

El frontend consume un backend real en **Spring Boot**. La URL base se configura mediante variable de entorno de Vite:

```env
VITE_API_MOVIES_URL=http://localhost:8080/api/movies
```

- La aplicacion espera el recurso de peliculas accesible en esa URL.
- Las imagenes de poster pueden ser rutas locales (`/posters/*.jpg`) o URLs externas. Si la imagen falla, se muestra un `placeholder`.
- Siguen existiendo algunos archivos legacy del flujo anterior con backend fake, pero ya no son la forma recomendada de ejecutar el proyecto.

---

## Tecnologias y dependencias

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- Spring Boot (backend externo consumido por el frontend)
- Vite (dev server)

---

## Como ejecutar el proyecto (desarrollo)

1. Instala dependencias:

```bash
npm install
```

2. Asegurate de que el backend real de Spring Boot este arrancado y disponible en:

```env
VITE_API_MOVIES_URL=http://localhost:8080/api/movies
```

3. Verifica o crea tu archivo `.env` en la raiz del proyecto con esa variable.

4. En una terminal ejecuta la aplicacion (Vite):

```bash
npm run dev
# -> por defecto en http://127.0.0.1:5173
```

5. Abre el navegador y navega a `http://localhost:5173`.

> Para produccion:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## Funcionalidades destacadas

- Paginacion en `/movies` (10 peliculas por pagina)
- Enlaces a detalle por cada tarjeta (`/movies/:id`)
- Formulario con creacion y edicion (edicion en linea, con botones Editar / Borrar)
- Validaciones sencillas en frontend (campo anio y rating numericos)
- Manejo de errores en carga de datos e imagenes

---

## Nota sobre el entorno

- Asegurate de que el backend real de Spring Boot este corriendo antes de abrir la app.
- La variable esperada por el frontend es `VITE_API_MOVIES_URL=http://localhost:8080/api/movies`.
- Si conservas archivos del flujo fake anterior, consideralos solo como legado y no como la forma principal de ejecucion.

---

## License & Contribuciones

- Licencia: MIT (revisar `LICENSE`)
- Contribuciones: Abre un issue o PR describiendo cambios/errores.
- Nota: Este proyecto se finalizo y se corrigieron errores con la ayuda de IA (asistente). La IA asistio en la redaccion y en correcciones de codigo y documentacion.

---
