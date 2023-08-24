const LoadingSpinner6 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex items-center justify-center  space-x-2">
                <div className="w-16 h-16 border-4 border-blue-500 border-l-8 border-solid rounded-full animate-pulse-glow"></div>
                <div className="w-16 h-16 border-4 border-red-600 border-l-8  border-r-8 border-solid rounded-full animate-pulse-glow"></div>
                <div className="w-16 h-16 border-4 border-blue-500 border-r-8 border-solid rounded-full animate-pulse-glow"></div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-lg font-semibold text-gray-700">
                    Loading...
                </p>
                <p className="text-sm text-gray-500">
                    We're getting things ready for you.
                </p>
            </div>
        </div>
    );
};

export default LoadingSpinner6;
