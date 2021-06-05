import React, { useState } from 'react';
import './style.css';

const Slider = ({ min, minText, max, maxText, value }) => {
  const [val, setVal] = useState(value);
  const [x, setX] = useState((value - min) / (max - min));

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setVal(inputValue);

    setX((inputValue - min) / (max - min));
  };

  return (
    <div className="slider">
      <div className="slider__min">{minText}</div>
      <div className="slider__control">
        <div
          className="slider__bubble"
          style={{ left: `calc((100% - 25px) * ${x} + 14px )` }}
        >
          {val}
        </div>
        <input
          className="slider__input"
          type="range"
          min={min}
          max={max}
          value={val}
          onChange={handleChange}
        />
      </div>
      <div className="slider__max">{maxText}</div>
    </div>
  );
};

export default Slider;
