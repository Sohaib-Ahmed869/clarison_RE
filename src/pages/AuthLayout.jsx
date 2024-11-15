import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const AuthLayout = () => {
    return (
        <div className='min-h-screen my-10'>
            <Navbar />
            <div className="flex items-center justify-center mt-5">
                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout
