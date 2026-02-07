import React from "react";

const TechStackItem = ({ name, logo }) => {
  return (
    <div className="flex items-center gap-3 bg-transparent rounded-lg px-4 py-3 transition-all cursor-default group/item">
      <img
        alt={`${name} Logo`}
        className="size-8 md:size-9"
        data-alt="HTML5 orange shield logo"
        src={logo}
      />
      <span className="text-xl md:text-2xl font-medium text-gray-200 group-hover/item:text-white">
        {name}
      </span>
    </div>
  );
};

export default TechStackItem;
