/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./gallery.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#4F7942', // Lighter forest green
                primaryHover: '#3A5A30',
                primaryLight: '#557C55'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
