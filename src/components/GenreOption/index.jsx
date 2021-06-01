import React from 'react';

import './style.css';

const GenreOption = ({ genre, isSelected, onSelect }) => {
  return (
    <div className="option">
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(genre)}
        />
        <img src={genre.image} alt="" draggable={false} />
      </label>
    </div>
  );
};
export default GenreOption;
