// Импортиране на функцията configureStore от Redux Toolkit за създаване на Redux Store
import { configureStore } from "@reduxjs/toolkit";

// Импортиране на redux-thunk middleware за обработка на асинхронни действия
import { thunk } from "redux-thunk";

// Импортиране на редуктори от различни slice файлове
import counterReducer from "../features/counter/counterSlice";
import accountReducer from "../features/account/accountSlice";
import recipesReducer from "../features/recipes/recipesSlice";

// Създаване и конфигуриране на Redux Store
export const store = configureStore({
  reducer: {
    // Дефиниране на редуктори за различни части на състоянието
    counter: counterReducer, // Редуктор за управление на състоянието на брояча
    account: accountReducer, // Редуктор за управление на състоянието на акаунта
    recipes: recipesReducer, // Редуктор за управление на състоянието на рецепти
  },
  // Добавяне на middleware, което включва thunk за обработка на асинхронни действия
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
