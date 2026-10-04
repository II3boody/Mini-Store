import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import { useTheme } from '../../Context/ThemeContext';

export default function NavBar() {
    const { itemCount } = useCart();
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">

            <div className="container">

                {/* Brand */}
                <Link to="/" className="navbar-brand fw-bold text-primary">
                    <i className="fa-solid fa-bag-shopping me-2"></i>
                    Mini Store
                </Link>

                {/* Toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active fw-bold" : ""}`
                                }
                            >
                                Products
                            </NavLink>
                        </li>

                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <button onClick={toggleTheme} className="btn btn-outline-secondary me-2">
                                {theme === 'light' ? (
                                    <i className="fa-solid fa-moon"></i>
                                ) : (
                                    <i className="fa-solid fa-sun"></i>
                                )}
                            </button>
                            <Link to="/cart" className="btn btn-outline-primary position-relative">
                                <i className="fa-solid fa-cart-shopping"></i>
                                {itemCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {itemCount}
                                        <span className="visually-hidden">items in cart</span>
                                    </span>
                                )}
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
}