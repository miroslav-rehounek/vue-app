<template>
    <v-container fluid>
        <v-row justify="center">
            <card-timer />
        </v-row>
        <dialog-task-create v-model="dialogOpen" @createTask="createTask" />
        <v-row justify="center" align="center">
            <v-col cols="12" sm="6">
                <card-tasks :tasks="tasks" @deleteTask="deleteTask" @openDialog="openDialog" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import CardTimer from '~/components/CardTimer'
    import CardTasks from '~/components/CardTasks'
    import DialogTaskCreate from '~/components/DialogTaskCreate'

    export default {
        components: {
            CardTimer,
            CardTasks,
            DialogTaskCreate,
        },
        data() {
            return {
                dialogOpen: false,
                tasks: [],
            }
        },
        methods: {
            createTask(task) {
                this.tasks.push(task)
            },
            deleteTask(id) {
                const index = this.tasks.findIndex(task => task.id === id)
                if (index > -1) {
                    this.tasks.splice(index, 1)
                }
            },
            openDialog() {
                this.dialogOpen = true
            },
        },
    }
</script>

<style scoped lang="sass">
</style>
