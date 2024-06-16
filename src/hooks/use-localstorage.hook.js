import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = []) {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : initialValue;
  });

  useEffect(() => {
    const savedData = localStorage.getItem(key);
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, [key]);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
