module.exports = {
    plugins: [
        // Tailwind CSS for utility-first styling
        require('tailwindcss')(),

        // Autoprefixer to automatically add vendor prefixes for better browser support
        require('autoprefixer')(),

        // PostCSS Preset Env for future CSS syntax support (optional but useful)
        // require('postcss-preset-env')({
        //     stage: 1,  // Controls which CSS features are enabled
        //     browsers: 'last 2 versions',  // Specifies browser compatibility
        // }),
    ],
};
