import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const TeamSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const teamMembers = [
    {
      name: "Алексей Иванов",
      role: "Охранник",
      image:
        "https://m-files.cdn1.cc/lpfile/3/b/6/3b6ab2e29bb2c2ab470422fbe9675b5a/-/crop/0x0x1920x1920/-/resize/270/-/resize/1920/f.jpeg",
    },
    {
      name: "Дмитрий Петров",
      role: "Охранник",
      image:
        "https://m-files.cdn1.cc/lpfile/6/5/1/651c6c3428068906fe74bc082d519b57/-/crop/322x0x1275x1276/-/resize/269/-/resize/1920/f.jpeg",
    },
    {
      name: "Екатерина Смирнова",
      role: "Охранник-профессионал",
      image:
        "https://m-files.cdn1.cc/lpfile/9/f/7/9f77ba5aedc717f1b3e6be96a7cc345a/-/crop/0x234x1920x1917/-/resize/270/-/resize/1920/f.jpeg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      {/* Заголовок */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Наша команда профессионалов
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          «Команда профессионалов, готовых обеспечить вашу безопасность»
        </p>
      </div>

      {/* Карточки */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 transition-transform hover:-translate-y-2"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg mb-6"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
