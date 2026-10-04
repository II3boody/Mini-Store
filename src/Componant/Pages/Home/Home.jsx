import React from 'react'
import Hero from '../../Hero/Hero';
import Features from '../../Features/Features';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import CTA from '../../CTA/CTA';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='Home description' />
                <meta name='author' content='ITI' />
                <meta name='keywords' content='Home, ITI, E-commerce' />
            </Helmet>
            <Hero />
            <Features />
            <FeaturedProducts />
            <CTA />
        </>

    );
}