import { useEffect, useState } from "react";
import { DESIGN_W, DESIGN_H, FLOW_BREAKPOINT } from "../data.js";

export default function Stage({
  children,
  height = DESIGN_H,
  bg = "#000",
  id,
}) {
  const [vw, setVw] = useState(() => document.documentElement.clientWidth);

  useEffect(() => {
    const update = () => setVw(document.documentElement.clientWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // tablet / phone: normal flowing layout
  if (vw < FLOW_BREAKPOINT) {
    return (
      <div
        id={id}
        className="viewport viewport--flow"
        style={{ background: bg }}
      >
        <div className="stage stage--flow" style={{ background: bg }}>
          {children}
        </div>
      </div>
    );
  }

  // desktop: the exact Figma pixels, scaled to the screen width
  const scale = vw / DESIGN_W;
  return (
    <div
      id={id}
      className="viewport"
      style={{ height: height * scale, background: bg }}
    >
      <div
        className="stage"
        style={{
          width: DESIGN_W,
          height,
          background: bg,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
