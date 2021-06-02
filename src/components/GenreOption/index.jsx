import React, { useEffect, useState } from 'react';
import { getRandomArrayElement } from '../../lib/helpers';

import './style.css';

const GenreOption = ({ genre, isSelected, onSelect }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(getRandomArrayElement(genre.image));
  }, [genre]);

  return (
    <div className="option">
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(genre)}
        />
        <img src={image} alt="" draggable={false} />
      </label>
    </div>
  );
};
export default GenreOption;
