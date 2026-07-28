(function () {
  // ── Reviews (loaded from data/reviews.json) ──
  var PER_PAGE = 3;
  var gridEl = document.getElementById("review-grid");
  var prevEl = document.getElementById("reviews-prev");
  var nextEl = document.getElementById("reviews-next");
  var countEl = document.getElementById("reviews-count");
  var reviews = [];
  var page = 0;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pageCount() {
    return Math.max(1, Math.ceil(reviews.length / PER_PAGE));
  }

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function renderReviews() {
    var html = "";
    var start = page * PER_PAGE;
    reviews.slice(start, start + PER_PAGE).forEach(function (r) {
      var quote = r.text.replace(/\s+/g, " ").trim();
      html +=
        '<div class="review-card">' +
        "<p>“" + escapeHtml(quote) + "”</p>" +
        '<span class="review-foot">' +
        '<span class="review-name">— ' + escapeHtml(r.name) + "</span>" +
        '<span class="review-date">' + escapeHtml(r.date) + "</span>" +
        "</span></div>";
    });
    gridEl.innerHTML = html;

    prevEl.disabled = page === 0;
    nextEl.disabled = page === pageCount() - 1;
    countEl.textContent = pad(page + 1) + " / " + pad(pageCount());
  }

  if (gridEl && prevEl && nextEl && countEl) {
    fetch("data/reviews.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to load reviews");
        return response.json();
      })
      .then(function (data) {
        reviews = data.reviews;
        renderReviews();
      })
      .catch(function () {
        gridEl.parentElement.style.display = "none";
      });

    prevEl.addEventListener("click", function () {
      if (page > 0) { page--; renderReviews(); }
    });
    nextEl.addEventListener("click", function () {
      if (page < pageCount() - 1) { page++; renderReviews(); }
    });
  }

  // ── Ticker: current season's categories ──
  var tickerA = document.getElementById("ticker-a");
  var tickerB = document.getElementById("ticker-b");
  if (tickerA && tickerB) {
    fetch("data/winners.json")
      .then(function (response) {
        if (!response.ok) throw new Error("Failed to load winners");
        return response.json();
      })
      .then(function (data) {
        var season = null;
        for (var i = 0; i < data.seasons.length; i++) {
          if (data.seasons[i].id === data.defaultSeason) season = data.seasons[i];
        }
        if (!season) season = data.seasons[data.seasons.length - 1];
        var text =
          season.winners
            .map(function (w) {
              return w.category.toUpperCase();
            })
            .join("   ✦   ") + "   ✦   ";
        tickerA.textContent = text;
        tickerB.textContent = text;
      })
      .catch(function () {
        /* keep fallback ticker text */
      });
  }
})();
