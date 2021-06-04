// import React from 'react';
// import { useParams } from 'react-router';
// import FilmGroup from '../../components/FilmGroup';
// import Loader from '../../components/Loader';

// const SearchResult = () => {
//   const { term } = useParams();

//   const fetchResult = () => {
//     sendRequest('discover/movie', {}).then((data) => {});
//   };

//   useEffect(fetchResult, []);

//   return (
//     <>
//       <div>Result for {term}</div>
//       {isLoading ? <Loader /> : <FilmGroup data={data} />}
//     </>
//   );
// };

// export default SearchResult;
