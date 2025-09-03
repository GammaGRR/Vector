import React, { useState } from "react";
import "react-phone-input-2/lib/style.css"; // обязательно для стилей
import PhoneInput from "react-phone-input-2";

export const FittingForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    setErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validateForm = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Имя обязательно для заполнения";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать минимум 2 символа";
      isValid = false;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Телефон обязателен для заполнения";
      isValid = false;
    } else if (phoneDigits.length < 7) {
      newErrors.phone = "Введите корректный номер телефона";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Данные формы:", formData);

    setFormData({ name: "", phone: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="relative w-full flex justify-center px-4 py-8">
      <div className="w-full max-w-6xl h-[400px] md:h-[500px] lg:h-[550px] relative rounded-2xl overflow-hidden shadow-lg">
        <img
          src="https://m-files.cdn1.cc/lpfile/0/7/a/07a2bea835f488000fc61b1c265c3f82.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/2 right-6 md:right-12 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-6 md:p-8 w-[90%] max-w-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Оставить заявку
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Перезвоним в течение 10 минут
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Имя */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Имя:
              </label>
              <input
                type="text"
                name="name"
                placeholder="например: Иван Иванович"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Телефон */}
            <div>
              <label className="block mb-1 font-medium text-left">
                Телефон: *
              </label>
              <PhoneInput
                country={"ru"}
                value={formData.phone}
                onChange={handlePhoneChange}
                enableSearch
                disableSearchIcon
                inputClass={`w-full px-3 py-2 text-gray-700 placeholder-gray-400 rounded-md border focus:outline-none focus:ring-2 ${
                  errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Отправить заявку
            </button>

            {submitted && (
              <p className="text-green-600 text-sm mt-2 text-center">
                Ваша заявка отправлена!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
