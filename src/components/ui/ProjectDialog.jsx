import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

function getEmbed(project) {
  if (!project?.media) return null;
  if (project.type === "youtube")
    return `https://www.youtube-nocookie.com/embed/${project.media}?autoplay=1&rel=0`;
  if (project.type === "drive")
    return `https://drive.google.com/file/d/${project.media}/preview`;
  return null;
}

export default function ProjectDialog({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const previous = document.activeElement;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="dialog-scroll max-h-[92vh] w-full max-w-5xl overflow-y-auto border border-white/15 bg-[#100d0e]"
            initial={{ y: 30, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#100d0e]/95 px-5 py-4 backdrop-blur">
              <div>
                <p className="eyebrow">Selected work</p>
                <h3
                  id="project-dialog-title"
                  className="mt-1 text-sm font-bold"
                >
                  {project.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="grid size-11 place-items-center border border-white/15"
                aria-label="Tutup detail project"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black">
              {getEmbed(project) ? (
                <iframe
                  title={project.title}
                  src={getEmbed(project)}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : project.media ? (
                <img
                  src={project.media}
                  alt={project.title}
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="media-fallback h-full">R.</div>
              )}
            </div>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-8 ">
              <div className="w-full">
                <p className="eyebrow">
                  {project.category || "Creative"}{" "}
                  {project.year ? `/ ${project.year}` : ""}
                </p>
                <div className="flex justify-between items-center w-full ">
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {project.description ||
                      "Project description belum ditambahkan."}
                  </p>
                  {project.link == "#" ? (
                    ""
                  ) : (
                    <button
                      className="px-5 py-1 flex justify-center items-center gap-2 border border-white/65 rounded-sm"
                      onClick={() =>
                        project.link
                          ? window.open(project.link, "noopener", "noreferrer")
                          : ""
                      }
                    >
                      <p className="text-white/65 text-sm leading-7">
                        show project
                      </p>
                      <ArrowUpRight size={18} />
                    </button>
                  )}
                </div>
                {project.role && (
                  <p className="mt-3 text-xs text-white/40">
                    Role: {project.role}
                  </p>
                )}
              </div>
              {project.media && project.type === "website" && (
                <a
                  href={project.media}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline shrink-0"
                >
                  Open project <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
