import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'var(--white)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
                <div>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>Find a Store</h3>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>Become a Member</h3>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>Sign Up for Email</h3>
                    <h3 style={{ textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '1px' }}>Student Discounts</h3>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>Get Help</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--gray-medium)', fontSize: '0.9rem' }}>
                        <li><Link to="#">Order Status</Link></li>
                        <li><Link to="#">Delivery</Link></li>
                        <li><Link to="#">Returns</Link></li>
                        <li><Link to="#">Payment Options</Link></li>
                        <li><Link to="#">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '20px' }}>About Nike</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--gray-medium)', fontSize: '0.9rem' }}>
                        <li><Link to="#">News</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Investors</Link></li>
                        <li><Link to="#">Sustainability</Link></li>
                    </ul>
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                    <a href="#" style={{ color: 'var(--gray-medium)', padding: '10px', backgroundColor: '#222', borderRadius: '50%', display: 'flex' }}><Twitter size={20} /></a>
                    <a href="#" style={{ color: 'var(--gray-medium)', padding: '10px', backgroundColor: '#222', borderRadius: '50%', display: 'flex' }}><Facebook size={20} /></a>
                    <a href="#" style={{ color: 'var(--gray-medium)', padding: '10px', backgroundColor: '#222', borderRadius: '50%', display: 'flex' }}><Youtube size={20} /></a>
                    <a href="#" style={{ color: 'var(--gray-medium)', padding: '10px', backgroundColor: '#222', borderRadius: '50%', display: 'flex' }}><Instagram size={20} /></a>
                </div>
            </div>

            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #333', paddingTop: '30px', color: 'var(--gray-medium)', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    © 2026 Nike, Inc. All Rights Reserved
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link to="#">Guides</Link>
                    <Link to="#">Terms of Sale</Link>
                    <Link to="#">Terms of Use</Link>
                    <Link to="#">Nike Privacy Policy</Link>
                </div>
            </div>
            {/* Hover styles for links */}
            <style>{`
                footer ul li a:hover, footer .container > div > a:hover {
                    color: var(--white);
                    transition: color 0.3s ease;
                }
            `}</style>
        </footer>
    );
};

export default Footer;
