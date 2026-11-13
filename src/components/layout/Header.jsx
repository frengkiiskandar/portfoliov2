import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Pause, Play, X } from "lucide-react";

const links = [
  ["portfolio", "Portfolio"],
  ["awards", "Certificate"],
  ["about", "About"],
  ["experience", "Journey"],
  ["contact", "Contact"],
];

export default function Header({ motionEnabled, onToggleMotion }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-xl font-sans">
      <div className="mx-auto flex h-[76px] max-w-site items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="display text-[25px] tracking-wide"
          aria-label="Kembali ke beranda"
        >
          FRENGKI<span className="align-top text-[10px] text-crimson">®</span>
        </a>
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navigasi utama"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-[10px] lg:text-[12px] font-bold uppercase tracking-[.13em] transition hover:text-crimson ${active === id ? "text-crimson" : "text-white/65"}`}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onToggleMotion}
            className="flex min-h-11 items-center gap-2 px-2 text-[9px] font-bold uppercase tracking-wider text-white/60 hover:text-white"
            aria-pressed={!motionEnabled}
          >
            {motionEnabled ? <Pause size={13} /> : <Play size={13} />}
            <span className="hidden sm:inline">
              Motion {motionEnabled ? "on" : "off"}
            </span>
          </button>
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 bg-crimson px-4 text-[10px] font-extrabold uppercase tracking-wider sm:flex"
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center border border-white/15 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#100d0e] px-6 py-4 lg:hidden"
          >
            {[["home", "Beranda"], ...links].map(([id, label], index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-white/10 text-sm font-semibold"
              >
                <span>
                  <small className="mr-4 text-crimson">0{index + 1}</small>
                  {label}
                </span>
                <ArrowUpRight size={17} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
