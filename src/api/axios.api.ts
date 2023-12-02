import axios from 'axios';
import { getTokenFromLocalStorage } from '../services/localStorage.helper';
export const instance = axios.create({

    baseURL: 'https://webapicinema.azurewebsites.net/api/',
    headers: { 
        Authorization: `Bearer`+getTokenFromLocalStorage() || '', 
    }
});