import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import { CartProvider, FeedbackProvider, FoodCatalogProvider } from "@/providers";
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
            <FoodCatalogProvider>
                <FeedbackProvider>
                    <CartProvider>
                        <main className={inter.className}>
                            <Component {...pageProps} />
                        </main>
                    </CartProvider>
                </FeedbackProvider>
            </FoodCatalogProvider>
        </ErrorBoundary>
    )
}
