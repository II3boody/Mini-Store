import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
    const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
    const [isHovered, setIsHovered] = useState(false);

    const cartItem = cartItems.find(item => item.id === product.id);
    const inCart = !!cartItem;

    return (
        <div 
            className="product-card card h-100 shadow-sm border-0 transition-all"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-body text-center p-4 d-flex flex-column">
                <div className="product-icon text-center mb-3">
                    <i className={`fa-solid ${product.icon} fa-4x text-primary`}></i>
                </div>

                <h4 className="fw-bold">{product.name}</h4>
                <p className="text-muted mb-2">{product.category}</p>
                <h5 className="text-primary fw-bold mb-4 mt-auto">${product.price}</h5>

                <div className="mt-auto">
                    {!inCart ? (
                        <button 
                            className="btn btn-primary w-100 mb-2"
                            onClick={() => addToCart(product)}
                        >
                            <i className="fa-solid fa-cart-plus me-2"></i>
                            Add to Cart
                        </button>
                    ) : (
                        <div className="in-cart-controls mb-2 position-relative" style={{ height: '38px' }}>
                            {isHovered ? (
                                <div className="d-flex justify-content-between align-items-center w-100 position-absolute top-0 start-0 h-100 fade-in">
                                    <button 
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => removeFromCart(product.id)}
                                        title="Remove from Cart"
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <div className="d-flex align-items-center">
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                                        >
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <span className="mx-2 fw-bold">{cartItem.quantity}</span>
                                        <button 
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <button className="btn btn-success w-100 fade-in d-flex align-items-center justify-content-center h-100">
                                    <i className="fa-solid fa-check me-2"></i> In Cart ({cartItem.quantity})
                                </button>
                            )}
                        </div>
                    )}

                    <Link to={`/products/${product.id}`} className="btn btn-outline-primary w-100 btn-view-details">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
