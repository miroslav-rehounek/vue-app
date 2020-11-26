<template>
    <v-card tile elevation="6">
        <v-img max-width="400" max-height="350" src="/profile.jpg" class="d-flex align-end">
            <v-card-title>Miroslav Rehounek</v-card-title>
        </v-img>
        <v-card-subtitle>Software developer at ...</v-card-subtitle>
        <v-list tile class="pa-0">
            <v-list-group prepend-icon="mdi-account-circle" v-model="contactExpanded">
                <template v-slot:activator>
                    <v-list-item-title>Contact</v-list-item-title>
                </template>
                <v-list-item v-for="(item, index) in contactItems" :key="index">
                    <v-list-item-icon>
                        <v-icon>{{ `mdi-${item.type}` }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-subtitle>
                            {{ item.label }}
                        </v-list-item-subtitle>
                        <v-list-item-title>
                            <a v-if="item.type === 'email'" :href="'mailto:' + item.value">{{ item.value }}</a>
                            <span v-else>{{ item.value }}</span>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                contactExpanded: false,
                contactItems: [
                    {
                        label: 'Email',
                        type: 'email',
                        value: 'rehounek.miroslav@gmail.com',
                    },
                    {
                        label: 'Phone',
                        type: 'phone',
                        value: '+420 602 531 456',
                    },
                ],
            }
        },
    }
</script>

<style scoped lang="sass">
    .v-card__title
        color: white
        font-weight: bold
</style>
