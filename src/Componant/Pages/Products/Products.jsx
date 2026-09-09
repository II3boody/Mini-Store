import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from '../../ProductCard/ProductCard'

const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        price: 25,
        category: "Accessories",
        icon: "fa-computer-mouse",
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 70,
        category: "Accessories",
        icon: "fa-keyboard",
    },
    {
        id: 3,
        name: "Gaming Headset",
        price: 45,
        category: "Gaming",
        icon: "fa-headphones",
    },
    {
        id: 4,
        name: "Gaming Controller",
        price: 55,
        category: "Gaming",
        icon: "fa-gamepad",
    },
    {
        id: 5,
        name: "Smart Watch",
        price: 90,
        category: "Wearables",
        icon: "fa-clock",
    },
    {
        id: 6,
        name: "USB-C Hub",
        price: 35,
        category: "Accessories",
        icon: "fa-plug",
    },
];
export default function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" || product.category === category;

        return matchesSearch && matchesCategory;
    });

    return (
        <main className="container py-5">

            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="fw-bold">Our Products</h1>

                <p className="text-muted">
                    Explore our collection and find what you need.
                </p>
            </div>

            {/* Search & Filter */}
            <div className="row g-3 mb-5">

                <div className="col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="col-md-4">
                    <select
                        className="form-select form-select-lg"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="All">All Categories</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Wearables">Wearables</option>
                    </select>
                </div>

            </div>

            {/* Products */}
            <div className="row g-4">

                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div className="col-md-6 col-lg-4" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))
                ) : (
                    <div className="text-center py-5">
                        <i className="fa-solid fa-box-open fa-3x text-muted mb-3"></i>

                        <h3>No Products Found</h3>

                        <p className="text-muted">
                            Try searching for another product.
                        </p>
                    </div>
                )}

            </div>

        </main>
    );
}
