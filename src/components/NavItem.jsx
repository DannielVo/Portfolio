import React from "react";

const NavItem = ({ label, active = false, onClick }) => {
  return (
    <a
      onClick={onClick}
      className={`cursor-pointer group relative text-sm font-medium transition-colors duration-300
        ${active ? "text-primary" : "text-text-secondary hover:text-white"}
      `}
    >
      {label}

      {/* Underline */}
      <span
        className={`
          absolute -bottom-3 left-0 h-[3px] w-full
          rounded-2xl bg-primary
          transform origin-left transition-transform duration-300
          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
        `}
      />
    </a>
  );
};

export default NavItem;
