// This file is ignored by Nuxt.js but is used by WebStorm to resolve paths starting with "~/"
// Go to "Settings -> Language & Frameworks -> Javascript -> Webpack" and choose this file
// This also enables suggest and automatic import for components
module.exports = {
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '~': path.resolve(__dirname),
        },
    },
}
