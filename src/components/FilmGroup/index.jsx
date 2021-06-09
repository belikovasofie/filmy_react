import React from 'react';

import './style.css';

const FilmGroup = ({ data, handleClick }) => {
  return (
    <div>
      {data.map((film) => (
        <div
          onClick={() => handleClick(film)}
          className="film-group"
          key={film.id}
        >
          <div>
            <img
              className="film-group__image"
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w92${film.poster_path}`
                  : 'assets/placeholder.png'
              }
            />
          </div>
          <h3>
            {film.title}
            {film.release_date && ` (${film.release_date.slice(0, 4)})`}{' '}
            <br></br>Rating: {film.vote_average}
          </h3>
        </div>
      ))}
    </div>
  );
};
export default FilmGroup;
