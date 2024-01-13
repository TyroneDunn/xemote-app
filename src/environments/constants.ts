import {environment} from "./environment";

export const API_URL = environment.apiUrl;
const API_AUTH_URL = API_URL + 'auth/';
export const API_PROTECTED_URL = API_AUTH_URL + 'protected/';
export const API_LOGIN_URL = API_AUTH_URL + 'login-page/';
export const API_LOGOUT_URL = API_AUTH_URL + 'logout/';
export const API_REGISTER_URL = API_AUTH_URL + 'register/';
export const API_PRODUCTS_URL = API_URL + 'products/'
export const API_INVENTORY_URL = API_URL + 'inventory/';
export const API_ORDERS_URL = API_URL + 'orders/';
export const APP_HOME = '';
export const APP_SIGN_IN = 'login-page/';
export const APP_PRODUCTS = 'products/';
export const APP_INVENTORY = 'inventory/';
export const APP_ORDERS  = 'orders/';
