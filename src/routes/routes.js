import React from "react"
import { createBrowserRouter } from 'react-router-dom'
import { Profile, Homepage } from "../pages/page.js"



export const router = createBrowserRouter([
    { path: '/' , element: <Homepage />},
    // { path: '/profile' , element: <Profile />},
])