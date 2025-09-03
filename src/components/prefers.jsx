import React, { useEffect } from "react";
import "../style/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const Stats = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const startYear = 2015;
    const currentYear = new Date().getFullYear();
    const yearsOnMarket = currentYear - startYear;

    const stats = [
        { value: `${yearsOnMarket}+`, label: "лет на рынке" },
        { value: 327, label: "проектов реализовано" },
        { value: "95%", label: "клиентов довольны" },
        { value: 43, label: "постоянных клиентов" },
    ];

        return (
            <div className="py-10 px-4 sm:px-6 lg:px-10" id="about">
                <div className="max-w-6xl mx-auto">
                    <p
                        className="border-2 border-solid border-gray-400 p-2 px-4 rounded-full text-center mb-8 mt-20 mx-auto lg:mx-0 w-fit"
                        data-aos="fade-down"
                    >
                        Наши преимущества
                    </p>
                    <div
                        className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-black pb-6 mb-10"
                        data-aos="fade-up"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-0">
                            БЕЗОПАСНОСТЬ И УВЕРЕННОСТЬ
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md mt-2 md:mt-0">
                            Почему выбирают «ВЕКТОР»: надёжность, безопасность.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center"
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <p className="text-4xl sm:text-5xl md:text-5xl font-bold inline-block border-b-4 border-blue-500 pb-2">
                                    {stat.value}
                                </p>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
