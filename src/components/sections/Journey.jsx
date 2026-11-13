import { useEffect, useRef } from "react";
import SectionTitle from "../ui/SectionTitle.jsx";
import { gsap } from "../../lib/gsap.js";

const journeyData = [
  {
    period: "2018",
    category: "The Beginning",
    title: "First Step into Programming",
    description:
      "Pengenalan di dunia programming dimulai saat masa SMA ketika mengikuti Olimpiade Komputer tingkat Provinsi dan mengenal banyak orang hebat. Ketertarikan terhadap perkembangan teknologi yang begitu pesat membawa saya untuk mulai melirik dunia programming.",
    tags: ["Java", "Php"],
  },
  {
    period: "2018 — 2022",
    category: "Education",
    title: "Universitas Pasir Pengaraian",
    description:
      "Menyelesaikan pendidikan S1 Teknik Informatika dengan memperdalam pengetahuan di bidang teknologi informasi dan pengembangan perangkat lunak.",
    tags: ["Teknik Informatika", "Bachelor's Degree"],
  },
  {
    period: "2023",
    category: "Professional Development",
    title: "Harisenin.com",
    description:
      "Mengikuti program pelatihan Fullstack Web Development untuk memperluas kemampuan dalam membangun aplikasi berbasis web.",
    tags: ["Fullstack Web Development", "Certification"],
  },
  {
    period: "2023 — Present",
    category: "Work Experience",
    title: "IT Staff — Rumah Sakit Surya Insani",
    description:
      "Bertanggung jawab dalam pengelolaan sistem informasi, software, hardware, serta maintenance infrastruktur jaringan untuk mendukung operasional teknologi informasi rumah sakit.",
    tags: ["IT Support", "System Management", "Network Maintenance"],
  },
  {
    period: "2025",
    category: "Professional Development",
    title: "Growia & Dibimbing.id",
    description:
      "Melanjutkan pengembangan kompetensi melalui program Webinar tentang Web Development dari Growia dan Dibimbing.id.",
    tags: ["Webinar", "Certification"],
  },
  {
    period: "Selected Project",
    category: "Development Milestone",
    title: "Village Monitoring System",
    description:
      "Mengembangkan aplikasi sistem monitoring desa untuk Kecamatan Ujung Batu menggunakan teknologi MySQL, Express.js, React.js, dan Node.js.",
    tags: ["MySQL", "ExpressJs", "ReactJs", "NodeJs"],
  },
  {
    period: "Present",
    category: "Continuous Growth",
    title: "Keep Learning, Keep Building",
    description:
      "Terus beradaptasi dengan perkembangan teknologi, termasuk hadirnya Artificial Intelligence, serta meningkatkan kompetensi teknis untuk menghadapi tantangan dan persaingan di industri software development.",
    tags: ["Continuous Learning", "Adaptability"],
  },
];

export default function Journey() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
      
      tl.fromTo(
        ".journeyTitle",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
      ).fromTo(
        ".journey-item",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3",
      )
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="experience"
      className="section-rule bg-[#120e0f] py-20 md:py-28"
    >
      <div className="section-wrap">
        <div className="journeyTitle">
          <SectionTitle
            index="04"
            eyebrow="The journey"
            title="LEARN."
            accent="BUILD. REPEAT."
            description="A timeline of my education, professional experience, and continuous growth in technology."
          />
        </div>

        <div className="relative mt-14">
          {/* Timeline vertical line */}
          <div className="absolute bottom-0 left-[5px] top-2 w-px bg-white/10 md:left-[180px]" />

          <div className="space-y-10 md:space-y-12">
            {journeyData.map((item) => (
              <article
                key={`${item.period}-${item.title}`}
                className="journey-item relative grid grid-cols-[24px_1fr] gap-4 md:grid-cols-[180px_1fr] md:gap-10"
              >
                {/* Period */}
                <div className="hidden p-1 text-right md:block">
                  <span className="text-sm font-medium tracking-wide text-white/50  mr-4">
                    {item.period}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 z-10 h-3 w-3 rounded-full border-2 border-[#e5484d] bg-[#120e0f] md:left-[175px]" />

                {/* Content */}
                <div className="col-start-2 border-b border-white/10 pb-8 md:pb-10">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5484d]">
                      {item.category}
                    </span>

                    <span className="text-xs text-white/30 md:hidden">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-6 font-light md:font-normal md:leading-7 text-white/50">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
