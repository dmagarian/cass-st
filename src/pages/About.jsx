import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="container">
                <h1 className="page-title glow-pink text-center">OUR STORY</h1>

                <div className="about-content">
                    <div className="about-text glass-card">
                        <h2 className="text-cyan">A Pacific Beach Staple</h2>
                        <p>
                            Located just three blocks from the shore and one block from the lively "strip" of San Diego, Cass Street Bar & Grill is deeply rooted in the community vibe.
                            We offer a relaxing and inviting atmosphere, making it the perfect spot to unwind after a long day at the beach or a tough day at work.
                        </p>
                        <p>
                            Whether you're looking for a place to grab a cold drink, shoot some pool, or enjoy a legendary chicken baguette, Cass Street is your local hangout.
                            We're not just a bar; we're a community staple where visitors and locals alike feel right at home.
                        </p>
                        <h3 className="text-sunset mt-4">The Vibe</h3>
                        <p>
                            Our laid-back environment is unmatched. The bartenders are friendly and always ready to make your visit unforgettable.
                            For those who enjoy a fun, low-key experience, Mondays offer free pool, making it a great opportunity to hang out with friends while enjoying our retro aesthetic.
                        </p>
                    </div>

                    <div className="about-image-grid">
                        {/* 
                Placeholder images for demonstration. 
                In a real scenario, use actual photos of the bar.
             */}
                        <div className="image-wrapper glow-box-cyan">
                            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800" alt="Bar Area" className="about-img" />
                        </div>
                        <div className="image-wrapper glow-box-pink">
                            <img src="https://images.unsplash.com/photo-1542525166-41f2ed2f1559?auto=format&fit=crop&q=80&w=800" alt="Pool Tables" className="about-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
