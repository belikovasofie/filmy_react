import React from 'react';
import './style.css';
const GenreOption = ({ genre }) => {
  return (
    <div className="option">
      <label>
        <input type="checkbox" />
        <img src={genre.image} alt="" draggable={false} />
      </label>
    </div>
  );
};
export default GenreOption;
