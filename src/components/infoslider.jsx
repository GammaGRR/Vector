// InfoSlider.jsx
import React, { useState, useEffect } from "react";
import { ButtonForm } from "./buttonform";
import "../style/index.css";

const images = [
  "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
  "https://www.chopvitayz.ru/images/145436.jpeg",
  "https://mskomendant.com/wp-content/uploads/2021/02/7e12e02580d2e5f37f757b3c6f9c5dec.jpg"
];

export const InfoSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full mt-[4.9rem] overflow-hidden shadow-lg h-[600px] md:h-[500px] sm:h-[400px]">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="min-w-full h-full flex-shrink-0" key={i}>
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-10 bg-black/30">
        <h1 className="text-white font-extrabold leading-[1.2] mb-6 md:mb-8 max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Надежная охрана <br /> безопасность <br /> уверенность
        </h1>
        <p className="text-white mb-6 max-w-2xl text-sm sm:text-base md:text-lg">
          Ваша надёжная защита: безопасность и уверенность в каждом моменте.
        </p>
        <ButtonForm />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
};
