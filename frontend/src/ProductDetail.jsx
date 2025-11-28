import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import e from 'cors';
import { useCart } from './CartContext';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!product) {
        return (
            <div style={{ 
                textAlign: 'center', 
                marginTop: '100px',
                fontSize: '1.2rem',
                color: '#00d4ff',
                textShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
            }}>
                ⏳ Đang tải sản phẩm...
            </div>
        );
    }

    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        alert(`✅ Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
        setQuantity(1);
    };

    return (
        <div style={{
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            {/* Nút quay lại */}
            <button
                onClick={() => navigate(-1)}
                style={{
                    marginBottom: '30px',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    color: '#00d4ff',
                    borderRadius: '8px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(5px)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.25)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 212, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
            >
                ← Quay lại
            </button>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '50px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                borderRadius: '16px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>

                {/* Cột trái: Ảnh */}
                <div>
                    <div style={{
                        position: 'relative',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)',
                        padding: '20px',
                        marginBottom: '20px'
                    }}>
                        <img
                            src={product.images?.[selectedImage] || product.thumbnail}
                            alt={product.title}
                            style={{
                                width: '100%',
                                height: '400px',
                                objectFit: 'contain',
                                borderRadius: '8px'
                            }}
                        />
                    </div>

                    {/* Thumbnail gallery */}
                    {product.images && product.images.length > 0 && (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '10px'
                        }}>
                            <div
                                onClick={() => setSelectedImage(-1)}
                                style={{
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    border: selectedImage === -1 ? '3px solid #00d4ff' : '2px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.3s ease',
                                    height: '80px'
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedImage !== -1) e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedImage !== -1) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                            >
                                <img src={product.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            {product.images.map((img, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    style={{
                                        cursor: 'pointer',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        border: selectedImage === index ? '3px solid #00d4ff' : '2px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease',
                                        height: '80px'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedImage !== index) e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.5)';
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedImage !== index) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    }}
                                >
                                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Cột phải: Thông tin */}
                <div>
                    <h1 style={{
                        color: '#e0e0e0',
                        fontSize: '2.2rem',
                        fontWeight: '800',
                        marginBottom: '15px',
                        lineHeight: '1.3'
                    }}>
                        {product.title}
                    </h1>

                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        marginBottom: '25px',
                        flexWrap: 'wrap'
                    }}>
                        <span style={{
                            background: 'rgba(0, 212, 255, 0.15)',
                            border: '1px solid rgba(0, 212, 255, 0.3)',
                            color: '#00d4ff',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            🏢 {product.brand}
                        </span>
                        <span style={{
                            background: 'rgba(46, 204, 113, 0.15)',
                            border: '1px solid rgba(46, 204, 113, 0.3)',
                            color: '#2ecc71',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '600'
                        }}>
                            📦 {product.category}
                        </span>
                    </div>

                    {/* Price */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(46, 204, 113, 0.2) 100%)',
                        border: '1px solid rgba(0, 212, 255, 0.3)',
                        padding: '25px',
                        borderRadius: '12px',
                        marginBottom: '25px'
                    }}>
                        <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '8px' }}>Giá</div>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: '900',
                            background: 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            margin: '0'
                        }}>
                            ${product.price}
                        </h2>
                    </div>

                    {/* Description */}
                    <p style={{
                        lineHeight: '1.7',
                        color: '#d0d0d0',
                        marginBottom: '25px',
                        fontSize: '1rem'
                    }}>
                        {product.description}
                    </p>

                    {/* Rating & Stock */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px',
                        marginBottom: '25px'
                    }}>
                        <div style={{
                            background: 'rgba(255, 215, 0, 0.1)',
                            border: '1px solid rgba(255, 215, 0, 0.3)',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '5px' }}>Đánh giá</div>
                            <div style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: '#ffd700'
                            }}>
                                ⭐ {product.rating || 0}
                            </div>
                        </div>

                        <div style={{
                            background: product.stock > 0 ? 'rgba(46, 204, 113, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                            border: product.stock > 0 ? '1px solid rgba(46, 204, 113, 0.3)' : '1px solid rgba(255, 68, 68, 0.3)',
                            padding: '15px',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            <div style={{ color: '#b0b0b0', fontSize: '0.85rem', marginBottom: '5px' }}>Kho hàng</div>
                            <div style={{
                                fontSize: '1.8rem',
                                fontWeight: '700',
                                color: product.stock > 0 ? '#2ecc71' : '#ff4444'
                            }}>
                                {product.stock > 0 ? `${product.stock} sản phẩm` : 'Hết hàng'}
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div style={{ marginBottom: '25px' }}>
                        <div style={{ color: '#b0b0b0', fontSize: '0.9rem', marginBottom: '10px', fontWeight: '600' }}>
                            Số lượng
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px',
                            width: 'fit-content'
                        }}>
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: quantity <= 1 ? '#666' : '#00d4ff',
                                    padding: '10px 15px',
                                    fontSize: '1.2rem',
                                    cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (quantity > 1) e.currentTarget.style.color = '#2ecc71';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#00d4ff';
                                }}
                            >
                                −
                            </button>
                            <input
                                type="number"
                                min="1"
                                max={product.stock || 999}
                                value={quantity}
                                onChange={(e) => setQuantity(Math.min(product.stock || 999, Math.max(1, parseInt(e.target.value) || 1)))}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: '#e0e0e0',
                                    padding: '10px',
                                    width: '60px',
                                    textAlign: 'center',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    outline: 'none'
                                }}
                            />
                            <button
                                onClick={() => setQuantity(Math.min(product.stock || 999, quantity + 1))}
                                disabled={quantity >= (product.stock || 999)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: quantity >= (product.stock || 999) ? '#666' : '#00d4ff',
                                    padding: '10px 15px',
                                    fontSize: '1.2rem',
                                    cursor: quantity >= (product.stock || 999) ? 'not-allowed' : 'pointer',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (quantity < (product.stock || 999)) e.currentTarget.style.color = '#2ecc71';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#00d4ff';
                                }}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to cart button */}
                    <button
                        onClick={handleAddToCart}
                        disabled={product.stock <= 0}
                        style={{
                            width: '100%',
                            padding: '18px',
                            background: product.stock > 0 
                                ? 'linear-gradient(135deg, #00d4ff 0%, #2ecc71 100%)'
                                : 'linear-gradient(135deg, #666 0%, #444 100%)',
                            color: product.stock > 0 ? '#0f0f1e' : '#999',
                            border: 'none',
                            fontSize: '1.2rem',
                            fontWeight: '800',
                            borderRadius: '10px',
                            cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: product.stock > 0 ? '0 8px 25px rgba(0, 212, 255, 0.3)' : 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        onMouseEnter={(e) => {
                            if (product.stock > 0) {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 212, 255, 0.4)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 212, 255, 0.3)';
                        }}
                    >
                        {product.stock > 0 ? '🛒 Thêm vào giỏ hàng' : 'Hết hàng'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;