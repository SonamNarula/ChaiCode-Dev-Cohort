import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in-up">
            <section className="hero">
                <div className="container" style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    <div className="hero-content animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                        <h1 className="hero-title">Step into <br />Greatness.</h1>
                        <p className="hero-subtitle">
                            Discover the latest styles and innovations from Nike. Engineered for everyday comfort and engineered for performance.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn-primary">
                                Shop Now <ArrowRight size={18} />
                            </Link>
                            <button className="btn-outline">
                                <Play size={18} style={{ marginRight: '8px' }} /> Watch Video
                            </button>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-bg-text">AIR MAX</div>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
                            alt="Red Nike Shoe"
                            className="hero-shoe"
                            style={{ objectFit: 'contain', filter: 'drop-shadow(0px 30px 40px rgba(0,0,0,0.5))', backgroundColor: 'transparent', mixBlendMode: 'multiply' }}
                            onError={(e) => {
                                e.target.src = 'https://i.ibb.co/3Wf2z7s/shoe1.png';
                                e.target.style.mixBlendMode = 'normal';
                            }}
                        />
                    </div>
                </div>
            </section>

            <section className="products-section container">
                <div className="section-header">
                    <h2 className="section-title">Trending Now</h2>
                    <div className="controls">
                        <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '20px' }}>Men</button>
                        <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', borderRadius: '20px' }}>Women</button>
                    </div>
                </div>

                <div className="product-grid">
                    {/* Mock Featured Product 1 */}
                    <Link to="/products" className="product-card" style={{ animationDelay: '0.1s' }}>
                        <div className="product-image-wrap">
                            <img src="https://i.ibb.co/q5yvHkb/jordan.png" alt="Air Jordan" className="product-image" />
                        </div>
                        <div className="product-info">
                            <div className="product-name">Air Jordan 1 Mid</div>
                            <div className="product-category">Men's Shoes</div>
                            <div className="product-price">$125.00</div>
                        </div>
                        <div className="product-action">
                            <ArrowRight size={18} />
                        </div>
                    </Link>

                    {/* Mock Featured Product 2 */}
                    <Link to="/products" className="product-card" style={{ animationDelay: '0.2s' }}>
                        <div className="product-image-wrap">
                            <img src="https://i.ibb.co/N73hHZT/airmax.png" alt="Air Max" className="product-image" style={{ transform: 'none' }} />
                        </div>
                        <div className="product-info">
                            <div className="product-name">Nike Air Max 270</div>
                            <div className="product-category">Women's Shoes</div>
                            <div className="product-price">$160.00</div>
                        </div>
                        <div className="product-action">
                            <ArrowRight size={18} />
                        </div>
                    </Link>

                    {/* Mock Featured Product 3 */}
                    <Link to="/products" className="product-card" style={{ animationDelay: '0.3s' }}>
                        <div className="product-image-wrap">
                            <img src="https://i.ibb.co/p3D1xJv/dunk.png" alt="Dunk Low" className="product-image" />
                        </div>
                        <div className="product-info">
                            <div className="product-name">Nike Dunk Low Retro</div>
                            <div className="product-category">Men's Shoes</div>
                            <div className="product-price">$115.00</div>
                        </div>
                        <div className="product-action">
                            <ArrowRight size={18} />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
