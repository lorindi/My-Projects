import { useState } from "react";

export const usePersistedState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const persistedState = localStorage.getItem(key);
    if (persistedState) {
      return JSON.parse(persistedState);
    }
    return defaultValue;
  });

  const setPersistedState = (value) => {
    setState(value);
    let serializedValue;
    if (typeof value == "function") {
      serializedValue = JSON.stringify(value(state));
    } else {
      serializedValue = JSON.stringify(value);
    }
    localStorage.setItem(key, serializedValue);
  };
  return [state, setPersistedState];
};

// export const usePersistedState = (key, defaultValue) => {: Тук се дефинира функцията usePersistedState,
// която е експортирана и може да бъде използвана в други части на кода.

//     const [state, setState] = useState(() => { ... });: С този ред се дефинира състояние (state)
// и функция за промяна на състоянието (setState) чрез useState хук. Първоначалната стойност на state
// се определя от функция, която се подава като аргумент на useState. Тази функция се изпълнява само
// при първото изпълнение на компонента и се използва за връщане на началната стойност на състоянието.
// В този случай, ако в localStorage съществува стойност за дадения ключ (key), тя се зарежда като
// начална стойност за state, а ако не, се използва стойността, подадена като defaultValue.

//     const setPersistedState = (value) => { ... };: Тази част дефинира функцията setPersistedState,
// която се използва за обновяване на състоянието и също така за съхраняване на новата стойност в localStorage.

//     setState(value);: С този ред се задава новата стойност за състоянието, подадена като аргумент
// на функцията setPersistedState.

//     let serializedValue; if (typeof value == "function") { ... } else { ... }: Тук се определя дали
//  новата стойност е функция или не. Ако е функция, тя се извиква с текущата стойност на състоянието и
//  връщаният резултат се сериализира. Ако не е функция, самата стойност се сериализира.

//     localStorage.setItem(key, serializedValue);: Накрая, сериализираната стойност се съхранява
// в localStorage с ключа key.

//     return [state, setPersistedState];: Функцията usePersistedState връща масив, съдържащ текущата
// стойност на състоянието (state) и функцията за нейното обновяване (setPersistedState).
// Този масив може да бъде деструктуриран при използването на usePersistedState в компонентите на React.



// JSON.parse() е вградена функция в JavaScript, която преобразува JSON низ в обект или масив, като разбира JSON формата и връща съответния JavaScript обект или масив.
//  В случая, persistedState вероятно е низ, който е възстановен от localStorage, като JSON формат. 
//  Следователно JSON.parse(persistedState) преобразува този низ обратно в обект или масив, който е представен в този JSON низ. 
//  Така че този ред е връщане на състоянието, което е предишно запазено в localStorage и което сега се използва в компонента.