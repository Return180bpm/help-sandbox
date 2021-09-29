module.exports = {
    purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                github: "url('icons/github.svg')",
                fingerprint: "url('icons/fingerprint.svg')",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
