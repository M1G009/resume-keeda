import { axiosInstance } from './axiosInstance'

export const UserSignup = async (data: any) => {
    try {
        const res = await axiosInstance.post('/api/v1/user/signup', data)

        const token = (res.data.token);
        console.log(res.data.token)
        // Store the token in localStorage
        localStorage.setItem('token', token);
        return res
    } catch (error) {
        return error
    }
}

export const UserLogin = async (data: any) => {
    try {
        const res = await axiosInstance.post('/api/v1/user/login', data)
        
        const token = (res.data.token);
        console.log(res.data.token)
        // Store the token in localStorage
        localStorage.setItem('token', token);
        
        return res
    } catch (error) {
        return error
    }
}

