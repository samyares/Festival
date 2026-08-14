// DOM elements
const ticketSection = document.getElementById('ticket-section');
const ticketInput = document.getElementById('ticketInput');
const submitTicket = document.getElementById('submitTicket');
const ticketNotification = document.getElementById('ticketNotification');
const festivalCards = document.getElementById('festivalCards');
const homeSection = document.getElementById('home-section');
const categoriesSection = document.getElementById('categories-section');
const categoryList = document.getElementById('categoryList');
const backToHome = document.getElementById('backToHome');
const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
const modalVideo = document.getElementById('modalVideo');
const modalVideoSource = document.getElementById('modalVideoSource');
const videoModalLabel = document.getElementById('videoModalLabel');

// Helper: get status for festival (mock logic)
function getFestivalStatus(festival) {
  // You can enhance this logic based on real data
  if (festival.status) return festival.status;
  if (festival.name.toLowerCase().includes('toronto')) return 'upcoming';
  return 'active';
}

// Show notification
function showNotification() {
  ticketNotification.classList.add('show');
  setTimeout(() => {
    ticketNotification.classList.remove('show');
  }, 3000);
}

// Handle ticket submission
function handleTicketSubmission() {
  const ticketCode = ticketInput.value;
  const festival = validateTicket(ticketCode);
  
  if (festival) {
    ticketSection.style.display = 'none';
    homeSection.style.display = '';
    renderFestival(festival);
  } else {
    showNotification();
    ticketInput.classList.add('is-invalid');
  }
}

// Render single festival
function renderFestival(festival) {
  festivalCards.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'festival-card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('data-festival-id', festival.id);
    card.innerHTML = `
    <div class="d-flex align-items-center mb-2">
      <img src="${festival.logo}" alt="${festival.name} Logo" style="width:48px;height:48px;object-fit:contain;margin-right:1rem;border-radius:8px;background:#fff;">
      <div>
      <div class="festival-title">${festival.name}</div>
      </div>
    </div>
      <div class="festival-desc">${festival.description || ''}</div>
      <div class="festival-meta">
      <span><i class="bi bi-calendar-event"></i>${festival.dutyDate || ''}</span>
      </div>
    <button class="btn btn-primary mt-2 w-100">Enter the Festival</button>
    `;
    card.addEventListener('click', () => showCategories(festival.id));
    card.addEventListener('keypress', (e) => { if (e.key === 'Enter') showCategories(festival.id); });
    festivalCards.appendChild(card);
}

// Show categories for selected festival
function showCategories(festivalId) {
  const festival = festivalsData.find(f => f.id === festivalId);
  if (!festival) return;
  categoryList.innerHTML = '';
  // Add festival logo and dutyDate at the top
  const logoDiv = document.createElement('div');
  logoDiv.className = 'text-center mb-4';
  logoDiv.innerHTML = `
    <img src="${festival.logo}" alt="${festival.name} Logo" style="max-width:120px;max-height:120px;object-fit:contain;display:block;margin:0 auto 1rem auto;">
    <div class="text-light small mb-2">${festival.dutyDate || 'Festival Dates: To be announced'}</div>
  `;
  categoryList.appendChild(logoDiv);
  festival.categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'card category-card';
    card.innerHTML = `
      <div class="card-body d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div>
          <h5 class="card-title mb-1">${cat.name}</h5>
          <p class="card-text mb-0"><span class="fw-bold">Winner:</span> ${cat.winner.title}</p>
        </div>
        <button class="btn btn-primary mt-3 mt-md-0" data-video="${cat.winner.videoUrl}" data-title="${cat.winner.title}">Watch</button>
      </div>
    `;
    categoryList.appendChild(card);
  });
  homeSection.style.display = 'none';
  categoriesSection.style.display = '';
}

// Event Listeners
submitTicket.addEventListener('click', handleTicketSubmission);
ticketInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleTicketSubmission();
});
ticketInput.addEventListener('input', () => {
  ticketInput.classList.remove('is-invalid');
});

// Handle back button
backToHome.addEventListener('click', function() {
  categoriesSection.style.display = 'none';
  homeSection.style.display = '';
  // Reset video if open
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

// Handle watch button clicks (event delegation)
categoryList.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-video')) {
    const videoUrl = e.target.getAttribute('data-video');
    const title = e.target.getAttribute('data-title');
    modalVideoSource.src = videoUrl;
    modalVideo.load();
    videoModalLabel.textContent = title;
    videoModal.show();
  }
});

// Pause video when modal closes
const videoModalEl = document.getElementById('videoModal');
videoModalEl.addEventListener('hidden.bs.modal', function () {
  modalVideo.pause();
  modalVideo.currentTime = 0;
});