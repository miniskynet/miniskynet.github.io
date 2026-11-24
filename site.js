/* Desira Wijesundara - shared page behaviour (all pages). */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  function currentTheme() {
    return root.dataset.theme || (darkQuery.matches ? "dark" : "light");
  }
  function syncThemeColor() {
    var meta = document.querySelector('meta[name="theme-color"]:not([media])');
    if (meta) meta.setAttribute("content", currentTheme() === "dark" ? "#111214" : "#f6f4ef");
  }
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      btn.setAttribute("aria-pressed", String(next === "dark"));
      syncThemeColor();
    });
    btn.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  });
  syncThemeColor();

  /* ---------- Header height (used by sticky offsets) ---------- */
  var nav = document.querySelector(".site-nav");
  function setNavHeight() {
    if (nav) root.style.setProperty("--nav-h", nav.offsetHeight + "px");
  }
  setNavHeight();
  window.addEventListener("resize", setNavHeight);

  /* ---------- Scroll progress bar ---------- */
  var progress = document.querySelector(".scroll-progress");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.setProperty("--progress", max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      updateActive();
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Active section in the sidebar ---------- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".sidebar a[href^='#']"));
  var lastActive = null;
  function updateActive() {
    if (!navLinks.length) return;
    var offset = (parseInt(getComputedStyle(root).getPropertyValue("--nav-h"), 10) || 68) + 80;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.getBoundingClientRect().top <= offset) current = sec.id;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1].id;
    }
    if (current === lastActive) return;
    lastActive = current;
    navLinks.forEach(function (link) {
      var on = link.getAttribute("href") === "#" + current;
      link.classList.toggle("active", on);
      if (on) {
        link.setAttribute("aria-current", "location");
        // Keep the active pill visible in the horizontal mobile jump bar.
        var bar = link.closest(".sidebar");
        if (bar && bar.scrollWidth > bar.clientWidth) {
          bar.scrollTo({ left: link.offsetLeft - 24, behavior: reduceMotion ? "auto" : "smooth" });
        }
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var revealTargets = document.querySelectorAll(
    "main > section:not(.hero), .stats, .case-card, .role, .tool-group"
  );
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  /* ---------- Count-up for the highlight numbers ---------- */
  var counters = document.querySelectorAll("[data-count]");
  function runCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var num = el.querySelector(".n");
    if (!num || isNaN(target)) return;
    var finalText = target.toLocaleString("en-US");
    var start = null;
    var duration = 1400;
    var finished = false;
    function finish() { finished = true; num.textContent = finalText; }
    function step(ts) {
      if (finished) return;
      if (start === null) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      // Never show less than 1, so a stalled frame can't leave "0+" on screen.
      num.textContent = Math.max(1, Math.round(target * eased)).toLocaleString("en-US");
      if (t < 1) requestAnimationFrame(step); else finish();
    }
    requestAnimationFrame(step);
    // Safety net: whatever happens to animation frames, land on the real number.
    setTimeout(finish, duration + 300);
  }
  if (counters.length && "IntersectionObserver" in window && !reduceMotion) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          co.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () {
        var note = document.querySelector(btn.getAttribute("data-copy-note"));
        if (!note) return;
        note.classList.add("show");
        setTimeout(function () { note.classList.remove("show"); }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () {});
      }
    });
  });

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
