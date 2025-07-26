import { useEffect, useState } from "react";
import { useCartContext, useFeedbackContext } from "@/providers";

export function useCart (close: () => void) {
    const { cart, removeFromCart, checkout } = useCartContext()
    const { notifier } = useFeedbackContext()
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (cart) getTotalPrice()
    }, [cart])

    function getTotalPrice () {
        const totalPrice = cart.reduce((sum, cartItem) => sum + cartItem.item?.price, 0);
        setTotalPrice(totalPrice)
    }

    async function handleCheckout () {
        await checkout()
        notifier.show('You have successfully checked out', null, 'success')
        close()
    }

    return { 
        cartItems: cart, 
        totalPrice, 
        removeFromCart ,
        checkout: handleCheckout
    }
}