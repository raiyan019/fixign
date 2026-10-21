import { useEffect, useState } from "react";
import Stage from "./components/Stage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import { SECTION2_H } from "./data.js";

const getRoute = () => {
  const h = window.location.hash;
  if (h.startsWith("#/services")) return "services";
  if (h.startsWith("#/about")) return "about";
  return "home";
};

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash;
      if (h.startsWith("#/services")) return setRoute("services");
      if (h.startsWith("#/about")) return setRoute("about");
      // a link to something on the page we are already on (#contact...): just scroll there
      const id = h.slice(1);
      if (id && document.getElementById(id)) return;
      setRoute("home");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // after changing page: jump to the section in the address (#contact...) or to the top
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const el = id && !id.startsWith("/") ? document.getElementById(id) : null;
    if (el) el.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route]);

  if (route === "services") return <ServicesPage />;
  if (route === "about") return <AboutPage />;

  return (
    <>
      {/* SECTION 1 : hero */}
      <Stage>
        <Navbar current="home" />
        <Hero />
      </Stage>

      {/* SECTION 2 : everything else */}
      <Stage id="services" height={SECTION2_H} bg="#0b0b0d">
        <Services />
      </Stage>
    </>
  );
}
