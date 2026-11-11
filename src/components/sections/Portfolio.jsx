import { useMemo, useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.jsx";
import ProjectCard from "../ui/ProjectCard.jsx";
import ProjectDialog from "../ui/ProjectDialog.jsx";
import projectData from "../../../data/project.json";
import brandData from "../../../data/brand.json";

const categories = [
  "Semua",
  "fullstack",
  "frontend",
  "backend",
  "System Development",
  "personal project",
  "UI",
];
const list = Array.isArray(projectData)
  ? projectData
  : projectData.projects || [];

export default function Portfolio() {
  const [category, setCategory] = useState("Semua");
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const [selected, setSelected] = useState(null);
  const filtered = useMemo(
    () =>
      list.filter((project) => {
        const matchCategory =
          category === "Semua" ||
          (project.category || "").toLowerCase() === category.toLowerCase();
        const text =
          `${project.title || ""} ${project.description || ""} ${project.category || ""}`.toLowerCase();
        return matchCategory && text.includes(query.toLowerCase());
      }),
    [category, query],
  );
  const featured = list.slice(0, 4);
  const brands = Array.isArray(brandData) ? brandData : brandData.brands || [];

  return (
    <section
      id="portfolio"
      className="section-wrap section-rule py-20 md:py-28"
    >
      <SectionTitle
        index="01"
        eyebrow="Selected work"
        title="SELECTED"
        accent="WORK."
        description="Kumpulan karya, eksperimen visual, dan project yang pernah saya kerjakan. Pilih project untuk melihat detailnya."
      />
      <div className="mb-14">
        <div className="mb-5 flex items-center justify-between">
          <p className="eyebrow">Featured projects</p>
          <span className="text-[9px] tracking-widest text-white/35">
            01 — 03
          </span>
        </div>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id || project.media || project.title || index}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 pt-8">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">The archive</p>
            <h3 className="display mt-2 text-4xl">
              ALL PROJECTS{" "}
              <span className="text-crimson">({filtered.length})</span>
            </h3>
          </div>
          <label className="flex min-h-11 w-full items-center gap-3 border-b border-white/20 px-2 lg:max-w-[270px]">
            <Search size={16} className="text-crimson" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setLimit(9);
              }}
              placeholder="Cari project..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-white/30"
            />
          </label>
        </div>
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => {
                setCategory(item);
                setLimit(9);
              }}
              className={`min-h-11 shrink-0 border px-4 text-[9px] font-bold uppercase tracking-wider transition ${category === item ? "border-crimson bg-crimson text-white" : "border-white/15 text-white/50 hover:border-white/50 hover:text-white"}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* card untu semua project yang telah dibuat */}
        <div className="grid gap-7 md:grid-cols-3">
          {filtered.slice(0, limit).map((project, index) => (
            <ProjectCard
              key={project.id || project.media || `${project.title}-${index}`}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-sm text-white/40">
            Tidak ada project yang cocok.
          </p>
        )}
        {filtered.length > limit && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setLimit((value) => value + 9)}
              className="btn-outline"
            >
              Load more <ArrowUpRight size={15} />
            </button>
          </div>
        )}
      </div>
      <div className="mt-20 border-t border-white/10 pt-8">
        <div className="mb-6 flex items-end justify-between">
          <p className="eyebrow">Trusted collaboration</p>
          <span className="text-[9px] text-white/35">
            {brands.length} BRANDS
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-9">
          {brands.map((brand, index) => (
            <div
              key={brand.name || brand.file || index}
              className="flex min-h-20 items-center justify-center border border-white/10 p-4 grayscale transition hover:border-crimson/50 hover:grayscale-0"
            >
              {brand.file ? (
                <img
                  src={brand.file}
                  alt={brand.name || "Brand logo"}
                  loading="lazy"
                  className="max-h-12 max-w-full object-contain opacity-70 transition hover:opacity-100"
                />
              ) : (
                <span className="text-center text-xs font-bold uppercase tracking-wider text-white/35">
                  {brand.name || "BRAND"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
