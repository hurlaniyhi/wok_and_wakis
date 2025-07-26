/* eslint-disable */
import { CartContextType, CartItem, ICartProvider } from "@/types";
import React, {useContext, useEffect, useState} from "react";

const CartContext = React.createContext<CartContextType|null>(null)

export const CartProvider = ({children, initialCartItems}: ICartProvider) => {
    const [cart, setCart] = useState<Array<CartItem>>(initialCartItems || [])

    useEffect(() => {
        restoreCartData()
    }, []);
    
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('@cart', JSON.stringify(cart));
        } else {
            localStorage.removeItem('@cart');
        }
    }, [cart]);

    function addItemToCart (cartItem: CartItem) {
        setCart((prev) => {
            const exists = prev.find(p => p.cartId === cartItem.cartId);
            if (exists) {
                return prev.map(p =>p.cartId === cartItem.cartId ? cartItem : p);
            }
            return [...prev, cartItem];
        });
    }
    
    function removeFromCart (cartId: number) {
        setCart((prev) => prev.filter(p => p.cartId !== cartId));
    };

    function getCartItemById (cartId: number) {
        const item = cart.find(item => item.cartId === cartId);
        
        return item
    }

    function restoreCartData () {
        try {
            const stored = localStorage.getItem('@cart');
            if (stored) setCart(JSON.parse(stored));
        } catch (e) {
            console.error('Failed to parse stored cart', e);
        }
    }

    function checkout () {
        setCart([])
    }

    const stateActions = {
        addItemToCart,
        removeFromCart,
        getCartItemById,
        checkout
    }

    return (
        <CartContext.Provider value={{cart, ...stateActions}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCartContext must be used within Cart Provider');
    return context;
};