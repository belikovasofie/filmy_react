import React, { useEffect, useState } from 'react';
import { sendRequest } from '../../lib/apiService';

const FilmDetail = ({ data }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    sendRequest(`movie/${data.id}`).then((data) => setInfo(data));
  }, []);

  console.log(info);

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
      {info && (
        <p>
          <a href={`http://imdb.com/title/${info.imdb_id}`}>IMDb</a>
        </p>
      )}
    </div>
  );
};
export default FilmDetail;
