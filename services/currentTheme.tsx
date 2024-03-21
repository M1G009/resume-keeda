import exp from "constants";
import { axiosInstance } from "./axiosInstance";

export const AddURL = async (data: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.post('/api/v1/themeselect', data, { headers })
        return res

    } catch (error) {
        return error
    }
}

export const getURL = async () => {
    const token = localStorage.getItem('token');

    try {
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.get('/api/v1/themeselect', { headers })
        return res

    } catch (error) {
        return error
    }
}

export const checkURL = async (data: any) => {

    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.post('/api/v1/themeselect/checkurl', data, { headers })

        return res
    } catch (error) {
        return error
    }
}
