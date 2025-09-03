import React, { useEffect } from "react";
import "../style/index.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const SecurityService = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const services = [
        {
            title: "Персональный телохранитель",
            description: "Охраняем важные государственные и коммерческие объекты.",
            image: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            title: "Персональный охранник",
            description:
                "Охрана объектов и имущества с полным сопровождением и техническими средствами.",
            image: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            title: "Персональный эскорт",
            description:
                "Охрана объектов и имущества с проектированием систем безопасности.",
            image: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
        },
        {
            title: "Охрана дома базовая",
            description:
                "Охрана объектов и имущества по доступным ценам с сохранением высокого уровня безопасности и индивидуального подхода.",
            image: "https://img.freepik.com/free-photo/portrait-male-security-guard-with-radio-station-camera-screens_23-2150368714.jpg?semt=ais_hybrid&w=740&q=80",
        },
    ];

    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-12" id="services">
            <div className="max-w-6xl mx-auto">
                <p
                    className="border-2 border-solid border-gray-400 p-2 px-4 rounded-full text-center mb-8 mt-20 mx-auto lg:mx-0 w-fit"
                    data-aos="fade-down"
                >
                    Услуги
                </p>
                <h2
                    className="text-5xl font-bold mb-10 leading-[1.5] text-center sm:text-left"
                    data-aos="fade-up"
                >
                    ОХРАНА ВЕКТОР —
                    <br className="hidden sm:block" /> ЗАЩИТА И БЕЗОПАСНОСТЬ
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={index * 150} // задержка для последовательного появления
                        >
                            {service.image && (
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-40 object-cover rounded-t-2xl"
                                />
                            )}
                            <div className="flex flex-col flex-grow p-5">
                                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
