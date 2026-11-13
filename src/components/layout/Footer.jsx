import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialmedia = [
    {
      id: 1,
      name: "Instagram",
      image: "/Asset/svg/instagram.svg",
      url: "https://www.instagram.com/frengky_iskandar?rpxt=a3ZjaXR6OWc0bGoy",
    },
    {
      id: 2,
      name: "WhatsApp",
      image: "/Asset/svg/whatsapp.svg",
      url: "https://wa.me/6281275691395",
    },
    {
      id: 3,
      name: "GitHub",
      image: "/Asset/svg/github.svg",
      url: "https://github.com/frengkiiskandar",
    },
    {
      id: 4,
      name: "x",
      image: "/Asset/svg/x.svg",
      url: "https://linkedin.com/in/frengkiiskandar",
    },
  ];

  return (
    <footer className="section-rule">
      <div className="section-wrap flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="display text-2xl">
          FRENGKI<span className="text-crimson">.</span>
        </a>

        {/* Social Media */}
        <div className="flex items-center justify-center gap-6">
          {socialmedia.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="opacity-50 transition hover:opacity-100"
            >
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-5 w-5 object-contain brightness-0 invert transition hover:brightness-100 hover:invert-30"
                />
              </div>
            </a>
          ))}
        </div>

        <a
          href="#home"
          className="flex min-h-11 items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-crimson"
        >
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>
    </footer>
  );
}
