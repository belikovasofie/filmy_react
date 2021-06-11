import arrayShuffle from 'array-shuffle';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

import FilmDetail from '../../components/FilmDetail';
import FilmGroup from '../../components/FilmGroup';
import Loader from '../../components/Loader';
import { sendRequest } from '../../lib/apiService';

import './style.css';

const parseRating = (searchString) => {
  if (!searchString) return null;
  return searchString.replace('?rating=', '');
};

const RESULT_COUNT = 10;

const QuizResults = () => {
  const [results, setResults] = useState(null);
  const { genre } = useParams();
  const { search } = useLocation();
  const genreNumber = Number(genre);
  const [selectedFilm, setSelectedFilm] = useState();

  const rating = parseRating(search);

  const requestOptions = {
    with_genres: genreNumber,
    'vote_average.gte': rating,
    include_adult: 0,
  };

  if (rating >= 6.5) {
    requestOptions['vote_count.gte'] = 2;
  }

  if (rating >= 8) {
    requestOptions['vote_count.gte'] = 5;
  }

  const fetchFilms = () => {
    sendRequest('discover/movie', requestOptions).then((data) => {
      const pageCount = data.total_pages;
      const page = Math.floor(Math.random() * pageCount + 1);

      sendRequest('discover/movie', {
        ...requestOptions,
        page,
      }).then((data) => {
        const films = arrayShuffle(data.results);

        setResults(films);
        setSelectedFilm(films[0]);
      });
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
    <>
      <div className="results">
        <div className="results__detail">
          {selectedFilm && <FilmDetail data={selectedFilm} />}
        </div>
        <div className="results__group">
          <FilmGroup handleClick={handleClick} data={results.slice(1)} />
          <button className="btn btn-center" onClick={() => fetchFilms()}>
            Další filmy
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizResults;
