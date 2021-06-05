import React, { useState } from 'react';
import genreGroups from '../../data/genres';
import GenrePicker from '../GenrePicker';
import Slider from '../Slider';
import './style.css';

const Test = ({ onSubmit }) => {
  const [currentGenres, setCurrenGenres] = useState(genreGroups);
  const [genrePicked, setGenrePicked] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderValue, setSliderValue] = useState(null);

  const onSliderValChange = (value) => {
    console.log(value);
    setSliderValue(value);
  };

  const onSelect = (group) => {
    setGenrePicked(group.id);

    if (group.genreIds) {
      setTimeout(() => {
        setCurrenGenres(group.genreIds);
        setShowButton(true);
        setShowSlider(true);
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
      {showSlider && (
        <Slider
          onSliderValChange={onSliderValChange}
          min={1}
          minText="pohoda"
          max={9}
          maxText="nejlepší"
          value={5}
        />
      )}
      {showButton && (
        <button
          onClick={() => onSubmit(genrePicked, sliderValue)}
          disabled={[1, 2, 3, 4, 5, 6].includes(genrePicked)}
        >
          Odeslat
        </button>
      )}
    </div>
  );
};
export default Test;
