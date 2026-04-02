const ITEMS = [
  "CUSTOM DESIGNS",
  "BLACKWORK",
  "FINE LINE",
  "SACRED ICONOGRAPHY",
  "RITUAL DETAIL",
  "APPOINTMENT ONLY",
];

export default function Marquee() {
  // Duplicated content for a seamless loop.
  const text = [...ITEMS, ...ITEMS].join(" \u00A0 \u00A0 \u00B7 \u00A0 \u00A0 ");

  return (
    <section
      aria-label="Studio highlights"
      className="border-y border-[#8B0000]/25 bg-[var(--deep)] py-4"
    >
      <div className="overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          <span className="marquee-text">{text}</span>
          <span className="marquee-text" aria-hidden="true">
            {text}
          </span>
        </div>
      </div>
    </section>
  );
}

