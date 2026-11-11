import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function AwardCard({ award }) {
  const [preview, setPreview] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setPreview(true)}
        className="group w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-black/30 text-left transition duration-500 hover:border-crimson/60"
      >
        {/* Certificate Image */}
        <div className="relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden bg-white/5">
          <img
            src={award.image}
            alt={award.title || "Certificate"}
            loading="lazy"
            className="h-full w-full object-cover brightness-[0.8] transition duration-700 group-hover:scale-105 group-hover:brightness-100"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

          <div className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
            <ArrowUpRight size={17} />
          </div>
        </div>

        {/* Certificate Information */}
        <div className="p-4">
          <h3 className="text-xs font-semibold text-white">{award.title}</h3>

          <p className="mt-2 text-xs text-white/45">{award.issuer}</p>

          <p className="mt-2 text-[10px] uppercase tracking-widest text-crimson">
            {award.date}
          </p>
        </div>
      </button>

      {/* Fullscreen Preview */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setPreview(false)}
        >
          <button
            type="button"
            onClick={() => setPreview(false)}
            className="absolute right-5 top-5 z-10 rounded-full border border-white/20 p-3 text-white transition hover:bg-white/10"
          >
            <X size={22} />
          </button>

          <img
            src={award.image}
            alt={award.title || "Certificate preview"}
            className="max-h-[85vh] max-w-full rounded-md object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
