// Import the configureStore function from Redux Toolkit to create a Redux Store
import { configureStore } from "@reduxjs/toolkit";

// Import redux-thunk middleware for handling asynchronous actions
import { thunk } from "redux-thunk";

// Import reducers from different slice files
import counterReducer from "../features/counter/counterSlice";
import accountReducer from "../features/account/accountSlice";
import recipesReducer from "../features/recipes/recipesSlice";

// Create and configure the Redux Store
export const store = configureStore({
  reducer: {
    // Define reducers for different parts of the state
    counter: counterReducer, 
    account: accountReducer, // Reducer to manage the account state
    recipes: recipesReducer, 
  },
  // Add middleware, including thunk for handling asynchronous actions
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
