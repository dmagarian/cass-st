import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="container">
                <h1 className="page-title glow-cyan text-center">FIND US</h1>

                <div className="contact-grid">

                    {/* Info Section */}
                    <div className="contact-info glass-card">
                        <h2 className="text-pink mb-4">Drop By The Grill</h2>
                        <p className="text-muted mb-4">
                            Just blocks from the beach. Come for the food, stay for the vibe.
                        </p>

                        <ul className="info-list">
                            <li>
                                <MapPin className="text-cyan text-glow-cyan" size={24} />
                                <div className="info-text">
                                    <h3>Address</h3>
                                    <p>4612 Cass St<br />San Diego, CA 92109</p>
                                </div>
                            </li>
                            <li>
                                <Phone className="text-pink text-glow-pink" size={24} />
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <p>(858) 270-1320</p>
                                </div>
                            </li>
                            <li>
                                <Mail className="text-sunset text-glow-sunset" size={24} />
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <p>info@cassstbarandgrill.com</p>
                                </div>
                            </li>
                            <li>
                                <Clock className="text-cyan text-glow-cyan" size={24} />
                                <div className="info-text">
                                    <h3>Hours</h3>
                                    <p>
                                        Mon - Thu: 11am - 10pm<br />
                                        Fri - Sat: 11am - 2am<br />
                                        Sun: 11am - 10pm
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="contact-map glass-card">
                        {/* 
              Standard Google Maps Embed iframe. 
              The filter in CSS gives it the synthwave/retro look.
            */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.4831206121855!2d-117.25595678481742!3d32.798157780965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc01b700f507b3%3A0x6b2e3c004dc9e7af!2s4612%20Cass%20St%2C%20San%20Diego%2C%20CA%2092109!5e0!3m2!1sen!2sus!4v1689211025586!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Cass Street Bar & Grill Location"
                        ></iframe>
                        <div className="map-overlay"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
