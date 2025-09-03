import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/index.css";

const tabData = [
  {
    title: "«ВЕКТОР: безопасность в действии»",
    content:
      "«ВЕКТОР» обеспечил комплексную охрану крупного логистического центра. Благодаря профессионализму наших специалистов и индивидуальному подходу к проекту удалось минимизировать риски и обеспечить бесперебойную работу объекта. Высокий уровень исполнения заданий и надёжность систем охраны подтвердили свою эффективность.",
    images: [
      "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6rbzC3QLBdkYAgR6e4e5MCl9xh1jBBwpnnw&s",
    ],
  },
  {
    title: "«ВЕКТОР: безопасность в действии»",
    content:
      "«ВЕКТОР» обеспечил комплексную охрану крупного бизнес-центра в деловом районе города. Наши специалисты круглосуточно контролировали безопасность объекта, использовали передовые технические средства и разработали индивидуальные маршруты патрулирования. Клиенты оценили профессионализм и доступные цены, остались довольны качеством услуг.",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQJPb0tcqHzghTfF21-pSBSXHWyXlu_FQPQ&s",
      "https://www.avan-guard.ru/assets/img/banners/ohrana-obektov_zagorodnogo-doma.jpg",
    ],
  },
  {
    title: "Охрана объекта",
    content:
      "Охранное предприятие «ВЕКТОР» обеспечило комплексную безопасность крупного бизнес-центра. Были установлены современные системы видеонаблюдения и сигнализации, проведены тренинги для персонала по действиям в чрезвычайных ситуациях. Сотрудники «ВЕКТОР» круглосуточно мониторят ситуацию на объекте, гарантируя надёжную защиту клиентов.",
    images: [
      "https://tor-safety.com/wp-content/uploads/2023/11/2.jpg",
      "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
    ],
  },
];

export const CompletedWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Выполненные работы
        </h2>
        <p className="text-center text-gray-500 mb-8">«Наши дела»</p>
        <div className="flex flex-wrap border-b border-gray-300 mb-6 justify-center">
          {tabData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 -mb-px font-medium border transition-all ${
                activeTab === index
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          <p className="text-gray-700 mb-6">{tabData[activeTab].content}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6">
            {tabData[activeTab].images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Работа ${idx + 1}`}
                data-aos="fade-up"
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
