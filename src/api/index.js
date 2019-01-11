import axios from 'axios';
import config from '../config';

export const requestJokesList = quantity => axios.get(`${config.baseUrl}/${quantity}`)
  .then(response => {
    const data = response.data;
    if (data.type === 'success') {
      return data.value;
    }

    throw new Error('Error Fetching Jokes');
  })
  .catch((err) => {
    console.log(err.message, 'err message');
  });
