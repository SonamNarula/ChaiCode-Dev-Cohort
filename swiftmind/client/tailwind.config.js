/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                swiftie: {
                    pink: '#FFC0CB',
                    purple: '#E6E6FA',
                    black: '#1f1f1f',
                    red: '#8B0000',
                    blue: '#AEC6CF',
                }
            },
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
            }
        },
    },
    plugins: [],
}
