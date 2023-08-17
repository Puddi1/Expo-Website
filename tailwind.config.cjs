/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        fontFamily: {
            button: [
                "Montserrat",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
        extend: {
            colors: {
                expo: "#154CC1",
                "expo-60": "rgba(21, 76, 193, 0.6)",
                "black-60": "rgba(0, 0, 0, 0.6)",
                "expo-80": "rgba(21, 76, 193, 0.8)",
                "black-80": "rgba(0, 0, 0, 0.8)",
                "expo-90": "rgba(21, 76, 193, 0.9)",
                "black-90": "rgba(0, 0, 0, 0.9)",
                "expo-95": "rgba(21, 76, 193, 0.95)",
                "black-95": "rgba(0, 0, 0, 0.95)",
            },
            padding: {
                header: "0px 8.5% 0px",
            },
            minWidth: {
                16: "4rem",
            },
            brightness: {
                175: "1.75",
            },
            scale: {
                80: "0.8",
                85: "0.85",
            },
            dropShadow: {
                expo: "0.75px 0.75px 0px #154CC1",
                expoLight: "0px 0px 10px rgba(96, 187, 246, 1)",
                "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
                "4xl": [
                    "0 35px 35px rgba(0, 0, 0, 0.25)",
                    "0 45px 65px rgba(0, 0, 0, 0.15)",
                ],
            },
        },
    },

    plugins: [],
};

module.exports = config;
