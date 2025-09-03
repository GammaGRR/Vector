import React, { useState, useEffect } from "react";
import "../style/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Какие гарантии качества услуг вы предоставляете?",
      answer:
        "«ВЕКТОР» — ваш надёжный партнёр в сфере безопасности. Обеспечиваем защиту и профессиональный подход по доступным ценам.",
    },
    {
      question: "Как обеспечивается конфиденциальность при выполнении заказов?",
      answer:
        "«ВЕКТОР» — ваша безопасность и уверенность в защите! Гарантируем надёжность и конфиденциальность, высокое качество услуг по доступным ценам. Индивидуальный подход к каждому клиенту.",
    },
    {
      question: "Какие дополнительные услуги предоставляет компания для повышения уровня безопасности клиентов?",
      answer:
        "«ВЕКТОР» — ваша защита и спокойствие! Мы обеспечиваем безопасность объектов и людей, учитывая индивидуальные потребности каждого клиента.",
    },
    {
      question: "Почему стоит выбрать охранную фирму «ВЕКТОР» вместо других компаний?",
      answer:
        "«ВЕКТОР» — ваша надёжная защита и уверенность в безопасности!",
    },
    {
      question: "Какие системы охраны вы устанавливаете и как обеспечиваете их бесперебойную работу?",
      answer:
        "«ВЕКТОР» — ваша защита и уверенность в каждом дне! Охрана с учётом ваших потребностей и бюджета.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      <div
        className="text-center max-w-2xl mx-auto mb-12"
        data-aos="fade-down"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Частые вопросы
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Ответы на самые популярные запросы наших клиентов
        </p>
      </div>
      <div className="max-w-[1150px] mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md transition-all duration-300 overflow-hidden cursor-pointer border ${
              activeIndex === index
                ? "bg-white border-gray-200 shadow-lg"
                : "bg-white border-transparent hover:shadow"
            }`}
            onClick={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          >
            <div className="flex items-center justify-between p-4 sm:p-5">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">
                {item.question}
              </h3>
              <span
                className={`w-6 h-6 text-3xl  flex items-center justify-center rounded-full text-gray-600 transition-transform ${
                  activeIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                activeIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-4 sm:px-6 pb-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
