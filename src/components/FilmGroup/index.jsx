import React from 'react';
import './style.css';

const FilmGroup = ({ data }) => {
  return (
    <div>
      {data.map((film) => (
        <div className="film-group" key={film.id}>
          <img
            className="film-group__image"
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w92${film.poster_path}`
                : '/img/movie_placeholder.png'
            }
          />
          <h3>
            {film.title} ({film.release_date.slice(0, 4)})
          </h3>
        </div>
      ))}
    </div>
  );
};
export default FilmGroup;
