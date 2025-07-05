import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import { CartProvider, FeedbackProvider, FoodItemsProvider } from "@/providers";
import { GeneralFallback } from "@/components/error-fallback";
import { ErrorBoundary } from 'react-error-boundary';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ErrorBoundary 
            FallbackComponent={GeneralFallback}
        >
            <FoodItemsProvider>
                <FeedbackProvider>
                    <CartProvider>
                        <main className={inter.className}>
                            <Component {...pageProps} />
                        </main>
                    </CartProvider>
                </FeedbackProvider>
            </FoodItemsProvider>
        </ErrorBoundary>
    )
}
