type Props = {
    error: Error;
    resetErrorBoundary: () => void;
};

export function GeneralFallback ({ error, resetErrorBoundary }: Props) {

    return (
        <div className="max-w-3xl mx-auto my-32 p-10 rounded-2xl border border-red-300 bg-red-50 text-center shadow-xl">
            <h2 className="text-3xl font-bold text-red-600 mb-4">
                😞 Oops! Something went wrong.
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
                We're sorry — something broke unexpectedly. Please try again or contact support.
            </p>

            <details className="text-base text-gray-600 mb-8">
                <summary className="cursor-pointer underline font-medium">Technical Details</summary>
                <pre className="whitespace-pre-wrap break-words mt-3">{error.message}</pre>
            </details>

            <button
                onClick={resetErrorBoundary}
                className="bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-6 py-3 rounded-lg transition"
            >
                Retry
            </button>
        </div>
    )
}