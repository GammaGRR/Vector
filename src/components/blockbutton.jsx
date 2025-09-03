import React from "react";
import "../style/index.css";
import { ButtonForm } from "./buttonform";

export const BlockButton = () => {
    return (
        <section className="bg-blue-600 text-white py-12 px-8 max-w-[1150px] mx-auto rounded-[20px] mt-10 mb-10 justify-between items-center flex gap-4">
            <h1 className="text-xl leading-[1.5] font-bold">Бесплатно свяжитесь с нашим<br/> специалистом</h1>
            <ButtonForm label="Связаться с нами" bg="white" text="blue-600"/>
        </section>
    );
}