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
}

export const isLoggedIn = () => {
    return localStorage.getItem('LoggedIn') === "true";
}

export const validatePassword = password => {
    if (password.length > 32) {
        return ERROR_MESSAGES.PASSWORD_TOO_LONG;
    } else if (/\d/.test(password)) {
        return ERROR_MESSAGES.ONLY_ALPHABET;
    }

    return true;
}