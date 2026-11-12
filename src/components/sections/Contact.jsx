import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.jsx";
import { gsap } from "../../lib/gsap.js";

export default function Contact() {
  const ref = useRef(null)
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Website / Application",
    message: "",
  });
  const update = (event) =>
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  const send = (event) => {
    event.preventDefault();
    const text = `Halo, saya ${form.name} (${form.email}).\nKebutuhan: ${form.project}\nDetail: ${form.message}`;
    window.open(
      `https://wa.me/6281275691395?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };


    // animasi gsap
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".contact",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".contact",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
        gsap.fromTo(
          ".contactUp",
          { opacity: 0, y : 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power1.in",
            scrollTrigger: {
              trigger: ".contact",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }, ref);
  
      return () => ctx.revert();
    }, []);

  return (
    <section ref={ref} id="contact" className="section-wrap section-rule py-20 md:py-28">
      <SectionTitle
      className="contact"
        index="05"
        eyebrow="Start a conversation"
        title="HAVE A PROJECT?"
        accent="LET’S TALK."
        description="Punya ide atau kebutuhan aplikasi? Ceritakan secara singkat. Kita diskusikan solusi yang paling masuk akal."
      />
      <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div className="contact">
          <p className="font-hand text-4xl text-crimson">Say hello.</p>
          <h3 className="display mt-2 text-5xl leading-none sm:text-6xl">
            LET’S MAKE
            <br />
            IT HAPPEN.
          </h3>
          <div className="mt-8 space-y-4">
            <a
              href="mailto:hello@example.com"
              className="flex min-h-12 items-center gap-4 border-b border-white/10 text-sm hover:text-crimson"
            >
              <Mail size={17} className="text-crimson" /> frankierockabilly@gmail.com{" "}
              <ArrowUpRight size={15} className="ml-auto" />
            </a>
            {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-4 border-b border-white/10 text-sm hover:text-crimson"><Instagram size={17} className="text-crimson"/> Instagram <ArrowUpRight size={15} className="ml-auto"/></a> */}
          </div>
        </div>
        <form
          onSubmit={send}
          className="border border-white/10 bg-[#100d0e] p-5 sm:p-8 contactUp"
        >
          <p className="eyebrow mb-6">PROJECT BRIEF</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">
              Nama
              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Nama kamu"
                className="mt-2 h-12 w-full border-b border-white/20 bg-transparent text-sm text-white outline-none placeholder:text-white/25 focus:border-crimson"
              />
            </label>
            <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="email@domain.com"
                className="mt-2 h-12 w-full border-b border-white/20 bg-transparent text-sm text-white outline-none placeholder:text-white/25 focus:border-crimson"
              />
            </label>
            <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 sm:col-span-2">
              Jenis project
              <select
                name="project"
                value={form.project}
                onChange={update}
                className="mt-2 h-12 w-full border-b border-white/20 bg-[#100d0e] text-sm text-white outline-none focus:border-crimson"
              >
                <option>Website / Application</option>
                <option>Frontend Development</option>
                <option>Backend / API</option>
                <option>Other</option>
              </select>
            </label>
            <label className="text-[10px] font-bold uppercase tracking-wider text-white/50 sm:col-span-2">
              Ceritakan project
              <textarea
                required
                name="message"
                value={form.message}
                onChange={update}
                rows="4"
                placeholder="Ceritakan kebutuhan project kamu..."
                className="mt-2 w-full resize-y border-b border-white/20 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-crimson"
              />
            </label>
          </div>
          <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
            Kirim brief <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
