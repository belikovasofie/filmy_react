import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../lib/apiService';
const getGenresTexts = (genres) => {
  return genres.map((genre) => genre.name).toString();
};
import './style.css';

const getCountry = (production_companies) => {
  return production_companies.map((countr) => countr.origin_country).toString();
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
          <div>Genre: {info.genres && getGenresTexts(info.genres)}</div>
          <div>Tagline: {info.tagline}</div>
          <div>
            Country:{' '}
            {info.production_companies &&
              getCountry(info.production_companies) + ', '}
          </div>
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
