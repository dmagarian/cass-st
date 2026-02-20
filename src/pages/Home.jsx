import React from 'react';
import { Link } from 'react-router-dom';
import { Wine, UtensilsCrossed, Music } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-sun"></div>
                <div className="hero-content container">
                    <h1 className="hero-title glow-pink">
                        CASS STREET
                        <span className="hero-subtitle text-cyan glow-cyan">BAR & GRILL</span>
                    </h1>
                    <p className="hero-description">
                        San Diego's premier retro vibe. Cold drinks, hot grill, and neon nights by the beach.
                    </p>
                    <div className="hero-actions">
                        <Link to="/menu" className="btn btn-pink">Explore Menu</Link>
                        <Link to="/contact" className="btn">Find Us</Link>
                    </div>
                </div>
                <div className="hero-grid-overlay"></div>
            </section>

            {/* Features Section */}
            <section className="features container">
                <h2 className="section-title text-sunset">The Vibe</h2>
                <div className="features-grid">

                    <div className="feature-card glass-card">
                        <div className="feature-icon glow-pink">
                            <UtensilsCrossed size={40} className="text-pink" />
                        </div>
                        <h3 className="text-cyan">Legendary Eats</h3>
                        <p>From the famous Chicken Baguette to the classic Surf and Turf. Perfectly seasoned and always fresh.</p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-icon glow-cyan">
                            <Wine size={40} className="text-cyan" />
                        </div>
                        <h3 className="text-sunset">Cold Drinks</h3>
                        <p>A killer selection of craft beers on tap, signature cocktails, and the best happy hour on the strip.</p>
                    </div>

                    <div className="feature-card glass-card">
                        <div className="feature-icon glow-pink">
                            <Music size={40} className="text-pink" />
                        </div>
                        <h3 className="text-cyan">Retro Atmosphere</h3>
                        <p>Pool tables, cool tunes, and a laid-back local crowd. The ultimate spot to unwind after hitting the waves.</p>
                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container cta-content glass-card">
                    <h2 className="glow-cyan">Ready to party?</h2>
                    <p>Join us at 4612 Cass St. for free pool on Mondays and great times every night.</p>
                    <Link to="/contact" className="btn btn-pink">Get Directions</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
