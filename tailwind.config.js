/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        keyframes: {
            gradientAnimation: {
                "0%": {
                    "background-position": "0% 50%",
                },
                "100%": {
                    "background-position": "100% 50%",
                },
            },
            float: {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" },
            },
            wave: {
                "0%": { transform: "rotate(0.0deg)" },
                "10%": { transform: "rotate(14deg)" },
                "20%": { transform: "rotate(-8deg)" },
                "30%": { transform: "rotate(14deg)" },
                "40%": { transform: "rotate(-4deg)" },
                "50%": { transform: "rotate(10.0deg)" },
                "60%": { transform: "rotate(0.0deg)" },
                "100%": { transform: "rotate(0.0deg)" },
            },
            floatball: {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-10px)" },
            },
            shake: {
                "0%, 100%": { transform: "translateX(0)" },
                "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-3px)" },
                "20%, 40%, 60%, 80%": { transform: "translateX(3px)" },
            },
            fallIn: {
                "0%": {
                    transform: "translateY(-100%)",
                    opacity: "0",
                },
                "100%": {
                    transform: "translateY(0)",
                    opacity: "1",
                },
            },
            fadeInUp: {
                "0%": { opacity: "0", transform: "translateY(1rem)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
            },
            spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
            bounce: {
                "0%, 100%": { transform: "translateY(-50%)" },
                "50%": { transform: "translateY(0)" },
            },
            bounce2: {
                "0%, 100%": { transform: "translateY(50%)" },
                "50%": { transform: "translateY(0)" },
            },
            chase: {
                "0%, 100%": { transform: "scale(0)" },
                "50%": { transform: "scale(1)" },
            },
            "pulse-slow": {
                "0%, 100%": { opacity: "1" },
                "50%": { opacity: "0.5" },
            },
            "pulse-glow": {
                "0%, 100%": {
                    boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.5)",
                    transform: "translateY(50%)",
                },
                "50%": {
                    boxShadow: "0 0 0 8px rgba(59, 130, 246, 0)",
                    transform: "translateY(0)",
                },
            },
        },
        animation: {
            "waving-hand": "wave 2s linear infinite",
            "spin-slow": "spin 3s linear infinite",
            bounce: "bounce 1s infinite",
            bounce2: "bounce2 1s infinite",
            chase: "chase 2s infinite",
            "pulse-slow": "pulse-slow 1s infinite",
            "pulse-glow": "pulse-glow 1s infinite",
        },
    },
    plugins: [],
};
