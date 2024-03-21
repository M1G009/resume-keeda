import { axiosInstance } from './axiosInstance'



export const Personaldetails = async (formData: FormData, id : string) => {

    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');


        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };
        // Construct the API endpoint based on the presence of ID
        const endpoint = id ? `/api/v1/personaldetails/${id}` : '/api/v1/personaldetails';

        // Make the request using axiosInstance
        const res = await axiosInstance.post(endpoint, formData, { headers });

        // const res = await axiosInstance.post(`/api/v1/resume/personaldetails`, formData , { headers })

        return res
    } catch (error) {
        return error
    }
}

export const getPersonaldetails = async () => {

    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };

        const res = await axiosInstance.get('/api/v1/personaldetails', { headers })

        return res.data.data
    } catch (error) {
        return error
    }
}