import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';

const DashboardLayout = ({ children }: {
    children: any;
}): React.JSX.Element => {
    const router = useRouter()
    const [token, setToken] = useState("")

    useEffect(()=> {
        let tokenData = localStorage.getItem("token")
        if(!tokenData){
            router.push("/user/login")
        }
        setToken(tokenData || "")
    }, [])

    if(!token){
        return <div className='loadingSpinner'><span className="loader"></span></div>
    }

    return (
        <div >
            <Sidebar >
            {children}
            </Sidebar>
        </div>
    )
}

export default DashboardLayout
