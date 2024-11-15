import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const AuthLayout = () => {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default AuthLayout
