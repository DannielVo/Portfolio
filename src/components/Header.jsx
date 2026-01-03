import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { HEADER_KEYS } from "../assets/assets";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const handleScrollTo = (id, label) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          const id = visible[0].target.id;
          const match = HEADER_KEYS.find((i) => i.id === id);
          if (match) setActiveItem(match.label);
        }
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    HEADER_KEYS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-background-dark/60 transition-all">
        <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("home", "Home");
            }}
            className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors"
          >
            Danniel Vo
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {HEADER_KEYS.map((item, index) => (
              <NavItem
                key={item.label}
                label={item.label}
                active={activeItem === item.label}
                onClick={() => handleScrollTo(item.id, item.label)}
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
              <li
                onClick={() => {
                  handleScrollTo("home", "Home");
                  setOpen(false);
                }}
              >
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  Home
                </a>
              </li>

              <li
                onClick={() => {
                  handleScrollTo("about", "About");
                  setOpen(false);
                }}
              >
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  About
                </a>
              </li>
              <li
                onClick={() => {
                  handleScrollTo("projects", "Projects");
                  setOpen(false);
                }}
              >
                <a className="text-text-secondary hover:text-white cursor-pointer">
                  Projects
                </a>
              </li>
              <li
                onClick={() => {
                  handleScrollTo("contact", "Contact");
                  setOpen(false);
                }}
              >
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
