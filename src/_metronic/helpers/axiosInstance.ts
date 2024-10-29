import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosHeaders } from "axios";

const API_URL = import.meta.env.VITE_LARAVEL_API_URL;

// Create the Axios instance with the base URL
const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
});

// Add a request interceptor to attach the token to every request
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {  // Use InternalAxiosRequestConfig
        // Retrieve and parse the token from local storage
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            const auth = JSON.parse(storedAuth);

            // Ensure headers are defined before setting the Authorization header
            if (!config.headers) {
                config.headers = new AxiosHeaders(); // Initialize headers as AxiosHeaders
            }
            config.headers.set('Authorization', `Bearer ${auth.token}`); // Attach token to headers
        }
        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

export default axiosInstance;
