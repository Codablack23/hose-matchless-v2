const speakers = [
  {
    initials: "CS",
    name: "C-Simon",
    role: "CEO, Hose Matchless Global Ltd",
    country: "🇨🇦 Canada",
    bg: "#185FA5",
    status: "confirmed",
  },
  {
    initials: "TBA",
    name: "Keynote Speaker #1",
    role: "International Creator Leader",
    country: "🌍 Global",
    bg: "#0f6e56",
    status: "soon",
  },
  {
    initials: "TBA",
    name: "Keynote Speaker #2",
    role: "Monetization Expert",
    country: "🌍 Global",
    bg: "#854F0B",
    status: "soon",
  },
  {
    initials: "TBA",
    name: "Keynote Speaker #3",
    role: "AI & Content Specialist",
    country: "🌍 Global",
    bg: "#534AB7",
    status: "soon",
  },
  {
    initials: "TBA",
    name: "Keynote Speaker #4",
    role: "Creator Economy Leader",
    country: "🌍 Global",
    bg: "#A32D2D",
    status: "soon",
  },
  {
    initials: "TBA",
    name: "Workshop Speaker #1",
    role: "Video Production Expert",
    country: "🌍 Global",
    bg: "#3B6D11",
    status: "soon",
  },
  {
    initials: "TBA",
    name: "Workshop Speaker #2",
    role: "Brand & Design Specialist",
    country: "🌍 Global",
    bg: "#993556",
    status: "soon",
  },
];

function SpeakerCard({ s }: { s: any }) {
  return (
    <div className="spk-card">
      <div className="spk-photo">
        <div className="spk-photo-placeholder" style={{ background: s.bg }}>
          {s.initials}
        </div>
      </div>
      <div className="spk-name">{s.name}</div>
      <div className="spk-role">{s.role}</div>
      <div className="spk-country">{s.country}</div>
      <span
        className={`spk-status ${s.status === "confirmed" ? "ss-confirmed" : "ss-soon"}`}
      >
        {s.status === "confirmed" ? "Confirmed" : "Announcing soon"}
      </span>
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="alt-bg">
      <div className="sec-label">Faculty & Speakers</div>
      <h2 className="sec-title">Featured speakers</h2>
      <div className="sec-div"></div>
      <p className="sec-sub">
        World-class creators, academics, entrepreneurs, and industry leaders
        from across the globe.
      </p>

      <div className="speakers-scroll" id="speakers-grid">
        {speakers.map((s, i) => (
          <SpeakerCard key={i} s={s} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            background: "transparent",
            border: "1px solid var(--light)",
            color: "var(--text)",
            padding: "9px 20px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "500",
            cursor: "pointer",
            fontFamily: "'DM Sans',sans-serif",
          }}
        >
          Apply to speak at ICEC 2026 &#8594;
        </button>
      </div>
    </section>
  );
}
