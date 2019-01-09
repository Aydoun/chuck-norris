import { REQUEST_JOKES_LIST, REQUEST_ONE_JOKE } from '../constants';

export function getJokesList(quantity) {
    return {
      type: REQUEST_JOKES_LIST,
      quantity,
    };
}

export function getOneJoke(quantity) {
  return {
    type: REQUEST_ONE_JOKE,
    quantity,
  };
}
