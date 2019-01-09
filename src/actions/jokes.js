import { REQUEST_JOKES_LIST } from '../constants';

export function getJokesList(quantity) {
    return {
      type: REQUEST_JOKES_LIST,
      quantity,
    };
}
