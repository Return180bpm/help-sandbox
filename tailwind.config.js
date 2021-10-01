module.exports = {
    purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        boxShadow: {
            sm: "4px 4px 0px 0px rgba(0,0,0,0.60)",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
