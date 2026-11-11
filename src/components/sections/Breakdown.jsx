import { useState } from "react";
import SectionTitle from "../ui/SectionTitle.jsx";

export default function Breakdown() {
  const [split, setSplit] = useState(50);

  const beforeImage = "/Asset/img/breakdown/before.png";
  const afterImage = "/Asset/img/breakdown/after.png";

  return (
    <section className="section-wrap section-rule py-20 md:py-28">
      <SectionTitle
        index="03"
        eyebrow="The process"
        title="FROM RAW"
        accent="TO REFINED."
        description="Perbandingan proses sebelum dan sesudah pengerjaan project."
      />

      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/15 sm:aspect-[16/8]">
        {/* FINAL IMAGE - Background */}
        <img
          src={afterImage}
          alt="Final result"
          className="absolute inset-0 h-full w-full object-contain"
        />

        {/* BEFORE IMAGE - Clipped */}
        {/* BEFORE IMAGE - Clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt="Before editing"
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-4 top-4 z-10 bg-black/70 px-3 py-2 text-[9px] font-bold tracking-widest">
          BEFORE
        </span>

        <span className="absolute right-4 top-4 z-10 bg-crimson px-3 py-2 text-[9px] font-bold tracking-widest">
          AFTER
        </span>

        {/* Slider Line */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-white"
          style={{ left: `${split}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-crimson text-xs">
            ↔
          </span>
        </div>

        {/* Range Input */}
        <input
          aria-label="Geser perbandingan before dan after"
          type="range"
          min="0"
          max="100"
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
          className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="mt-4 flex justify-between text-[9px] font-bold tracking-widest text-white/40">
        <span>DRAG TO COMPARE</span>
        <span>
          {split}% / {100 - split}%
        </span>
      </div>
    </section>
  );
}
