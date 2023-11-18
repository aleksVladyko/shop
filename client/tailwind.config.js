/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-white": "#FFF",
                "text-gray": "#A3A7BF",
                black: "#14161F",
                blue: "#798FFF",
                gray: "#EBECF2",
                green: "#27AE60",
                purple: "#9B51E0",
            },
            padding: {
                "1px": "1px",
                "8px": "8px",
                "40px": "40px",
            },
        },
    },

    plugins: [],
};
