
import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {

        setCartItems((prevItems) => {

            const existingProduct = prevItems.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prevItems,
                { ...product, quantity: 1 }
            ];
        });
    };

    const cartCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Quantity increase/decrease
const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id
                ? {
                    ...item,
                    quantity:
                        action === "increase"
                            ? item.quantity + 1
                            : Math.max(1, item.quantity - 1)
                }
                : item
        )
    );
};

// Remove product
const removeFromCart = (id) => {
    setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== id)
    );
};

const clearCart = () => {
    setCartItems([]);
};

// Calculate total price
const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

    return (
        <CartContext.Provider
    value={{
        cartItems,
        addToCart,
        cartCount,
        updateQuantity,
        removeFromCart,
        totalPrice,
        clearCart
    }}
>
    {children}
</CartContext.Provider>
    );
};

export default CartProvider;
