import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../lib/apiService';
import './style.css';

const getGenresTexts = (genres) => {
  return genres.map((genre) => genre.name).join(', ');
};

const getCountries = (countries) => {
  return countries.map(({ iso_3166_1, name }, index) => (
    <>
      <span title={name} key={index}>
        {iso_3166_1}
      </span>
      {index < countries.length - 1 && ', '}
    </>
  ));
};

const FilmDetail = ({ data }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    sendRequest(`movie/${data.id}`).then((data) => setInfo(data));
  }, [data]);
  if (!info) return null;

  return (
    <div className="">
      <div>
        <h2 className="film__name">{info.title}</h2>
      </div>
      <div className="filmDetail__item">
        <img
          src={
            info.poster_path
              ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
              : require('../../img/movie_placeholder.png').default
          }
        />
        <div className="FilmDetail__summary">
          <div>
            {info.title}{' '}
            {info.release_date && ` (${info.release_date.slice(0, 4)})`}
          </div>

          <div>Rating: {info.vote_average}</div>
          {info.genres.length && (
            <div>Genre: {getGenresTexts(info.genres)}</div>
          )}
          {info.tagline && <div>Tagline: {info.tagline}</div>}
          {info.production_countries && (
            <div>Country: {getCountries(info.production_countries)}</div>
          )}
        </div>
      </div>

      <p>{info.overview}</p>
      {info && (
        <p>
          <a href={`http://imdb.com/title/${info.imdb_id}`}> Odkaz na IMDb</a>
        </p>
      )}
    </div>
  );
};
export default FilmDetail;
