import React from 'react'
import { Link, useParams } from "react-router-dom";
import { useCart } from '../../../Context/CartContext';

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 25,
        category: "Accessories",
        icon: "fa-computer-mouse",
        description:
            "A comfortable wireless mouse with smooth tracking and reliable performance.",
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 70,
        category: "Accessories",
        icon: "fa-keyboard",
        description:
            "A responsive mechanical keyboard designed for gaming and everyday use.",
    },
    {
        id: 3,
        name: "Gaming Headset",
        price: 45,
        category: "Gaming",
        icon: "fa-headphones",
        description:
            "Immersive gaming headset with clear audio and a comfortable design.",
    },
    {
        id: 4,
        name: "Gaming Controller",
        price: 55,
        category: "Gaming",
        icon: "fa-gamepad",
        description:
            "A comfortable controller with responsive buttons for an amazing gaming experience.",
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 90,
        category: "Wearables",
        icon: "fa-clock",
        description:
            "A modern smart watch with useful features for your everyday life.",
    },
    {
        id: 6,
        name: "USB-C Hub",
        price: 35,
        category: "Accessories",
        icon: "fa-plug",
        description:
            "A compact USB-C hub that gives you multiple ports in one convenient device.",
    },
];

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return (
            <main className="container text-center py-5">
                <i className="fa-solid fa-circle-exclamation fa-4x text-danger mb-4"></i>

                <h1>Product Not Found</h1>

                <p className="text-muted">
                    Sorry, we couldn't find the product you're looking for.
                </p>

                <Link to="/products" className="btn btn-primary">
                    Back to Products
                </Link>
            </main>
        );
    }

    return (
        <main className="container py-5">
            <div className="row align-items-center">

                <div className="col-md-5 text-center">
                    <div className="product-icon product-details-icon rounded-4 shadow-sm">
                        <i
                            className={`fa-solid ${product.icon} fa-7x text-primary`}
                        ></i>
                    </div>
                </div>

                <div className="col-md-7">
                    <span className="badge bg-primary mb-3">
                        {product.category}
                    </span>

                    <h1 className="fw-bold">
                        {product.name}
                    </h1>

                    <h2 className="text-primary fw-bold my-3">
                        ${product.price}
                    </h2>

                    <p className="text-muted lead">
                        {product.description}
                    </p>

                    <div className="mt-4">
                        <button 
                            className="btn btn-primary btn-lg me-2"
                            onClick={() => addToCart(product)}
                        >
                            <i className="fa-solid fa-cart-plus me-2"></i>
                            Add to Cart
                        </button>

                        <Link
                            to="/products"
                            className="btn btn-outline-secondary btn-lg"
                        >
                            Back to Products
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
