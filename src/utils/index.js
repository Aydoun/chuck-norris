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