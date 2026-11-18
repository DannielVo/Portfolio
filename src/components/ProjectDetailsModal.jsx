import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const ProjectDetailsModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements.length) {
        event.preventDefault();
        modalRef.current.focus();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          document.activeElement === modalRef.current)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);

      if (previousFocus?.isConnected) {
        previousFocus.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const {
    image,
    title,
    subtitle,
    overview,
    features = [],
    tech = [],
    demoUrl,
    githubUrl,
  } = project;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="
        fixed inset-0 z-50
        bg-[#0d0e1a]/85 backdrop-blur-sm
        flex items-center justify-center
        p-4 md:p-6
      "
      onMouseDown={handleBackdropClick}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        className="
          relative w-full max-w-[900px] max-h-[90vh]
          bg-card-dark
          border border-border-dark
          rounded-2xl shadow-2xl
          overflow-hidden flex flex-col
        "
      >
        {/* Modal Header */}
        <div
          className="
            flex items-start justify-between
            p-6 md:p-8 pb-4
            border-b border-border-dark/50
            bg-card-dark
            shrink-0
          "
        >
          <div className="pr-8">
            <h2
              id="project-modal-title"
              className="
                text-2xl md:text-3xl
                font-extrabold text-white
                tracking-tight mb-1
              "
            >
              {title}
            </h2>

            {subtitle && (
              <p className="text-primary text-sm md:text-base font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="
              w-10 h-10 shrink-0
              rounded-xl
              bg-tag-bg hover:bg-slate-600
              border border-border-dark
              flex items-center justify-center
              text-text-secondary hover:text-white
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary
              cursor-pointer
            "
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto min-h-0 flex-1 p-6 md:p-8 space-y-8">
          {/* Project Preview */}
          <section aria-label="Project Preview">
            <div
              className="
                relative w-full aspect-video
                rounded-xl overflow-hidden
                border border-border-dark
                bg-background-dark
              "
            >
              <img
                src={image}
                alt={`${title} screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Project Overview */}
          {overview && (
            <section aria-label="Project Overview">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                Project Overview
              </h3>

              <p className="text-text-secondary text-sm md:text-[15px] leading-relaxed">
                {overview}
              </p>
            </section>
          )}

          {/* Key Features */}
          {features.length > 0 && (
            <section aria-label="Key Features">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                Key Features
              </h3>

              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-text-secondary text-sm md:text-[15px]"
                  >
                    <span className="material-symbols-outlined text-primary text-lg shrink-0">
                      check_circle
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Technologies Used */}
          {tech.length > 0 && (
            <section aria-label="Technologies Used">
              <h3 className="text-base md:text-lg font-bold text-white mb-3 flex items-center gap-2">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1.5
                      rounded-lg bg-tag-bg
                      text-slate-200 text-xs font-medium
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* External Links */}
          {(demoUrl || githubUrl) && (
            <section
              aria-label="External Links"
              className="pt-4 border-t border-border-dark/60"
            >
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-end">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      h-11 px-5 rounded-lg
                      flex items-center justify-center gap-2
                      bg-tag-bg hover:bg-slate-600
                      text-white text-sm font-semibold
                      transition-colors
                    "
                  >
                    Source Code
                  </a>
                )}

                {demoUrl && (
                  <a
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      h-11 px-5 rounded-lg
                      flex items-center justify-center gap-2
                      bg-primary hover:bg-hover
                      text-white text-sm font-semibold
                      transition-colors
                    "
                  >
                    {demoUrl.includes("youtu") ? "Watch Demo" : "Live Demo"}
                  </a>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectDetailsModal;
