// ================================
// Paris Women Cinefest - Screening Room
// ================================

// Festival Data - Edit this to add your films
const festivalData = {
    // Current season info
    season: {
        number: 5,
        name: "Winter",
        year: 2025
    },
    
    // Award categories
    categories: [
        { id: "all", name: "All" },
        { id: "best-short-film", name: "Best Short Film" },
        { id: "best-short-script", name: "Best Short Script" },
        { id: "best-micro-film", name: "Best Micro Film" },
        { id: "best-short-director", name: "Best Short Director" },
        { id: "best-student-short", name: "Best Student Short" },
        { id: "best-short-experimental", name: "Best Short Experimental" },
        { id: "best-short-women-empowerment", name: "Best Short Women Empowerment" },
        { id: "best-short-women-issues", name: "Best Short Women Issues" },
        { id: "best-short-drama", name: "Best Short Drama" },
        { id: "best-short-romance", name: "Best Short Romance" },
        { id: "best-short-documentary", name: "Best Short Documentary" },
        { id: "best-short-lgbtq", name: "Best Short LGBTQ" },
        { id: "best-short-editing", name: "Best Short Editing" },
        { id: "best-short-music-video", name: "Best Short Music Video" },
        { id: "best-cinematography-short", name: "Best Cinematography In Short" },
        { id: "best-first-time-filmmaker-short", name: "Best First Time Filmmaker Short" },
        { id: "best-short-dance-film", name: "Best Short Dance Film" },
        { id: "best-feature-film", name: "Best Feature Film" },
        { id: "best-feature-script", name: "Best Feature Script" },
        { id: "best-feature-actress", name: "Best Feature Actress" },
        { id: "best-feature-experimental", name: "Best Feature Experimental" },
        { id: "best-feature-women-empowerment", name: "Best Feature Women Empowerment" },
        { id: "best-feature-women-issues", name: "Best Feature Women Issues" },
        { id: "best-feature-drama", name: "Best Feature Drama" },
        { id: "best-feature-director", name: "Best Feature Director" },
        { id: "best-feature-cinematography", name: "Best Feature Cinematography Film" },
        { id: "best-feature-documentary", name: "Best Feature Documentary" },
        { id: "best-animation", name: "Best Animation" },
        { id: "best-web-series", name: "Best Web Series" },
        { id: "best-producer", name: "Best Producer" },
        { id: "best-thriller-film", name: "Best Thriller Film" },
        { id: "best-ai-film", name: "Best AI Film" },
        { id: "best-feature-comedy", name: "Best Feature Comedy" },
    ],
    
    // Winner films for this season
    // Base URL for videos
    videoBaseUrl: "https://screen.pariswomencinefest.art/videos/",
    
    winners: [
        {
            id: 1,
            title: "Behind a Smile",
            category: "best-short-film",
            categoryLabel: "Best Short Film",
            videoFile: "behind-a-smile.mp4"
        },
        {
            id: 2,
            title: "Not a Love Story",
            category: "best-short-script",
            categoryLabel: "Best Short Script",
            videoFile: "not-a-love-story.mp4"
        },
        {
            id: 3,
            title: "Not Your Script",
            category: "best-micro-film",
            categoryLabel: "Best Micro Film",
            videoFile: "not-your-script.mp4"
        },
        {
            id: 4,
            title: "Health Matters: Pregnancy : The Miraculous Journey Of Pregnancy",
            category: "best-short-director",
            categoryLabel: "Best Short Director",
            videoFile: "health-matters-pregnancy-the-miraculous-journey-of-pregnancy.mp4"
        },
        {
            id: 5,
            title: "Moderation",
            category: "best-student-short",
            categoryLabel: "Best Student Short",
            videoFile: "moderation.mp4"
        },
        {
            id: 6,
            title: "Moisture",
            category: "best-short-experimental",
            categoryLabel: "Best Short Experimental",
            videoFile: "moisture.mp4"
        },
        {
            id: 7,
            title: "Mom",
            category: "best-short-women-empowerment",
            categoryLabel: "Best Short Women Empowerment",
            videoFile: "mom.mp4"
        },
        {
            id: 8,
            title: "Invisible",
            category: "best-short-women-issues",
            categoryLabel: "Best Short Women Issues",
            videoFile: "invisible.mp4"
        },
        {
            id: 9,
            title: "Moments From Motherhood",
            category: "best-short-drama",
            categoryLabel: "Best Short Drama",
            videoFile: "moments-from-motherhood.mp4"
        },
        {
            id: 10,
            title: "Tea and a Rose",
            category: "best-short-romance",
            categoryLabel: "Best Short Romance",
            videoFile: "tea-and-a-rose.mp4"
        },
        {
            id: 11,
            title: "My Two Lives, Creative Response To The Holocaust",
            category: "best-short-documentary",
            categoryLabel: "Best Short Documentary",
            videoFile: ""
        },
        {
            id: 12,
            title: "Period",
            category: "best-short-lgbtq",
            categoryLabel: "Best Short LGBTQ",
            videoFile: "period.mp4"
        },
        {
            id: 13,
            title: "Ancestors",
            category: "best-short-editing",
            categoryLabel: "Best Short Editing",
            videoFile: "ancestors.mp4"
        },
        {
            id: 14,
            title: "You're a Halo",
            category: "best-short-music-video",
            categoryLabel: "Best Short Music Video",
            videoFile: "youre-a-halo.mp4"
        },
        {
            id: 15,
            title: "Statues of Women",
            category: "best-cinematography-short",
            categoryLabel: "Best Cinematography In Short",
            videoFile: "statues-of-women.mp4"
        },
        {
            id: 16,
            title: "Tender Was the Waltz",
            category: "best-first-time-filmmaker-short",
            categoryLabel: "Best First Time Filmmaker Short",
            videoFile: "tender-was-the-waltztender-was-the-waltz.mp4"
        },
        {
            id: 17,
            title: "Beyond Borders: a Documentary in Dance",
            category: "best-short-dance-film",
            categoryLabel: "Best Short Dance Film",
            videoFile: "beyond-borders-a-documentary-in-dance.mp4"
        },
        {
            id: 18,
            title: "Highly Explosive",
            category: "best-feature-film",
            categoryLabel: "Best Feature Film",
            videoFile: "highly-explosive.mp4"
        },
        {
            id: 19,
            title: "No Flowers",
            category: "best-feature-script",
            categoryLabel: "Best Feature Script",
            videoFile: ""
        },
        {
            id: 20,
            title: "Milos - For The Mothers Of Lost Children / Gretel Taylor",
            category: "best-feature-actress",
            categoryLabel: "Best Feature Actress",
            videoFile: "milos.mp4"
        },
        {
            id: 21,
            title: "Velia Titta Widow Matteotti",
            category: "best-feature-experimental",
            categoryLabel: "Best Feature Experimental",
            videoFile: "velia-titta-widow-matteotti.mp4"
        },
        {
            id: 22,
            title: "Following In The Footsteps Of My Ancestors",
            category: "best-feature-women-empowerment",
            categoryLabel: "Best Feature Women Empowerment",
            videoFile: "following-in-the-footsteps-of-my-ancestors.mp4"
        },
        {
            id: 23,
            title: "The Woman Who Lived On Bird Street",
            category: "best-feature-women-issues",
            categoryLabel: "Best Feature Women Issues",
            videoFile: ""
        },
        {
            id: 24,
            title: "From The Midnight Sun To Eternity",
            category: "best-feature-drama",
            categoryLabel: "Best Feature Drama",
            videoFile: "from-the-midnight-sun-to-eternity.mp4"
        },
        {
            id: 25,
            title: "No Flowers",
            category: "best-feature-director",
            categoryLabel: "Best Feature Director",
            videoFile: "no-flowers.mp4"
        },
        {
            id: 26,
            title: "From The Midnight Sun To Eternity",
            category: "best-feature-cinematography",
            categoryLabel: "Best Feature Cinematography Film",
            videoFile: "from-the-midnight-sun-to-eternity.mp4"
        },
        {
            id: 27,
            title: "Sweet Störy",
            category: "best-feature-documentary",
            categoryLabel: "Best Feature Documentary",
            videoFile: "sweet-story.mp4"
        },
        {
            id: 28,
            title: "Lifted",
            category: "best-animation",
            categoryLabel: "Best Animation",
            videoFile: "lifted.mp4"
        },
        {
            id: 29,
            title: "Heart Attack: A Hidden Threat To The Asian Community",
            category: "best-web-series",
            categoryLabel: "Best Web Series",
            videoFile: "heart-attack:-a-hidden-threat-to-the-asian-community.mp4"
        },
        {
            id: 30,
            title: "Babyshower",
            category: "best-producer",
            categoryLabel: "Best Producer",
            videoFile: "babyshower.mp4"
        },
        {
            id: 31,
            title: "A Lamb, Drowning",
            category: "best-thriller-film",
            categoryLabel: "Best Thriller Film",
            videoFile: "a-lamb-drowning.mp4"
        },
        {
            id: 32,
            title: "AI For Good",
            category: "best-ai-film",
            categoryLabel: "Best AI Film",
            videoFile: "ai-for-good.mp4"
        },
        {
            id: 33,
            title: "Morgan Wood \"Everything Always Happens So Much\"",
            category: "best-feature-comedy",
            categoryLabel: "Best Feature Comedy",
            videoFile: "morgan-wood-everything-always-happens-so-much.mp4"
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
