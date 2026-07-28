/**
 * Screening gate — the modal behind the "Watch" link on every page.
 *
 * The room is opened and closed by hand: `screening.open` in data/films.json is
 * the only switch. Nothing is scheduled.
 *
 * The ticket check is a courtesy, not a lock. Films sit at plain addresses under
 * /movies/, so this keeps ordinary visitors out of the auditorium but cannot
 * stop anyone who reads the page source. See SETUP.md.
 */
(function () {
  var SESSION_KEY = "ofa_ticket";
  var CINEMA_URL = "/cinema.html";

  var modal = null;
  var lastFocus = null;

  function esc(v) {
    return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // People retype these from an email, so case, spaces and hyphens are ignored:
  // "ofa2026aug" is the same ticket as "OFA-2026-AUG".
  function normalizeCode(raw) {
    return String(raw || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  }

  function urlFor(catalog, file) {
    return (catalog.videoBase || "") + file;
  }

  // ── modal ──

  function build() {
    if (modal) return modal;
    var el = document.createElement("div");
    el.className = "gate";
    el.id = "screening-gate";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-label", "Screening room");
    el.hidden = true;
    el.innerHTML =
      '<div class="gate-ticket" role="document">' +
      '<button class="gate-close" type="button" aria-label="Close">✕</button>' +
      '<div class="gate-stub"><span class="gate-stub-text">Ottawa Film Award</span></div>' +
      '<div class="gate-body" id="gate-body"></div>' +
      "</div>";
    document.body.appendChild(el);

    el.querySelector(".gate-close").addEventListener("click", close);
    el.addEventListener("click", function (e) { if (e.target === el) close(); });
    modal = el;
    return el;
  }

  function open() {
    lastFocus = document.activeElement;
    var el = build();
    el.hidden = false;
    document.body.style.overflow = "hidden";
    render();
  }

  function close() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && !modal.hidden) close();
  });

  // ── states ──

  function render() {
    var body = document.getElementById("gate-body");
    body.innerHTML = '<p class="gate-loading">Checking the programme…</p>';

    // Re-read every time, so flipping the switch takes effect without a reload.
    fetch("data/films.json", { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("catalog");
        return r.json();
      })
      .then(function (data) {
        if (data.screening && data.screening.open === true) renderOpen(body, data);
        else renderClosed(body, data);
      })
      .catch(function () {
        body.innerHTML =
          '<span class="gate-eyebrow">Screening room</span>' +
          '<h2 class="gate-title">Unavailable</h2>' +
          '<p class="gate-copy">We could not load the programme. Please try again shortly.</p>';
      });
  }

  function renderClosed(body, data) {
    var when = data.screening && data.screening.opensText ? String(data.screening.opensText) : "";
    body.innerHTML =
      '<span class="gate-eyebrow gate-eyebrow--closed">Doors closed</span>' +
      '<h2 class="gate-title">The screening room is closed</h2>' +
      '<p class="gate-copy">The ' + esc(data.season || "") +
      " winning films are not screening at the moment." +
      (when ? "" : " Please check back soon.") + "</p>" +
      (when
        ? '<div class="gate-when">' +
          '<span class="gate-when-label">Next screening · Ottawa time</span>' +
          '<span class="gate-when-date">' + esc(when) + "</span>" +
          "</div>"
        : "") +
      '<a class="btn-accent gate-cta" href="https://filmfreeway.com/OttawaFilmAward" target="_blank" rel="noopener">Submit a film ↗</a>' +
      '<a class="gate-help" href="/winners.html">See the winners →</a>';
  }

  function renderOpen(body, data) {
    var count = data.films.filter(function (f) { return f.cleared; }).length;
    body.innerHTML =
      '<span class="gate-eyebrow">Now screening · ' + esc(data.season || "") + "</span>" +
      '<h2 class="gate-title">Doors are open</h2>' +
      '<p class="gate-copy">' +
      (count ? count + (count === 1 ? " film is" : " films are") + " screening" : "The programme is screening") +
      ". Enter your ticket number to take your seat.</p>" +
      '<form class="gate-form" autocomplete="off">' +
      '<label class="gate-label" for="gate-code">Ticket number</label>' +
      '<input class="ticket-input" id="gate-code" name="ticket" type="text" spellcheck="false" ' +
      'placeholder="OFA-0000-0000" required />' +
      '<button class="btn-accent gate-cta" type="submit">Take my seat</button>' +
      '<span class="ticket-error" id="gate-error" role="alert"></span>' +
      "</form>" +
      '<a class="gate-help" href="mailto:support@ottawafilm.site?subject=Ticket%20number">No ticket? Contact us ↗</a>';

    var input = body.querySelector("#gate-code");
    var error = body.querySelector("#gate-error");
    input.focus();

    body.querySelector(".gate-form").addEventListener("submit", function (e) {
      e.preventDefault();
      var expected = normalizeCode(data.ticketCode);
      if (expected && normalizeCode(input.value) !== expected) {
        error.textContent = "That ticket number was not recognised. Check it and try again.";
        input.select();
        return;
      }
      sessionStorage.setItem(SESSION_KEY, JSON.stringify({ code: input.value.trim() }));
      window.location.href = CINEMA_URL;
    });
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href$="cinema.html"], a[data-screening-gate]');
    if (!link) return;
    e.preventDefault();
    open();
  });

  window.OFAGate = { open: open, close: close, urlFor: urlFor };
})();
