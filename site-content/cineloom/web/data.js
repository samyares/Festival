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
      // {
      //   id: 'best-short-director',
      //   name: 'Best Short Director',
      //   winner: {
      //     title: 'Heavenly Bodies',
      //     videoUrl: 'data/CaliforniaWomenFilmFestival/movies/heavenly-bodies.mp4'
      //   }
      // },
      {
        id: 'best-short-actress',
        name: 'Best Short Actress',
        winner: {
          title: 'A-MORS / Eleonora Gasparotto',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/a-mors.mp4'
        }
      },
      {
        id: 'best-short-actor',
        name: 'Best Short Actor',
        winner: {
          title: 'Place of Hawks / Nate Sapriken',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/place-of-hawks.mp4'
        }
      },
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
      {
        id: 'best-cinematographer',
        name: 'Best Cinematographer',
        winner: {
          title: 'Place of Hawks',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/place-of-hawks.mp4'
        }
      },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Aneyshia',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/aneyshia.mp4'
        }
      },
      {
        id: 'best-composer',
        name: 'Best Composer',
        winner: {
          title: 'Achaiah 7-Love Into Patience',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/achaiah-7-love-into-patience.mp4'
        }
      },
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