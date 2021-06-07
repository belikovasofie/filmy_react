import arrayShuffle from 'array-shuffle';
import React, { useEffect, useState } from 'react';

import FilmDetail from '../../components/FilmDetail';
import FilmGroup from '../../components/FilmGroup';
import Loader from '../../components/Loader';

import { sendRequest } from '../../lib/apiService';

import './style.css';

const RESULT_COUNT = 10;

const TrendingMovies = () => {
  const [results, setResults] = useState(null);
  const [selectedFilm, setSelectedFilm] = useState();

  const fetchFilms = () => {
    sendRequest('/trending/movie/week').then((data) => {
      const films = data.results.slice(0, RESULT_COUNT);

      setResults(films);
      setSelectedFilm(films[0]);
    });
  };

  useEffect(fetchFilms, []);

  if (results === null) {
    return <Loader fixed />;
  }
  const handleClick = (film) => {
    setSelectedFilm(film);
    window.scrollTo({ top: 0, left: 0 });
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

export default TrendingMovies;
