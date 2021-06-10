import React from 'react';
import './style.css';
import { quotes } from './quotes';

const Quote = () => {
  const cislo = Math.floor(Math.random() * quotes.length);

  return (
    <div className="quote__element">
      <div className="quote__text">{quotes[cislo].quote}</div>
      <div className="quote__movie">{quotes[cislo].movie}</div>
    </div>
  );
};

export default Quote;
