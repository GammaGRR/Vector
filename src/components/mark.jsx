import React, { useEffect } from "react";
import "../style/index.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Mark = () => {
    const marks = [
        { images: ["/1.png"] },
        { images: ["/2.png"] },
        { images: ["/3.png"] },
    ];

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-12" id="reviews">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Отзывы клиентов
                </h2>
                <p className="text-gray-600 mb-10">
                    "Отзывы клиентов — подтверждение нашей надёжности и высокого уровня сервиса!"
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {marks.map((mark, idx) =>
                        mark.images.map((img, i) => (
                            <div
                                key={`${idx}-${i}`}
                                data-aos="zoom-in"
                                className="rounded-2xl overflow-hidden flex justify-center items-center p-4"
                            >
                                <img
                                    src={img}
                                    alt={`Отзыв ${idx + 1}`}
                                    className="w-full object-contain transition-transform duration-300 hover:-translate-y-[10px]"
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};
