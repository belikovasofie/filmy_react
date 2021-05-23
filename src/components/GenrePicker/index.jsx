import React, { useState } from 'react';
import genreGroups from '../../data/genres';
import GenreOption from '../GenreOption';
import './style.css';

const GenrePicker = () => {
  const [genrePicked, setGenrePicked] = useState(null);

  const onSelect = (group) => {
    setGenrePicked(group);
  };

  return (
    <div className="genre-picker">
      <h2>Vyber obrázek:</h2>
      <div className="genre-picker__main">
        {genreGroups.map((group) => (
          <GenreOption
            genre={group}
            onSelect={onSelect}
            isSelected={genrePicked === group}
          />
        ))}
      </div>
      <div>{JSON.stringify(genrePicked)}</div>
    </div>
  );
};

export default GenrePicker;
