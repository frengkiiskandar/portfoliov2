import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { gsap } from "../../lib/gsap.js";
import { ArrowDown, ArrowUpRight, Download, MapPin, Play } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImage from "../../assets/hero.png";

export default function Hero({ motionEnabled }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 55]);
  const animate = motionEnabled && !reduced;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".heroanimation",
        {
          x: -70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.3,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        ".heroanimationRight",
        {
          x: 70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 3,
          stagger: 0.3,
          ease: "power2.out",
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="home"
      ref={ref}
      className="relative mx-auto min-h-[760px] max-w-site overflow-hidden px-5 pb-20 pt-10 sm:px-8 md:min-h-[820px] md:pt-14"
    >
      <div className="relative z-10 flex items-start justify-between text-[9px] font-bold tracking-[.16em] text-white/65 sm:text-[11px] ">
        <span>
          CREATIVE DEVELOPER
          <br />
          <span className="text-white/30">VISUAL STORYTELLER</span>
        </span>
        <span className="flex items-center gap-2 text-right">
          <i className="size-2 rounded-full bg-crimson shadow-[0_0_14px_#e32b3c]" />{" "}
          AVAILABLE FOR COLLABORATION
        </span>
      </div>
      <motion.div
        style={animate ? { y: titleY } : {}}
        className="display pointer-events-none absolute left-1/2 top-[115px] z-0 w-full -translate-x-1/2 text-center text-[25vw] leading-[.82] text-[#bd0c22] sm:top-[105px] sm:text-[23vw] md:top-[100px] md:text-[22vw] lg:text-[280px]"
      >
        PORTFOLIO
      </motion.div>
      <motion.div
        style={animate ? { y: portraitY } : {}}
        initial={animate ? { opacity: 0, scale: 0.98 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1 }}
        className="pointer-events-none absolute left-1/2 top-[160px] z-[1] h-[390px] w-[min(88%,560px)] -translate-x-1/2 sm:top-[145px] sm:h-[520px] md:top-[120px] md:h-[610px]"
      >
        <img
          src={heroImage}
          alt="Portrait pemilik portfolio"
          className="h-full w-full object-contain object-bottom [filter:drop-shadow(0_20px_60px_#000)]"
        />
      </motion.div>
      <div className="relative z-10 mt-[100px] max-w-[600px] sm:mt-[480px] md:absolute md:bottom-[115px] md:left-8 md:mt-0 ">
        <p className="font-hand text-3xl text-crimson sm:text-4xl heroanimation">
          Hello, I’m
        </p>
        <h1 className="display text-6xl leading-[.9] sm:text-7xl md:text-8xl heroanimation">
          FRENGKI ISKANDAR<span className="text-crimson">.</span>
        </h1>
        <p className="mt-3 text-xl font-extrabold leading-tight text-crimson sm:text-2xl heroanimation">
          PROGRAMMER &<br />
          CREATIVE DEVELOPER
        </p>
        <p className="mt-4 w-full text-xs leading-6 text-white/55 sm:text-sm heroanimation">
          Saya seorang programmer yang berfokus pada pengembangan aplikasi web.
          Saya menikmati proses merancang antarmuka, membangun backend,
          mengelola database, dan memastikan semuanya berjalan dengan baik.
        </p>
        <div className="mt-6 flex justify-start items-center gap-5 heroanimation">
          <a href="#portfolio" className="btn-primary">
            Portfolio <ArrowDown size={16} />
          </a>
          <a
            href="/Asset/cv/Frengki-CV.pdf"
            className="flex min-h-11 p-4 items-center gap-2 text-[9px] font-bold tracking-widest text-white/60 hover:text-crimson border border-gray-500 "
          >
            <Download size={15} /> DOWNLOAD CV <ArrowUpRight size={13} />
          </a>
        </div>
        <p className="mt-5 flex items-center gap-2 text-[9px] font-bold tracking-[.15em] text-white/40 heroanimation">
          <MapPin size={12} className="text-crimson" /> RIAU, INDONESIA
        </p>
      </div>
      <div className="relative z-10 mt-8 flex flex-col gap-6 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between md:absolute md:bottom-[115px] md:right-8 md:mt-0 md:w-[230px] md:border-0 md:pt-0">
        <div className="md:mb-8 heroanimationRight">
          <span className="font-hand text-2xl text-white/65">Every pixel.</span>
          <p className="font-hand text-2xl text-crimson">
            A different purpose.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-3 heroanimationRight">
          {[
            ["01", "DESIGN & CODE"],
            ["02", "WEB EXPERIENCE"],
            ["03", "PROBLEM SOLVING"],
          ].map(([number, label]) => (
            <div key={number} className="border-t border-white/15 pt-2">
              <span className="display text-2xl text-crimson sm:text-3xl">
                {number}
              </span>
              <p className="mt-1 text-[8px] font-bold tracking-wider text-white/45 sm:text-[9px]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-6 left-5 right-5 hidden items-center justify-between border-t border-white/10 pt-4 text-[9px] font-bold tracking-widest text-white/40 sm:flex md:left-8 md:right-8">
        <span className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-crimson text-crimson">
            <Play size={11} fill="currentColor" />
          </span>{" "}
          SELECTED WORK / 2022—2026
        </span>
        <span className="flex items-center gap-2">
          SCROLL TO DISCOVER <ArrowDown size={13} />
        </span>
      </div>
    </section>
  );
}
