import axios from 'axios';
import config from '../config';

export const requestJokesList = quantity => {
    return axios.get(`${config.baseUrl}/${quantity}`)
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err.message, 'err message');
    });
}