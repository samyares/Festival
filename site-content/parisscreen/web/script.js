// ================================
// Paris Women Cinefest - Screening Room
// ================================

// Festival Data - Edit this to add your films
const festivalData = {
    // Current season info
    season: {
        number: 6,
        name: "Spring",
        year: 2026
    },

    // Award categories
    categories: [
        { id: "all", name: "All" },
        { id: "best-short-film", name: "Best Short Film" },
        { id: "best-micro-film", name: "Best Micro Film" },
        { id: "best-short-actress", name: "Best Short Actress" },
        { id: "best-short-director", name: "Best Short Director" },
        { id: "best-student-short", name: "Best Student Short" },
        { id: "best-short-experimental", name: "Best Short Experimental" },
        { id: "best-short-women-empowerment", name: "Best Short Women Empowerment" },
        { id: "best-short-women-issues", name: "Best Short Women Issues" },
        { id: "best-short-drama", name: "Best Short Drama" },
        { id: "best-short-documentary", name: "Best Short Documentary" },
        { id: "best-short-editing", name: "Best Short Editing" },
        { id: "best-cinematography-short", name: "Best Cinematography In Short" },
        { id: "best-first-time-filmmaker-short", name: "Best First Time Filmmaker Short" },
        { id: "best-feature-women-empowerment", name: "Best Feature Women Empowerment" },
        { id: "best-feature-women-issues", name: "Best Feature Women Issues" },
        { id: "best-feature-drama", name: "Best Feature Drama" },
        { id: "best-feature-documentary", name: "Best Feature Documentary" },
        { id: "best-original-music", name: "Best Original Music" },
        { id: "best-environmental", name: "Best Environmental" },
        { id: "best-music-video", name: "Best Music Video" },
        { id: "best-producer", name: "Best Producer" },
        { id: "best-thriller-film", name: "Best Thriller Film" },
        { id: "best-ai-film", name: "Best AI Film" },
    ],

    // Winner films for this season
    // Base URL for videos
    videoBaseUrl: "https://screen.pariswomencinefest.art/videos/",

    winners: [
        {
            id: 1,
            title: "The Testimony",
            category: "best-short-film",
            categoryLabel: "Best Short Film",
            videoFile: "the-testimony.mp4"
        },
        {
            id: 2,
            title: "Breath",
            category: "best-micro-film",
            categoryLabel: "Best Micro Film",
            videoFile: "breath.mp4"
        },
        {
            id: 3,
            title: "The Persian Rug/Golsa Sarabi",
            category: "best-short-actress",
            categoryLabel: "Best Short Actress",
            videoFile: "the-persian-rug.mp4"
        },
        {
            id: 4,
            title: "What To Expect",
            category: "best-short-director",
            categoryLabel: "Best Short Director",
            videoFile: "what-to-expect.mp4"
        },
        {
            id: 5,
            title: "Breaking The Tide",
            category: "best-student-short",
            categoryLabel: "Best Student Short",
            videoFile: "breaking-the-tide.mp4"
        },
        {
            id: 6,
            title: "Akin",
            category: "best-short-experimental",
            categoryLabel: "Best Short Experimental",
            videoFile: "akin.mp4"
        },
        {
            id: 7,
            title: "Savannah's Curse",
            category: "best-short-women-empowerment",
            categoryLabel: "Best Short Women Empowerment",
            videoFile: "savannahs-curse.mp4"
        },
        {
            id: 8,
            title: "Captive Women",
            category: "best-short-women-issues",
            categoryLabel: "Best Short Women Issues",
            videoFile: "captive-women.mp4"
        },
        {
            id: 9,
            title: "I Will Never Forget You",
            category: "best-short-drama",
            categoryLabel: "Best Short Drama",
            videoFile: "i-will-never-forget-you.mp4"
        },
        {
            id: 10,
            title: "Mare Infinitu",
            category: "best-short-documentary",
            categoryLabel: "Best Short Documentary",
            videoFile: "mare-infinitu.mp4"
        },
        {
            id: 11,
            title: "Promise(s)",
            category: "best-short-editing",
            categoryLabel: "Best Short Editing",
            videoFile: "promise.mp4"
        },
        {
            id: 12,
            title: "The Sound Between",
            category: "best-cinematography-short",
            categoryLabel: "Best Cinematography In Short",
            videoFile: "the-sound-between.mp4"
        },
        {
            id: 13,
            title: "Rules",
            category: "best-first-time-filmmaker-short",
            categoryLabel: "Best First Time Filmmaker Short",
            videoFile: "rules.mp4"
        },
        {
            id: 14,
            title: "A Brave Old World",
            category: "best-feature-women-empowerment",
            categoryLabel: "Best Feature Women Empowerment",
            videoFile: "a-brave-old-world.mp4"
        },
        {
            id: 15,
            title: "Pathway To Hope",
            category: "best-feature-women-issues",
            categoryLabel: "Best Feature Women Issues",
            videoFile: "pathway-to-hope.mp4"
        },
        {
            id: 16,
            title: "Fine Young Men",
            category: "best-feature-drama",
            categoryLabel: "Best Feature Drama",
            videoFile: "fine-young-men.mp4"
        },
        {
            id: 17,
            title: "Pathway To Hope With Jane Clayson Johnson",
            category: "best-feature-documentary",
            categoryLabel: "Best Feature Documentary",
            videoFile: "pathway-to-hope-with-jane-clayson-johnson.mp4"
        },
        {
            id: 18,
            title: "Plus Jamais (Never Again)",
            category: "best-original-music",
            categoryLabel: "Best Original Music",
            videoFile: "plus-jamais-never-again.mp4"
        },
        {
            id: 19,
            title: "Our Brilliant Destruction",
            category: "best-environmental",
            categoryLabel: "Best Environmental",
            videoFile: "our-brilliant-destruction.mp4"
        },
        {
            id: 20,
            title: "Out Of The Blue",
            category: "best-music-video",
            categoryLabel: "Best Music Video",
            videoFile: "out-of-the-blue.mp4"
        },
        {
            id: 21,
            title: "Sweet Spiral",
            category: "best-producer",
            categoryLabel: "Best Producer",
            videoFile: "sweet-spiral.mp4"
        },
        {
            id: 22,
            title: "Fine Young Men",
            category: "best-thriller-film",
            categoryLabel: "Best Thriller Film",
            videoFile: "fine-young-men.mp4"
        },
        {
            id: 23,
            title: "Unconscious Bias",
            category: "best-ai-film",
            categoryLabel: "Best AI Film",
            videoFile: "unconscious-bias.mp4"
        }
    ]
};

// State
let currentCategory = "all";

// DOM Elements
const categoryFilter = document.getElementById('categoryFilter');
const winnersGrid = document.getElementById('winnersGrid');
const currentSeasonTitle = document.getElementById('currentSeasonTitle');
const filmCount = document.getElementById('filmCount');
const filmModal = new bootstrap.Modal(document.getElementById('filmModal'));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSeasonTitle();
    renderCategories();
    renderWinners();
});

// Render season title
function renderSeasonTitle() {
    const { number, name, year } = festivalData.season;
    currentSeasonTitle.textContent = `Season ${number} • ${name} ${year}`;
}

// Render category filters
function renderCategories() {
    categoryFilter.innerHTML = festivalData.categories.map(cat => `
        <button class="category-btn ${cat.id === currentCategory ? 'active' : ''}" 
                data-category="${cat.id}">
            ${cat.name}
        </button>
    `).join('');
    
    categoryFilter.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCategory = btn.dataset.category;
            updateCategoryButtons();
            renderWinners();
        });
    });
}

// Update category buttons active state
function updateCategoryButtons() {
    categoryFilter.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === currentCategory);
    });
}

// Render winner cards
function renderWinners() {
    const winners = festivalData.winners;
    const filtered = currentCategory === 'all' 
        ? winners 
        : winners.filter(w => w.category === currentCategory);
    
    // Update film count
    filmCount.textContent = `${filtered.length} film${filtered.length !== 1 ? 's' : ''}`;
    
    if (filtered.length === 0) {
        winnersGrid.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-film"></i>
                <p>No films found for this category</p>
            </div>
        `;
        return;
    }
    
    winnersGrid.innerHTML = filtered.map((film, index) => `
        <div class="winner-card fade-in" data-film-id="${film.id}" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <div class="award-badge">${film.categoryLabel}</div>
                <h3 class="winner-title">${film.title}</h3>
            </div>
            <div class="card-footer">
                <span class="watch-text">Watch Film</span>
                <div class="play-btn">
                    <i class="bi bi-play-fill"></i>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click handlers
    winnersGrid.querySelectorAll('.winner-card').forEach(card => {
        card.addEventListener('click', () => {
            openFilmModal(parseInt(card.dataset.filmId));
        });
    });
}

// Open film modal
function openFilmModal(filmId) {
    const film = festivalData.winners.find(f => f.id === filmId);
    
    if (!film) return;
    
    // Update modal content
    document.getElementById('filmModalTitle').textContent = film.title;
    document.getElementById('filmCategoryBadge').textContent = film.categoryLabel;
    
    // Update video container
    const videoContainer = document.getElementById('videoContainer');
    
    if (film.videoFile) {
        const videoUrl = festivalData.videoBaseUrl + film.videoFile;
        videoContainer.innerHTML = `
            <video controls autoplay controlsList="nodownload noplaybackrate" disablePictureInPicture oncontextmenu="return false;">
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else {
        videoContainer.innerHTML = `
            <div class="video-placeholder">
                <i class="bi bi-film"></i>
                <p>Screening Coming Soon</p>
                <small>Check back for updates</small>
            </div>
        `;
    }
    
    filmModal.show();
}

// Clean up video when modal closes
document.getElementById('filmModal').addEventListener('hidden.bs.modal', () => {
    document.getElementById('videoContainer').innerHTML = '';
});
