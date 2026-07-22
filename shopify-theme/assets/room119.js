/* Room 119 — theme behaviour
   Ports the React homepage's client-side interactivity.
   The marquee is pure CSS (see @keyframes marquee in room119.css); the only
   JS behaviour is the sticky header scroll state. */
(function () {
  "use strict";

  // Sticky header: toggle .is-scrolled after 40px, matching the React
  // `window.scrollY > 40` listener in src/routes/index.tsx.
  function initStickyHeader() {
    var header = document.querySelector("[data-r119-header]");
    if (!header) return;

    var THRESHOLD = 40;
    var ticking = false;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > THRESHOLD);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initStickyHeader);
  } else {
    initStickyHeader();
  }
})();
