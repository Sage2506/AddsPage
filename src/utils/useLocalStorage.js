import { useState, useEffect } from 'react';

const getStorageValue = (key, defaultValue) => {
    // getting storage values
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    });
    useEffect(() => {
        // storing data
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue]
}