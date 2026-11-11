import SectionTitle from "../ui/SectionTitle.jsx";

export default function Journey() {
  return (
    <section
      id="experience"
      className="section-rule bg-[#120e0f] py-20 md:py-28"
    >
      <div className="section-wrap">
        <SectionTitle
          index="04"
          eyebrow="The journey"
          title="LEARN."
          accent="BUILD. REPEAT."
          description="Ceritakan pengalaman kerja, pendidikan, dan perjalanan belajar berdasarkan riwayat yang sebenarnya."
        />
        <div className="border-t border-white/10 py-8">
          <p className="text-sm leading-7 text-white/45">
            Bagian perjalanan masih menunggu data pengalaman dan pendidikan. Isi
            dengan posisi, organisasi/perusahaan, periode, serta deskripsi yang
            benar.
          </p>
        </div>
      </div>
    </section>
  );
}
