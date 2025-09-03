import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white">
      <div className="relative flex items-center justify-center">
        <Shield className="w-16 h-16 md:w-24 md:h-24 text-blue-500 animate-pulse" />
        <div className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-blue-500 opacity-30 animate-ping"></div>
      </div>
      <p className="mt-6 text-lg md:text-xl font-semibold tracking-wide animate-pulse">
        Защищаем вас 24/7
      </p>
    </div>
  );
};
