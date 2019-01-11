// reducers constants
export const REQUEST_JOKES_LIST = 'REQUEST_JOKES_LIST';
export const PUT_JOKES_LIST = 'PUT_JOKES_LIST';
export const REQUEST_ONE_JOKE = 'REQUEST_ONE_JOKE';
export const PUT_ONE_JOKE = 'PUT_ONE_JOKE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const MOVE_FAVORITES = 'MOVE_FAVORITES';

// Authentication constants
export const ERROR_MESSAGES = {
    PASSWORD_TOO_LONG: 'Password should contain maximum 32 characters',
    ONLY_LOWER_ALPHABET: 'Password should only contain lower case alphabetical characters',
    FORBIDDEN_LETTERS: 'Password should not contain i, I, O',
    LETTERS_PAIRS: 'Password should contain at least to pairs of letters',
    SUCCESSIVE_STRINGS: 'Password must contain an increasing straight of letters',
}
