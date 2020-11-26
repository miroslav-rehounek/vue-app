<template>
    <v-container fluid>
        <v-row justify="center">
            <card-profile />
        </v-row>
    </v-container>
</template>

<script>
    import CardProfile from '~/components/CardProfile'

    export default {
        components: {
            CardProfile,
        },
    }
</script>
