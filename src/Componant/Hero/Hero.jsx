import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="container hero-section">
            <div className="row align-items-center w-100">

                <div className="col-md-7 hero-content">
                    <span className="badge bg-primary mb-3">
                        Welcome to Mini Store
                    </span>

                    <h1 className="display-4 fw-bold">
                        Discover Your Next Favorite Product
                    </h1>

                    <p className="lead text-muted my-4">
                        Find quality products at the best prices and enjoy a simple
                        shopping experience.
                    </p>

                    <Link to="/products" className="btn btn-primary btn-lg">
                        Browse Products
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </Link>
                </div>

                <div className="col-md-5 text-center">
                    <div className="hero-icon">
                        <i className="fa-solid fa-bag-shopping fa-5x text-primary"></i>

                        <h2 className="mt-4">
                            Quality Products
                        </h2>

                        <p className="mb-0 text-muted">
                            Everything you need in one place
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
