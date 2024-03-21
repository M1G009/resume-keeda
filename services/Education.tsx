import { axiosInstance } from './axiosInstance'

export const EducationDetails = async (data: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`/api/v1/educationsdetails`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}

export const EducationDetailsUpdate = async (data: any, id: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`/api/v1/educationsdetails/${id}`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}



export const getEducation = async () => {

    const token = localStorage.getItem('token');

    const headers = {
        'Authorization': `${token}`,
        'Content-Type': 'multipart/form-data'
    };

    try {
        const res = await axiosInstance.get('/api/v1/educationsdetails', { headers });
        return res.data.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeEducation = async (id) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': token,
            'Content-Type': 'application/json'
        };

        // Concatenate the id properly in the URL
        const res = await axiosInstance.delete(`/api/v1/educationsdetails/${id}`, { headers });

        return res.data;
    } catch (error) {
        throw error;
    }
};
