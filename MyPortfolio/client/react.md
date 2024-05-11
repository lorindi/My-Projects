# Project Setup Guide

## 1. React Setup with Vite
#### *npm create vite . => React => JavaScript
#### *npm install
#### *npm run dev


#### *npm i react-router-dom

## 2. Add BrowserRouter in main.jsx:
    import { BrowserRouter } from "react-router-dom";
    <BrowserRouter>
        <App />
    </BrowserRouter> 

## 3. Import in App.jsx:
    import { Routes } from 'react-router-dom'

react-router-dom е библиотека за маршрутизация в React приложенията. Тя предоставя компоненти, 
които позволяват на React приложенията да имат динамична навигация, като променят този, което 
потребителят вижда на екрана в зависимост от URL адреса.
Някои от основните компоненти, предоставени от react-router-dom, включват:

1.BrowserRouter: Обгражда цялото приложение и предоставя контекст за компонентите за маршрутизация.

2.Route: Дефинира маршрут, свързан с даден компонент. Когато пътят в URL съвпадне с дефинирания в 
Route, съответният компонент се рендери.

3.Link: Предоставя линк, който променя URL адреса без да презарежда цялата страница. Това е особено
 полезно за създаване на навигационни връзки в приложението ви.

4.Switch: Обгражда Route компоненти и гарантира, че се рендери само първият компонент, който съвпада с текущия път в URL.

5.Redirect: Пренасочва потребителя към друг URL адрес. Използва се, например, за редирект при неправилно въведени URL адреси.

react-router-dom улеснява реализацията на навигацията в React приложението ви и помага в управлението 
на състоянието на приложението в зависимост от текущия URL адрес.

## 4. Linting
#### *npm run lint
npm run lint изпълнява линт проверка върху кода във вашия проект. 
Линтингът е процес, при който се анализира изходния код срещу определени правила или стилове, 
с цел намиране и коригиране на потенциални проблеми, грешки или несъответствия със зададени стандарти.

При React проекти, често се използва инструмент за линтинг като ESLint, който е настроен с правила, 
специфични за React и JavaScript/TypeScript. ESLint може да предупреди за стилове на кодиране, 
използване на най-добри практики, недостатъци в кода и други аспекти, които подобряват четливостта и поддръжката на проекта.

Използването на npm run lint обикновено изпълнява инструмента за линтинг (като ESLint) върху вашия 
код и извежда предупреждения или грешки в конзолата. Ако проектът ви използва ESLint, можете да видите 
и конфигурацията му във вашия package.json файл или в отделен файл (например, .eslintrc.js или .eslintrc.json).

## 5. Fortawesome Setup
#### *npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

#### *npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

// Вашият React компонент
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


В jsx code:
<FontAwesomeIcon icon={faCoffee} />

<FontAwesomeIcon icon={faFacebook} />

Добавяне в index.html:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-rFIE2ziYYLHZd4z3nVps/0MXDq2JswSMkQf6Y4gncNIn4d1knqXb95mcvY3e5FdS" crossorigin="anonymous">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-rFIE2ziYYLHZd4z3nVps/0MXDq2JswSMkQf6Y4gncNIn4d1knqXb95mcvY3e5FdS" crossorigin="anonymous">



Валидации във фронтенда (ReactJS):
Потребителско изживяване: Валидациите във фронтенда осигуряват бърза обратна връзка към потребителите, преди данните да бъдат изпратени към сървъра, 
което подобрява потребителското изживяване.
Подобрена отзивчивост: Позволяват на приложението да предотвратява ненужни заявки към сървъра, ако въведените данни не отговарят на изискванията.
Оптимизация на мрежовия трафик: Изпращането на невалидни данни до сървъра и тяхната обработка могат да увеличат мрежовия трафик и времето за заявка-отговор.




## 6. Axios: Powerful HTTP Requests in Your Project
#### *npm install axios
Области на приложение на Axios:
HTTP Заявки:

Изпращане на GET, POST, PUT, DELETE и други видове HTTP заявки към сървъри.
Управление на различни видове данни като JSON, форми, файлове и други.
Обработка на Отговори:

Обработка отговорите от сървъра, включително статус кодове, заглавия и тяла на отговорите.
Асинхронни Заявки:

Поддържа асинхронни заявки, което е полезно при изпращането на HTTP заявки от React компоненти или други асинхронни околия.
Отказ на Заявки:

Лесно управление на отказите при грешки или неуспешни HTTP заявки.
Интерсептори:

Позволяват ви да добавяте лесно и променяте глобални настройки за HTTP заявки, преди те да бъдат изпратени.
Промиси:

Axios връща JavaScript промиси, които улесняват обработката на отговорите.
Заявки към REST API:

Улеснява изпращането на заявки към RESTful API, като поддържа различни методи и формати.
В крайна сметка, Axios е мощен инструмент за управление на HTTP заявки във вашия проект и може да се използва в различни сценарии.





## 7. Custom Hook: usePersistedState
#hook/usePersistedState

import { useState } from "react";

export const usePersistedState = (key, defaultValue) => {

  // Използваме useState за създаване на състояние
  const [state, setState] = useState(() => {

    // Проверяваме дали има съхранено състояние в localStorage
    const persistedState = localStorage.getItem(key);

    // Ако има, връщаме го след парсване от JSON
    if (persistedState) {
      return JSON.parse(persistedState);
    }

    // Ако няма, връщаме стойността по подразбиране
    return defaultValue;
  });

  // Функцията setPersistedState работи като setState, но и записва състоянието в localStorage
  const setPersistedState = (value) => {
    // Обновяваме състоянието
    setState(value);

    // Сериализираме новата стойност и я записваме в localStorage
    let serializedValue;
    if (typeof value === "function") {
      // Ако стойността е функция, като например при използване на функционален setState
      serializedValue = JSON.stringify(value(state));
    } else {
      serializedValue = JSON.stringify(value);
    }

    localStorage.setItem(key, serializedValue);
  };

  // Връщаме състоянието и функцията за обновяване на състоянието
  return [state, setPersistedState];
};

Този код представлява кастомен хук (usePersistedState), който съчетава функционалността на хука за състояние (useState) 
със съхранение в localStorage. Този хук е предназначен да създаде състояние, което се запазва в localStorage, така че 
данните да останат налични дори след презареждане на страницата.





## 8. TOASTIFY
#### *npm install --save react-toastify
https://fkhadra.github.io/react-toastify/introduction/

In main.jsx import:
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        transition:Bounce
      />
    </React.StrictMode>
  </BrowserRouter>

  In the component: 
  import { toast } from "react-toastify";
  In the JSX:
  toast.error("message error")




## 9. GMAIL
https://www.youtube.com/watch?v=bMq2riFCF90
#### *npm i @emailjs/browser
https://www.emailjs.com/docs/examples/reactjs/

https://dashboard.emailjs.com/admin/account
Email Services => Service ID
Email Templates => Email Templates
Account => API keys