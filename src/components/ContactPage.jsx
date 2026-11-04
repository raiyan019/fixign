import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { JoinUs, Faq, Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

export default function ContactPage() {
  const { contactPage: p, CT_H } = useContent();

  return (
    <Stage height={CT_H}>
      <Navbar current="contact" />

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

      {/* ===== Join Us form (y 620, 800 tall) ===== */}
      <JoinUs top={620} flowOrder={3} />

      {/* ===== FAQ (y 1540) ===== */}
      <Faq top={1540} flowOrder={4} />

      {/* ===== same footer (y 2420) ===== */}
      <Footer top={2420} flowOrder={5} />
    </Stage>
  );
}
