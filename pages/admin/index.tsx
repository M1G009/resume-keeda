import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ThemeAdd from '../../component/Admin/themeAdd'

const Admin = () => {
    const router = useRouter()
    const [token, setToken] = useState("")

    useEffect(() => {
        let tokenData = localStorage.getItem("admintoken")
        if (!tokenData) {
            router.push("/admin/login")
        }
        setToken(tokenData || "")
    }, [])

    if (!token) {
        return <div className='loadingSpinner'><span className="loader"></span></div>
    }

    const Logout = () => {
        localStorage.removeItem("admintoken")
    }

    return (
        <div>
            <button style={{ padding: '10px 30px' }} onClick={() => Logout()}>Log out</button>


            <ThemeAdd />
        </div>
    )
}

export default Admin
