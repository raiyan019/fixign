import { useEffect, useRef, useState } from "react";
import Stage from "./components/Stage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import PricingPage from "./components/PricingPage.jsx";
import { SECTION2_H, gcExtra } from "./data.js";
import { useContent } from "./content/ContentProvider.jsx";

const ROUTES = ["services", "about", "pricing"];
const pathToRoute = (p) => {
  const s = p.replace(/^\/|\/$/g, "");
  return ROUTES.includes(s) ? s : "home";
};

export default function App() {
  const [route, setRoute] = useState(() =>
    pathToRoute(window.location.pathname),
  );
  const [tick, setTick] = useState(0);
  const pending = useRef(window.location.hash.slice(1) || null); // section to scroll to after a page change
  const { graphicCards } = useContent();

  useEffect(() => {
    const navigate = (path, id) => {
      if (path !== window.location.pathname) {
        window.history.pushState(null, "", path);
        setRoute(pathToRoute(path));
      }
      pending.current = id || null;
      setTick((t) => t + 1);
    };

    // returns true if the link was handled here
    const go = (href) => {
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return false;
      const id = url.hash.slice(1);

      if (href.startsWith("#")) {
        if (!id) return true; // a bare # does nothing
        const el = document.getElementById(id);
        if (el) {
          // a section on this page
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        navigate("/", id); // a section on the home page
        return true;
      }
      navigate(url.pathname, id);
      return true;
    };

    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      )
        return;
      const a = e.target.closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const href = a.getAttribute("href");
      if (!href || /^(mailto:|tel:|https?:)/.test(href)) return;
      if (go(href)) e.preventDefault();
    };

    const onPop = () => {
      pending.current = null;
      setRoute(pathToRoute(window.location.pathname));
      setTick((t) => t + 1);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  // after changing page: scroll to the section that was asked for, or to the top
  useEffect(() => {
    const id = pending.current;
    pending.current = null;
    const el = id ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route, tick]);

  if (route === "services") return <ServicesPage />;
  if (route === "about") return <AboutPage />;
  if (route === "pricing") return <PricingPage />;

  return (
    <>
      {/* SECTION 1 : hero */}
      <Stage>
        <Navbar current="home" />
        <Hero />
      </Stage>

      {/* SECTION 2 : everything else */}
      <Stage
        id="services"
        height={SECTION2_H + gcExtra(graphicCards.length)}
        bg="#0b0b0d"
      >
        <Services />
      </Stage>
    </>
  );
}
