import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Componant/NavBar/NavBar'
import Footer from '../Componant/Footer/Footer'

export default function Layout() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">

                <NavBar />

                <main className="flex-grow-1">
                    <Outlet />
                </main>

                <Footer />

            </div>
        </>
    )
}
