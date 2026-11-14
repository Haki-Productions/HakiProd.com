/* ============================================================
   HAKI PRODUCTIONS — site behaviour
   No dependencies. Everything degrades gracefully.
   ============================================================ */

(() => {
  "use strict";

  const root = document.documentElement;
  root.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- current year ---------- */

  document.querySelectorAll("#year").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- header + scroll progress ---------- */

  const header = document.querySelector(".site-header");
  const progressBar = document.getElementById("progressBar");

  const updateScrollState = () => {
    if (header) {
      header.classList.toggle("scrolled", window.scrollY > 10);
    }

    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      progressBar.style.transform = `scaleX(${progress})`;
    }
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);
  window.addEventListener("pageshow", updateScrollState);

  /* ---------- mobile navigation ---------- */

  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  if (navToggle && mainNav) {
    const setNavOpen = (open) => {
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    navToggle.addEventListener("click", () => {
      setNavOpen(!document.body.classList.contains("nav-open"));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setNavOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) setNavOpen(false);
    });
  }

  /* ---------- current section in the nav ---------- */

  document.querySelectorAll(".main-nav > a").forEach((link) => {
    const target = new URL(link.href, window.location.href);
    if (target.pathname === window.location.pathname) {
      link.setAttribute("aria-current", "page");
    }
  });

  const brand = document.querySelector(".brand");
  if (brand) {
    const target = new URL(brand.href, window.location.href);
    if (target.pathname === window.location.pathname) {
      brand.setAttribute("aria-current", "page");
    }
  }

  /* ---------- origin-aware buttons ---------- */

  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("pointerenter", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      button.style.setProperty("--my", `${event.clientY - rect.top}px`);
    });
  });

  /* ---------- filterable grids (work + toolbox) ---------- */

  const filterGroups = Array.from(document.querySelectorAll("[data-filter-group]"));

  filterGroups.forEach((group) => {
    const targetSelector = group.getAttribute("data-filter-target");
    if (!targetSelector) return;

    const target = document.querySelector(targetSelector);
    if (!target) return;

    const items = Array.from(target.querySelectorAll("[data-category]"));
    const buttons = Array.from(group.querySelectorAll("[data-filter]"));
    const searchSelector = group.getAttribute("data-search");
    const search = searchSelector ? document.querySelector(searchSelector) : null;
    const countId = group.getAttribute("data-count");
    const count = countId ? document.getElementById(countId) : null;
    const emptySelector = group.getAttribute("data-empty");
    const empty = emptySelector ? document.querySelector(emptySelector) : null;
    const countLabel = group.getAttribute("data-count-label") || "resource";

    let activeFilter = "all";

    const applyFilters = () => {
      const query = (search ? search.value : "").trim().toLowerCase();
      let visible = 0;

      items.forEach((item) => {
        const categories = (item.getAttribute("data-category") || "")
          .toLowerCase()
          .split(/\s+/)
          .filter(Boolean);
        const text = (item.getAttribute("data-text") || item.textContent || "").toLowerCase();
        const matchesCategory = activeFilter === "all" || categories.includes(activeFilter);
        const matchesQuery = !query || text.includes(query);
        const show = matchesCategory && matchesQuery;

        item.hidden = !show;
        if (show) visible += 1;
      });

      if (count) {
        count.textContent = `${visible} ${countLabel}${visible === 1 ? "" : "s"}`;
      }

      if (empty) {
        empty.hidden = visible > 0;
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.getAttribute("data-filter") || "all";

        buttons.forEach((other) => {
          const isActive = other === button;
          other.classList.toggle("active", isActive);
          other.setAttribute("aria-pressed", String(isActive));
        });

        applyFilters();
      });
    });

    if (search) {
      let debounce;

      search.addEventListener("input", () => {
        window.clearTimeout(debounce);
        debounce = window.setTimeout(applyFilters, 120);
      });
    }

    applyFilters();
  });

  /* ---------- mailto forms ---------- */

  const forms = Array.from(document.querySelectorAll("form[data-mailto]"));

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (typeof form.reportValidity === "function" && !form.reportValidity()) {
        return;
      }

      const data = new FormData(form);
      const to = form.getAttribute("data-mailto") || "hello@hakiproductions.com";
      const subject = form.getAttribute("data-subject") || "Website inquiry — Haki Productions";
      const intro = form.getAttribute("data-intro") || "New inquiry from the Haki Productions website.";
      const lines = [];

      data.forEach((value, key) => {
        const text = String(value).trim();
        if (!text) return;

        const label = key
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (character) => character.toUpperCase());

        lines.push(`${label}: ${text}`);
      });

      const body = `${intro}\n\n${lines.join("\n")}\n\nSent from: ${window.location.href}`;
      const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = href;
    });
  });

  /* ---------- query-string prefill ---------- */

  const params = new URLSearchParams(window.location.search);

  ["service", "budget"].forEach((fieldName) => {
    const value = params.get(fieldName);
    if (!value) return;

    const field = document.querySelector(`select[name="${fieldName}"]`);
    if (!field) return;

    const match = Array.from(field.options).find(
      (option) => option.value.toLowerCase() === value.toLowerCase()
    );

    if (match) field.value = match.value;
  });

  /* ---------- share button (links page) ---------- */

  const shareButton = document.querySelector("[data-share]");

  if (shareButton) {
    const originalLabel = shareButton.textContent;

    shareButton.addEventListener("click", async () => {
      const shareData = {
        title: "Haki Productions",
        text: "Creative media agency, Rotterdam. Where conquerors are made.",
        url: window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
          return;
        } catch (error) {
          if (error.name === "AbortError") return;
        }
      }

      try {
        await navigator.clipboard.writeText(window.location.href);
        shareButton.textContent = "Link copied";
      } catch {
        shareButton.textContent = "Copy failed — use the address bar";
      }

      window.setTimeout(() => {
        shareButton.textContent = originalLabel;
      }, 2200);
    });
  }

  /* ---------- reduced motion: remove marquee duplication jank ---------- */

  if (reduceMotion) {
    root.classList.add("reduced-motion");
  }
})();
