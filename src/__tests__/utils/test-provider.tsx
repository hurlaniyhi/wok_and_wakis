import { ReactNode } from "react";
import { CartProvider, FeedbackProvider, FoodCatalogProvider } from "@/providers";
import { CartItem } from "@/types";

interface TestProvidersProps {
    children: ReactNode;
    cartItems?: Array<CartItem>,
    feedbackContext?: {
        isLoading?: boolean
    }
}

export const TestProviders = ({ children, cartItems }: TestProvidersProps) => (
    <FoodCatalogProvider>
        <FeedbackProvider>
            <CartProvider initialCartItems={cartItems}>
                {children}
            </CartProvider>
        </FeedbackProvider>
    </FoodCatalogProvider>
);