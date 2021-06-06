import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../lib/apiService';
const getGenresTexts = (genres) => {
  return genres.map((genre) => genre.name).toString();
};

<<<<<<< HEAD
const getOriginCountry = (production_companies) => {
  return production_companies.map((company) =>
    company.origin_country.toString(),
  );
};
=======
const getCountry = (production_companies) => {
  return production_companies.map((countr) => countr.origin_country).toString();
};

>>>>>>> 8ca0b49bbfa59a73a9d6945e4213dcd71e080ab0
const FilmDetail = ({ data }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    sendRequest(`movie/${data.id}`).then((data) => setInfo(data));
  }, [data]);
  if (!info) return null;

  return (
    <div>
      <h2>
        {info.title}
        {info.release_date && ` (${info.release_date.slice(0, 4)})`}
        {info.vote_average}
        {info.genres && getGenresTexts(info.genres)}
<<<<<<< HEAD
        {info.tagline}
        {info.production_companies &&
          getOriginCountry(info.production_companies)}
=======
        {info.tagline + ' - '}

        {info.production_companies &&
          getCountry(info.production_companies) + ', '}
>>>>>>> 8ca0b49bbfa59a73a9d6945e4213dcd71e080ab0
      </h2>

      <img
        src={
          info.poster_path
            ? `https://image.tmdb.org/t/p/w500${info.poster_path}`
            : require('../../img/movie_placeholder.png').default
        }
      />
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
