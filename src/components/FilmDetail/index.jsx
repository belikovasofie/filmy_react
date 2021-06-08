import React, { useEffect, useState } from 'react';
import Flags from 'country-flag-icons/react/3x2';
import { sendRequest } from '../../lib/apiService';
import './style.css';
import Loader from '../Loader';

const getGenresTexts = (genres) => {
  return genres.map((genre) => genre.name).join(', ');
};

const getCountries = (countries) => {
  return countries.map(({ iso_3166_1, name }, index) => {
    const Flag = Flags[iso_3166_1];

    return (
      <div className="country" key={index}>
        {Flag ? (
          <Flag title={name} className="country__flag" />
        ) : (
          <span title={name}>{iso_3166_1}</span>
        )}
      </div>
    );
  });
};

const FilmDetail = ({ data }) => {
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    sendRequest(`movie/${data.id}`).then((data) => {
      setInfo(data);
      setIsLoading(false);
    });
  }, [data]);

  if (isLoading) return <Loader />;
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
        <div className="filmDetail__summary">
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

      <p>
        {info.overview}{' '}
        {info && (
          <a href={`http://imdb.com/title/${info.imdb_id}`}> Read more ...</a>
        )}
      </p>
    </div>
  );
};
export default FilmDetail;
