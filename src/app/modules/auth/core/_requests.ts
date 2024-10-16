import axios from "axios";
import { AuthModel, UserModel } from "./_models";

// const API_URL = import.meta.env.VITE_APP_API_URL;
const API_URL = import.meta.env.VITE_LARAVEL_API_URL;

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`;
// export const LOGIN_URL = `${API_URL}/login`;
export const LOGIN_URL = 'http://localhost:8000/api/login';
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post(LOGIN_URL, {
    email,
    password,
  });
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  console.log('---token---', token);
  return axios.post(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
  .then(response => {
    console.log('User data:', response.data);
    return response.data; // Return user data if needed
  })
  .catch(error => {
    // Handle and log the error properly
    if (error.response) {
      // The request was made, and the server responded with a status code outside the range of 2xx
      console.error('Error fetching user data:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something else triggered the error
      console.error('Error message:', error.message);
    }
    throw error; // Rethrow error if you want to handle it later
  });
}
