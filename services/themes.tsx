import { axiosInstance } from "./axiosInstance";

export const ThemePost = async (data: any, id: any) => {
    try {

        const token = localStorage.getItem('admintoken');

        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };

        const endpoint = id ? `/api/v1/theme/${id}` : '/api/v1/theme'

        const res = await axiosInstance.post(endpoint, data, { headers })

        return res
    } catch (error) {
        return error
    }
}


export const getThemes = async () => {

    const headers = {
        'Content-Type': 'multipart/form-data'
    };

    try {
        const res = await axiosInstance.get('/api/v1/theme', { headers });
        return res.data.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const removeTheme = async (id: string) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('admintoken');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };
        const res = await axiosInstance.delete(`/api/v1/theme/${id}`, { headers })

        return res
    } catch (error) {
        return error
    }
}

