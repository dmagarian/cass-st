import { Link } from 'react-router-dom';
import { Palmtree, MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <h2 className="glow-pink brand-title">
                        <Palmtree className="text-cyan brand-icon" size={28} />
                        Cass St.
                    </h2>
                    <p className="footer-tagline text-muted">San Diego's Best Bar & Grill</p>
                    <div className="social-links">
                        <a href="#" className="social-link glow-cyan"><Instagram className="lucide-icon" size={24} /></a>
                        <a href="#" className="social-link glow-cyan"><Facebook className="lucide-icon" size={24} /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title text-cyan">Location</h3>
                    <ul className="footer-list">
                        <li>
                            <span className="icon-wrapper"><MapPin size={18} className="text-pink" /></span>
                            4612 Cass St<br />San Diego, CA 92109
                        </li>
                        <li>
                            <span className="icon-wrapper"><Phone size={18} className="text-pink" /></span>
                            (858) 270-1320
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-title text-sunset">Hours</h3>
                    <ul className="footer-list">
                        <li>
                            <span className="icon-wrapper"><Clock size={18} className="text-cyan" /></span>
                            Mon - Thu: 11am - 10pm
                        </li>
                        <li className="hours-highlight">
                            <span className="icon-wrapper"><Clock size={18} className="text-pink" /></span>
                            Fri - Sat: 11am - 2am
                        </li>
                        <li>
                            <span className="icon-wrapper"><Clock size={18} className="text-cyan" /></span>
                            Sun: 11am - 10pm
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Cass Street Bar & Grill. Experience the Vibe.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
