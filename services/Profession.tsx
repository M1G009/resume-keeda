import { axiosInstance } from "./axiosInstance";

export const UserProfession = async (data: any, id?: string) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        // Construct the API endpoint based on the presence of ID
        const endpoint = id ? `/api/v1/professionaldetails/${id}` : '/api/v1/professionaldetails';

        // Make the request using axiosInstance
        const res = await axiosInstance.post(endpoint, data, { headers });

        return res.data.data;
    } catch (error) {
        return error;
    }
};

export const getProfession = async () => {

    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.get('/api/v1/professionaldetails', { headers })

        return res.data
    } catch (error) {
        return error
    }
}