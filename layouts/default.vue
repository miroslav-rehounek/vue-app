<template>
    <v-app>
        <page-header />
        <v-main>
            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
    import PageHeader from '~/components/PageHeader'

    export default {
        components: {
            PageHeader,
        },
        data() {
            return {}
        },
    }
</script>

<style scoped lang="sass">
</style>
