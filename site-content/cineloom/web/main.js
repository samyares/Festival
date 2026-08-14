// ── Elements ────────────────────────────────────────────────
const gateSection = document.getElementById('gateSection');
const festivalSection = document.getElementById('festivalSection');
const ticketCard = document.getElementById('ticketCard');
const ticketInput = document.getElementById('ticketInput');
const submitTicket = document.getElementById('submitTicket');
const ticketNotification = document.getElementById('ticketNotification');
const exitBtn = document.getElementById('exitBtn');
const brandHome = document.getElementById('brandHome');

const festivalLogo = document.getElementById('festivalLogo');
const festivalName = document.getElementById('festivalName');
const festivalDate = document.getElementById('festivalDate');
const festivalDateText = document.getElementById('festivalDateText');
const festivalDesc = document.getElementById('festivalDesc');
const winnersGrid = document.getElementById('winnersGrid');

const lightbox = document.getElementById('videoLightbox');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxTitle = document.getElementById('lightboxTitle');
const modalVideo = document.getElementById('modalVideo');
const modalVideoSource = document.getElementById('modalVideoSource');

const TICKET_KEY = 'cineloom-ticket';

// ── Helpers ─────────────────────────────────────────────────
let toastTimer;
function showToast(message = 'Invalid ticket code. Please try again.') {
  ticketNotification.textContent = message;
  ticketNotification.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ticketNotification.classList.remove('show'), 3000);
}

// ── Ticket gate ─────────────────────────────────────────────
function handleTicketSubmission() {
  const code = ticketInput.value;
  const festival = validateTicket(code);

  if (festival) {
    try { sessionStorage.setItem(TICKET_KEY, code.toUpperCase().trim()); } catch (e) {}
    enterFestival(festival);
  } else {
    showToast();
    ticketInput.classList.add('is-invalid');
    ticketCard.classList.remove('shake');
    void ticketCard.offsetWidth; // restart animation
    ticketCard.classList.add('shake');
  }
}

function enterFestival(festival) {
  renderFestival(festival);
  gateSection.hidden = true;
  festivalSection.hidden = false;
  exitBtn.hidden = false;
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function exitToGate() {
  try { sessionStorage.removeItem(TICKET_KEY); } catch (e) {}
  festivalSection.hidden = true;
  gateSection.hidden = false;
  exitBtn.hidden = true;
  ticketInput.value = '';
  ticketInput.classList.remove('is-invalid');
  ticketInput.focus();
}

// ── Festival rendering ──────────────────────────────────────
function renderFestival(festival) {
  festivalLogo.src = festival.logo || 'cineloom-logo.png';
  festivalLogo.alt = festival.name + ' logo';
  festivalName.textContent = festival.name;

  if (festival.dutyDate) {
    festivalDateText.textContent = festival.dutyDate;
    festivalDate.style.display = '';
  } else {
    festivalDate.style.display = 'none';
  }

  festivalDesc.textContent = festival.description || '';

  winnersGrid.innerHTML = '';
  const awardIcon =
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">' +
    '<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z"/>' +
    '<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"/></svg>';
  const playIcon =
    '<svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" aria-hidden="true">' +
    '<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/></svg>';

  (festival.categories || []).forEach((cat, i) => {
    const card = document.createElement('article');
    card.className = 'winner-card';
    card.style.setProperty('--i', i);

    const eyebrow = document.createElement('p');
    eyebrow.className = 'winner-eyebrow';
    eyebrow.innerHTML = awardIcon;
    eyebrow.appendChild(document.createTextNode(' ' + cat.name));

    const title = document.createElement('h3');
    title.className = 'winner-title';
    title.textContent = cat.winner.title;

    const btn = document.createElement('button');
    btn.className = 'watch-btn';
    btn.type = 'button';
    btn.innerHTML = playIcon;
    btn.appendChild(document.createTextNode(' Watch the film'));
    btn.addEventListener('click', () => openLightbox(cat.name, cat.winner.title, cat.winner.videoUrl));

    card.append(eyebrow, title, btn);
    winnersGrid.appendChild(card);
  });
}

// ── Video lightbox ──────────────────────────────────────────
let lastFocused = null;

function openLightbox(categoryName, title, videoUrl) {
  lastFocused = document.activeElement;
  lightboxCategory.textContent = categoryName;
  lightboxTitle.textContent = title;
  modalVideoSource.src = videoUrl;
  modalVideo.load();
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
  const playAttempt = modalVideo.play();
  if (playAttempt && playAttempt.catch) playAttempt.catch(() => {});
}

function closeLightbox() {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideoSource.src = '';
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// ── Events ──────────────────────────────────────────────────
submitTicket.addEventListener('click', handleTicketSubmission);
ticketInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleTicketSubmission();
});
ticketInput.addEventListener('input', () => ticketInput.classList.remove('is-invalid'));

exitBtn.addEventListener('click', exitToGate);
brandHome.addEventListener('click', (e) => {
  e.preventDefault();
  if (!festivalSection.hidden) window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Session restore ─────────────────────────────────────────
(function restore() {
  let saved = null;
  try { saved = sessionStorage.getItem(TICKET_KEY); } catch (e) {}
  if (saved) {
    const festival = validateTicket(saved);
    if (festival) {
      enterFestival(festival);
      return;
    }
  }
  ticketInput.focus();
})();
