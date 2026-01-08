import React from "react";

const ProjectCard = ({ image, title, description, tech, demoUrl }) => {
  const handleClick = () => {
    if (!demoUrl) return;
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="group flex flex-col bg-card-dark rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#292348]">
      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col grow p-4 gap-3">
        <div className="grow">
          <h3 className="text-white text-xl font-bold mb-1.5">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-lg bg-tag-bg text-white text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="pt-2 mt-auto">
          <button
            onClick={handleClick}
            disabled={!demoUrl}
            className={`w-full flex items-center justify-center gap-2 h-10 px-6 rounded-lg font-bold text-sm transition-all duration-300
              ${
                demoUrl
                  ? "bg-primary hover:bg-hover text-white cursor-pointer"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }
            `}
          >
            {demoUrl ? "Take a look" : "Demo coming soon"}
            {demoUrl && (
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
