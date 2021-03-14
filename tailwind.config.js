module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            display: ["Roboto", "sans-serif"],
            body: ["Roboto", "sans-serif"],
        },
    },
    variants: {
        extend: {
            textColor: ["responsive", "focus", "hover", "group-hover"],
            borderStyle: ["responsive", "focus"],
            borderWidth: ["responsive", "focus"],
        },
    },
    plugins: [],
};
