import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../Context/CartContext';

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className="container text-center py-5">
                <i className="fa-solid fa-cart-shopping fa-4x text-muted mb-4"></i>
                <h2>Your Cart is Empty</h2>
                <p className="text-muted">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/products" className="btn btn-primary mt-3">
                    Start Shopping
                </Link>
            </main>
        );
    }

    return (
        <main className="container py-5">
            <h2 className="mb-4 fw-bold">Shopping Cart</h2>
            
            <div className="row">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0 mb-4">
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                                {cartItems.map(item => (
                                    <li key={item.id} className="list-group-item p-4 d-flex align-items-center">
                                        <div className="bg-light rounded p-3 me-3 text-center" style={{ width: '80px', height: '80px' }}>
                                            <i className={`fa-solid ${item.icon} fa-2x text-primary`}></i>
                                        </div>
                                        
                                        <div className="flex-grow-1">
                                            <h5 className="mb-1 fw-bold">{item.name}</h5>
                                            <p className="text-muted mb-0">{item.category}</p>
                                        </div>
                                        
                                        <div className="d-flex align-items-center me-4">
                                            <button 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            >
                                                <i className="fa-solid fa-minus"></i>
                                            </button>
                                            <span className="mx-3 fw-bold">{item.quantity}</span>
                                            <button 
                                                className="btn btn-sm btn-outline-secondary"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            >
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        </div>
                                        
                                        <div className="me-4 text-end" style={{ width: '100px' }}>
                                            <span className="fw-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        
                                        <button 
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => removeFromCart(item.id)}
                                            title="Remove item"
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer bg-white p-3 text-end">
                            <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
                                <i className="fa-solid fa-trash-can me-2"></i>Clear Cart
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4">Order Summary</h4>
                            
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Shipping</span>
                                <span>Free</span>
                            </div>
                            
                            <hr />
                            
                            <div className="d-flex justify-content-between mb-4">
                                <span className="fw-bold fs-5">Total</span>
                                <span className="fw-bold fs-5 text-primary">${cartTotal.toFixed(2)}</span>
                            </div>
                            
                            <button className="btn btn-primary w-100 btn-lg">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
