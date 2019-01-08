import axios from 'axios';
import config from '../config';

export const requestJokesList = quantity => axios.get(`${config.baseUrl}/${quantity}`)
  .then(response => response.data)
  .catch((err) => {
    console.log(err.message, 'err message');
  });
