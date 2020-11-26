<template>
    <v-app>
        <v-card-text class="text-center">
            <h1 class="ma-5">
                {{ displayedMessage }}
            </h1>
            <v-btn color="primary" nuxt to="/">Homepage</v-btn>
        </v-card-text>
    </v-app>
</template>

<script>
    export default {
        layout: 'empty',
        props: {
            error: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {
                pageNotFound: 'Page not found.',
                otherError: 'An error occurred.',
            }
        },
        computed: {
            displayedMessage() {
                return this.error.statusCode === 404 ? this.pageNotFound : this.otherError
            },
        },
        head() {
            const title =
                this.error.statusCode === 404 ? this.pageNotFound : this.otherError
            return {
                title,
            }
        },
    }
</script>

<style scoped>
    h1 {
        font-size: 20px;
    }
</style>
