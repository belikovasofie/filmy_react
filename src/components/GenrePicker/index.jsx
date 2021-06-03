import React, { useState } from 'react';
import genreGroups from '../../data/genres';
import GenreOption from '../GenreOption';
import './style.css';

const GenrePicker = ({ onSubmit }) => {
  const [genrePicked, setGenrePicked] = useState(null);

  const onSelect = (group) => {
    setGenrePicked(group.id);
  };

  return (
    <div className="genre-picker">
      <h2>Vyber obrázek:</h2>
      <div className="genre-picker__main">
        {genreGroups.map((group) => (
          <GenreOption
            key={group.id}
            genre={group}
            onSelect={onSelect}
            isSelected={genrePicked === group.id}
          />
        ))}
      </div>
      <button onClick={() => onSubmit(genrePicked)} disabled={!genrePicked}>
        Odeslat
      </button>
    </div>
  );
};

export default GenrePicker;
