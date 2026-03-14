import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Loader, Star } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setProduct(data);
                } else {
                    console.error("Failed to fetch product details");
                }
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingTop: '150px', paddingBottom: '100px', color: 'var(--primary)', height: '100vh', alignItems: 'flex-start' }}>
                <Loader size={48} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container" style={{ paddingTop: '150px', height: '100vh' }}>
                <h2>Product Not Found</h2>
                <Link to="/products" className="btn-outline" style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowLeft size={18} /> Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="container animate-fade-in-up" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px', color: 'var(--gray-medium)', fontWeight: 500 }}>
                <ArrowLeft size={18} /> Back to all products
            </Link>

            <div className="product-details-layout" style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
                <div className="product-image-container" style={{ flex: '1', backgroundColor: 'var(--secondary)', borderRadius: '30px', padding: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="https://i.ibb.co/3Wf2z7s/shoe1.png"
                        alt={product.name}
                        style={{ width: '100%', maxWidth: '500px', transform: 'rotate(-15deg)', filter: 'drop-shadow(-20px 20px 20px rgba(0,0,0,0.15))', animation: 'float 6s ease-in-out infinite' }}
                    />
                </div>

                <div className="product-info-container" style={{ flex: '1' }}>
                    <div style={{ color: 'var(--accent)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '10px' }}>
                        {product.category}
                    </div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-1px' }}>
                        {product.name}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 600 }}>${product.price.toFixed(2)}</div>
                        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--gray-medium)', gap: '5px' }}>
                            <Star size={18} fill="currentColor" color="var(--accent)" />
                            {product.rating} ({product.numReviews} Reviews)
                        </div>
                    </div>

                    <p style={{ fontSize: '1.1rem', color: 'var(--gray-medium)', lineHeight: 1.6, marginBottom: '40px' }}>
                        {product.description}
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <button className="btn-primary" onClick={() => addToCart(product)} style={{ flex: 1, padding: '18px', fontSize: '1.1rem', justifyContent: 'center' }}>
                            Add to Cart <ShoppingBag size={20} />
                        </button>
                    </div>

                    <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--gray-light)' }}>
                        <h3 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>Product Features</h3>
                        <ul style={{ color: 'var(--gray-medium)', lineHeight: 1.8, listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li>Premium upper materials for durability and comfort</li>
                            <li>Responsive cushioning system designed for all-day wear</li>
                            <li>Durable rubber outsole for superior traction</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Responsive styles */}
            <style>{`
                @media (max-width: 900px) {
                    .product-details-layout {
                        flex-direction: column;
                        gap: 40px;
                    }
                    .product-image-container {
                        padding: 40px;
                    }
                    .product-info-container h1 {
                        font-size: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductDetails;
