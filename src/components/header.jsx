import React, { useState } from "react";
import { ButtonForm } from "../components/buttonform";
import "../style/index.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-8 px-10 py-4 md:px-8 sm:px-5">
        <h1 className="font-victor-mono text-black font-bold text-[clamp(20px,5vw,40px)]">
          ВЕКТОР
        </h1>

        {/* Навигация */}
        <nav className="hidden md:flex gap-16 text-lg">
          <a href="#services" className="font-medium text-black hover:text-blue-600 transition-colors">
            Наши услуги
          </a>
          <a href="#about" className="font-medium text-black hover:text-blue-600 transition-colors">
            О компании
          </a>
          <a href="#reviews" className="font-medium text-black hover:text-blue-600 transition-colors">
            Отзывы
          </a>
        </nav>

        <ButtonForm />

        {/* Бургер для мобильных */}
        <div
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-6 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-x-[5px] translate-y-[10px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-800 rounded transition-transform duration-300 ${
              menuOpen ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""
            }`}
          />
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden mt-3 absolute top-full left-1/2 w-3/4 bg-white/20 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg transition-all duration-200 transform ${
          menuOpen
            ? "opacity-100 translate-y-0 -translate-x-1/2 visible"
            : "opacity-0 -translate-y-2 -translate-x-1/2 invisible pointer-events-none"
        }`}
      >
        <a
          href="#services"
          onClick={() => setMenuOpen(false)}
          className="block px-6 py-6 text-center rounded-3xl font-semibold text-black hover:bg-white/30 hover:text-blue-500 transition"
        >
          Наши услуги
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="block px-6 py-6 text-center rounded-3xl font-semibold text-black hover:bg-white/30 hover:text-blue-500 transition"
        >
          О компании
        </a>
        <a
          href="#reviews"
          onClick={() => setMenuOpen(false)}
          className="block px-6 py-6 text-center rounded-3xl font-semibold text-black hover:bg-white/30 hover:text-blue-500 transition"
        >
          Отзывы
        </a>
      </div>
    </header>
  );
};
