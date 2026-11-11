export default function SectionTitle({
  index,
  eyebrow,
  title,
  accent,
  description,
  className = "",
}) {
  return (
    <div
      className={`mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end ${className}`}
    >
      <div>
        <p className="eyebrow mb-4">
          {index} / {eyebrow}
        </p>
        <h2 className="section-heading text-5xl sm:text-6xl md:text-7xl">
          {title}
          <br />
          <span className="accent">{accent}</span>
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-sm leading-7 text-white/50">
          {description}
        </p>
      )}
    </div>
  );
}
