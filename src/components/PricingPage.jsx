import Stage from "./Stage.jsx";
import Navbar from "./Navbar.jsx";
import { PricingPlan, Footer } from "./Services.jsx";
import { useContent } from "../content/ContentProvider.jsx";

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

      {/* ===== the same neon pricing box as the home page ===== */}
      <PricingPlan top={620} flowOrder={3} />

      {/* ===== same footer ===== */}
      <Footer top={1640} flowOrder={4} />
    </Stage>
  );
}
