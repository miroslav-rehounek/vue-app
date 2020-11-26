module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
    ],
    rules: {
        indent: ['off'],
        'indent-legacy': ['error', 4, {SwitchCase: 1}],
        'max-len': ['error', 200],
        semi: ['off'],
        'new-cap': ['off'],
        'no-unused-vars': ['off'],
        'no-return-await': ['off'],
        'object-curly-spacing': ['error', 'never'],
        'space-before-function-paren': ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        'vue/html-indent': ['off'],
        'vue/script-indent': ['error', 4, {baseIndent: 1, switchCase: 1}],
        'no-console': ['warn', {allow: ['warn', 'error']}],
        'no-debugger': ['warn'],
    },
}
