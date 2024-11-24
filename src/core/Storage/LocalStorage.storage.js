export const setData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getData = (key) => {
    const result = JSON.parse(localStorage.getItem(key));
    return result
}