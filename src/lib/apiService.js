const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '281f885b989b6c2958e75b2af64537c0';

export const sendRequest = (endpoint, options) => {
  let optionsString = `?api_key=${API_KEY}`;
  for (const key in options) {
    optionsString += `&${key}=${options[key]}`;
  }

  return fetch(`${API_URL}${endpoint}${optionsString}`).then((data) =>
    data.json(),
  );
};
0;
