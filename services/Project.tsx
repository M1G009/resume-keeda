import { axiosInstance } from './axiosInstance'



export const Project = async (formData: FormData) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };

        const res = await axiosInstance.post(`/api/v1/projects`, formData, { headers })

        return res
    } catch (error) {
        return error
    }
}

export const ProjectUpdate = async (formData: FormData, id: any) => {

    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'multipart/form-data'
        };

        const res = await axiosInstance.post(`/api/v1/projects/${id}`, formData, { headers })

        return res
    } catch (error) {
        return error
    }
}


export const getProjects = async () => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`
        };

        const res = await axiosInstance.get('/api/v1/projects', { headers });

        return res.data.data;
    } catch (error) {
        throw error; // Throw error for handling in the calling function
    }
};

export const removeProject = async (id: string) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.delete(`/api/v1/projects/${id}`, { headers })

        return res
    } catch (error) {
        return error
    }
}