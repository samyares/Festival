// Mock data for festivals, categories, and movies
window.festivalsData = [
  {
    id: 'californiawomenff-s4',
    name: 'California Women Film Festival',
    description: 'A bold and independent platform dedicated to showcasing the creative power, depth, and diversity of women in film.',
    location: 'California, USA',
    year: 2026,
    status: 'active',
    logo: 'data/CaliforniaWomenFilmFestival/logo.jpg',
    dutyDate: 'Screening: August 15–17, 2026 · Season 4',
    validTickets: ['C-2026-A4', 'CS4'],
    categories: [
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'Subterranean',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/subterranean.mp4'
        }
      },
      {
        id: 'best-short-director',
        name: 'Best Short Director',
        winner: {
          title: 'While You Watched',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/while-you-watched.mp4'
        }
      },
      {
        id: 'best-short-actress',
        name: 'Best Short Actress',
        winner: {
          title: 'Sweet Spiral / Angela King',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/sweet-spiral.mp4'
        }
      },
      {
        id: 'best-short-documentary',
        name: 'Best Short Documentary',
        winner: {
          title: 'Mukatila (Women Warrior)',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/mukatila.mp4'
        }
      },
      {
        id: 'best-short-narrative',
        name: 'Best Short Narrative',
        winner: {
          title: "The Blind Man's Confessions",
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/the-blind-mans-confessions.mp4'
        }
      },
      {
        id: 'best-feature-film',
        name: 'Best Feature Film',
        winner: {
          title: 'My Mother Sandra',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/my-mother-sandra.mp4'
        }
      },
      {
        id: 'best-feature-dance-film',
        name: 'Best Feature Dance Film',
        winner: {
          title: 'A Philadelphia Tap Dance Story',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/a-philadelphia-tap-dance-story.mp4'
        }
      },
      {
        id: 'best-feature-director',
        name: 'Best Feature Director',
        winner: {
          title: 'A Philadelphia Tap Dance Story',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/a-philadelphia-tap-dance-story.mp4'
        }
      },
      {
        id: 'best-feature-documentary',
        name: 'Best Feature Documentary',
        winner: {
          title: 'From Cult To Queer',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/from-cult-to-queer.mp4'
        }
      },
      {
        id: 'best-film-about-women',
        name: 'Best Film About Women',
        winner: {
          title: 'La Machetera',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/la-machetera.mp4'
        }
      },
      {
        id: 'best-student',
        name: 'Best Student',
        winner: {
          title: 'Light',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/light.mp4'
        }
      },
      {
        id: 'best-cinematographer',
        name: 'Best Cinematographer',
        winner: {
          title: 'While You Watched',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/while-you-watched.mp4'
        }
      },
      {
        id: 'best-lgbtq',
        name: 'Best LGBTQ',
        winner: {
          title: 'Miss Personality',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/miss-personality.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'Best Experimental',
        winner: {
          title: 'This Endless Sea',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/this-endless-sea.mp4'
        }
      },
      {
        id: 'best-human-rights',
        name: 'Best Human Rights',
        winner: {
          title: '26 Seconds - USA Border Crisis',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/26-seconds-usa-border-crisis.mp4'
        }
      },
      {
        id: 'best-biographical-film',
        name: 'Best Biographical Film',
        winner: {
          title: 'On The Deck',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/on-the-deck.mp4'
        }
      },
      {
        id: 'best-music-video',
        name: 'Best Music Video',
        winner: {
          title: 'Our Brilliant Destruction',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/our-brilliant-destruction.mp4'
        }
      },
      {
        id: 'best-student-director',
        name: 'Best Student Director',
        winner: {
          title: 'The Date',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/the-date.mp4'
        }
      },
      {
        id: 'best-trailer',
        name: 'Best Trailer',
        winner: {
          title: "The Blind Man's Confessions",
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/the-blind-mans-confessions.mp4'
        }
      },
      {
        id: 'best-inspiration-film',
        name: 'Best Inspiration Film',
        winner: {
          title: 'Pathway To Hope',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/pathway-to-hope.mp4'
        }
      }
    ]
  },
  {
    id: 'framesofnewyork-s5',
    name: 'Frames of New York',
    description: 'Celebrating the art of cinema through diverse storytelling.',
    location: 'New York, USA',
    year: 2026,
    status: 'active',
    logo: 'data/FrameOfNewyork/logo.jpg',
    dutyDate: 'Season 5: July 4–5, 2026',
    validTickets: [], // FONY S5 screening closed; movie files not on this host
    categories: [
      {
        id: 'best-feature-film',
        name: 'Best Feature Film',
        winner: {
          title: 'On Life - Children’s University',
          videoUrl: 'data/FrameOfNewyork/movies/on-life-childrens-university.mp4'
        }
      },
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'One Last Show In Taghmon',
          videoUrl: 'data/FrameOfNewyork/movies/one-last-show-in-taghmon.mp4'
        }
      },
      {
        id: 'best-documentary',
        name: 'Best Documentary',
        winner: {
          title: 'Crushed Time',
          videoUrl: 'data/FrameOfNewyork/movies/crushed-time.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'Best Animation',
        winner: {
          title: 'The Lighthouse Keeper',
          videoUrl: 'data/FrameOfNewyork/movies/the-lighthouse-keeper.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'Best Experimental',
        winner: {
          title: 'Not Uniquely Incompetent',
          videoUrl: 'data/FrameOfNewyork/movies/not-uniquely-incompetent.mp4'
        }
      },
      {
        id: 'best-debut-film',
        name: 'Best Debut Film',
        winner: {
          title: 'Nothing To See Here: Watts',
          videoUrl: 'data/FrameOfNewyork/movies/nothing-to-see-here-watts.mp4'
        }
      },
      {
        id: 'best-student-film',
        name: 'Best Student Film',
        winner: {
          title: 'A Slice Of Gaza Jannah',
          videoUrl: 'data/FrameOfNewyork/movies/a-slice-of-gaza-jannah.mp4'
        }
      },
      {
        id: 'best-student-directing',
        name: 'Best Student Directing',
        winner: {
          title: 'Visage',
          videoUrl: 'data/FrameOfNewyork/movies/visage.mp4'
        }
      },
      {
        id: 'best-director',
        name: 'Best Director',
        winner: {
          title: 'Hide',
          videoUrl: 'data/FrameOfNewyork/movies/hide.mp4'
        }
      },
      {
        id: 'best-woman-director',
        name: 'Best Woman Director',
        winner: {
          title: 'Allowed To Birth: The Journey Of A Global Midwife',
          videoUrl: 'data/FrameOfNewyork/movies/allowed-to-birth-the-journey-of-a-global-midwife.mp4'
        }
      },
      {
        id: 'best-man-director',
        name: 'Best man Director',
        winner: {
          title: 'Pandemonium',
          videoUrl: 'data/FrameOfNewyork/movies/pandemonium.mp4'
        }
      },
      {
        id: 'best-script',
        name: 'Best Script',
        winner: {
          title: 'To Women Breaking Shackles',
          videoUrl: 'data/FrameOfNewyork/movies/to-women-breaking-shackles.mp4'
        }
      },
      {
        id: 'best-cinematography',
        name: 'Best Cinematography',
        winner: {
          title: 'Date Night',
          videoUrl: 'data/FrameOfNewyork/movies/date-night.mp4'
        }
      },
      {
        id: 'best-narrative',
        name: 'Best Narrative',
        winner: {
          title: 'Like A Willow Tree',
          videoUrl: 'data/FrameOfNewyork/movies/like-a-willow-tree.mp4'
        }
      },
      {
        id: 'best-international-film',
        name: 'Best International Film',
        winner: {
          title: 'Echoes From The Key Bridge: A Baltimore Longshoreman',
          videoUrl: 'data/FrameOfNewyork/movies/echoes-from-the-key-bridge-a-baltimore-longshoreman.mp4'
        }
      },
      {
        id: 'best-american-film',
        name: 'Best American Film',
        winner: {
          title: 'Nothing To See Here: Watts',
          videoUrl: 'data/FrameOfNewyork/movies/nothing-to-see-here-watts.mp4'
        }
      },
      {
        id: 'best-actor',
        name: 'Best Actor',
        winner: {
          title: 'Love Lives On/Nino Spillacci',
          videoUrl: 'data/FrameOfNewyork/movies/love-lives-on.mp4'
        }
      },
      {
        id: 'best-actress',
        name: 'Best Actress',
        winner: {
          title: 'Dinner For Two/Asli Kobanbay',
          videoUrl: 'data/FrameOfNewyork/movies/dinner-for-two.mp4'
        }
      },
      {
        id: 'best-ensemble-cast',
        name: 'Best Ensemble Cast',
        winner: {
          title: 'One Moment',
          videoUrl: 'data/FrameOfNewyork/movies/one-moment.mp4'
        }
      },
      {
        id: 'best-comedy',
        name: 'Best Comedy',
        winner: {
          title: 'The Heiress',
          videoUrl: 'data/FrameOfNewyork/movies/the-heiress.mp4'
        }
      },
      // {
      //   id: 'best-horror',
      //   name: 'Best Horror',
      //   winner: {
      //     title: 'She Who Remembers',
      //     videoUrl: 'data/FrameOfNewyork/movies/she-who-remembers.mp4'
      //   }
      // },
      {
        id: 'best-thriller',
        name: 'Best Thriller',
        winner: {
          title: 'Shelf Life',
          videoUrl: 'data/FrameOfNewyork/movies/shelf-life.mp4'
        }
      },
      {
        id: 'best-women-empowerment',
        name: 'Best Women Empowerment',
        winner: {
          title: 'Pathway To Hope',
          videoUrl: 'data/FrameOfNewyork/movies/pathway-to-hope.mp4'
        }
      },
      {
        id: 'best-micro',
        name: 'Best Micro',
        winner: {
          title: 'Kev',
          videoUrl: 'data/FrameOfNewyork/movies/kev.mp4'
        }
      },
      {
        id: 'best-drama',
        name: 'Best Drama',
        winner: {
          title: 'The Eulogy',
          videoUrl: 'data/FrameOfNewyork/movies/the-eulogy.mp4'
        }
      },
      {
        id: 'best-trailer',
        name: 'Best Trailer',
        winner: {
          title: 'Bad Influence',
          videoUrl: 'data/FrameOfNewyork/movies/bad-influence.mp4'
        }
      },
      {
        id: 'best-low-budget',
        name: 'Best Low Budget',
        winner: {
          title: "The Blind Man'S Confessions",
          videoUrl: 'data/FrameOfNewyork/movies/the-blind-mans-confessions.mp4'
        }
      },
      {
        id: 'best-original-score',
        name: 'Best Original Score',
        winner: {
          title: 'Bajo La Sombra Del Enemigo',
          videoUrl: 'data/FrameOfNewyork/movies/bajo-la-sombra-del-enemigo.mp4'
        }
      },
      {
        id: 'best-soundtrack',
        name: 'Best Soundtrack',
        winner: {
          title: 'After Party',
          videoUrl: 'data/FrameOfNewyork/movies/after-party.mp4'
        }
      },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Hope: Introducing Dick Dyman',
          videoUrl: 'data/FrameOfNewyork/movies/hope-introducing-dick-dyman.mp4'
        }
      },
      {
        id: 'best-poster',
        name: 'Best Poster',
        winner: {
          title: 'One Moment',
          videoUrl: 'data/FrameOfNewyork/movies/one-moment.mp4'
        }
      }
    ]
  }
];

// Function to validate ticket and return festival (case-insensitive)
window.validateTicket = function(ticketCode) {
  const code = String(ticketCode || '').trim().toUpperCase();
  if (!code) return undefined;
  return festivalsData.find(festival =>
    Array.isArray(festival.validTickets) &&
    festival.validTickets.some(t => String(t).trim().toUpperCase() === code)
  );
}; 
