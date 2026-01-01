import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-background-dark/60 transition-all">
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors"
        >
          Danniel Vo
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem label="Home" active />
          <NavItem label="About" />
          <NavItem label="Projects" />
          <NavItem label="Contact" />
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-text-secondary hover:text-white transition-colors"
        >
          <span className="sr-only">Open menu</span>
          <span className="material-symbols-outlined text-[24px]">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
