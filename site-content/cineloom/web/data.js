// Mock data for festivals, categories, and movies
window.festivalsData = [
  {
    id: 'californiawomenff',
    name: 'California Women Film Festival',
    description: 'A bold and independent platform dedicated to showcasing the creative power, depth, and diversity of women in film.',
    location: 'California, USA',
    year: 2025,
    status: 'upcoming',
    logo: 'data/CaliforniaWomenFilmFestival/logo.jpg',
    dutyDate: 'Session 1: July 7, 2025',
    validTickets: ['C-2025-A1', 'C-2025-A2', 'amir'],
    categories: [
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'Laughing Again',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/laughing-again.mp4'
        }
      },
      {
        id: 'best-short-director',
        name: 'Best Short Director',
        winner: {
          title: 'Heavenly Bodies',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/heavenly-bodies.mp4'
        }
      },
      {
        id: 'best-short-actress',
        name: 'Best Short Actress',
        winner: {
          title: 'A-MORS / Eleonora Gasparotto',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/a-mors.mp4'
        }
      },
      // {
      //   id: 'best-short-actor',
      //   name: 'Best Short Actor',
      //   winner: {
      //     title: 'Place of Hawks / Nate Sapriken',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/place-of-hawks.mp4'
      //   }
      // },
      // {
      //   id: 'best-short-script',
      //   name: 'Best Short Script',
      //   winner: {
      //     title: 'Dysphoria?',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/dysphoria.mp4'
      //   }
      // },
      {
        id: 'best-short-documentary',
        name: 'Best Short Documentary',
        winner: {
          title: 'Nina',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/nina.mp4'
        }
      },
      {
        id: 'best-short-narrative',
        name: 'Best Short Narrative',
        winner: {
          title: 'SHE',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/she.mp4'
        }
      },
      {
        id: 'best-feature-film',
        name: 'Best Feature Film',
        winner: {
          title: 'Citrotoxic',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/citrotoxic.mp4'
        }
      },
      {
        id: 'best-feature-director',
        name: 'Best Feature Director',
        winner: {
          title: 'The Life Coach',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/the-life-coach.mp4'
        }
      },
      {
        id: 'best-feature-actress',
        name: 'Best Feature Actress',
        winner: {
          title: 'The Life Coach / Lindo Osifo',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/the-life-coach.mp4'
        }
      },
      {
        id: 'best-feature-actor',
        name: 'Best Feature Actor',
        winner: {
          title: 'Thank You For Her / K Evans',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/thank-you-for-her.mp4'
        }
      },
      // {
      //   id: 'best-feature-script',
      //   name: 'Best Feature Script',
      //   winner: {
      //     title: 'My Name is Henrietta',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/my-name-is-henrietta.mp4'
      //   }
      // },
      {
        id: 'best-feature-documentary',
        name: 'Best Feature Documentary',
        winner: {
          title: 'Julia Alvarez: A Life Reimagined',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/julia-alvarez-a-life-reimagined.mp4'
        }
      },
      {
        id: 'best-feature-narrative',
        name: 'Best Feature Narrative',
        winner: {
          title: 'Mother - Sisterhood in the wild',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/mother-sisterhood-in-the-wild.mp4'
        }
      },
      {
        id: 'best-film-about-women',
        name: 'Best Film About Women',
        winner: {
          title: 'Under Mango Trees',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/under-mango-trees.mp4'
        }
      },
      {
        id: 'best-student',
        name: 'Best Student',
        winner: {
          title: 'Unsilenced',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/unsilenced.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'Best Animation',
        winner: {
          title: 'Ball Lightning',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/ball-lightning.mp4'
        }
      },
      // {
      //   id: 'best-cinematographer',
      //   name: 'Best Cinematographer',
      //   winner: {
      //     title: 'Place of Hawks',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/place-of-hawks.mp4'
      //   }
      // },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Aneyshia',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/aneyshia.mp4'
        }
      },
      // {
      //   id: 'best-composer',
      //   name: 'Best Composer',
      //   winner: {
      //     title: 'Achaiah 7-Love Into Patience',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/achaiah-7-love-into-patience.mp4'
      //   }
      // },
      {
        id: 'best-human-rights',
        name: 'Best Human Rights',
        winner: {
          title: 'Dishonour',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/dishonour.mp4'
        }
      },
      // {
      //   id: 'best-unproduced-script',
      //   name: 'Best Unproduced Script',
      //   winner: {
      //     title: 'Red Sea',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/red-sea.mp4'
      //   }
      // },
      {
        id: 'best-biographical-film',
        name: 'Best Biographical Film',
        winner: {
          title: 'Professor Maria Kopp',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/professor-maria-kopp.mp4'
        }
      },
      {
        id: 'best-youth-artist',
        name: 'Best Youth Artist',
        winner: {
          title: 'Thank You For Her',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/thank-you-for-her.mp4'
        }
      },
      {
        id: 'best-first-time-filmmaker',
        name: 'Best First Time Filmmaker',
        winner: {
          title: "It's Not Me, It's You",
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/its-not-me-its-you.mp4'
        }
      }
    ]
  },
  {
    id: 'ottawafilmaward',
    name: 'Ottawa Film Award',
    description: 'Cinema unites us through storytelling.',
    location: 'Ottawa, Canada',
    year: 2025,
    status: 'active',
    logo: 'data/OttawaFilmAward/logo.jpg',
    dutyDate: 'Session 1: Jan 2025, Session 2: Apr 2025',
    validTickets: ['O-2025-B1', 'O-2025-B2', 'o'],
    categories: [
      {
        id: 'best-short-film',
        name: 'BEST SHORT FILM',
        winner: {
          title: 'To Womb It May Concern',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-short',
        name: 'BEST SHORT SHORT',
        winner: {
          title: 'Gonzo: Art on the Margins',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-director',
        name: 'BEST SHORT DIRECTOR',
        winner: {
          title: 'Tobie Milford\'s "Death!"',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-actress',
        name: 'BEST SHORT ACTRESS',
        winner: {
          title: 'Maya/Violet Grace',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-script',
        name: 'BEST SHORT SCRIPT',
        winner: {
          title: 'Galatea\'s Dream',
          videoUrl: ''
        }
      },
      {
        id: 'best-unproduced-script',
        name: 'BEST UNPRODUCED SCRIPT',
        winner: {
          title: 'Crustaceus',
          videoUrl: ''
        }
      },
      {
        id: 'best-international-short-narrative',
        name: 'BEST INTERNATIONAL SHORT NARRATIVE',
        winner: {
          title: 'Tobie Milford\'s "Death!"',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-editing',
        name: 'BEST SHORT EDITING',
        winner: {
          title: 'Pharmacy Museum Tour, New Orleans',
          videoUrl: ''
        }
      },
      {
        id: 'best-documentary',
        name: 'BEST DOCUMENTARY',
        winner: {
          title: 'Resisterhood',
          videoUrl: ''
        }
      },
      {
        id: 'best-experimental',
        name: 'BEST EXPERIMENTAL',
        winner: {
          title: 'Achaiah 7-Love Into Patience',
          videoUrl: ''
        }
      },
      {
        id: 'best-animation',
        name: 'BEST ANIMATION',
        winner: {
          title: 'Collateral Damage',
          videoUrl: ''
        }
      },
      {
        id: 'best-student',
        name: 'BEST STUDENT',
        winner: {
          title: 'The Leek Pie',
          videoUrl: ''
        }
      },
      {
        id: 'best-screenplay',
        name: 'BEST SCREENPLAY',
        winner: {
          title: 'The Visit',
          videoUrl: ''
        }
      },
      {
        id: 'best-first-time-director',
        name: 'BEST FIRST-TIME DIRECTOR',
        winner: {
          title: 'White Rabbit',
          videoUrl: ''
        }
      },
      {
        id: 'best-composer',
        name: 'BEST COMPOSER',
        winner: {
          title: 'Pharmacy Museum Tour, New Orleans',
          videoUrl: ''
        }
      },
      {
        id: 'best-music-video',
        name: 'BEST MUSIC VIDEO',
        winner: {
          title: 'T H E R I N G Garmambosia',
          videoUrl: ''
        }
      },
      {
        id: 'best-cinematography',
        name: 'BEST CINEMATOGRAPHY',
        winner: {
          title: 'Achaiah 7-Love Into Patience',
          videoUrl: ''
        }
      }
    ]
  },
  {
    id: 'ottawafilmaward-s6',
    name: 'Ottawa Film Award',
    description: 'Cinema unites us through storytelling.',
    location: 'Ottawa, Canada',
    year: 2025,
    status: 'active',
    logo: 'data/OttawaFilmAward/logo.jpg',
    dutyDate: 'Season 6: Feb 2025',
    validTickets: ['O-2025-S5', 'O-2025-S5', 'os6'],
    categories: [
      {
        id: 'best-short-film',
        name: 'BEST SHORT FILM',
        winner: {
          title: 'Iris',
          videoUrl: 'data/OttawaFilmAward/movies/iris.mp4'
        }
      },
      {
        id: 'best-feature-film',
        name: 'BEST FEATURE FILM',
        winner: {
          title: 'One Last Chance',
          videoUrl: 'data/OttawaFilmAward/movies/one-last-chance.mp4'
        }
      },
      {
        id: 'best-short-short',
        name: 'BEST SHORT SHORT',
        winner: {
          title: 'Grapevine',
          videoUrl: 'data/OttawaFilmAward/movies/grapevine.mp4'
        }
      },
      {
        id: 'best-short-director',
        name: 'BEST SHORT DIRECTOR',
        winner: {
          title: 'Maya\'S Three Star Sphere —Faith, Courage, And Love',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-director',
        name: 'BEST FEATURE DIRECTOR',
        winner: {
          title: 'One Last Chance',
          videoUrl: 'data/OttawaFilmAward/movies/one-last-chance.mp4'
        }
      },
      {
        id: 'best-short-actress',
        name: 'BEST SHORT ACTRESS',
        winner: {
          title: 'Trixie/Suzenne Seradwyn',
          videoUrl: 'data/OttawaFilmAward/movies/trixie.mp4'
        }
      },
      {
        id: 'best-short-script',
        name: 'BEST SHORT SCRIPT',
        winner: {
          title: 'Daughter',
          videoUrl: 'data/OttawaFilmAward/movies/daughter.mp4'
        }
      },
      {
        id: 'best-feature-script',
        name: 'BEST FEATURE SCRIPT',
        winner: {
          title: 'The Veil Of Silence',
          videoUrl: ''
        }
      },
      {
        id: 'best-unproduced-script',
        name: 'BEST UNPRODUCED SCRIPT',
        winner: {
          title: 'The Final Fight',
          videoUrl: ''
        }
      },
      {
        id: 'best-international-short-narrative',
        name: 'BEST INTERNATIONAL SHORT NARRATIVE',
        winner: {
          title: 'Dinner In Lockdown',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-editing',
        name: 'BEST SHORT EDITING',
        winner: {
          title: 'The Tooth Fairy',
          videoUrl: 'data/OttawaFilmAward/movies/the-tooth-fairy.mp4'
        }
      },
      {
        id: 'best-documentary',
        name: 'BEST DOCUMENTARY',
        winner: {
          title: 'Between The Great Plains',
          videoUrl: 'data/OttawaFilmAward/movies/between-the-great-plains.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'BEST EXPERIMENTAL',
        winner: {
          title: 'Moisture',
          videoUrl: 'data/OttawaFilmAward/movies/moisture.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'BEST ANIMATION',
        winner: {
          title: 'Выход (Vyhod / Exit)',
          videoUrl: 'data/OttawaFilmAward/movies/ernie-maltby-vyhod-exit.mp4'
        }
      },
      {
        id: 'best-screenplay',
        name: 'BEST SCREENPLAY',
        winner: {
          title: 'The Veil Of Silence',
          videoUrl: ''
        }
      },
      {
        id: 'best-first-time-director',
        name: 'BEST FIRST-TIME DIRECTOR',
        winner: {
          title: 'Braids',
          videoUrl: 'data/OttawaFilmAward/movies/braids.mp4'
        }
      },
      {
        id: 'best-composer',
        name: 'BEST COMPOSER',
        winner: {
          title: 'Tugs: A Bigg Retrospective',
          videoUrl: 'data/OttawaFilmAward/movies/tug-a-big.mp4'
        }
      },
      {
        id: 'best-music-video',
        name: 'BEST MUSIC VIDEO',
        winner: {
          title: 'Strolling Down Brighton Pier',
          videoUrl: 'data/OttawaFilmAward/movies/strolling-down-brighton-pier.mp4'
        }
      },
      {
        id: 'best-cinematography',
        name: 'BEST CINEMATOGRAPHY',
        winner: {
          title: 'One Last Show In Taghmon',
          videoUrl: 'data/OttawaFilmAward/movies/one-last-show-in-taghmon.mp4'
        }
      },
      {
        id: 'best-lgbtq',
        name: 'BEST LGBTQ',
        winner: {
          title: 'Be My Ally',
          videoUrl: 'data/OttawaFilmAward/movies/be-my-ally.mp4'
        }
      },
      {
        id: 'best-thriller',
        name: 'BEST THRILLER',
        winner: {
          title: 'The List',
          videoUrl: 'data/OttawaFilmAward/movies/the-list.mp4'
        }
      },
      {
        id: 'best-sci-fi',
        name: 'BEST SCI-FI',
        winner: {
          title: 'Afterlight',
          videoUrl: 'data/OttawaFilmAward/movies/afterlight.mp4'
        }
      },
      {
        id: 'best-drama',
        name: 'BEST DRAMA',
        winner: {
          title: 'I Will Never Forget You',
          videoUrl: 'data/OttawaFilmAward/movies/iwnfy.mp4'
        }
      }
    ]
  },
  {
    id: 'framesofnewyork',
    name: 'Frames of New York',
    description: 'Celebrating the art of cinema through diverse storytelling.',
    location: 'New York, USA',
    year: 2025,
    status: 'active',
    logo: 'data/FramesOfNewYork/logo.jpg',
    dutyDate: 'Season 3: November 14, 2025',
    validTickets: ['F-2025-C1', 'F-2025-C2', 'f'],
    categories: [
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'Ponderation',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-director',
        name: 'Best Short Director',
        winner: {
          title: 'Hen Mama and the Forest Wolves',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-actress',
        name: 'Best Short Actress',
        winner: {
          title: 'Health Matters: Pregnancy/Christina Chow',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-actor',
        name: 'Best Short Actor',
        winner: {
          title: 'Not a Love Story/Andrea Valsoano',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-script',
        name: 'Best Short Script',
        winner: {
          title: 'Babyshower',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-documentary',
        name: 'Best Short Documentary',
        winner: {
          title: 'Dreamweavers - Gidja Walker OAM',
          videoUrl: ''
        }
      },
      {
        id: 'best-short-narrative',
        name: 'Best Short Narrative',
        winner: {
          title: 'Empty Your Pockets',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-film',
        name: 'Best Feature Film',
        winner: {
          title: 'Highly Explosive',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-director',
        name: 'Best Feature Director',
        winner: {
          title: 'From the Midnight Sun to Eternity',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-actress',
        name: 'Best Feature Actress',
        winner: {
          title: 'Punch/Alina Nastase',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-script',
        name: 'Best Feature Script',
        winner: {
          title: "It's An Italian Thing! No, It's a Black Thing!",
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-documentary',
        name: 'Best Feature Documentary',
        winner: {
          title: 'No Flowers',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-narrative',
        name: 'Best Feature Narrative',
        winner: {
          title: 'From the Midnight Sun to Eternity',
          videoUrl: ''
        }
      },
      {
        id: 'best-film-about-women',
        name: 'Best Film About Women',
        winner: {
          title: 'Hollow',
          videoUrl: ''
        }
      },
      {
        id: 'best-student',
        name: 'Best Student',
        winner: {
          title: 'Iris',
          videoUrl: ''
        }
      },
      {
        id: 'best-animation',
        name: 'Best Animation',
        winner: {
          title: 'Bippy the Little Robot',
          videoUrl: ''
        }
      },
      {
        id: 'best-cinematographer',
        name: 'Best Cinematographer',
        winner: {
          title: 'Will You Find Me?',
          videoUrl: ''
        }
      },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Chance Encounter',
          videoUrl: ''
        }
      },
      {
        id: 'best-lgbtq',
        name: 'Best LGBTQ',
        winner: {
          title: 'In Hell With Ivo',
          videoUrl: ''
        }
      },
      {
        id: 'best-composer',
        name: 'Best Composer',
        winner: {
          title: 'Amazon Variations',
          videoUrl: ''
        }
      },
      {
        id: 'best-experimental',
        name: 'Best Experimental',
        winner: {
          title: 'In Viadi',
          videoUrl: ''
        }
      },
      {
        id: 'best-human-rights',
        name: 'Best Human Rights',
        winner: {
          title: 'Aeiou',
          videoUrl: ''
        }
      },
      {
        id: 'best-unproduced-script',
        name: 'Best Unproduced Script',
        winner: {
          title: 'Journey Through the Dark',
          videoUrl: ''
        }
      },
      {
        id: 'best-biographical-film',
        name: 'Best Biographical Film',
        winner: {
          title: "Don't Look Away",
          videoUrl: ''
        }
      },
      {
        id: 'best-ai',
        name: 'Best AI',
        winner: {
          title: 'Spaceborn',
          videoUrl: ''
        }
      },
      {
        id: 'best-thriller',
        name: 'Best Thriller',
        winner: {
          title: 'Diamond Dust',
          videoUrl: ''
        }
      },
      {
        id: 'best-first-time-filmmaker',
        name: 'Best First Time Filmmaker',
        winner: {
          title: 'Love Of An Icon: The Legend of Crocodile Dundee',
          videoUrl: ''
        }
      },
      {
        id: 'best-womens-rights',
        name: "Best Women's Rights",
        winner: {
          title: 'Her Name is Libertad',
          videoUrl: ''
        }
      },
      {
        id: 'best-student-director',
        name: 'Best Student Director',
        winner: {
          title: 'My Fighter',
          videoUrl: ''
        }
      }
    ]
  },
  {
    id: 'framesofnewyork-s4',
    name: 'Frames of New York',
    description: 'Celebrating the art of cinema through diverse storytelling.',
    location: 'New York, USA',
    year: 2026,
    status: 'active',
    logo: 'data/FrameOfNewyork/logo.jpg',
    dutyDate: 'Season 4: February 2026',
    validTickets: ['F-2026-S4', 'fs4'],
    categories: [
      {
        id: 'best-feature-film',
        name: 'Best Feature Film',
        winner: {
          title: 'From The Midnight Sun To Eternity',
          videoUrl: 'data/FrameOfNewyork/movies/from-the-midnight-sun-to-eternity.mp4'
        }
      },
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'Red',
          videoUrl: 'data/FrameOfNewyork/movies/red.mp4'
        }
      },
      {
        id: 'best-documentary',
        name: 'Best Documentary',
        winner: {
          title: 'We Ride Why',
          videoUrl: 'data/FrameOfNewyork/movies/we-ride-why.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'Best Animation',
        winner: {
          title: 'Butterflies',
          videoUrl: 'data/FrameOfNewyork/movies/butterflies.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'Best Experimental',
        winner: {
          title: 'Akin',
          videoUrl: 'data/FrameOfNewyork/movies/akin.mp4'
        }
      },
      {
        id: 'best-debut-film',
        name: 'Best Debut Film',
        winner: {
          title: 'The Last Letter',
          videoUrl: 'data/FrameOfNewyork/movies/the-last-letter.mp4'
        }
      },
      {
        id: 'best-student-film',
        name: 'Best Student Film',
        winner: {
          title: 'La Vie En Rose',
          videoUrl: 'data/FrameOfNewyork/movies/la-vie-en-rose.mp4'
        }
      },
      {
        id: 'best-student-directing',
        name: 'Best Student Directing',
        winner: {
          title: 'Janete',
          videoUrl: 'data/FrameOfNewyork/movies/janete.mp4'
        }
      },
      {
        id: 'best-director',
        name: 'Best Director',
        winner: {
          title: 'Perturbed',
          videoUrl: 'data/FrameOfNewyork/movies/perturbed.mp4'
        }
      },
      {
        id: 'best-woman-director',
        name: 'Best Woman Director',
        winner: {
          title: 'La Machetera',
          videoUrl: 'data/FrameOfNewyork/movies/la-machetera.mp4'
        }
      },
      {
        id: 'best-man-director',
        name: 'Best man Director',
        winner: {
          title: 'Bus No. 9',
          videoUrl: 'data/FrameOfNewyork/movies/bus-no-9.mp4'
        }
      },
      {
        id: 'best-first-time-filmmaking',
        name: 'Best First Time Filmmaking',
        winner: {
          title: 'Out In The West',
          videoUrl: 'data/FrameOfNewyork/movies/out-in-the-west.mp4'
        }
      },
      // {
      //   id: 'best-cinematography',
      //   name: 'Best Cinematography',
      //   winner: {
      //     title: 'Lana Dee',
      //     videoUrl: 'data/FrameOfNewyork/movies/lana-dee.mp4'
      //   }
      // },
      {
        id: 'best-international-film',
        name: 'Best International Film',
        winner: {
          title: 'Doggerland: The Dead & The Lonely',
          videoUrl: 'data/FrameOfNewyork/movies/doggerland-the-dead-the-lonely.mp4'
        }
      },
      // {
      //   id: 'best-american-film',
      //   name: 'Best American Film',
      //   winner: {
      //     title: 'Mama Vlada',
      //     videoUrl: 'data/FrameOfNewyork/movies/mama-vlada.mp4'
      //   }
      // },
      {
        id: 'best-actor',
        name: 'Best Actor',
        winner: {
          title: 'Not A Love Story/Andrea Valsoano',
          videoUrl: 'data/FrameOfNewyork/movies/not-a-love-story.mp4'
        }
      },
      // {
      //   id: 'best-actress',
      //   name: 'Best Actress',
      //   winner: {
      //     title: 'Unexpected Visitor/Ava De Winter',
      //     videoUrl: 'data/FrameOfNewyork/movies/unexpected-visitor.mp4'
      //   }
      // },
      {
        id: 'best-ensemble-cast',
        name: 'Best Ensemble Cast',
        winner: {
          title: 'The Monk Sisters',
          videoUrl: 'data/FrameOfNewyork/movies/the-monk-sisters.mp4'
        }
      },
      {
        id: 'best-lgbtq',
        name: 'Best LGBTQ',
        winner: {
          title: 'The G.O.A.T. - Greatest Of All Trans',
          videoUrl: 'data/FrameOfNewyork/movies/the-goat-greatest-of-all-trans.mp4'
        }
      },
      {
        id: 'best-comedy',
        name: 'Best Comedy',
        winner: {
          title: 'The Pause',
          videoUrl: 'data/FrameOfNewyork/movies/the-pause.mp4'
        }
      },
      {
        id: 'best-horror',
        name: 'Best Horror',
        winner: {
          title: 'To Keep Her',
          videoUrl: 'data/FrameOfNewyork/movies/to-keep-her.mp4'
        }
      },
      {
        id: 'best-science-fiction',
        name: 'Best Science Fiction',
        winner: {
          title: 'Pathos',
          videoUrl: 'data/FrameOfNewyork/movies/pathos.mp4'
        }
      },
      {
        id: 'best-thriller',
        name: 'Best Thriller',
        winner: {
          title: 'The List',
          videoUrl: 'data/FrameOfNewyork/movies/the-list.mp4'
        }
      },
      {
        id: 'best-ai',
        name: 'Best AI',
        winner: {
          title: 'A Nest In My Heart',
          videoUrl: 'data/FrameOfNewyork/movies/a-nest-in-my-heart.mp4'
        }
      },
      {
        id: 'best-women-empowerment',
        name: 'Best Women Empowerment',
        winner: {
          title: 'Norseman - Human Endurance',
          videoUrl: 'data/FrameOfNewyork/movies/norseman-human-endurance.mp4'
        }
      },
      {
        id: 'best-music-video',
        name: 'Best Music Video',
        winner: {
          title: 'The Cabinet',
          videoUrl: 'data/FrameOfNewyork/movies/the_cabinet.mp4'
        }
      },
      // {
      //   id: 'best-micro',
      //   name: 'Best Micro',
      //   winner: {
      //     title: 'Keith Haring And The Mystery Mural',
      //     videoUrl: 'data/FrameOfNewyork/movies/keith-haring-and-the-mystery-mural.mp4'
      //   }
      // },
      {
        id: 'best-drama',
        name: 'Best Drama',
        winner: {
          title: 'Bowl',
          videoUrl: 'data/FrameOfNewyork/movies/bowl.mp4'
        }
      },
      {
        id: 'best-trailer',
        name: 'Best Trailer',
        winner: {
          title: 'One Last Chance',
          videoUrl: 'data/FrameOfNewyork/movies/one-last-chance.mp4'
        }
      },
      {
        id: 'best-editing',
        name: 'Best Editing',
        winner: {
          title: 'Cinema Of Horror 2',
          videoUrl: 'data/FrameOfNewyork/movies/cinema-of-horror-2.mp4'
        }
      },
      {
        id: 'best-original-score',
        name: 'Best Original Score',
        winner: {
          title: 'Strolling Down Brighton Pier',
          videoUrl: 'data/FrameOfNewyork/movies/strolling-down-brighton-pier.mp4'
        }
      },
      {
        id: 'best-soundtrack',
        name: 'Best Soundtrack',
        winner: {
          title: 'Birth Metal',
          videoUrl: 'data/FrameOfNewyork/movies/birth-metal.mp4'
        }
      },
      {
        id: 'best-musical-dance',
        name: 'Best Musical/Dance',
        winner: {
          title: 'The Dust Of This Place',
          videoUrl: 'data/FrameOfNewyork/movies/the-dust-of-this-place.mp4'
        }
      },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Waterfront Memories',
          videoUrl: 'data/FrameOfNewyork/movies/waterfront-memories.mp4'
        }
      },
      {
        id: 'best-poster',
        name: 'Best Poster',
        winner: {
          title: 'No 34915',
          videoUrl: 'data/FrameOfNewyork/movies/no-34915.mp4'
        }
      },
      {
        id: 'best-low-budget',
        name: 'Best Low Budget',
        winner: {
          title: 'Fangs',
          videoUrl: 'data/FrameOfNewyork/movies/fangs.mp4'
        }
      },
      // {
      //   id: 'best-fantasy',
      //   name: 'Best Fantasy',
      //   winner: {
      //     title: 'The Dress',
      //     videoUrl: 'data/FrameOfNewyork/movies/the-dress.mp4'
      //   }
      // },
      {
        id: 'best-indie-film',
        name: 'Best Indie Film',
        winner: {
          title: 'Maxwell',
          videoUrl: 'data/FrameOfNewyork/movies/maxwell.mp4'
        }
      },
      {
        id: 'best-web-series',
        name: 'Best Web Series',
        winner: {
          title: 'Growing Up Guide Pup',
          videoUrl: 'data/FrameOfNewyork/movies/growing-up-guide-pup.mp4'
        }
      },
      {
        id: 'best-narrative-film',
        name: 'Best Narrative Film',
        winner: {
          title: 'Moments From Motherhood',
          videoUrl: 'data/FrameOfNewyork/movies/moments-from-motherhood.mp4'
        }
      }
    ]
  }
]; 

// Function to validate ticket and return festival
window.validateTicket = function(ticketCode) {
  const upperTicket = ticketCode.toUpperCase().trim();
  return festivalsData.find(festival => 
    Array.isArray(festival.validTickets) && festival.validTickets.includes(upperTicket)
  );
};

function showNotification(message = 'Invalid ticket code. Please try again.') {
  ticketNotification.textContent = message;
  ticketNotification.classList.add('show');
  setTimeout(() => {
    ticketNotification.classList.remove('show');
  }, 3000);
} 