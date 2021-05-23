import React from 'react';
import { render } from 'react-dom';
import GenrePicker from './components/GenrePicker';
import './style.css';

const App = () => {
  return (
    <div>
      <GenrePicker />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
