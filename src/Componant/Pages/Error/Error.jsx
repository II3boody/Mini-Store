import React from 'react'
import NavBar from '../../NavBar/NavBar'
import Footer from '../../Footer/Footer'
import { Helmet } from 'react-helmet-async'

export default function Error() {
    return (
        <>
            <NavBar />
            <main className="container text-center mt-5">
                <Helmet>
                    <title>Error</title>
                    <meta name='description' content='Error description' />
                    <meta name='author' content='ITI' />
                    <meta name='keywords' content='Error, ITI, E-commerce' />
                </Helmet>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Sorry, the page you're looking for doesn't exist.
                </p>
            </main>
            <Footer />
        </>
    )
}
