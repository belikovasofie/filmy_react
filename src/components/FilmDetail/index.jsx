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
        <h1>{info.title}</h1>
      </div>
      <div className="filmDetail__item">
        <img
          src={
            info.poster_path
              ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
              : require('../../img/movie_placeholder.png').default
          }
        />
        <div>
          {info.title}
          {info.release_date && ` (${info.release_date.slice(0, 4)})`}
          {info.vote_average}
          {info.genres && getGenresTexts(info.genres)}
          {info.tagline + ' - '}
          {info.production_companies &&
            getCountry(info.production_companies) + ', '}
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
