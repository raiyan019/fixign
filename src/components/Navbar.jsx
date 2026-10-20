import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";
import { useContent } from "../content/ContentProvider.jsx";

export default function Navbar({ current = "home" }) {
  const { brand, navLinks } = useContent();
  const [active, setActive] = useState(current);
  const [open, setOpen] = useState(false);

  useEffect(() => setActive(current), [current]);

  const go = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <header className="hdr">
      <Logo name={brand.name} />

      <button
        className={`burger ${open ? "burger--open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-nav"
        className={`nav ${open ? "nav--open" : ""}`}
        aria-label="Main"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={active === link.id ? "is-active" : ""}
                aria-current={active === link.id ? "page" : undefined}
                onClick={() => go(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
