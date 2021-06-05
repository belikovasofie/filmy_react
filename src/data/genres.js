const genreGroups = [
  {
    id: 1,
    name: 'actionAdventure',
    image: [
      require('../img/adventure/adventure.jpg').default,
      require('../img/adventure/adventure1.webp').default,
      require('../img/adventure/adventure2.webp').default,
      require('../img/adventure/adventure3.webp').default,
      require('../img/adventure/adventure4.webp').default,
      require('../img/adventure/adventure5.webp').default,
      require('../img/adventure/adventure6.webp').default,
      require('../img/adventure/adventure7.jpeg').default,
    ],
    genreIds: [
      {
        id: 28,
        name: 'action',
        image: [
          require('../img/adventure/adventure.jpg').default,
          require('../img/adventure/adventure1.webp').default,
          require('../img/adventure/adventure2.webp').default,
        ],
      },

      {
        id: 12,
        name: 'adventure',
        image: [
          require('../img/adventure/adventure3.webp').default,
          require('../img/adventure/adventure4.webp').default,
          require('../img/adventure/adventure5.webp').default,
          require('../img/adventure/adventure6.webp').default,
          require('../img/adventure/adventure7.jpeg').default,
        ],
      },
    ],
  },

  {
    id: 2,
    name: 'relax',
    image: [
      require('../img/relax/relax1.jpeg').default,
      require('../img/relax/relax2.jpeg').default,
      require('../img/relax/relax3.jpeg').default,
      require('../img/relax/relax4.jpg').default,
      require('../img/relax/relax5.jpeg').default,
      require('../img/relax/relax6.jpeg').default,
      require('../img/relax/relax7.jpeg').default,
      require('../img/relax/relax8.webp').default,
      require('../img/relax/relax9.jpeg').default,
      require('../img/relax/relax10.jpeg').default,
      require('../img/relax/relax11.jpeg').default,
      require('../img/relax/relax12.jpeg').default,
      require('../img/relax/relax13.jpeg').default,
      require('../img/relax/relax14.jpeg').default,
      require('../img/relax/relax15.jpg').default,
    ],
    genreIds: [
      {
        id: 35,
        name: 'relax',

        image: [
          require('../img/relax/relax1.jpeg').default,
          require('../img/relax/relax2.jpeg').default,
          require('../img/relax/relax3.jpeg').default,
        ],
      },
      ,
      {
        id: 10751,
        name: 'romance',
        image: [
          require('../img/relax/relax4.jpg').default,
          require('../img/relax/relax5.jpeg').default,
          require('../img/relax/relax6.jpeg').default,
          require('../img/relax/relax7.jpeg').default,
          require('../img/relax/relax8.webp').default,
        ],
      },
      {
        id: 10749,
        name: 'family',
        image: [
          require('../img/relax/relax9.jpeg').default,
          require('../img/relax/relax10.jpeg').default,
          require('../img/relax/relax11.jpeg').default,
          require('../img/relax/relax12.jpeg').default,
          require('../img/relax/relax13.jpeg').default,
          require('../img/relax/relax14.jpeg').default,
          require('../img/relax/relax15.jpg').default,
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'detective',
    image: [
      require('../img/detective/detective1.jpeg').default,
      require('../img/detective/detective2.webp').default,
      require('../img/detective/detective3.webp').default,
      require('../img/detective/detective4.jpeg').default,
      require('../img/detective/detective5.webp').default,
      require('../img/detective/detective6.webp').default,
      require('../img/detective/detective7.webp').default,
      require('../img/detective/detective8.webp').default,
      require('../img/detective/detective9.webp').default,
      require('../img/detective/detective10.webp').default,
      require('../img/detective/detective11.jpg').default,
    ],
    genreIds: [
      {
        id: 80,
        name: 'crime',
        image: [
          require('../img/detective/detective1.jpeg').default,
          require('../img/detective/detective2.webp').default,
          require('../img/detective/detective3.webp').default,
          require('../img/detective/detective4.jpeg').default,
        ],
      },
      {
        id: 18,
        name: 'drama',
        image: [
          require('../img/detective/detective5.webp').default,
          require('../img/detective/detective6.webp').default,
          require('../img/detective/detective7.webp').default,
          require('../img/detective/detective8.webp').default,
        ],
      },
      {
        id: 9648,
        name: 'mystery',
        image: [
          require('../img/detective/detective8.webp').default,
          require('../img/detective/detective9.webp').default,
          require('../img/detective/detective10.webp').default,
          require('../img/detective/detective11.jpg').default,
        ],
      },
    ],
  },

  {
    id: 4,
    name: 'military',
    image: [
      require('../img/military/military1.jpeg').default,
      require('../img/military/military2.jpeg').default,
      require('../img/military/military3.jpeg').default,
      require('../img/military/military4.jpeg').default,
      require('../img/military/military5.jpeg').default,
      require('../img/military/military6.jpg').default,
    ],
    genreIds: [
      {
        id: 36,
        name: 'war',
        image: [
          require('../img/military/military1.jpeg').default,
          require('../img/military/military2.jpeg').default,
        ],
      },
      {
        id: 10752,
        name: 'western',
        image: [
          require('../img/military/military3.jpeg').default,
          require('../img/military/military4.jpeg').default,
        ],
      },
      {
        id: 37,
        name: 'history',
        image: [
          require('../img/military/military5.jpeg').default,
          require('../img/military/military6.jpg').default,
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'scifiFantasy',
    image: [
      require('../img/scifi/scifi1.webp').default,
      require('../img/scifi/scifi2.webp').default,
      require('../img/scifi/scifi4.jpeg').default,
      require('../img/scifi/scifi5.jpeg').default,
      require('../img/scifi/scifi6.jpeg').default,
      require('../img/scifi/scifi7.jpeg').default,
      require('../img/scifi/scifi8.jpeg').default,
      require('../img/scifi/scifi9.webp').default,
      require('../img/scifi/scifi10.webp').default,
      require('../img/scifi/scifi11.jpg').default,
    ],
    genreIds: [
      {
        id: 14,
        name: 'Science Fiction',
        image: [
          require('../img/scifi/scifi1.webp').default,
          require('../img/scifi/scifi2.webp').default,
          require('../img/scifi/scifi4.jpeg').default,
          require('../img/scifi/scifi5.jpeg').default,
          require('../img/scifi/scifi6.jpeg').default,
        ],
      },
      {
        id: 878,
        name: 'Fantasy',
        image: [
          require('../img/scifi/scifi9.webp').default,
          require('../img/scifi/scifi10.webp').default,
          require('../img/scifi/scifi11.jpg').default,
        ],
      },
    ],
  },

  {
    id: 6,
    name: 'thrilling',

    image: [
      require('../img/horror/horror1.jpeg').default,
      require('../img/horror/horror2.jpeg').default,
      require('../img/horror/horror3.jpeg').default,
      require('../img/horror/horror4.jpg').default,
      require('../img/horror/horror5.jpeg').default,
      require('../img/horror/horror6.jpg').default,
      require('../img/horror/horror7.jpeg').default,
      require('../img/horror/horror8.jpeg').default,
    ],

    genreIds: [
      {
        id: 27,
        name: 'horror',
        image: [
          require('../img/horror/horror1.jpeg').default,
          require('../img/horror/horror2.jpeg').default,
          require('../img/horror/horror3.jpeg').default,
          require('../img/horror/horror4.jpg').default,
        ],
      },
      {
        id: 53,
        name: 'thriller',
        image: [
          require('../img/horror/horror6.jpg').default,
          require('../img/horror/horror7.jpeg').default,
          require('../img/horror/horror8.jpeg').default,
        ],
      },
    ],
  },
];

export default genreGroups;
