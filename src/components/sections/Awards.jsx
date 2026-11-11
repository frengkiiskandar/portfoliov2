import SectionTitle from "../ui/SectionTitle.jsx";
import award from "../../../data/award.json";
import AwardCard from "../ui/AwardCard.jsx";

export default function Awards() {
  return (
    <section id="awards" className="section-rule bg-[#120e0f] py-20 md:py-28">
      <div className="section-wrap">
        <SectionTitle
          index="02"
          eyebrow="Recognition"
          title="SELECTED"
          accent="SERTIFICATE."
          description="Penghargaan, sertifikasi, atau pencapaian yang telah saya raih"
        />
        <div className="grid gap-8 border-t border-white/10 py-8 md:grid-cols-[.5fr_1.3fr] md:items-center ">
          <div>
            <p className="display text-7xl text-crimson">—</p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[.18em] text-white/40">
              My achievements
            </p>
          </div>
          {award.length == 0 ? (
            <p className="max-w-xl text-sm leading-7 text-white/45">
              Belum ada data penghargaan yang dimasukkan. Tambahkan daftar
              penghargaan atau sertifikat milikmu di tahap personalisasi.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
              {award.map((item) => (
                <AwardCard key={item.id} award={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
