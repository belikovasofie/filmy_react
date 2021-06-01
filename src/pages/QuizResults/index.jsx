import arrayShuffle from 'array-shuffle';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import FilmDetail from '../../components/FilmDetail';
import FilmGroup from '../../components/FilmGroup';
import genreGroups from '../../data/genres';
import { sendRequest } from '../../lib/apiService';

import './style.css';

const RESULT_COUNT = 10;

const QuizResults = () => {
  const [results, setResults] = useState(null);
  const { genre } = useParams();

  const fetchFilms = () => {
    const genreGroup = genreGroups.find((group) => group.name === genre);
    const genreIds = genreGroup.genreIds.join('|');

    sendRequest('discover/movie', {
      with_genres: genreIds,
    }).then((data) => {
      const pageCount = data.total_pages;
      const page = Math.floor(Math.random() * pageCount + 1);

      sendRequest('discover/movie', {
        with_genres: genreIds,
        page,
      }).then((data) => {
        const films = arrayShuffle(data.results).slice(0, RESULT_COUNT);
        setResults(films);
      });
    });
  };

  useEffect(fetchFilms, []);

  if (results === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="results">
      <div className="results__detail">
        <FilmDetail data={results[0]} />
      </div>
      <div className="results__group">
        <FilmGroup data={results.slice(1)} />
      </div>
    </div>
  );
};

export default QuizResults;
