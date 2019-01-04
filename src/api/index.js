import axios from 'axios';
import config from '../config';

export const requestJokesList = quantity => axios.get(`${config.baseUrl}/${quantity}`)
  .then(data => data)
  .catch((err) => {
    console.log(err.message, 'err message');
  });
