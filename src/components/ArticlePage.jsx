import { useEffect, useRef, useState } from "react";
import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

const TOP = 250; // the article starts here (the menu ends at 184)
const GAP = 120; // space between the article and the footer
const FOOTER_H = 650;

const Calendar = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2.5" y="3.5" width="13" height="12" rx="2" />
    <path d="M2.5 7.5h13M6 2v3M12 2v3" />
  </svg>
);

function Avatar({ src, name }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="ar-avatar">
      {src && !failed ? (
        <img src={src} alt="" onError={() => setFailed(true)} />
      ) : (
        name.trim().charAt(0).toUpperCase()
      )}
    </span>
  );
}

function Block({ b }) {
  if (b.type === "h2") return <h2>{b.text}</h2>;
  if (b.type === "ul")
    return (
      <ul>
        {b.items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );
  if (b.type === "quote") return <blockquote>{b.text}</blockquote>;
  return <p>{b.text}</p>;
}

export default function ArticlePage({ slug }) {
  const { articles, articlePages, blogIndexHref } = useContent();
  const item = articles.items.find((a) => a.slug === slug);
  const page = articlePages[slug];
  const found = Boolean(item && page);
  const title =
    (page && page.title) || (item && item.title) || "Article not found";
  const author = (page && page.author) || articles.author;

  // the page height depends on the article length, so we measure it
  const ref = useRef(null);
  const [h, setH] = useState(1500);
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
    document.title = `${title} | FiXiGN`;
    return () => {
      document.title = old;
    };
  }, [title]);

  return (
    <Stage height={TOP + h + GAP + FOOTER_H}>
      <Navbar current="" />

      <article className="ar" ref={ref} style={{ order: 2 }}>
        <a className="ar-back" href={blogIndexHref}>
          ← All articles
        </a>

        {found ? (
          <>
            <div className="ar-cover">
              <img
                src={page.cover}
                alt=""
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>

            <h1 className="ar-title">{title}</h1>

            <div className="ar-meta">
              <span className="ar-by">
                <Avatar src={articles.authorImage} name={author} />
                {author}
              </span>
              <span className="ar-date">
                <Calendar />
                {page.date}
              </span>
            </div>

            <div className="ar-body">
              {page.body.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </div>

            <div className="ar-end">
              <a className="pd-link" href={blogIndexHref}>
                ← All articles
              </a>
            </div>
          </>
        ) : (
          <div className="ar-nf">
            <h1 className="ar-title">Article not found</h1>
            <p>This article does not exist or was moved.</p>
          </div>
        )}
      </article>

      <Footer top={TOP + h + GAP} flowOrder={3} />
    </Stage>
  );
}
