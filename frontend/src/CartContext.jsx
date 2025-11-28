import {createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCard] = useState(()=>{
        const savedCart = localStorage.getItem('cart');
        return savedCart? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product) => {
        const existingProduct = cart.find(item => item._id === product._id);

        if (existingProduct) {
            setCard(cart.map(item => 
                item._id === product._id ? {...item, quantity: item.quantity + 1} : item
            ));
        } else {
            setCard([...cart, {...product, quantity: 1}]);
        }
        alert(`Bạn vừa thêm sản phẩm: ${product.title} vào giỏ hàng.`);
    };
    const removeFromCart = (productId) => {
        setCard(cart.filter(item => item._id !== productId));
        alert(`Bạn vừa xóa sản phẩm khỏi giỏ hàng.`);
    };
   const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCard(cart.map(item => 
        item._id === productId ? {...item, quantity: newQuantity} : item
    ));
   };
   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
   const clearCart = () => {
    setCard([]);
   };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
} 
