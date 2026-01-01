import React, { useState } from "react";
import NavItem from "./NavItem";
import { HEADER_KEYS } from "../assets/assets";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
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
            {HEADER_KEYS.map((item, index) => (
              <NavItem
                key={`header-item-${item}`}
                label={item}
                active={activeItem === item}
                onClick={() => setActiveItem(item)}
              />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-text-secondary hover:text-white transition-colors"
          >
            <span className="sr-only">Open menu</span>
            <span className="material-symbols-outlined text-[24px]">
              <i className="bx  bx-menu"></i>
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-background-dark flex flex-col items-center justify-center text-center">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[28px]">
              <i className="bx  bx-x"></i>
            </span>
          </button>

          {/* Mobile Nav */}
          <nav>
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <li onClick={() => setOpen(false)}>
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  Home
                </a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  About
                </a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
