const genreGroups = [
  {
    id: 1,
    name: 'actionAdventure',
    image: [
      'assets/groups/adventure/adventure.jpg',
      'assets/groups/adventure/adventure1.webp',
      'assets/groups/adventure/adventure2.webp',
      'assets/groups/adventure/adventure3.webp',
      'assets/groups/adventure/adventure4.webp',
      'assets/groups/adventure/adventure5.webp',
      'assets/groups/adventure/adventure6.webp',
      'assets/groups/adventure/adventure7.jpeg',
    ],
    genreIds: [
      {
        id: 28,
        name: 'action',
        image: [
          'assets/adventure/adventure.jpg',
          'assets/adventure/adventure1.webp',
          'assets/adventure/adventure2.webp',
        ],
      },

      {
        id: 12,
        name: 'adventure',
        image: [
          'assets/adventure/adventure3.webp',
          'assets/adventure/adventure4.webp',
          'assets/adventure/adventure5.webp',
          'assets/adventure/adventure6.webp',
          'assets/adventure/adventure7.jpeg',
        ],
      },
    ],
  },

  {
    id: 2,
    name: 'relax',
    image: [
      'assets/groups/relax/relax1.jpeg',
      'assets/groups/relax/relax2.jpeg',
      'assets/groups/relax/relax3.jpeg',
      'assets/groups/relax/relax4.jpg',
      'assets/groups/relax/relax5.jpeg',
      'assets/groups/relax/relax6.jpeg',
      'assets/groups/relax/relax7.jpeg',
      'assets/groups/relax/relax8.webp',
      'assets/groups/relax/relax9.jpeg',
      'assets/groups/relax/relax10.jpeg',
      'assets/groups/relax/relax11.jpeg',
      'assets/groups/relax/relax12.jpeg',
      'assets/groups/relax/relax13.jpeg',
      'assets/groups/relax/relax14.jpeg',
      'assets/groups/relax/relax15.jpg',
    ],
    genreIds: [
      {
        id: 35,
        name: 'relax',

        image: [
          'assets/relax/relax1.jpeg',
          'assets/relax/relax2.jpeg',
          'assets/relax/relax3.jpeg',
        ],
      },
      ,
      {
        id: 10751,
        name: 'romance',
        image: [
          'assets/relax/relax4.jpg',
          'assets/relax/relax5.jpeg',
          'assets/relax/relax6.jpeg',
          'assets/relax/relax7.jpeg',
          'assets/relax/relax8.webp',
        ],
      },
      {
        id: 10749,
        name: 'family',
        image: [
          'assets/relax/relax9.jpeg',
          'assets/relax/relax10.jpeg',
          'assets/relax/relax11.jpeg',
          'assets/relax/relax12.jpeg',
          'assets/relax/relax13.jpeg',
          'assets/relax/relax14.jpeg',
          'assets/relax/relax15.jpg',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'detective',
    image: [
      'assets/groups/detective/detective1.jpeg',
      'assets/groups/detective/detective2.webp',
      'assets/groups/detective/detective3.webp',
      'assets/groups/detective/detective4.jpeg',
      'assets/groups/detective/detective5.webp',
      'assets/groups/detective/detective6.webp',
      'assets/groups/detective/detective7.webp',
      'assets/groups/detective/detective8.webp',
      'assets/groups/detective/detective9.webp',
      'assets/groups/detective/detective10.webp',
      'assets/groups/detective/detective11.jpg',
    ],
    genreIds: [
      {
        id: 80,
        name: 'crime',
        image: [
          'assets/detective/detective1.jpeg',
          'assets/detective/detective2.webp',
          'assets/detective/detective3.webp',
          'assets/detective/detective4.jpeg',
        ],
      },
      {
        id: 18,
        name: 'drama',
        image: [
          'assets/detective/detective5.webp',
          'assets/detective/detective6.webp',
          'assets/detective/detective7.webp',
          'assets/detective/detective8.webp',
        ],
      },
      {
        id: 9648,
        name: 'mystery',
        image: [
          'assets/detective/detective8.webp',
          'assets/detective/detective9.webp',
          'assets/detective/detective10.webp',
          'assets/detective/detective11.jpg',
        ],
      },
    ],
  },

  {
    id: 4,
    name: 'military',
    image: [
      'assets/groups/military/military1.jpeg',
      'assets/groups/military/military2.jpeg',
      'assets/groups/military/military3.jpeg',
      'assets/groups/military/military4.jpeg',
      'assets/groups/military/military5.jpeg',
      'assets/groups/military/military6.jpg',
    ],
    genreIds: [
      {
        id: 36,
        name: 'war',
        image: [
          'assets/military/military1.jpeg',
          'assets/military/military2.jpeg',
        ],
      },
      {
        id: 10752,
        name: 'western',
        image: [
          'assets/military/military3.jpeg',
          'assets/military/military4.jpeg',
        ],
      },
      {
        id: 37,
        name: 'history',
        image: [
          'assets/military/military5.jpeg',
          'assets/military/military6.jpg',
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'scifiFantasy',
    image: [
      'assets/groups/scifi/scifi1.webp',
      'assets/groups/scifi/scifi2.webp',
      'assets/groups/scifi/scifi4.jpeg',
      'assets/groups/scifi/scifi5.jpeg',
      'assets/groups/scifi/scifi6.jpeg',
      'assets/groups/scifi/scifi7.jpeg',
      'assets/groups/scifi/scifi8.jpeg',
      'assets/groups/scifi/scifi9.webp',
      'assets/groups/scifi/scifi10.webp',
      'assets/groups/scifi/scifi11.jpg',
    ],
    genreIds: [
      {
        id: 14,
        name: 'Science Fiction',
        image: [
          'assets/scifi/scifi1.webp',
          'assets/scifi/scifi2.webp',
          'assets/scifi/scifi4.jpeg',
          'assets/scifi/scifi5.jpeg',
          'assets/scifi/scifi6.jpeg',
        ],
      },
      {
        id: 878,
        name: 'Fantasy',
        image: [
          'assets/scifi/scifi9.webp',
          'assets/scifi/scifi10.webp',
          'assets/scifi/scifi11.jpg',
        ],
      },
    ],
  },

  {
    id: 6,
    name: 'thrilling',

    image: [
      'assets/groups/horror/horror1.jpeg',
      'assets/groups/horror/horror2.jpeg',
      'assets/groups/horror/horror3.jpeg',
      'assets/groups/horror/horror4.jpg',
      'assets/groups/horror/horror5.jpeg',
      'assets/groups/horror/horror6.jpg',
      'assets/groups/horror/horror7.jpeg',
      'assets/groups/horror/horror8.jpeg',
    ],

    genreIds: [
      {
        id: 27,
        name: 'horror',
        image: [
          'assets/horror/horror1.jpeg',
          'assets/horror/horror2.jpeg',
          'assets/horror/horror3.jpeg',
          'assets/horror/horror4.jpg',
        ],
      },
      {
        id: 53,
        name: 'thriller',
        image: [
          'assets/horror/horror6.jpg',
          'assets/horror/horror7.jpeg',
          'assets/horror/horror8.jpeg',
        ],
      },
    ],
  },
];

export default genreGroups;
