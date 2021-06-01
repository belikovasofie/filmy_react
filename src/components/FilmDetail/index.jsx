import React from 'react';

const FilmDetail = ({ data }) => {
  return (
    <div>
      <h2>
        {data.title}
        {data.release_date && ` (${data.release_date.slice(0, 4)})`}
      </h2>
      <img
        src={
          data.poster_path
            ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
            : require('../../img/movie_placeholder.png').default
        }
      />
      <p>{data.overview}</p>
    </div>
  );
};
export default FilmDetail;
