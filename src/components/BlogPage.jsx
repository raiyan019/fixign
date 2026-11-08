import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { Footer, ArticleCard } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

export default function BlogPage() {
  const { blogPage: p, articles, articleHref } = useContent();

  const rows = Math.ceil(articles.items.length / 3);
  const gridTop = 600;
  const gridH = rows * 560 + (rows - 1) * 24;
  const footerTop = gridTop + gridH + 120;

  return (
    <Stage height={footerTop + 650}>
      <Navbar current="" />

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

      <ul className="pd-grid pd-grid--blog" style={{ top: gridTop, order: 3 }}>
        {articles.items.map((it) => (
          <li key={it.id}>
            <ArticleCard
              it={it}
              cta={articles.cta}
              href={articleHref(it.slug)}
            />
          </li>
        ))}
      </ul>

      <Footer top={footerTop} flowOrder={4} />
    </Stage>
  );
}
