import React from 'react'
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="container py-5">
            <div className="cta-section bg-primary text-white text-center">

                <i className="fa-solid fa-cart-shopping fa-3x mb-4"></i>

                <h2 className="fw-bold">
                    Find Something You Love?
                </h2>

                <p className="lead mb-4">
                    Explore our complete collection and find the perfect product for you.
                </p>

                <Link to="/products" className="btn btn-light btn-lg">
                    Browse All Products
                    <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>

            </div>
        </section>
    )
}
