import React from 'react';
import FilmDetail from '../FilmDetail';
import FilmGroup from '../FilmGroup';
import './style.css';

const FilmResults = ({ data }) => {
  return (
    <div className="results">
      <div className="results__detail">
        <FilmDetail data={data[0]} />
      </div>
      <div className="results__group">
        <FilmGroup data={data.slice(1)} />
      </div>
    </div>
  );
};

export default FilmResults;
