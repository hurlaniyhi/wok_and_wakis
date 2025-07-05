import { CartProvider, FeedbackProvider, FoodItemsProvider } from "@/providers";
import { ReactNode } from "react";

interface TestProvidersProps {
    children: ReactNode;
    cartContext?: {
        isCartOpen?: boolean;
        toggleCart?: () => void;
    };
    feedbackContext?: {
        isLoading?: boolean
    },
    apiContext?: {}
}

export const TestProviders = ({ children, feedbackContext }: TestProvidersProps) => (
    <FoodItemsProvider>
        <FeedbackProvider value={feedbackContext?.isLoading}>
            <CartProvider>
                {children}
            </CartProvider>
        </FeedbackProvider>
    </FoodItemsProvider>
);