import React, { useState, useEffect } from "react";
import LoadingSpinner from "./ui/loadingspinners/LoadingSpinner1";
import LoadingSpinner2 from "./ui/loadingspinners/LoadingSpinner2";
import LoadingSpinner3 from "./ui/loadingspinners/LoadingSpinner3";
import LoadingSpinner4 from "./ui/loadingspinners/LoadingSpinner4";
import LoadingSpinner5 from "./ui/loadingspinners/LoadingSpinner5";
import LoadingSpinner6 from "./ui/loadingspinners/LoadingSpinner6";

const LoadingSpinnerTest = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay for demonstration
        setTimeout(() => {
            setIsLoading(false);
        }, 10000);
    }, []);

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner2 />
            ) : (
                // Your main content goes here
                <div className="text-center mt-8">
                    <p className="text-xl font-semibold text-green-600">
                        Download Complete!
                    </p>
                    <p className="text-sm text-gray-500">
                        Your motivation is ready to go.
                    </p>
                </div>
            )}
        </div>
    );
};

export default LoadingSpinnerTest;
