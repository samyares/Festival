/**
 * The auditorium — this season's winning films, played on the screen.
 *
 * The ticket entered at the gate is remembered for the session, so the visitor
 * is asked once rather than once per film. The film's address is worked out from
 * that code, so it appears in no file anyone can read.
 */
(function () {
  var SESSION_KEY = "ofa_ticket";

  var seasonEl = document.getElementById("cinema-season");
  var programmeEl = document.getElementById("programme");
  var listEl = document.getElementById("programme-list");
  var emptyEl = document.getElementById("programme-empty");
  var titleEl = document.getElementById("programme-title");
  var eyebrowEl = document.getElementById("programme-eyebrow");
  var playerEl = document.getElementById("player");
  var statusEl = document.getElementById("house-status");
  var backEl = document.getElementById("house-back");
  var captionEl = document.getElementById("house-caption");

  var catalog = null;
  var showing = [];
  var ticket = null;

  function esc(v) {
    return String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function readTicket() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    } catch (e) {
      return null;
    }
  }

  function isOpen(screening) {
    return !!(screening && screening.open === true);
  }

  function showStatus(title, copy) {
    programmeEl.hidden = true;
    playerEl.hidden = true;
    statusEl.hidden = false;
    statusEl.innerHTML =
      '<h1 class="house-status-title">' + esc(title) + "</h1>" +
      '<p class="house-status-copy">' + copy + "</p>";
  }

  function renderProgramme() {
    showing = catalog.films.filter(function (f) { return f.cleared; });

    titleEl.textContent = catalog.season || "Now Showing";
    eyebrowEl.textContent =
      showing.length + (showing.length === 1 ? " film" : " films") + " screening";

    if (!showing.length) {
      listEl.innerHTML = "";
      emptyEl.hidden = false;
      emptyEl.textContent =
        "This season's films are being cleared for screening. Please check back.";
      return;
    }

    emptyEl.hidden = true;
    listEl.innerHTML = showing
      .map(function (f, i) {
        return (
          '<button type="button" class="prog-item" data-i="' + i + '">' +
          '<span class="prog-n">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<span class="prog-main">' +
          '<span class="prog-title">' + esc(f.title) + "</span>" +
          '<span class="prog-cats">' + esc(f.category) + "</span>" +
          "</span>" +
          '<span class="prog-go">▶</span>' +
          "</button>"
        );
      })
      .join("");
  }

  function showPlaybackError(message) {
    playerEl.hidden = true;
    playerEl.innerHTML = "";
    statusEl.hidden = false;
    statusEl.innerHTML =
      '<h1 class="house-status-title">Cannot start</h1>' +
      '<p class="house-status-copy">' + esc(message) + "</p>" +
      '<button class="house-status-link" type="button" id="house-retry">← Programme</button>';
    var retry = document.getElementById("house-retry");
    if (retry) retry.addEventListener("click", backToProgramme);
  }

  function mount(url, film) {
    statusEl.hidden = true;
    playerEl.hidden = false;
    playerEl.innerHTML = "";

    var v = document.createElement("video");
    v.src = url;
    v.controls = true;
    v.autoplay = true;
    v.setAttribute("controlslist", "nodownload");
    v.setAttribute("playsinline", "");
    // A missing file fails on the element, not as a rejected promise, so this is
    // the only place a wrong ticket or an unuploaded film surfaces.
    v.addEventListener("error", function () {
      showPlaybackError(
        "This film could not be found. It may not be uploaded yet."
      );
    });
    playerEl.appendChild(v);
  }

  function play(film) {
    captionEl.innerHTML =
      '<span class="caption-cats">' + esc(film.category) + "</span>" +
      '<span class="caption-title">' + esc(film.title) + "</span>";

    programmeEl.hidden = true;
    statusEl.hidden = false;
    statusEl.innerHTML = '<p class="house-status-copy">Starting ' + esc(film.title) + "…</p>";
    backEl.hidden = false;

    mount(window.OFAGate.urlFor(catalog, film.file), film);
  }

  function backToProgramme() {
    playerEl.innerHTML = "";
    playerEl.hidden = true;
    statusEl.hidden = true;
    programmeEl.hidden = false;
    backEl.hidden = true;
    captionEl.innerHTML = "";
  }

  backEl.addEventListener("click", backToProgramme);

  listEl.addEventListener("click", function (e) {
    var item = e.target.closest("button[data-i]");
    if (!item) return;
    if (!ticket) { window.OFAGate.open(); return; }
    var film = showing[Number(item.getAttribute("data-i"))];
    if (film) play(film);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !playerEl.hidden) backToProgramme();
  });

  fetch("data/films.json", { cache: "no-store" })
    .then(function (r) {
      if (!r.ok) throw new Error("catalog");
      return r.json();
    })
    .then(function (data) {
      catalog = data;
      seasonEl.textContent = data.season || "";

      if (!isOpen(data.screening)) {
        var when = data.screening && data.screening.opensText
          ? "The winning films are not screening at the moment. Next screening <strong>" +
            esc(data.screening.opensText) + "</strong>."
          : "The winning films are not screening at the moment.";
        showStatus("The house is dark", when +
          '<a class="house-status-link" href="/">Back to the festival →</a>');
        return;
      }

      ticket = readTicket();
      renderProgramme();
      if (!ticket) window.OFAGate.open();
    })
    .catch(function () {
      showStatus("Unavailable", "We could not load tonight's programme. Please try again shortly.");
    });
})();
