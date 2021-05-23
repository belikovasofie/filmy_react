import arrayShuffle from 'array-shuffle';
import React, { useState } from 'react';
import { render } from 'react-dom';
import FilmResults from './components/FilmResults';
import GenrePicker from './components/GenrePicker';
import { sendRequest } from './lib/apiService';
import './style.css';

const App = () => {
  const [result, setResult] = useState(null);

  const fetchFilms = (genreGroup) => {
    const genreIds = genreGroup.genreIds.join();

    sendRequest('discover/movie', {
      with_genres: genreIds,
    }).then((data) => {
      const pageCount = data.total_pages;
      const page = Math.floor(Math.random() * pageCount + 1);

      sendRequest('discover/movie', {
        with_genres: genreIds,
        page,
      }).then((data) => {
        const films = arrayShuffle(data.results).slice(0, 10);
        setResult(films);
      });
    });
  };

  if (result === null) {
    return <GenrePicker onSubmit={fetchFilms} />;
  }

  return (
    <div>
      <FilmResults data={result} />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
