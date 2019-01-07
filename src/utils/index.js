export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
}

export const getFromStorage = key => {
    const stringItem = localStorage.getItem(key);
    return JSON.parse(stringItem);
}
