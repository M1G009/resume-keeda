import { axiosInstance } from "./axiosInstance";

export const Skills = async (data: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`/api/v1/skills`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}

export const SkillsUpdate = async (data: any, id: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`/api/v1/skills/${id}`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}


export const getSkills = async () => {

    const token = localStorage.getItem('token');

    const headers = {
        'Authorization': `${token}`,
        'Content-Type': 'multipart/form-data'
    };

    try {
        const res = await axiosInstance.get('/api/v1/skills', { headers });
        return res.data.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeSkills = async (id: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.delete(`/api/v1/skills/remove/${id}`, { headers })

        return res
    } catch (error) {
        return error
    }
}
