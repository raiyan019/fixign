import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

export default function ProductsPage() {
  const { productsPage: p, PD_H } = useContent();
  const i = p.intro;

  return (
    <Stage height={PD_H}>
      <Navbar current="products" />

      {/* ===== banner: same theme as About Us and Pricing ===== */}
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

      {/* ===== intro (y 600) ===== */}
      <section className="pd-intro" style={{ order: 3 }}>
        <span className="pg-pill">{i.pill}</span>
        <h2 className="pg-h">
          {i.heading} <span className="y">{i.accent}</span>
        </h2>
        <p className="pg-p">{i.text}</p>
      </section>

      {/* ===== product cards (y 860) ===== */}
      <ul className="pd-grid" style={{ order: 4 }}>
        {p.items.map((it) => (
          <li key={it.id}>
            <article className="pd-card">
              <div className="pd-img">
                <img
                  src={it.image}
                  alt=""
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              </div>
              <div className="pd-body">
                <span className="pd-tag">{it.tag}</span>
                <h3 className="pd-title">{it.title}</h3>
                <p className="pd-text">{it.text}</p>
                <div className="pd-foot">
                  <span className="pd-price">{it.price}</span>
                  <a className="pd-link" href={it.href}>
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

      {/* ===== same footer (y 2124) ===== */}
      <Footer top={2124} flowOrder={5} />
    </Stage>
  );
}
