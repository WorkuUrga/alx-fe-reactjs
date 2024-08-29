import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from "./AuthProvider"

function ProtectedRoute() {
    const {inAuthenticated} = useAuth()
    return (
        inAuthenticated ? <Outlet/> : <Navigate to = "/login" />
    )
}

export default ProtectedRoute