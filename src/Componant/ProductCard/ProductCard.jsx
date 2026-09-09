import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card h-100 d-flex flex-column">

            <div className="product-icon text-center">
                <i
                    className={`fa-solid ${product.icon} fa-4x text-primary`}
                ></i>
            </div>

            <div className="card-body text-center p-4 d-flex flex-column flex-grow-1">

                <h4 className="fw-bold">
                    {product.name}
                </h4>

                <p className="text-muted mb-2">
                    {product.category}
                </p>

                <h5 className="text-primary fw-bold mb-4 mt-auto">
                    ${product.price}
                </h5>

                <button 
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => addToCart(product)}
                >
                    <i className="fa-solid fa-cart-plus me-2"></i>
                    Add to Cart
                </button>

                <Link to={`/products/${product.id}`} className="btn btn-outline-primary w-100 btn-view-details">
                    View Details
                </Link>

            </div>
        </div>
    )
}
