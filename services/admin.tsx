import { axiosInstance } from './axiosInstance'

export const AdminSignup = async (data: any) => {
    try {
        const res = await axiosInstance.post('/api/v1/admin/signup', data)

        const token = (res.data.token);
        console.log(res.data.token)
        // Store the token in localStorage
        localStorage.setItem('admintoken', token);
        return res
    } catch (error) {
        return error
    }
}

export const AdminLogin = async (data: any) => {
    try {
        const res = await axiosInstance.post('/api/v1/admin/login', data)
        
        const token = (res.data.token);
        console.log(res.data.token)
        // Store the token in localStorage
        localStorage.setItem('admintoken', token);
        
        return res
    } catch (error) {
        return error
    }
}

