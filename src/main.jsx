import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { ContentProvider } from "./content/ContentProvider.jsx";

// old links that still have a # in them become clean paths
const oldHash = window.location.hash;
if (oldHash.startsWith("#/")) {
  window.history.replaceState(null, "", oldHash.slice(1));
}
// unknown paths go to the home page
const seg = window.location.pathname.replace(/^\/|\/$/g, "");
if (
  !["", "services", "about", "pricing", "products", "contact"].includes(seg)
) {
  window.history.replaceState(null, "", "/");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContentProvider>
      <App />
    </ContentProvider>
  </React.StrictMode>,
);
