<template>
    <v-card>
        <v-card-text class="d-flex">
            <v-card-title>
                Current tasks
            </v-card-title>
            <v-spacer />

            <v-btn fab color="primary" @click="emitOpenDialog">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-text>
        <v-list>
            <v-list-item v-for="task in tasks" :key="task.id">
                <v-list-item-action>
                    <v-checkbox v-model="task.completed" />
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title :class="{'completed': task.completed}">
                        {{ task.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        {{ formatDate(task.dueDate) }}
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-btn class="delete-button" icon @click="emitDeleteTask(task.id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            tasks: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {}
        },
        methods: {
            emitOpenDialog() {
                this.$emit('openDialog')
            },
            emitDeleteTask(id) {
                this.$emit('deleteTask', id)
            },
            formatDate(date) {
                return date ? moment(date).format('DD. MM. YYYY') : ''
            },
        },
    }
</script>

<style scoped lang="sass">
    .completed
        text-decoration: line-through

    .v-list-item

        .delete-button
            opacity: 0

        &:hover
            .delete-button
                opacity: 1
</style>
