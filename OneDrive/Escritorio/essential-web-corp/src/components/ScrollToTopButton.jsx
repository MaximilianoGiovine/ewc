import React from "react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const root = document.getElementById("root");
    if (root) root.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="scrollup-btn" onClick={scrollToTop} aria-label="Volver arriba">
      ↑
    </button>
  );
}