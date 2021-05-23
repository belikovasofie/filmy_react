import React from 'react';
import FilmDetail from '../FilmDetail';
import './style.css';

const FilmResults = ({ data }) => {
  return (
    <div>
      <FilmDetail data={data[0]} />
      {/* <FilmGroup data={data.slice(1)} /> */}
    </div>
  );
};

export default FilmResults;
