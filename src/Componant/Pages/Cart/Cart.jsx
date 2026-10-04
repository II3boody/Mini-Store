import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';
import { Helmet } from 'react-helmet-async';

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <main className="container text-center py-5">
                <i className="fa-solid fa-cart-shopping fa-4x text-muted mb-4"></i>
                <h2>Your Cart is Empty</h2>
                <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
                <div className="d-flex justify-content-center gap-3 mt-4">
                    <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-arrow-left me-2"></i>Go Back
                    </button>
                    <Link to="/products" className="btn btn-primary">
                        Start Shopping
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <>
            <Helmet>
                <title>Cart</title>
                <meta name='description' content='Shopping Cart' />
            </Helmet>

            <main className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold mb-0">Shopping Cart</h2>
                    <button onClick={() => navigate(-1)} className="btn btn-outline-secondary">
                        <i className="fa-solid fa-arrow-left me-2"></i>Go Back
                    </button>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card cart-card shadow-sm border-0 mb-4 h-100">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    {cartItems.map(item => (
                                        <li key={item.id} className="list-group-item cart-item p-4 d-flex flex-column flex-md-row align-items-center border-bottom transition-all">
                                            
                                            <Link to={`/products/${item.id}`} className="text-decoration-none d-flex align-items-center flex-grow-1 w-100 mb-3 mb-md-0 text-reset">
                                                <div className="cart-product-icon rounded-3 p-3 me-3 text-center d-flex align-items-center justify-content-center shadow-sm" style={{ width: '90px', height: '90px' }}>
                                                    <i className={`fa-solid ${item.icon} fa-2x text-primary`}></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1 fw-bold text-hover-primary transition-all">{item.name}</h5>
                                                    <p className="text-muted mb-0">{item.category}</p>
                                                </div>
                                            </Link>

                                            <div className="d-flex align-items-center justify-content-between w-100 w-md-auto ms-md-auto">
                                                <div className="d-flex align-items-center me-4 bg-body-tertiary rounded-pill p-1 shadow-sm border">
                                                    <button
                                                        className="btn btn-sm btn-light rounded-circle text-muted"
                                                        style={{ width: '30px', height: '30px', padding: 0 }}
                                                        onClick={(e) => { e.preventDefault(); updateQuantity(item.id, item.quantity - 1); }}
                                                    >
                                                        <i className="fa-solid fa-minus"></i>
                                                    </button>
                                                    <span className="mx-3 fw-bold">{item.quantity}</span>
                                                    <button
                                                        className="btn btn-sm btn-light rounded-circle text-muted"
                                                        style={{ width: '30px', height: '30px', padding: 0 }}
                                                        onClick={(e) => { e.preventDefault(); updateQuantity(item.id, item.quantity + 1); }}
                                                    >
                                                        <i className="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>

                                                <div className="me-4 text-end" style={{ minWidth: '80px' }}>
                                                    <span className="fw-bold fs-5 text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                                </div>

                                                <button
                                                    className="btn btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                    style={{ width: '40px', height: '40px' }}
                                                    onClick={(e) => { e.preventDefault(); removeFromCart(item.id); }}
                                                    title="Remove item"
                                                >
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-footer bg-transparent border-top p-4 text-end">
                                <button className="btn btn-outline-danger" onClick={clearCart}>
                                    <i className="fa-solid fa-trash-can me-2"></i>Clear Cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card cart-summary shadow-sm border-0 position-sticky" style={{ top: '20px' }}>
                            <div className="card-body p-4">
                                <h4 className="fw-bold mb-4 border-bottom pb-3">Order Summary</h4>

                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">Subtotal</span>
                                    <span className="fw-semibold">${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span className="text-muted">Shipping</span>
                                    <span className="fw-semibold text-success">Free</span>
                                </div>

                                <hr className="my-4" />

                                <div className="d-flex justify-content-between mb-4 align-items-center">
                                    <span className="fw-bold fs-5">Total</span>
                                    <span className="fw-bold fs-4 text-primary">${cartTotal.toFixed(2)}</span>
                                </div>

                                <button className="btn btn-primary w-100 btn-lg shadow-sm">
                                    Proceed to Checkout <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                                
                                <div className="text-center mt-3">
                                    <small className="text-muted"><i className="fa-solid fa-lock me-1"></i> Secure Checkout</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
