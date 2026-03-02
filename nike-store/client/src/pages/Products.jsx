import { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Loader } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from our actual backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                } else {
                    console.error("Failed to fetch products");
                }
            } catch (error) {
                console.error("Error fetching components:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container animate-fade-in-up" style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="section-header">
                <h2 className="section-title">All Products</h2>
                <span style={{ color: 'var(--gray-medium)' }}>{products.length} Results</span>
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '100px 0', color: 'var(--primary)' }}>
                    <Loader size={48} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
                </div>
            ) : (
                <div className="product-grid">
                    {products.length > 0 ? products.map((product, index) => (
                        <div className="product-card animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} key={product._id}>
                            <div className="product-image-wrap">
                                <img
                                    src={`https://i.ibb.co/3Wf2z7s/shoe1.png`}
                                    alt={product.name}
                                    className="product-image"
                                />
                            </div>
                            <div className="product-info">
                                <div className="product-name">{product.name}</div>
                                <div className="product-category">{product.category}</div>
                                <div className="product-price">${product.price.toFixed(2)}</div>
                            </div>
                            <button className="product-action" onClick={() => alert(`Added ${product.name} to cart`)}>
                                <ShoppingBag size={18} />
                            </button>
                        </div>
                    )) : (
                        <div>No products found. Please ensure the backend is running and seeded.</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products;
