import React from 'react'

const features = [
    {
        id: 1,
        icon: "fa-truck-fast",
        title: "Fast Delivery",
        description: "Get your products delivered quickly and safely.",
    },
    {
        id: 2,
        icon: "fa-tags",
        title: "Best Prices",
        description: "Enjoy high-quality products at affordable prices.",
    },
    {
        id: 3,
        icon: "fa-shield-halved",
        title: "Secure Payment",
        description: "Your payment information is always safe and protected.",
    },
];

export default function Features() {
    return (
        <section className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold">Why Choose Us?</h2>

                <p className="text-muted">
                    We make your shopping experience simple and reliable.
                </p>
            </div>

            <div className="row g-4">
                {features.map((feature) => (
                    <div className="col-md-4" key={feature.id}>
                        <div className="feature-card h-100 text-center">

                            <i
                                className={`fa-solid ${feature.icon} fa-3x text-primary feature-icon`}
                            ></i>

                            <h4 className="fw-bold">
                                {feature.title}
                            </h4>

                            <p className="text-muted mb-0">
                                {feature.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
