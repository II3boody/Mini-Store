import React from 'react'
import ProductCard from '../ProductCard/ProductCard'


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
];

export default function FeaturedProducts() {
    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">
                    Featured Products
                </h2>

                <p className="text-muted">
                    Check out some of our most popular products.
                </p>
            </div>

            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}
