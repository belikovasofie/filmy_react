import React from 'react';

const FilmDetail = ({ data }) => {
  return (
    <div>
      <h2>
        {data.title} ({data.release_date.slice(0, 4)})
      </h2>
      {data.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
      )}
      <p>{data.overview}</p>
    </div>
  );
};
export default FilmDetail;
