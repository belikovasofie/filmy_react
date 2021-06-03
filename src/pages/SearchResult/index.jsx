import React from 'react';
import { useParams } from 'react-router';

const SearchResult = () => {
  const { term } = useParams();

  return (
    <>
      <div>Result for {term}</div>
    </>
  );
};

export default SearchResult;
