import { useEffect, useRef, useState } from "react";
import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

const GRID_TOP = 720; // where the cards start (the filter buttons are at y 610)
const GAP = 120; // space between the cards and the footer
const FOOTER_H = 650;

export default function WorksPage() {
  const { worksPage: p, workSlug } = useContent();
  const [active, setActive] = useState("all");

  const shown =
    active === "all" ? p.items : p.items.filter((it) => it.category === active);
  const labelOf = (id) =>
    (p.categories.find((c) => c.id === id) || {}).label || "";
  const countOf = (id) =>
    id === "all"
      ? p.items.length
      : p.items.filter((it) => it.category === id).length;

  // the page height follows the cards, so we measure them
  const ref = useRef(null);
  const [h, setH] = useState(1200);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const footerTop = GRID_TOP + h + GAP;

  return (
    <Stage height={footerTop + FOOTER_H}>
      <Navbar current="works" />

      {/* ===== banner: same theme as the other pages ===== */}
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

      {/* ===== filter buttons (y 610) ===== */}
      <div
        className="wk-tabs"
        role="group"
        aria-label="Filter works by category"
        style={{ order: 3 }}
      >
        {p.categories.map((c) => (
          <button
            key={c.id}
            className={`wk-tab ${active === c.id ? "wk-tab--on" : ""}`}
            aria-pressed={active === c.id}
            onClick={() => setActive(c.id)}
          >
            {c.label}
            <span className="wk-count">{countOf(c.id)}</span>
          </button>
        ))}
      </div>

      {/* ===== cards (y 720) ===== */}
      <div className="wk-wrap" ref={ref} style={{ order: 4 }}>
        {shown.length ? (
          <ul className="wk-grid" key={active}>
            {shown.map((it, n) => (
              <li key={it.id} style={{ "--n": n }}>
                <article className="pd-card">
                  <div className="pd-img">
                    <img
                      src={it.image}
                      alt=""
                      onError={(e) => (e.currentTarget.style.display = "none")}
                    />
                  </div>
                  <div className="pd-body">
                    <span className="pd-tag">{labelOf(it.category)}</span>
                    <h3 className="pd-title">{it.title}</h3>
                    <div className="pd-foot">
                      <a
                        className="pd-link"
                        href={
                          it.href && it.href !== "#"
                            ? it.href
                            : `/works/${workSlug(it)}`
                        }
                      >
                        {p.cta}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 10L10 2M4 2h6v6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="wk-empty">{p.emptyText}</p>
        )}
      </div>

      {/* ===== same footer ===== */}
      <Footer top={footerTop} flowOrder={5} />
    </Stage>
  );
}
