import React, { useEffect, useRef, useState } from "react";

const ScrollTopBtn = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      const isNearBottom = scrollPosition >= pageHeight - 150;

      setShowScrollUp(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`
          fixed bottom-6 right-6 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-primary text-white
          shadow-lg shadow-primary/30
          transition-all duration-500
          hover:bg-hover hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-primary
          ${
            showScrollUp
              ? "opacity-100 translate-y-0 cursor-pointer"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
        `}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </a>
  );
};

export default ScrollTopBtn;
