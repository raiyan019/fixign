import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { PricingPlan, Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

const Tick = () => (
  <svg
    className="pi-tick"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    aria-hidden="true"
  >
    <circle cx="13" cy="13" r="13" fill="#fec62d" />
    <path
      d="M7.5 13.4l3.8 3.8 7.2-7.6"
      stroke="#111"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
    <path d="M10.5 5.5V3.5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
  </svg>
);

/* ---------- text above the plans ---------- */
function PricingIntro({ top, flowOrder }) {
  const { pricingPage: p } = useContent();
  const i = p.intro;
  return (
    <section
      className="pi"
      aria-label="About our pricing"
      style={{
        ...(top != null ? { top } : {}),
        ...(flowOrder != null ? { order: flowOrder } : {}),
      }}
    >
      <span className="pg-pill">{i.pill}</span>
      <h2 className="pg-h">
        {i.heading} <span className="y">{i.accent}</span>
      </h2>
      <p className="pg-p">{i.text}</p>
      <ul className="pi-chips">
        {i.points.map((pt) => (
          <li className="pi-chip" key={pt}>
            <Tick />
            {pt}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- discount chart below the plans ---------- */
function PricingDiscounts({ top, flowOrder }) {
  const { pricingPage: p } = useContent();
  const d = p.discounts;
  const [copied, setCopied] = useState(null);

  const copy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* if the browser blocks it, the code is still visible to copy by hand */
    }
    setCopied(id);
    setTimeout(() => setCopied(null), 1600);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="dc"
        aria-label="Discounts"
        style={{
          ...(top != null ? { top } : {}),
          ...(flowOrder != null ? { order: flowOrder } : {}),
        }}
      >
        <span className="pg-pill">{d.pill}</span>
        <h2 className="pg-h">
          {d.heading} <span className="y">{d.accent}</span>
        </h2>
        <p className="pg-p pg-p--narrow">{d.text}</p>

        <div className="dc-chart" role="table" aria-label="Discount offers">
          <div className="dc-head" role="row">
            {d.columns.map((c) => (
              <span key={c} role="columnheader">
                {c}
              </span>
            ))}
          </div>

          {d.rows.map((r, n) => (
            <div className="dc-row" role="row" key={r.id}>
              <strong className="dc-offer" role="cell">
                {r.offer}
              </strong>
              <span className="dc-who" role="cell">
                {r.who}
              </span>

              <div className="dc-disc" role="cell">
                <span className="dc-pct">{r.percent}%</span>
                <span className="dc-bar" aria-hidden="true">
                  <motion.span
                    className="dc-fill"
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${Math.min(100, (r.percent / d.scaleMax) * 100)}%`,
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                      delay: n * 0.12,
                    }}
                  />
                </span>
              </div>

              <button
                className={`dc-code ${copied === r.id ? "dc-code--copied" : ""}`}
                onClick={() => copy(r.code, r.id)}
                aria-label={`Copy promo code ${r.code}`}
                role="cell"
              >
                {copied === r.id ? "Copied!" : r.code}
                {copied !== r.id && <CopyIcon />}
              </button>
            </div>
          ))}
        </div>

        <p className="dc-note">{d.note}</p>
      </section>
    </MotionConfig>
  );
}

export default function PricingPage() {
  const { pricingPage: p, PR_H } = useContent();

  return (
    <Stage height={PR_H}>
      <Navbar current="pricing" />

      {/* ===== banner: same theme as About Us ===== */}
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

      {/* ===== text above the plans (y 600) ===== */}
      <PricingIntro top={600} flowOrder={3} />

      {/* ===== the neon pricing box (y 960, 882 tall) ===== */}
      <PricingPlan top={960} flowOrder={4} />

      {/* ===== discount chart (y 1962) ===== */}
      <PricingDiscounts top={1962} flowOrder={5} />

      {/* ===== same footer (y 2760) ===== */}
      <Footer top={2760} flowOrder={6} />
    </Stage>
  );
}
