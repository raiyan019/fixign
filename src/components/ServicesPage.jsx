import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { useContent } from "../content/ContentProvider.jsx";
import { JoinUs, Footer } from "./Services.jsx";

export default function ServicesPage() {
  const {
    servicesPage: p,
    SV_H,
    serviceCards,
    SC_ALTERNATE,
    expertise,
  } = useContent();

  return (
    <Stage height={SV_H}>
      <Navbar current="services" />

      <section className="svh">
        {/* same shapes, same order, same numbers as the home hero */}
        <span className="triangle" aria-hidden="true" />
        <span className="baseline" aria-hidden="true" />
        <svg className="diagonal" viewBox="0 0 153 177" aria-hidden="true">
          <line x1="0" y1="0" x2="153" y2="177" />
        </svg>
        <span className="link-line" aria-hidden="true" />
        <span className="dot" aria-hidden="true" />
        <div className="circle" aria-hidden="true">
          <svg className="circle__icon" viewBox="0 0 12 14" fill="#e6e6e6">
            <path d="M1 1l10 6-10 6V1Z" />
          </svg>
        </div>

        <h1 className="sv-title">
          {p.heading.map((line, i) => (
            <span className="line" key={line}>
              {line}
              {i === p.heading.length - 1 && (
                <>
                  {" "}
                  <span className="y">{p.accent}</span>
                </>
              )}
            </span>
          ))}
        </h1>

        <p className="sv-text">{p.text}</p>

        <a className="sv-btn" href={p.button.href}>
          {p.button.label}
        </a>
      </section>

      {/* ===== the 6 service cards ===== */}
      <section className="sc-list" aria-label="Our services">
        {serviceCards.map((card, i) => (
          <article
            key={card.id}
            className={`sc ${SC_ALTERNATE && i % 2 ? "sc--flip" : ""} ${
              i === serviceCards.length - 1 ? "sc--last" : ""
            }`}
            style={{ "--i": i }}
          >
            <div className="sc-image">
              <img
                src={card.image}
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            <div className="sc-text">
              <h2 className="sc-title">{card.title}</h2>
              <p className="sc-desc">{card.text}</p>

              <ul className="sc-cats">
                {card.categories.map((c, k) => (
                  <li key={k}>
                    <a href={c.href}>{c.label}</a>
                  </li>
                ))}
              </ul>

              <a className="sc-btn" href={card.button.href}>
                {card.button.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10L10 2M4 2h6v6"
                    stroke="#111"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </div>

            <span className="sc-rule" aria-hidden="true" />
          </article>
        ))}
      </section>

      {/* ===== Our Expertise ===== */}
      <section className="ex" aria-labelledby="ex-label">
        <h2 className="ex-label" id="ex-label">
          <span className="ex-dot" aria-hidden="true" />
          {expertise.label}
        </h2>
        <p className="ex-text">{expertise.text}</p>

        <ul className="ex-grid">
          {expertise.items.map((it) => (
            <li key={it.id} style={{ "--accent": it.accent }}>
              <a className="ex-card" href={it.href}>
                <h3 className="ex-title">{it.title}</h3>
                <img
                  className="ex-img"
                  src={it.image}
                  alt=""
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
                <span className="ex-shade" aria-hidden="true" />
                <span className="ex-link">
                  {expertise.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 11L11 3M5 3h6v6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== same ending as the home page: form, then footer ===== */}
      <JoinUs top={6060} />
      <Footer top={6980} />
    </Stage>
  );
}
