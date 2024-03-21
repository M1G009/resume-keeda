import { axiosInstance } from './axiosInstance'

export const Awards = async (data: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`api/v1/awardsandcertification`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}

export const AwardsUpdate = async (data: any, id: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token}`,
            'Content-Type': 'application/json'
        };

        const res = await axiosInstance.post(`api/v1/awardsandcertification/${id}`, data, { headers })

        return res
    } catch (error) {
        return error
    }
}


export const getAwards = async () => {

    const token = localStorage.getItem('token');

    const headers = {
        'Authorization': `${token}`,
        'Content-Type': 'multipart/form-data'
    };

    try {
        const res = await axiosInstance.get('/api/v1/awardsandcertification', { headers });
        return res.data.data;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeAwards = async (id: any) => {
    try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // Set the request headers with the token
        const headers = {
            'Authorization': `${token} `,
            'Content-Type': 'application/json'
        };
        const res = await axiosInstance.delete(`/ api / v1 / awardsandcertification / ${id} `, { headers })

        return res
    } catch (error) {
        return error
    }
}

