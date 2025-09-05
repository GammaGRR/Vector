import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const WorkSteps = () => {
  const steps = [
    { id: 1, title: "Оставьте заявку", content: "Вы оставляете заявку через сайт или по телефону." },
    { id: 2, title: "Мы позвоним", content: "Наш менеджер связывается с вами для уточнения деталей." },
    { id: 3, title: "Заключаем договор", content: "Подписываем договор и согласовываем план работ." },
    { id: 4, title: "Выполняем работы", content: "Наша команда выполняет все работы и предоставляет отчет." },
  ];

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section className="w-full px-4 md:px-12 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2">
          <img
            src="https://media.istockphoto.com/id/874231466/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B2%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%B8%D0%B4%D1%83%D1%89%D0%B0%D1%8F-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%BE-%D0%BB%D0%B5%D1%81%D1%82%D0%BD%D0%B8%D1%86%D0%B5-%D1%81-%D1%84%D0%BE%D0%BD%D0%BE%D0%BC-%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0.jpg?s=612x612&w=0&k=20&c=K6NYeP2nz42dXi78g1L7sVC48LbGGYGLEUkL0LUf_HM="
            alt="Этапы работы"
            className="w-full h-auto rounded-2xl shadow-md object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <button className="border px-4 py-2 rounded-full text-sm mb-4 hover:bg-gray-100 transition">
              Этапы работы
            </button>
            <h2 className="text-3xl font-bold mb-2">ЭТАПЫ РАБОТЫ</h2>
            <p className="text-gray-600">
              Встреча с клиентом, разработка плана охраны, выполнение задания, обратная связь.
            </p>
          </div>
          <div className="divide-y">
            {steps.map((step) => (
              <div key={step.id} className="py-4">
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-lg font-semibold">
                    {step.id < 10 ? `0${step.id}` : step.id}. {step.title}
                  </span>
                  {openStep === step.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                <AnimatePresence>
                  {openStep === step.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden text-gray-600 mt-2"
                    >
                      {step.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
