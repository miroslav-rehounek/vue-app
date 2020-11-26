<template>
    <v-app-bar app dense>
        <v-toolbar-title class="primary--text">
            Myra
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items>
            <v-btn
                v-for="link in navigationLinks"
                :key="link.name"
                active-class="active"
                depressed
                nuxt
                :to="link.to"
            >
                {{ link.name }}
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
    export default {
        data() {
            return {
                navigationLinks: [
                    {
                        name: 'home',
                        to: '/',
                    },
                    {
                        name: 'profile',
                        to: '/profile',
                    },
                ],
            }
        },
    }
</script>

<style scoped lang="sass">
    .v-toolbar__title
        font-size: 24px

    .active
        color: $primary !important

        &:before
            display: none
</style>
