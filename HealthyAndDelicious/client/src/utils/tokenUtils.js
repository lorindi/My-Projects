import {TOKEN_NAME} from "./common.js";

export const getToken = () => {
    return localStorage.getItem(TOKEN_NAME);
};

export const setToken = (token) => {
    localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN_NAME);
};