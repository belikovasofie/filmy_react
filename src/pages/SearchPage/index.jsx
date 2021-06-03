import React, { useState } from 'react';
import { useHistory } from 'react-router';

const SearchPage = () => {
  const [inputValue, setIputValue] = useState('');
  const { push } = useHistory();

  const handleChange = (e) => {
    setIputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    push(`/film-results/${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      Search
      <label>
        <input onChange={handleChange} value={inputValue} type="text" />
      </label>
    </form>
  );
};

export default SearchPage;
