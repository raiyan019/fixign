import { useEffect, useRef, useState } from "react";
import Stage from "./components/Stage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import PricingPage from "./components/PricingPage.jsx";
import ProductsPage from "./components/ProductsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import ArticlePage from "./components/ArticlePage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import { SECTION2_H, gcExtra } from "./data.js";
import { useContent } from "./content/ContentProvider.jsx";

// the blog lives on a subdomain: blog.fixign.com
const IS_BLOG = window.location.hostname.startsWith("blog.");
const MAIN_URL = IS_BLOG
  ? window.location.origin.replace("//blog.", "//")
  : window.location.origin;

const ROUTES = ["services", "about", "pricing", "products", "contact"];

const pathToRoute = (p) => {
  const s = p.replace(/^\/|\/$/g, "");
  if (IS_BLOG) return s ? { name: "article", slug: s } : { name: "blog" };
  if (s === "blog") return { name: "blog" };
  if (s.startsWith("blog/")) return { name: "article", slug: s.slice(5) };
  return { name: ROUTES.includes(s) ? s : "home" };
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
        if (!id) return true;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        navigate("/", id);
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
      if (!href || /^(mailto:|tel:)/.test(href)) return;

      // on the blog subdomain, the menu, footer and breadcrumb links lead to the main site
      if (
        IS_BLOG &&
        a.closest(".hdr, .fo, .ab-crumbs") &&
        !/^https?:/.test(href)
      ) {
        e.preventDefault();
        window.location.href =
          MAIN_URL + (href.startsWith("#") ? "/" + href : href);
        return;
      }

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

  const { name, slug } = route;
  if (name === "services") return <ServicesPage />;
  if (name === "about") return <AboutPage />;
  if (name === "pricing") return <PricingPage />;
  if (name === "products") return <ProductsPage />;
  if (name === "contact") return <ContactPage />;
  if (name === "article") return <ArticlePage key={slug} slug={slug} />;
  if (name === "blog") return <BlogPage />;

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
