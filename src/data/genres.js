const genreGroups = [
  {
    name: 'actionAdventure',
    genreIds: [28, 12],
    image: [
      require('../img/adventure.jpg').default,
      require('../img/adventure/adventure1.webp').default,
      require('../img/adventure/adventure2.webp').default,
      require('../img/adventure/adventure3.webp').default,
      require('../img/adventure/adventure4.webp').default,
      require('../img/adventure/adventure5.webp').default,
      require('../img/adventure/adventure6.webp').default,
      require('../img/adventure/adventure7.jpeg').default,
    ],
  },
  {
    name: 'relax',
    genreIds: [35, 10751, 10749],
    image: [require('../img/comedy.jpg').default],
  },
  {
    name: 'detective',
    genreIds: [80, 18, 9648],
    image: [require('../img/crime.jpg').default],
  },
  {
    name: 'military',
    genreIds: [36, 10752, 37],
    image: [require('../img/western.jpg').default],
  },
  {
    name: 'scifiFantasy',
    genreIds: [14, 878],
    image: [require('../img/scifi.jpg').default],
  },
  {
    name: 'thrilling',
    genreIds: [27, 53],
    image: [require('../img/horror.jpg').default],
  },
];

export default genreGroups;
