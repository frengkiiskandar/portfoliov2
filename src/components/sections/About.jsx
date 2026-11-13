import { useEffect, useRef } from "react";
import SectionTitle from "../ui/SectionTitle.jsx";
import { gsap } from "../../lib/gsap.js";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MySQL",
  "REST API",
  "MySQL",
  "NodeJs",
  "TailwindCSS",
  "ExpressJS",
  "Figma",
  "GitHub",
  "GitLab",
  "Figma",
  "Photoshop",
];
const process = [
  [
    "01",
    "THE IDEA",
    "Memahami kebutuhan, tujuan, dan masalah yang ingin diselesaikan.",
  ],
  [
    "02",
    "THE PLAN",
    "Menyusun struktur, alur pengguna, dan pendekatan teknis.",
  ],
  [
    "03",
    "THE BUILD",
    "Mengubah rancangan menjadi aplikasi yang fungsional dan responsif.",
  ],
  [
    "04",
    "THE POLISH",
    "Menguji detail, memperbaiki pengalaman, dan mengoptimalkan performa.",
  ],
];

export default function About() {
  const ref = useRef(null);

  // animasi gsap
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
      gsap.fromTo(
        ".aboutLeft",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".aboutLeft",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
      gsap.fromTo(
        ".aboutRight",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power1.in",
          scrollTrigger: {
            trigger: ".aboutRight",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="section-wrap section-rule py-20 md:py-28"
    >
      <SectionTitle
        className="about"
        index="03"
        eyebrow="Behind the screen"
        title="MORE THAN"
        accent="JUST CODE."
        description="Saya tertarik membangun produk digital yang bukan hanya terlihat baik, tetapi juga menyelesaikan masalah nyata."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="border border-white/10 bg-[#100d0e] p-6 sm:p-8">
          <p className="eyebrow aboutLeft">ABOUT ME</p>
          <h3 className="display mt-4 text-4xl leading-tight sm:text-5xl aboutLeft">
            BUILD WITH
            <br />
            <span className="text-crimson aboutLeft">PURPOSE.</span>
          </h3>
          <p className="mt-6 text-sm leading-6 md:leading-8 text-white/55 aboutLeft">
            Saya seorang programmer yang berfokus pada pengembangan aplikasi
            web. Saya menikmati proses merancang antarmuka, membangun backend,
            mengelola database, dan memastikan semuanya berjalan dengan baik.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="eyebrow mb-4 about">CREATIVE TOOLKIT</p>
            <div className="flex flex-wrap gap-2 aboutLeft">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-white/15 px-3 py-2 text-[10px] text-white/65"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5">MY PROCESS</p>
          {process.map(([number, title, description]) => (
            <div
              key={number}
              className="grid grid-cols-[42px_1fr] gap-4 border-t border-white/10 py-5 aboutRight"
            >
              <span className="display text-2xl text-crimson">{number}</span>
              <div>
                <h4 className="text-sm font-extrabold tracking-wider">
                  {title}
                </h4>
                <p className="mt-2 text-xs leading-6 text-white/45">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
