import { ERROR_MESSAGES } from '../constants';

export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}

export const getFromStorage = key => {
    const stringItem = localStorage.getItem(key);
    return JSON.parse(stringItem);
}

export const swapJoke = (id, source, destination) => {
    const idx = source.findIndex(c => c.id === id);
    if (idx > -1) {
        destination.push(source[idx]);
        source.splice(idx, 1);
    }

    // Return new Arrays
    return {
        source: source.slice(),
        destination: destination.slice(),
    };
}

export const isLoggedIn = () => {
    return localStorage.getItem('LoggedIn') === "true";
}

export const validatePassword = password => {
    if (password.length > 32) {
        return ERROR_MESSAGES.PASSWORD_TOO_LONG;
    } else if (password.match(/\d/) || password.toLowerCase() != password) {
        return ERROR_MESSAGES.ONLY_LOWER_ALPHABET;
    } else if (password.indexOf('i') >= 0) {
        return ERROR_MESSAGES.FORBIDDEN_LETTERS;
    } else if (!Array.isArray(password.match(/(.)\1/g)) || password.match(/(.)\1/g).length < 2) {
        return ERROR_MESSAGES.LETTERS_PAIRS;
    } else if (!hasIncreasingLetters(password)) {
        return ERROR_MESSAGES.SUCCESSIVE_STRINGS;
    }

    return true;
}

export const hasIncreasingLetters = str => {
    const l = str.length;

    for(var i = 0; i < l - 2; i++) {
        if (
            str.charCodeAt(i + 1) - str.charCodeAt(i) === 1 &&
            str.charCodeAt(i + 2) - str.charCodeAt(i + 1) === 1
        ) {
            return true;
        }
    }

    return false;
}