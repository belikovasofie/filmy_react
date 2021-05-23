import React from 'react';
import genreGroups from '../../data/genres';
import GenreOption from '../GenreOption';
import './style.css';

const GenrePicker = () => {
  return (
    <div className="genre-picker">
      <h2>Vyber obrázek:</h2>
      <div className="genre-picker__main">
        {genreGroups.map((group) => (
          <GenreOption genre={group} />
        ))}
      </div>
    </div>
  );
};

export default GenrePicker;
