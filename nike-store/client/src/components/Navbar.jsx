import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { cartCount, setIsCartOpen } = useContext(CartContext);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="nav-logo">
                <svg fill="#111" height="48px" width="48px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 312 312" xmlSpace="preserve">
                    <path d="M129.5,88.9c37.7-18.8,55.9-46.1,43.2-66.2c-5.9-9.3-16.1-15.5-28.7-17.5c-44.5-7.1-105.7,59.3-138.8,111.4 C-9.3,139.7-0.7,163,16,163C52.7,163,88.2,109.5,129.5,88.9z" />
                </svg>
            </Link>

            <div className="nav-links">
                <Link to="/products">New & Featured</Link>
                <Link to="/products">Men</Link>
                <Link to="/products">Women</Link>
                <Link to="/products">Kids</Link>
                <Link to="/products">Sale</Link>
            </div>

            <div className="nav-icons">
                <button className="icon-btn">
                    <Search size={22} />
                </button>
                <button className="icon-btn" onClick={() => setIsCartOpen(true)} style={{ position: 'relative' }}>
                    <ShoppingBag size={22} />
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute', top: '-5px', right: '-5px',
                            backgroundColor: 'var(--accent)', color: 'var(--white)',
                            fontSize: '0.7rem', fontWeight: 700,
                            width: '18px', height: '18px',
                            borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            {cartCount}
                        </span>
                    )}
                </button>
                <button className="icon-btn mobile-only" style={{ display: 'none' }}>
                    <Menu size={22} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
