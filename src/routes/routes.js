import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import { Profile, Homepage,Dashboard,  ViolationReport, NewsManagement } from "../pages/page.js"



export const router = createBrowserRouter([
    { path: '/' , element: <Dashboard />},
    // { path: '/profile' , element: <Profile />},
    { path: '/dashboard' , element: <Dashboard />},
    { path: '/reports' , element: <ViolationReport />},
    { path: '/news' , element: <NewsManagement />},
    { path: '/revenue' , element: <Dashboard />},
]);