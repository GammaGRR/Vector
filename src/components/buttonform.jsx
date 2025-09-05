import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ButtonForm = ({ bg = "blue", hover = "blue", text = "white", label = "Связаться" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [submitStatus, setSubmitStatus] = useState("");

  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    white: "bg-white hover:bg-gray-200",
  };

  const textClass = {
    "black" : "text-black",
  }

  const textColors = {
    "blue-600": "text-blue-600",
    "white": "text-white",
    "black": "text-black",
  };

  const validateForm = () => {
    const newErrors = { name: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "ФИО обязательно для заполнения";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "ФИО должно содержать минимум 2 символа";
      isValid = false;
    }

    if (!formData.phone) {
      newErrors.phone = "Телефон обязателен для заполнения";
      isValid = false;
    } else if (formData.phone.replace(/\D/g, "").length < 7) {
      newErrors.phone = "Введите корректный номер телефона";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone) setErrors({ ...errors, phone: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmitStatus("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setTimeout(() => {
        setFormData({ name: "", phone: "" });
        handleClose();
        setSubmitStatus("");
      }, 1500);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
      setErrors({ name: "", phone: "" });
      setSubmitStatus("");
    }, 250);
  };

  return (
    <>
      <button
        className={`${colorClasses[bg]} ${textColors[text]} ${textClass} font-semibold px-6 py-3 rounded-full transition-colors duration-300`}
        onClick={() => setIsOpen(true)}
      >
        {label}
      </button>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black/60 flex items-center justify-center z-50 ${isClosing ? "opacity-0" : "opacity-100"
            } transition-opacity`}
          onClick={handleClose}
        >
          <div
            className={`bg-white rounded-2xl p-8 w-full max-w-md relative shadow-lg transition-transform ${isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
              onClick={handleClose}
            >
              <span className="block w-5 h-0.5 bg-gray-600 rotate-45 absolute"></span>
              <span className="block w-5 h-0.5 bg-gray-600 -rotate-45 absolute"></span>
            </button>
            <h1 className="text-2xl font-bold mb-2 text-black">Оставить заявку</h1>
            <p className="text-gray-600 mb-4">
              Заполните форму и наш менеджер свяжется с вами в течение 10 минут
            </p>
            {submitStatus === "success" && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
                ✓ Заявка успешно отправлена!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
                ✗ Ошибка при отправке. Попробуйте еще раз.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium text-left">
                  ФИО: *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="например, Иван Петров"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-300"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium text-left">
                  Телефон: *
                </label>
                <PhoneInput
                  country={"ru"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  enableSearch
                  disableSearchIcon
                  inputClass={`w-full px-7 py-4 text-lg mb-4 rounded-lg border text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.phone ? "border-red-500 focus:ring-red-400" : "border-gray-300"}`}
                  buttonClass="absolute left-0 top-0 h-full px-4 rounded-l-lg bg-transparent"
                  containerClass="relative w-full"
                  dropdownClass="rounded-lg shadow-lg"
                  inputProps={{
                    id: "phone",
                    name: "phone",
                    disabled: isLoading,
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 mt-4"
              >
                {isLoading ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
