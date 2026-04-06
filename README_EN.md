# THE OMEN - Horror Video Club (English)

**THE OMEN** is a single-page web app built with **React**, inspired by horror, occult aesthetics and cinematic rituals. It simulates a forbidden archive of cursed movies with a dark, cinematic interface.

---

## What it includes

- SPA built with **React.js** and **React Router DOM**
- **Full CRUD** for movies (Create / Read / Update / Delete)
- Real backend consumption using **Spring Boot** and **Axios**
- Pagination in the movies listing
- Image fallback (placeholder) when posters fail to load
- Form with basic validation (year and rating numeric)
- Responsive UI using **Tailwind CSS**

---

## Screenshots

<div align="center">

![Hero - Home](/src/assets/home/hero-desktop.jpg)

![Our team](/img/theOmerNosotros.png)

</div>

---

## Important Routes

- `/` -> Home (hero and concept summary)
- `/movies` -> Movies section (paginated list)
- `/movies/:id` -> Movie detail
- `/form` or `/add-movie` -> Add/Edit movie form
- `/aboutus` -> About us
- `/contact` -> Contact

> Note: The project uses `/form` as the main route for add/edit and also keeps `/add-movie` as an alias.

---

## API

The frontend consumes a real **Spring Boot** backend. In development, the recommended setup is to use the Vite proxy:

```env
VITE_API_MOVIES_URL=/api/movies
```

- Vite forwards `/api/*` to `http://localhost:8080`, so the backend should be running on that port.
- This avoids CORS issues while developing from `http://localhost:5173`.
- Some legacy files from the previous fake-backend flow may still exist in the repository, but they are no longer the recommended way to run the project.

---

## Tech & Dependencies

- React 19
- React Router DOM
- Tailwind CSS
- Axios
- Spring Boot (external backend consumed by the frontend)
- Vite (dev server)

---

## How to run (development)

1. Install dependencies:

```bash
npm install
```

2. Create your local `.env` file from the example:

```bash
cp .env.example .env
```

3. Configure the value you want to use in your environment:

```env
VITE_API_MOVIES_URL=/api/movies
```

4. Make sure your Spring Boot backend is running on `http://localhost:8080`.

5. Start the app:

```bash
npm run dev
# -> default http://127.0.0.1:5173
```

6. Open your browser at `http://localhost:5173`.

> For production:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## Private Configuration

- This repository does **not include** MySQL credentials, passwords, tokens, or private backend configuration.
- The `.env` file is local, ignored by Git, and each user must fill in their own values.
- If your backend uses **Spring Boot + MySQL**, the JDBC URL, username, and password must be configured in the backend project, not in this frontend repository.
- Never commit files such as `.env`, `application.properties`, `application.yml`, `.sql` dumps, private keys, or backups containing real data.
- `.env.example` should only contain safe example values.

---

## Highlights

- Pagination (10 movies per page)
- Detail pages for each movie card (`/movies/:id`)
- Form with create and edit flows
- Basic frontend validation
- Error handling for API requests and images

---

## Environment Notes

- Make sure the real Spring Boot backend is running on `http://localhost:8080` before opening the app.
- The recommended development value is `VITE_API_MOVIES_URL=/api/movies`.
- If you do not want to use the Vite proxy, you can point `VITE_API_MOVIES_URL` to a full backend URL, but then you must handle CORS on the server.
- Legacy fake-backend files may still exist in the repo for reference, but they are not the primary runtime path anymore.

---

## License & Contributions

- License: MIT (see `LICENSE`)
- Contributions: Open an issue or PR describing changes or bugs.
- Note: This project was completed and corrected with the assistance of AI. The AI helped with writing, code fixes, and documentation.

---
