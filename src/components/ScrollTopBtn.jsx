const ScrollTopBtn = () => {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
          fixed bottom-6 right-6 z-20
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-primary text-white
          shadow-lg shadow-primary/30
          transition-all duration-500
          hover:bg-hover hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-primary
          cursor-pointer
        `}
      aria-label="Scroll to top"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
};

export default ScrollTopBtn;