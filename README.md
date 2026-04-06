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

El frontend consume un backend real en **Spring Boot**. En desarrollo, la forma recomendada es usar el proxy de Vite:

```env
VITE_API_MOVIES_URL=/api/movies
```

- Vite reenvia `/api/*` a `http://localhost:8080`, asi que el backend debe estar levantado en ese puerto.
- Esto evita errores de CORS al desarrollar desde `http://localhost:5173`.
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

2. Crea tu archivo local `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

3. Configura en `.env` la URL que vas a usar en tu entorno:

```env
VITE_API_MOVIES_URL=/api/movies
```

4. Asegurate de que tu backend real de Spring Boot este arrancado en `http://localhost:8080`.

5. En una terminal ejecuta la aplicacion:

```bash
npm run dev
# -> por defecto en http://127.0.0.1:5173
```

6. Abre el navegador y navega a `http://localhost:5173`.

> Para produccion:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## Configuracion privada

- Este repositorio **no incluye** credenciales de MySQL, contrasenas, tokens ni configuracion privada del backend.
- El archivo `.env` es local, esta ignorado por Git y cada usuario debe poner ahi su propia configuracion.
- Si tu backend usa **Spring Boot + MySQL**, la URL JDBC, usuario y password deben configurarse en el proyecto backend, no en este frontend.
- No subas al repositorio archivos como `.env`, `application.properties`, `application.yml`, dumps `.sql`, claves privadas o backups con datos reales.
- `.env.example` solo debe contener valores de ejemplo seguros.

---

## Funcionalidades destacadas

- Paginacion en `/movies` (10 peliculas por pagina)
- Enlaces a detalle por cada tarjeta (`/movies/:id`)
- Formulario con creacion y edicion (edicion en linea, con botones Editar / Borrar)
- Validaciones sencillas en frontend (campo anio y rating numericos)
- Manejo de errores en carga de datos e imagenes

---

## Nota sobre el entorno

- Asegurate de que el backend real de Spring Boot este corriendo en `http://localhost:8080` antes de abrir la app.
- La variable recomendada para desarrollo es `VITE_API_MOVIES_URL=/api/movies`.
- Si prefieres no usar el proxy de Vite, puedes apuntar `VITE_API_MOVIES_URL` a una URL completa de tu backend, pero entonces debes resolver CORS en el servidor.
- Si conservas archivos del flujo fake anterior, consideralos solo como legado y no como la forma principal de ejecucion.

---

## License & Contribuciones

- Licencia: MIT (revisar `LICENSE`)
- Contribuciones: Abre un issue o PR describiendo cambios o errores.
- Nota: Este proyecto se finalizo y se corrigieron errores con la ayuda de IA (asistente). La IA asistio en la redaccion y en correcciones de codigo y documentacion.

---
