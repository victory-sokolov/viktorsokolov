/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        "blog-posts-list",
        "code-highlight",
        "top-sm",
        "[&>span]:h-sm",
        "red",
        "yellow",
        "green",
    ],
};
