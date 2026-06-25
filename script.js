/* ============================================================
   Chandrima Biswas — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  const doc = document;

  /* ----- Theme toggle (dark by default, persisted) ----- */
  const themeToggle = doc.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme || "dark";
  doc.documentElement.setAttribute("data-theme", initialTheme);

  themeToggle.addEventListener("click", function () {
    const next =
      doc.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    doc.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ----- Mobile nav ----- */
  const nav = doc.getElementById("nav");
  const burger = doc.getElementById("navBurger");
  const navLinks = doc.getElementById("navLinks");

  burger.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });

  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
    }
  });

  /* ----- Scroll progress + nav shadow ----- */
  const progress = doc.getElementById("scrollProgress");

  function onScroll() {
    const scrollTop = window.scrollY;
    const height = doc.documentElement.scrollHeight - window.innerHeight;
    const pct = height > 0 ? (scrollTop / height) * 100 : 0;
    progress.style.width = pct + "%";
    nav.classList.toggle("is-scrolled", scrollTop > 12);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Reveal on scroll ----- */
  const revealEls = doc.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* ----- Active section in nav ----- */
  const sections = doc.querySelectorAll("section[id]");
  const linkMap = {};
  navLinks.querySelectorAll("a").forEach(function (link) {
    linkMap[link.getAttribute("href").slice(1)] = link;
  });

  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          const link = linkMap[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            Object.values(linkMap).forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ----- Footer year ----- */
  const yearEl = doc.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ----- Cursor spotlight ----- */
  const spotlight = doc.getElementById("spotlight");
  if (spotlight && window.matchMedia("(hover: hover)").matches) {
    window.addEventListener(
      "pointermove",
      function (e) {
        spotlight.style.setProperty("--x", e.clientX + "px");
        spotlight.style.setProperty("--y", e.clientY + "px");
      },
      { passive: true }
    );
  }
})();
