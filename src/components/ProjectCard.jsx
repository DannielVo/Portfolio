const ProjectCard = ({ image, title, description, tech, demoUrl }) => {
  const handleClick = () => {
    if (!demoUrl) return;
    window.open(demoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="
        group flex flex-col h-full
        bg-card-dark rounded-xl overflow-hidden
        border border-border-dark
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/50
        hover:shadow-xl
      "
    >
      <div className="aspect-video overflow-hidden bg-surface-dark">
        <img
          src={image}
          alt={`${title} preview`}
          className="
            w-full h-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>

          <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap content-start gap-2 mt-auto">
          {tech.map((item) => (
            <span
              key={item}
              className="
                px-2.5 py-1 rounded-md
                bg-tag-bg text-slate-200
                text-xs font-medium
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleClick}
            disabled={!demoUrl}
            className={`
              w-full flex items-center justify-center gap-2
              h-10 px-6 rounded-lg
              font-bold text-sm
              transition-all duration-300
              ${
                demoUrl
                  ? "bg-primary hover:bg-hover text-white cursor-pointer"
                  : "bg-slate-600 text-slate-300 cursor-not-allowed"
              }
            `}
          >
            {demoUrl ? "Take a look" : "Demo coming soon"}

            {demoUrl && (
              <span
                className="
                  material-symbols-outlined text-lg
                  transition-transform duration-300
                "
              >
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
