import React from "react";
import "../style/index.css";

export default Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className="info">
            <p>© ООО "Вектор" {currentYear}</p>
            <p>ИИН: 9999999999</p>
            <p>ОГРН: 1111111111111</p>
        </div>
    )
}