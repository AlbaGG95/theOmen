import React from "react";
import "../index.css";

import fotoXabier from "../assets/home/Xabier.png";
import fotoAlba from "../assets/home/Alba.png";
import fotoMaria from "../assets/home/Maria.png";
import fotoAdrian from "../assets/home/Adrian.png";

const equipo = [
  {
    nombre: "Xabier Piñeiro",
    rol: "Product Owner",
    alias: "El Patriarca: Administrador de la matanza.",
    foto: fotoXabier,
  },
  {
    nombre: "Alba Ganduxé",
    rol: "Developer",
    alias: "Suturadora: Cosiendo código y piel con precisión quirúrgica.",
    foto: fotoAlba,
  },
  {
    nombre: "María Regueiro",
    rol: "Developer",
    alias: "Ingeniera de la Caldera: Alimentando el fuego del servidor.",
    foto: fotoMaria,
  },
  {
    nombre: "Adrián Baeza",
    rol: "Scrum Master",
    alias: "Pastor de Almas Condenadas: Mantiene la unidad en mitad del caos sangriento.",
    foto: fotoAdrian,
  },
];

const AboutUs = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="public/video/14058980-uhd_4096_2160_30fps (1) (1).mp4" />
        </video>
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16">
        <h2 className="mb-20 text-center font-omen-title text-4xl font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-5xl">
          El Clan de La Sierra
        </h2>

        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          {equipo.map((miembro) => (
            <article
              key={miembro.nombre}
              className="group flex flex-col items-center rounded-lg bg-black/45 px-4 py-5 text-center shadow-lg shadow-black/30 backdrop-blur-sm transition-all duration-500"
            >
              <img
                src={miembro.foto}
                alt={miembro.nombre}
                className="mb-5 h-64 w-48 object-cover transition-all duration-700 grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:drop-shadow-[0_0_30px_rgba(185,28,28,0.4)] md:h-80 md:w-56"
              />

              <h3 className="mb-2 font-omen-title text-lg uppercase tracking-widest text-red-700 drop-shadow-[0_2px_10px_rgba(185,28,28,0.35)]">
                {miembro.nombre}
              </h3>

              <p className="mb-2 font-omen-body text-xs font-black uppercase tracking-[0.2em] text-stone-200">
                {miembro.rol}
              </p>

              <p className="max-w-[220px] font-omen-body text-sm italic leading-relaxed text-stone-300">
                {miembro.alias}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center">
          <h3 className="font-omen-title text-3xl font-bold uppercase leading-none text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)] md:text-5xl">
            Bienvenido al terror
            <br />
            que se queda contigo
          </h3>

          <p className="mx-auto mt-6 max-w-2xl font-omen-body text-sm leading-relaxed text-stone-100 md:text-lg">
            Cada película aquí está seleccionada para inquietar, emocionar y perturbar.
            Desde clásicos hasta joyas ocultas, nuestro catálogo es un homenaje al cine de
            terror.
          </p>

          <p className="mx-auto mt-6 max-w-2xl font-omen-body text-xs leading-relaxed text-stone-300 md:text-sm">
            Descubre historias de miedo, películas exclusivas y un catálogo en constante
            actualización.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
