
export type FoodItem = {
    id: number,
    title: string,
    description: string,
    price: number,
    category: string,
    isPopular: boolean,
    imageUrl: string
}

export type CartItem = {
    item: FoodItem,
    selectedCheeses: Array<string>,
    eggStyle: string,
    instructions: {
        kitchenNote: string,
        soldOutOption: string
    },
    quantity: number,
    cartId: number
}

export type CheeseOption = {
    label: string;
    price: string;
    highlight?: boolean;
    [key: string]: any;
};

export type FeedbackContextType = {
    feedback: {
        isLoading: boolean,
        notification: {
            status: boolean,
            message: string,
            title: string,
            type: 'success'|'error'
        }
    },
    loader: (value: boolean) => void,
    notifier: {
        show: (message: string, title?: string|null, type?: string) => void,
        hide: () => void
    }
}

export type CartContextType = {
    cart: Array<CartItem>,
    addItemToCart: (cartItem: CartItem) => void,
    removeFromCart: (cartId: number) => void,
    getCartItemById: (cartId: number) => CartItem|undefined,
    checkout: () => void
}

export type FoodCatalog = {
    foodItems: Array<FoodItem>,
    selectedCategory: string
}

export type FoodCatalogContextType = {
    foodCatalog: FoodCatalog,
    storeFoodItems: (items: Array<FoodItem>) => void,
    updateSelectedCategory: (selectedCategory: string) => void
}