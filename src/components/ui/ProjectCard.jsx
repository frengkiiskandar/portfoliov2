import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export default function ProjectCard({ project, index, onOpen }) {
  const isVideo = ["youtube", "drive"].includes(project.type);
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.05 }}
    >
      <button
        onClick={() => onOpen(project)}
        className="project-card group block w-full text-left"
      >
        <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#171213] rounded-lg ">
          {project.media ? (
            <div className="relative h-auto overflow-hidden">
              <img
                src={project.media}
                alt={project.title || "Project preview"}
                loading="lazy"
                className="project-image brightness-[0.65] contrast-110 saturate-[0.8] transition duration-700 hover:scale-105"
              />

              {/* Dark cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
            </div>
          ) : (
            <div className="media-fallback h-full">F.</div>
          )}
          <span className="absolute left-3 top-3 bg-black/75 px-3 py-1 text-[9px] font-sans tracking-widest text-white rounded-full border border-gray-800">
            {project.link === "#" ? (
              <span></span>
            ) : (
              <div className="flex justify-start items-center gap-2 ">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                online
              </div>
            )}
          </span>
          <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-crimson text-white opacity-0 transition group-hover:opacity-100 max-sm:opacity-100">
            {isVideo ? (
              <Play size={15} fill="currentColor" />
            ) : (
              <ArrowUpRight size={18} />
            )}
          </span>
        </div>
        <div className="flex items-center gap-4 border-b border-white/10 py-4">
          <span className="display text-xl text-crimson">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate text-sm font-bold">
              {project.title || "Untitled project"}
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-wider text-white/40">
              {project.category || "Creative"}{" "}
              {project.year ? `/ ${project.year}` : ""}
            </span>
          </span>
          <ArrowUpRight
            size={18}
            className="text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-crimson"
          />
        </div>
      </button>
    </motion.article>
  );
}
