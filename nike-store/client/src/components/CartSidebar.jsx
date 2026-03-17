import { useContext } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const CartSidebar = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal,
        isCartOpen,
        setIsCartOpen
    } = useContext(CartContext);

    if (!isCartOpen) return null;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    zIndex: 1000,
                    animation: 'fadeIn 0.3s ease'
                }}
                onClick={() => setIsCartOpen(false)}
            />

            <div
                style={{
                    position: 'fixed',
                    top: 0, right: 0, bottom: 0,
                    width: '100%',
                    maxWidth: '450px',
                    backgroundColor: 'var(--white)',
                    zIndex: 1001,
                    display: 'flex',
                    flexDirection: 'column',
                    animation: 'slideInRight 0.3s ease',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
                }}
            >
                <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--gray-light)' }}>
                    <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ShoppingBag /> Your Cart
                    </h2>
                    <button onClick={() => setIsCartOpen(false)} style={{ padding: '8px', background: 'var(--gray-light)', borderRadius: '50%' }}>
                        <X size={20} />
                    </button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
                    {cartItems.length === 0 ? (
                        <div style={{ textAlign: 'center', color: 'var(--gray-medium)', marginTop: '50px' }}>
                            <ShoppingBag size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {cartItems.map(item => (
                                <div key={item._id} style={{ display: 'flex', gap: '16px', backgroundColor: 'var(--secondary)', padding: '12px', borderRadius: '16px' }}>
                                    <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--white)', borderRadius: '12px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://i.ibb.co/3Wf2z7s/shoe1.png" alt={item.name} style={{ width: '100%', transform: 'rotate(-15deg)' }} />
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '4px' }}>{item.name}</div>
                                        <div style={{ color: 'var(--gray-medium)', fontSize: '0.85rem', marginBottom: '8px' }}>{item.category}</div>
                                        <div style={{ fontWeight: 700, color: 'var(--primary)' }}>${(item.price * item.qty).toFixed(2)}</div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <button onClick={() => removeFromCart(item._id)} style={{ color: 'var(--gray-medium)', padding: '4px' }}>
                                            <Trash2 size={16} />
                                        </button>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--white)', borderRadius: '20px', padding: '4px 8px' }}>
                                            <button onClick={() => updateQuantity(item._id, item.qty - 1)} disabled={item.qty <= 1} style={{ opacity: item.qty <= 1 ? 0.3 : 1 }}>
                                                <Minus size={12} />
                                            </button>
                                            <span style={{ fontSize: '0.9rem', width: '16px', textAlign: 'center' }}>{item.qty}</span>
                                            <button onClick={() => updateQuantity(item._id, item.qty + 1)}>
                                                <Plus size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div style={{ padding: '24px', borderTop: '1px solid var(--gray-light)', backgroundColor: 'var(--white)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '1.25rem', fontWeight: 700 }}>
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.1rem' }}>
                            Checkout
                        </button>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes slideInRight {
                    from { transform: translateX(100%); }
                    to { transform: translateX(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </>
    );
};

export default CartSidebar;
