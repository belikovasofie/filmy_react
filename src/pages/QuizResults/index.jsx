import arrayShuffle from 'array-shuffle';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import FilmDetail from '../../components/FilmDetail';
import FilmGroup from '../../components/FilmGroup';
import Loader from '../../components/Loader';
import genreGroups from '../../data/genres';
import { sendRequest } from '../../lib/apiService';

import './style.css';

const RESULT_COUNT = 10;

const QuizResults = () => {
  const [results, setResults] = useState(null);
  const { genre } = useParams();
  const genreNumber = Number(genre);
  const [selectedFilm, setSelectedFilm] = useState();

  const fetchFilms = () => {
    // const genreGroup = genreGroups.find((group) => group.id === genreNumber);
    // const genreIds = genreGroup.genreIds.map((g) => g.id).join('|');

    sendRequest('discover/movie', {
      with_genres: genreNumber,
    }).then((data) => {
      const pageCount = data.total_pages;
      const page = Math.floor(Math.random() * pageCount + 1);

      sendRequest('discover/movie', {
        with_genres: genreNumber,
        page,
      }).then((data) => {
        const films = arrayShuffle(data.results).slice(0, RESULT_COUNT);
        setResults(films);
        setSelectedFilm(films[0]);
      });
    });
  };

  useEffect(fetchFilms, []);

  if (results === null) {
    return <Loader />;
  }
  const handleClick = (film) => {
    setSelectedFilm(film);
  };
  return (
    <div className="results">
      <div className="results__detail">
        {selectedFilm && <FilmDetail data={selectedFilm} />}
      </div>
      <div className="results__group">
        <FilmGroup handleClick={handleClick} data={results.slice(1)} />
      </div>
    </div>
  );
};

export default QuizResults;
