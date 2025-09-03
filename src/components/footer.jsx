import React from "react";
import "../style/index.css";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Вектор</h2>
          <p className="text-gray-400 text-sm">
            ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ОХРАННАЯ ФИРМА «ВЕКТОР» (ООО «ОФ «ВЕКТОР»)
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Документы</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <p href="#services" className="hover:text-white transition">
                ИНН: 6200010381
              </p>
            </li>
            <li>
              <p href="#services" className="hover:text-white transition">
                КПП: 620001001
              </p>
            </li>
            <li>
              <p href="#services" className="hover:text-white transition">
                ОГРН: 1246200009230
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Контакты</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+7 (953) 746-45-59</li>
            <li>mariya.gladkih@bk.ru</li>
            <li>390023, Рязань, ул. Электрозаводская, 63, эт./пом. 3/305</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 py-4 px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm m-auto max-w-6xl">
        <span>&copy; 2015-{new Date().getFullYear()} Вектор. Все права защищены.</span>
        <span className="mt-2 md:mt-0">Designed by &lt;/GRR Project&gt;</span>
      </div>
    </footer>
  );
};
