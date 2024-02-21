import { useState, useEffect } from 'react';

export const useThemeState = (key, initialValue) => {
  // Проверяваме дали има стойност за ключа в localStorage
  const storedValue = localStorage.getItem(key);
  // Избираме между стойността от localStorage и началната стойност, ако няма стойност в localStorage
  const initialTheme = storedValue ? storedValue : initialValue;

  // Използваме useState за да съхраняваме текущата стойност на темата
  const [value, setValue] = useState(initialTheme);

  // При всяка промяна на стойността, ще я запишем в localStorage
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};