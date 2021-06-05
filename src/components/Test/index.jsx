import React, { useState } from 'react';
import genreGroups from '../../data/genres';
import GenrePicker from '../GenrePicker';
import './style.css';

const Test = ({ onSubmit }) => {
  const [currentGenres, setCurrenGenres] = useState(genreGroups);
  const [genrePicked, setGenrePicked] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const onSelect = (group) => {
    setGenrePicked(group.id);

    if (group.genreIds) {
      setTimeout(() => {
        setCurrenGenres(group.genreIds);
        setShowButton(true);
      }, 1000);
    } else {
      setShowButton(true);
    }
  };
  return (
    <div className="genre-picker">
      <h2>Vyber obrázek:</h2>
      <div className="genre-picker__main">
        <GenrePicker
          onSelect={onSelect}
          genreGroups={currentGenres}
          genrePicked={genrePicked}
        />
      </div>
      {showButton && (
        <button
          onClick={() => onSubmit(genrePicked)}
          disabled={[1, 2, 3, 4, 5, 6].includes(genrePicked)}
        >
          Odeslat
        </button>
      )}
    </div>
  );
};
export default Test;
