# THE OMEN - Horror Video Club (English)

**THE OMEN** is a single-page web app built with **React**, inspired by horror, occult aesthetics and cinematic rituals. It simulates a forbidden archive of cursed movies with a dark, cinematic interface.

---

## What it includes (Summary)

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

> Note: The project uses `/form` as the main route for add/edit (there is also `/add-movie` alias).

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

1. Install deps:

```bash
npm install
```

2. Make sure the real Spring Boot backend is running on `http://localhost:8080`.

```env
VITE_API_MOVIES_URL=/api/movies
```

3. Verify or create your local `.env` file at the project root with that variable.

4. Run the app in a terminal:

```bash
npm run dev
# -> default http://127.0.0.1:5173
```

5. Open your browser at `http://localhost:5173`.

> For production:
>
> ```bash
> npm run build
> npm run preview
> ```

---

## Highlights

- Pagination (10 movies/page)
- Detail pages for each movie
- Inline editing and deletion from the form listing
- Basic frontend validation
- Error handling for data & images

---

## License & Contributions

- License: MIT (see `LICENSE`)
- Contributions: Open an issue or PR describing changes/bugs.
- Note: This project was completed and corrected with the assistance of AI (assistant). The AI assisted with writing and fixing code and documentation.

---

If you need badges, deployment instructions, or want a shorter or more visual README, tell me and I will adapt it.


