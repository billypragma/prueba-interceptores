// httpClient.ts

import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getValidationError } from "../utilities/get-validation-error";


export interface AppError {
    message: string;
    status?: number;
    isNetWorkError?: boolean;
}

export const httpClient = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
})


httpClient.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {

        const appError: AppError = {
            message: '',
            status: error.response?.status,
            isNetWorkError: !error.response
        };

        if (appError.isNetWorkError) {
            const errorCode = error.code || 'ERR_NETWORK';
            appError.message = getValidationError(errorCode);
            return Promise.reject(appError);
        }
        // 2. Manejo de Errores HTTP (400, 404, etc.)
        if (appError.status) {
            // Buscamos el mensaje en tu utilidad enviando el número del status
            appError.message = getValidationError(appError.status);

            // Para la familia de errores 500 (errores de servidor), los agrupamos
            if (appError.status >= 500) {
                appError.message = 'Problemas técnicos en los servidores. Intenta más tarde.';
            }
        }
        return Promise.reject(appError);


    }


)