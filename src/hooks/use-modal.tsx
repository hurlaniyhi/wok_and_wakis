import { useEffect, useState } from "react";
import { useCartContext, useFeedbackContext } from "@/providers";
import { CartItem, FoodItem } from "@/types";
import { cheeseOptions, eggOptions } from '@/lib/constants'

export function useModal (item: FoodItem, close: () => void) {
    const { addItemToCart, getCartItemById } = useCartContext()
    const { notifier } = useFeedbackContext()
    const [openGroup, setOpenGroup] = useState({ eggs: true, cheese: true , instructions: true });
    const [eggStyle, setEggStyle] = useState<string>('Scrambled');
    const [selectedCheeses, setSelectedCheeses] = useState<string[]>(['Add Swiss']);
    const [instructions, setInstructions] = useState({kitchenNote: '', soldOutOption: ''})
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        getCartItem()
    }, [])

    const getCartItem = () => {
        const cartItem = getCartItemById(item.id)
        if (cartItem) {
            setEggStyle(cartItem.eggStyle)
            setSelectedCheeses(cartItem.selectedCheeses),
            setInstructions(cartItem.instructions)
            setQuantity(cartItem.quantity)
        }
    }

    const toggleGroup = (key: 'eggs' | 'cheese' | 'instructions') => {
        setOpenGroup(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleCheeseToggle = (cheese: string) => {
        setSelectedCheeses(prev => {
            if (prev.includes(cheese)) {
                return prev.filter(c => c !== cheese);
            } else {
                if (prev.length >= 3) return prev; // max 3
                return [...prev, cheese];
            }
        });
    };

    const handleInstructions = (e: React.ChangeEvent<HTMLTextAreaElement|HTMLSelectElement>) => {
        setInstructions({...instructions, [e.target.name]: e.target.value})
    }

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            selectedCheeses,
            eggStyle,
            instructions,
            quantity,
            item,
            cartId: item.id
        }

        addItemToCart(cartItem)
        notifier.show('Item successfully added to cart', null, 'success')
        
        close()
    }

    return { 
        openGroup, 
        selectedCheeses,
        cheeseOptions,
        eggOptions,
        eggStyle,
        instructions,
        quantity,
        onQuantityChange: setQuantity,
        onEggStyleChange: setEggStyle,
        toggleGroup,
        handleCheeseToggle,
        handleInstructions,
        handleAddToCart
    }
}