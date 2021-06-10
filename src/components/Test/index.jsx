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
  const [sliderValue, setSliderValue] = useState(6);

  const onSliderValChange = (value) => {
    setSliderValue(value);
  };

  const onSelect = (group) => {
    setGenrePicked(group.id);

    if (group.genreIds) {
      setTimeout(() => {
        setCurrenGenres(group.genreIds);
        setShowButton(true);
        setShowSlider(true);
        window.scrollTo({ top: 0, left: 0 });
      }, 1000);
    } else {
      setShowButton(true);
    }
  };

  return (
    <div className="genre-picker">
      <h3>Vyber obrázek:</h3>
      <div className="genre-picker__main">
        <GenrePicker
          onSelect={onSelect}
          genreGroups={currentGenres}
          genrePicked={genrePicked}
        />
      </div>

      {showSlider && (
        <>
          <Slider
            onSliderValChange={onSliderValChange}
            min={1}
            minText="-"
            max={8}
            maxText="+"
            value={sliderValue}
          />
          {sliderValue <= 4 && <p>Pozor, může obsahovat „nevšední“ zážitek!</p>}
        </>
      )}
      {showButton && (
        <button
          className="btn btn--send"
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
