const LoadingSpinner4 = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-12 h-12 flex">
                <div className="w-6 h-6 bg-blue-500 border-r-8 rounded-full transform origin-center scale-0 animate-spin-slow"></div>
                <div className="w-6 h-6 bg-red-500 border-r-4 rounded-full transform origin-center scale-100 animate-spin-slow"></div>
                <div className="w-6 h-6 bg-orange-700 border-r-8 rounded-full transform origin-center scale-100 animate-spin-slow"></div>
                <div className="w-6 h-6 bg-green-500 border-r-4 rounded-full transform origin-center scale-100 animate-spin-slow"></div>
            </div>
            <div className="mt-1 text-center">
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

export default LoadingSpinner4;
