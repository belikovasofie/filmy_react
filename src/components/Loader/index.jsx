import React from 'react';
import LoaderComponent from 'react-loader-spinner';
import './style.css';

const Loader = ({ fixed }) => (
  <div className={fixed ? 'loader loader--fixed' : 'loader'}>
    <LoaderComponent type="Grid" color="#1f156b" height={100} width={100} />
  </div>
);

export default Loader;
