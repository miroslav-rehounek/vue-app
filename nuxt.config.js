export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - myra',
        title: 'myra',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/main.sass',
    ],

    styleResources: {
        sass: ['~/assets/variables.sass'],
    },

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/v-mask',
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxtjs/style-resources',
    ],

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        // customVariables: ['~/assets/variables.scss'],
        theme: {
            themes: {
                light: {
                    primary: '#A20021',
                    secondary: '#235610',
                    accent: '#D64933',
                    error: '#FF5252',
                    info: '#9EB7E5',
                    success: '#669D31',
                    warning: '#A57548',
                },
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}
