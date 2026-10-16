import { createContext, useContext, useEffect, useState } from "react";
import * as defaults from "../data.js";

const ContentContext = createContext({ ...defaults });

export function ContentProvider({ children }) {
  const [content, setContent] = useState({ ...defaults });

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    if (!api) return; // no backend yet: use data.js
    const ctrl = new AbortController();
    fetch(`${api}/content`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((remote) => setContent((c) => ({ ...c, ...remote })))
      .catch(() => {}); // if it fails, the site keeps the data.js content
    return () => ctrl.abort();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => useContext(ContentContext);
