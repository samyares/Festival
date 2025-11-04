// Mock data for festivals, categories, and movies
window.festivalsData = [
  {
    id: 'californiawomenff-session2',
    name: 'California Women Film Festival',
    description: 'A bold and independent platform dedicated to showcasing the creative power, depth, and diversity of women in film.',
    location: 'California, USA',
    year: 2025,
    status: 'active',
    logo: 'data/CaliforniaWomenFilmFestival/logo.jpg',
    dutyDate: 'Session 2: November 7, 2025',
    validTickets: ['C-2025-A3', 'C-2025-A4', 'california-nov'],
    categories: [
      {
        id: 'best-short-film',
        name: 'Best Short Film',
        winner: {
          title: 'Ponderation',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/ponderation.mp4'
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
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/health-matters.mp4'
        }
      },
      {
        id: 'best-short-actor',
        name: 'Best Short Actor',
        winner: {
          title: 'Not a Love Story/Andrea Valsoano',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/not-a-love-story.mp4'
        }
      },
      {
        id: 'best-short-script',
        name: 'Best Short Script',
        winner: {
          title: 'Babyshower',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/babyshower.mp4'
        }
      },
      {
        id: 'best-short-documentary',
        name: 'Best Short Documentary',
        winner: {
          title: 'Dreamweavers - Gidja Walker OAM',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/dreamweavers.mp4'
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
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/highly-explosive.mp4'
        }
      },
      {
        id: 'best-feature-director',
        name: 'Best Feature Director',
        winner: {
          title: 'From the Midnight Sun to Eternity',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/from-the-midnight-sun-to-eternity.mp4'
        }
      },
      {
        id: 'best-feature-actress',
        name: 'Best Feature Actress',
        winner: {
          title: 'Punch/Alina Nastase',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/punch.mp4'
        }
      },
      {
        id: 'best-feature-script',
        name: 'Best Feature Script',
        winner: {
          title: 'It\'s An Italian Thing! No, It\'s a Black Thing!',
          videoUrl: ''
        }
      },
      {
        id: 'best-feature-documentary',
        name: 'Best Feature Documentary',
        winner: {
          title: 'No Flowers',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/no-flowers.mp4'
        }
      },
      {
        id: 'best-feature-narrative',
        name: 'Best Feature Narrative',
        winner: {
          title: 'From the Midnight Sun to Eternity',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/from-the-midnight-sun-to-eternity.mp4'
        }
      },
      {
        id: 'best-film-about-women',
        name: 'Best Film About Women',
        winner: {
          title: 'Hollow',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/hollow.mp4'
        }
      },
      {
        id: 'best-student',
        name: 'Best Student',
        winner: {
          title: 'Iris',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/iris.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'Best Animation',
        winner: {
          title: 'Bippy the Little Robot',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/bippy-the-little-robot.mp4'
        }
      },
      {
        id: 'best-cinematographer',
        name: 'Best Cinematographer',
        winner: {
          title: 'Will You Find Me?',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/will-you-find-me.mp4'
        }
      },
      {
        id: 'best-producer',
        name: 'Best Producer',
        winner: {
          title: 'Chance Encounter',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/chance-encounter.mp4'
        }
      },
      {
        id: 'best-lgbtq',
        name: 'Best LGBTQ',
        winner: {
          title: 'In Hell With Ivo',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/in-hell-with-ivo.mp4'
        }
      },
      {
        id: 'best-composer',
        name: 'Best Composer',
        winner: {
          title: 'Amazon Variations',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/amazon-variations.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'Best Experimental',
        winner: {
          title: 'In Viadi',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/in-viadi.mp4'
        }
      },
      {
        id: 'best-human-rights',
        name: 'Best Human Rights',
        winner: {
          title: 'Aeiou',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/aeiou.mp4'
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
          title: 'Don\'t Look Away',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/dont-look-away.mp4'
        }
      },
      {
        id: 'best-ai',
        name: 'Best Al',
        winner: {
          title: 'Spaceborn',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/spaceborn.mp4'
        }
      },
      {
        id: 'best-thriller',
        name: 'Best Thriller',
        winner: {
          title: 'Diamond Dust',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/diamond-dust.mp4'
        }
      },
      {
        id: 'best-first-time-filmmaker',
        name: 'Best First Time Filmmaker',
        winner: {
          title: 'Love Of An Icon: The Legend of Crocodile Dundee',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/love-of-an-icon.mp4'
        }
      },
      {
        id: 'best-womens-rights',
        name: 'Best Women\'s Rights',
        winner: {
          title: 'Her Name is Libertad',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/her-name-is-libertad.mp4'
        }
      },
      {
        id: 'best-student-director',
        name: 'Best Student Director',
        winner: {
          title: 'My Fighter',
          videoUrl: 'data/CaliforniaWomenFilmFestival/movies/my-fighter.mp4'
        }
      }
    ]
  },
  {
    id: 'ottawafilmaward-season5',
    name: 'Ottawa Film Award - Season 5',
    description: 'Cinema unites us through storytelling.',
    location: 'Ottawa, Canada',
    year: 2025,
    status: 'active',
    logo: 'data/OttawaFilmAward/logo.jpg',
    dutyDate: 'Season 5: October 7-8, 2025',
    validTickets: ['O-2025-S5', 'ottawa-s5'],
    categories: [
      {
        id: 'best-short-film',
        name: 'BEST SHORT FILM',
        winner: {
          title: 'Isfahani Green',
          videoUrl: 'data/OttawaFilmAward/movies/isfahani-green.mp4'
        }
      },
      {
        id: 'best-feature-film',
        name: 'BEST FEATURE FILM',
        winner: {
          title: 'Out of State-A Gothic Romance',
          videoUrl: 'data/OttawaFilmAward/movies/out-of-state-a-gothic-romance.mp4'
        }
      },
      {
        id: 'best-short-short',
        name: 'BEST SHORT SHORT',
        winner: {
          title: 'The Legend of William Boucher',
          videoUrl: 'data/OttawaFilmAward/movies/the-legend-of-william-boucher.mp4'
        }
      },
      {
        id: 'best-short-director',
        name: 'BEST SHORT DIRECTOR',
        winner: {
          title: 'Would Smith?',
          videoUrl: 'data/OttawaFilmAward/movies/would-smith.mp4'
        }
      },
      {
        id: 'best-feature-director',
        name: 'BEST FEATURE DIRECTOR',
        winner: {
          title: 'Out of State-A Gothic Romance',
          videoUrl: 'data/OttawaFilmAward/movies/out-of-state-a-gothic-romance.mp4'
        }
      },
      {
        id: 'best-short-actress',
        name: 'BEST SHORT ACTRESS',
        winner: {
          title: 'Five Consecutive Zeroes / Skye Spallone',
          videoUrl: 'data/OttawaFilmAward/movies/five-consecutive-zeroes.mp4'
        }
      },
      {
        id: 'best-short-actor',
        name: 'BEST SHORT ACTOR',
        winner: {
          title: 'Five Consecutive Zeroes / Roberto Ragone',
          videoUrl: 'data/OttawaFilmAward/movies/five-consecutive-zeroes.mp4'
        }
      },
      {
        id: 'best-international-short-narrative',
        name: 'BEST INTERNATIONAL SHORT NARRATIVE',
        winner: {
          title: 'Gamblers',
          videoUrl: 'data/OttawaFilmAward/movies/gamblers.mp4'
        }
      },
      {
        id: 'best-short-editing',
        name: 'BEST SHORT EDITING',
        winner: {
          title: 'MaiM',
          videoUrl: 'data/OttawaFilmAward/movies/maim.mp4'
        }
      },
      {
        id: 'best-documentary',
        name: 'BEST DOCUMENTARY',
        winner: {
          title: 'Design is One: Lella & Massimo Vignelli',
          videoUrl: 'data/OttawaFilmAward/movies/design-is-one-review-screener.mp4'
        }
      },
      {
        id: 'best-experimental',
        name: 'BEST EXPERIMENTAL',
        winner: {
          title: 'Indelible Winter',
          videoUrl: 'data/OttawaFilmAward/movies/indelible-winter.mp4'
        }
      },
      {
        id: 'best-animation',
        name: 'BEST ANIMATION',
        winner: {
          title: 'Out of Control',
          videoUrl: 'data/OttawaFilmAward/movies/out-of-control.mp4'
        }
      },
      {
        id: 'best-student',
        name: 'BEST STUDENT',
        winner: {
          title: 'One More Day',
          videoUrl: 'data/OttawaFilmAward/movies/one-more-day.mp4'
        }
      },
      {
        id: 'best-first-time-director',
        name: 'BEST FIRST-TIME DIRECTOR',
        winner: {
          title: 'Follow Me',
          videoUrl: 'data/OttawaFilmAward/movies/follow-me.mp4'
        }
      },
      {
        id: 'best-music-video',
        name: 'BEST MUSIC VIDEO',
        winner: {
          title: 'Arctic Polar Bear Mothers',
          videoUrl: 'data/OttawaFilmAward/movies/arctic_polar_bear_mothers.mp4'
        }
      },
      {
        id: 'best-cinematography',
        name: 'BEST CINEMATOGRAPHY',
        winner: {
          title: 'Would Smith?',
          videoUrl: 'data/OttawaFilmAward/movies/would-smith.mp4'
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
