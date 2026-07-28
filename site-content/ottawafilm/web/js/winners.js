(function () {
  var titleEl = document.getElementById("season-title");
  var subtitleEl = document.getElementById("season-subtitle");
  var chipsEl = document.getElementById("season-chips");
  var bodyEl = document.getElementById("winners-body");
  var dataById = {};
  var order = [];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function titleCase(value) {
    return String(value)
      .toLowerCase()
      .replace(/(^|[\s\-/])\S/g, function (c) {
        return c.toUpperCase();
      });
  }

  function seasonFromUrl() {
    var params = new URLSearchParams(window.location.search);
    return params.get("season");
  }

  function setUrlSeason(id) {
    var url = new URL(window.location.href);
    url.searchParams.set("season", id);
    window.history.replaceState({}, "", url);
  }

  function renderChips(activeId) {
    chipsEl.innerHTML = order
      .map(function (id) {
        var season = dataById[id];
        if (id === activeId) {
          return '<span class="chip active">' + escapeHtml(season.label) + "</span>";
        }
        return (
          '<button type="button" class="chip" data-season="' +
          escapeHtml(id) +
          '">' +
          escapeHtml(season.label) +
          "</button>"
        );
      })
      .join("");
  }

  function renderSeason(id) {
    var season = dataById[id];
    if (!season) return;

    titleEl.textContent = season.title;
    subtitleEl.textContent =
      season.winners.length +
      " categories · Official certificates available for download";
    renderChips(id);

    bodyEl.innerHTML = season.winners
      .map(function (winner, i) {
        return (
          '<div class="win-row">' +
          '<span class="win-n">' + String(i + 1).padStart(2, "0") + "</span>" +
          '<span class="win-cat">' + escapeHtml(winner.category) + "</span>" +
          '<span class="win-project">' + escapeHtml(titleCase(winner.project)) + "</span>" +
          '<span class="win-cert"><a href="' +
          escapeHtml(winner.pdf) +
          '" target="_blank" rel="noopener">Download ↓</a></span>' +
          "</div>"
        );
      })
      .join("");
  }

  fetch("data/winners.json")
    .then(function (response) {
      if (!response.ok) throw new Error("Failed to load winners");
      return response.json();
    })
    .then(function (data) {
      data.seasons.forEach(function (season) {
        dataById[season.id] = season;
        order.push(season.id);
      });

      var requested = seasonFromUrl();
      var initial =
        (requested && dataById[requested] && requested) ||
        data.defaultSeason ||
        order[order.length - 1];

      renderSeason(initial);
      setUrlSeason(initial);

      chipsEl.addEventListener("click", function (event) {
        var target = event.target.closest("button[data-season]");
        if (!target) return;
        renderSeason(target.getAttribute("data-season"));
        setUrlSeason(target.getAttribute("data-season"));
        window.scrollTo({ top: 0, behavior: "instant" });
      });
    })
    .catch(function () {
      titleEl.textContent = "Winners unavailable";
      bodyEl.innerHTML =
        '<div class="win-row"><span class="win-n">—</span><span class="win-cat">Error</span><span class="win-project">Could not load winners data.</span><span class="win-cert"></span></div>';
    });
})();
