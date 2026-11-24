import { useEffect, useRef, useState } from "react";
import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { Footer, Testimonials } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

const TOP = 250; // the project starts here (the menu ends at 184)
const GAP = 110; // space between blocks
const TM_H = 660; // height of the Testimonials block
const NAV_H = 150; // height of the previous / next buttons
const FOOTER_H = 650;

function Pic({ src, className = "" }) {
  return (
    <div className={`wd-pic ${className}`}>
      <img
        src={src}
        alt=""
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </div>
  );
}

function Story({ title, lead, text }) {
  return (
    <section className="wd-story">
      <h2>{title}</h2>
      <div>
        <p className="wd-lead">{lead}</p>
        <p className="wd-text">{text}</p>
      </div>
    </section>
  );
}

export default function WorkPage({ slug }) {
  const { worksPage, workPage: wp, workSlug, getWorkDetail } = useContent();
  const items = worksPage.items;
  const index = items.findIndex((it) => workSlug(it) === slug);
  const found = index >= 0;
  const item = items[index];
  const d = found ? getWorkDetail(item) : null;
  const prev = found ? items[(index - 1 + items.length) % items.length] : null;
  const next = found ? items[(index + 1) % items.length] : null;
  const L = wp.labels;

  // the page height follows the project text, so we measure it
  const ref = useRef(null);
  const [h, setH] = useState(2600);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setH(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const old = document.title;
    document.title = `${found ? item.title : wp.notFound.title} | FiXiGN`;
    return () => {
      document.title = old;
    };
  }, [found, item, wp]);

  const tmTop = TOP + h + GAP;
  const navTop = found ? tmTop + TM_H + GAP : 0;
  const footerTop = found
    ? navTop + (items.length > 1 ? NAV_H + GAP : 0)
    : TOP + h + GAP;

  return (
    <Stage height={footerTop + FOOTER_H}>
      <Navbar current="works" />

      <article className="wd" ref={ref} style={{ order: 2 }}>
        <a className="wd-back" href="/works">
          {wp.back}
        </a>

        {found ? (
          <>
            <h1 className="wd-title">{item.title}</h1>

            <div className="wd-head">
              <div className="wd-info">
                <p className="wd-intro">{d.intro}</p>
                <dl className="wd-meta">
                  <div>
                    <dt>{L.client}</dt>
                    <dd>{d.client}</dd>
                  </div>
                  <div>
                    <dt>{L.industry}</dt>
                    <dd>{d.industry}</dd>
                  </div>
                  <div>
                    <dt>{L.services}</dt>
                    <dd>{d.services}</dd>
                  </div>
                  <div>
                    <dt>{L.date}</dt>
                    <dd>{d.date}</dd>
                  </div>
                </dl>
              </div>
              <ul className="wd-tags">
                {d.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <Pic src={d.cover} className="wd-cover" />

            <Story
              title={L.challenge}
              lead={d.challenge.lead}
              text={d.challenge.text}
            />

            <div className="wd-gallery">
              <div className="wd-row wd-row--a">
                <Pic src={d.gallery[0]} />
                <Pic src={d.gallery[1]} />
              </div>
              <div className="wd-row wd-row--b">
                <Pic src={d.gallery[2]} />
                <Pic src={d.gallery[3]} />
              </div>
            </div>

            <Story
              title={L.solution}
              lead={d.solution.lead}
              text={d.solution.text}
            />

            <Pic src={d.banner} className="wd-banner" />
          </>
        ) : (
          <div className="wd-nf">
            <h1 className="wd-title">{wp.notFound.title}</h1>
            <p>{wp.notFound.text}</p>
          </div>
        )}
      </article>

      {found && <Testimonials top={tmTop} flowOrder={3} />}

      {found && items.length > 1 && (
        <nav
          className="wd-nav"
          aria-label="More projects"
          style={{ top: navTop, order: 4 }}
        >
          <a className="wd-pn" href={`/works/${workSlug(prev)}`}>
            <span className="wd-pn-arrow" aria-hidden="true">
              ←
            </span>
            <span className="wd-pn-txt">
              <small>{L.prev}</small>
              <strong>{prev.title}</strong>
            </span>
          </a>
          <a className="wd-pn wd-pn--next" href={`/works/${workSlug(next)}`}>
            <span className="wd-pn-txt">
              <small>{L.next}</small>
              <strong>{next.title}</strong>
            </span>
            <span className="wd-pn-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </nav>
      )}

      <Footer top={footerTop} flowOrder={5} />
    </Stage>
  );
}
