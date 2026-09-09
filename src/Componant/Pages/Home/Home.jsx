import React from 'react'
import Hero from '../../Hero/Hero';
import Features from '../../Features/Features';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import CTA from '../../CTA/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <Features />
            <FeaturedProducts />
            <CTA />
        </>

    );
}