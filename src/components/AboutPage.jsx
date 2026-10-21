import { useState } from "react";
import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { CountUp, Star, Testimonials } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

const Bulb = () => (
  <svg
    viewBox="0 0 40 40"
    width="40"
    height="40"
    fill="none"
    stroke="#fec62d"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path
      d="M14 27v-2.5c-3-1.8-5-5-5-8.5a11 11 0 0 1 22 0c0 3.5-2 6.7-5 8.5V27z"
      fill="#fec62d"
      fillOpacity=".2"
    />
    <path d="M15 31h10M17 35h6" />
    <path d="M20 2v3M4 8l2 2M36 8l-2 2M2 18h3M35 18h3" />
  </svg>
);

const ArrowDot = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#fec62d" />
    <path
      d="M5.5 10h8M10.5 6.5L14 10l-3.5 3.5"
      stroke="#111"
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StatIcon = ({ name }) => {
  const p = {
    width: 28,
    height: 28,
    viewBox: "0 0 28 28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "clipboard":
      return (
        <svg {...p}>
          <rect x="6" y="5" width="16" height="19" rx="2.5" />
          <path d="M10 5V3.5h8V5M10 11h8M10 15h8M10 19h5" />
        </svg>
      );
    case "badge":
      return (
        <svg {...p}>
          <circle cx="14" cy="10" r="4.5" />
          <path d="M5 24c0-5 4-8 9-8s9 3 9 8M14 2v2" />
        </svg>
      );
    case "users":
      return (
        <svg {...p}>
          <circle cx="10" cy="10" r="4" />
          <circle cx="20" cy="11" r="3" />
          <path d="M2.5 23c0-4.5 3.5-7 7.5-7s7.5 2.5 7.5 7M18 17c4 0 7.5 2 7.5 6" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <circle cx="14" cy="9" r="4" />
          <circle cx="5.5" cy="12" r="2.8" />
          <circle cx="22.5" cy="12" r="2.8" />
          <path d="M6 24c0-4.5 3.5-7 8-7s8 2.5 8 7M1.5 21c0-3 1.5-5 4-5.5M26.5 21c0-3-1.5-5-4-5.5" />
        </svg>
      );
  }
};

function ClientLogo({ src, name }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="gl-name">{name}</span>
  ) : (
    <img src={src} alt={name} onError={() => setFailed(true)} />
  );
}

export default function AboutPage() {
  const { aboutPage: p, AB_PAGE_H } = useContent();
  const a = p.about;
  const t = p.team;
  const w = p.why;
  const g = p.clients;
  // cut the members into the pyramid rows, e.g. [3, 5, 3, 2]
  const rows = [];
  let at = 0;
  t.rows.forEach((n) => {
    rows.push(t.members.slice(at, at + n));
    at += n;
  });
  if (at < t.members.length) rows.push(t.members.slice(at)); // extra members go in one more row

  return (
    <Stage height={AB_PAGE_H}>
      <Navbar current="about" />

      {/* ===== banner ===== */}
      <section className="abh">
        <span className="triangle" aria-hidden="true" />
        <div className="circle" aria-hidden="true" />

        <h1 className="ab-title">{p.title}</h1>

        <nav className="ab-crumbs" aria-label="Breadcrumb">
          <ol>
            {p.crumbs.map((c) => (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href}>{c.label}</a>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* ===== About Company ===== */}
      <section className="abt" aria-label="About company">
        <span className="ab-pill">{a.pill}</span>

        <h2 className="ab-h">
          {a.heading.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p className="ab-p">{a.text}</p>

        <div className="ab-stat">
          <div className="ab-num">
            <CountUp to={a.stat.value} suffix={a.stat.suffix} />
          </div>
          <div className="ab-rule" aria-hidden="true" />
          <p className="ab-label">{a.stat.label}</p>
        </div>

        <div className="ab-photo">
          <img
            src={a.image}
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <div className="ab-card">
          <span className="ab-ico">
            <Bulb />
          </span>
          <span className="ab-div" aria-hidden="true" />
          <h3 className="ab-ct">
            {a.card.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h3>
          <ul className="ab-list">
            {a.card.items.map((it) => (
              <li key={it}>
                <ArrowDot />
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Team Members (pyramid) ===== */}
      <section className="tp" aria-label="Team members">
        <span className="tp-pill">{t.pill}</span>

        <h2 className="tp-h">
          {t.heading.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>

        <div className="tp-rows">
          {rows.map((row, r) => (
            <div className="tp-row" key={r}>
              {row.map((m) => (
                <article className="tp-card" key={m.id} tabIndex={0}>
                  <img
                    src={m.image}
                    alt={m.name}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                  <div className="tp-info">
                    <strong>{m.name}</strong>
                    <span>{m.role}</span>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>
      {/* ===== Why Choose Us + moving text ===== */}
      <section className="wcu" aria-label="Why choose us">
        <div className="wcu-img">
          <img
            src={w.image}
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>

        <span className="wcu-pill">{w.pill}</span>
        <h2 className="wcu-h">{w.heading}</h2>

        <div className="wcu-panel">
          {w.points.map((pt) => (
            <article className="wcu-pt" key={pt.title}>
              <span className="wcu-chk" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8.5l3.2 3.2L13 4.8"
                    stroke="#fec62d"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3>{pt.title}</h3>
              <p>{pt.text}</p>
            </article>
          ))}
        </div>

        {/* moving text with our star (same look as the home page) */}
        <div className="wcu-mq" aria-hidden="true">
          <div className="wcu-track">
            {[0, 1, 2].map((n) => (
              <div className="s2-seq" key={n}>
                {w.marquee.map((txt) => (
                  <span className="s2-item" key={txt}>
                    {txt}
                    <Star />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== yellow numbers band ===== */}
      <section className="abs" aria-label="Numbers">
        {w.stats.map((s, i) => (
          <article className="abs-cell" key={i}>
            <span className="abs-ico">
              <StatIcon name={s.icon} />
            </span>
            <div className="abs-num">
              <CountUp to={s.value} suffix={s.suffix} />
            </div>
            <p className="abs-label">
              {s.label.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          </article>
        ))}
      </section>

      {/* ===== Testimonials: same block as the home page ===== */}
      <Testimonials top={4720} flowOrder={7} />

      {/* ===== Global Clients ===== */}
      <section className="gl" aria-label="Global clients">
        <span className="gl-pill">{g.pill}</span>
        <h2 className="gl-h">{g.heading}</h2>
        <ul className="gl-grid">
          {g.logos.map((l) => (
            <li className="gl-box" key={l.id}>
              <ClientLogo src={l.image} name={l.name} />
            </li>
          ))}
        </ul>
      </section>
    </Stage>
  );
}
