import React, { useState, useEffect } from "react";
import "../index.css";

// Imágenes del carrusel
import posterHereditary from "../assets/home/poster-hereditary.jpg";
import posterMidsommar from "../assets/home/poster-midsommar.webp";
import posterSaintMaud from "../assets/home/poster-saint-maud.jpg";
import posterTheConjuring from "../assets/home/poster-the-conjuring.jpg";
import posterTheWitch from "../assets/home/poster-the-witch.webp";

import fotoXabier from "../assets/home/Xabier.png";
import fotoAlba from "../assets/home/Alba.png";
import fotoMaria from "../assets/home/Maria.png"; 
import fotoAdrian from "../assets/home/Adrian.png";

const imagenesCarrusel = [
  posterHereditary,
  posterMidsommar,
  posterSaintMaud,
  posterTheConjuring,
  posterTheWitch,
];
const equipo = [
  { nombre: "Xabier Piñeiro", rol: "Product Owner", foto: fotoXabier },
  { nombre: "Alba Ganduxé", rol: "Developer", foto: fotoAlba },
  { nombre: "Maria Regueiro", rol: "Developer", foto: fotoMaria },
  { nombre: "Adrian Baeza", rol: "Scrum Master", foto: fotoAdrian },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Autoplay lento
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagenesCarrusel.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section className="relative min-h-screen text-white overflow-hidden">

    {/* 🎬 VÍDEO DE FONDO */}
    <div className="absolute inset-0 z-0">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="public/video/14058980-uhd_4096_2160_30fps (1) (1).mp4 " />
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>

    {/* 👥 EQUIPO (PRIMERO) */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 font-omen-title uppercase">
        
        Nuestro Equipo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {equipo.map((miembro, index) => (
          <div
            key={index}
            className="bg-black/70 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <img
              src={miembro.foto}
              alt={miembro.nombre}
              className="w-48 h-64 md:w-56 md:h-80 object-cover rounded-lg mb-6 shadow-2xl transition-transform duration-300 hover:scale-105"


            />
            <h3 className="text-xl font-bold text-red-700 font-omen-title">
              {miembro.nombre}
            </h3>
            <p className="text-gray-300 font-omen-body">{miembro.rol}</p>
          </div>
        ))}
      </div>
    </div>

    {/* 🧠 TEXTO (SEGUNDO) */}
    <div className="relative z-10 text-center px-4 py-32 max-w-4xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 font-omen-title">
        Bienvenido al terror que se queda contigo
      </h2>

      <p className="text-xl md:text-2xl mb-6 font-omen-body">
        Cada película aquí está seleccionada para inquietar, emocionar y perturbar.
        Desde clásicos hasta joyas ocultas, nuestro catálogo es un homenaje al cine de terror.
      </p>

      <p className="text-lg md:text-xl text-gray-300 font-omen-body">
        Descubre historias de miedo, películas exclusivas y un catálogo en constante actualización.
      </p>
    </div>

    {/* 🎞️ CARRUSEL (TERCERO) */}
    <div className="relative z-10 w-full overflow-hidden py-20">
      <div
        className="flex justify-center transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(calc(50% - ${activeIndex * 320}px - 160px))`,
        }}
      >
        {imagenesCarrusel.map((img, index) => (
          <div
            key={index}
            className={`mx-6 transition-all duration-500 ${
              index === activeIndex
                ? "scale-110 opacity-100"
                : "scale-90 opacity-60"
            }`}
          >
            <img
              src={img}
              alt={`Póster ${index + 1}`}
              className="w-72 md:w-80 rounded-xl shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>

  </section>
);
};

export default AboutUs;