<template>
    <v-dialog v-model="dialogOpen" max-width="650" transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar color="primary" dark>
                <v-toolbar-title>
                    New task
                </v-toolbar-title>
                <v-spacer />
                <v-btn dark icon @click="dialogOpen = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field v-model="task.name" autofocus label="Name" />
                    </v-col>
                    <v-col cols="12" sm="6">
                        <input-date v-model="task.dueDate" label="Due date" />
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-actions class="pa-2">
                <v-spacer />
                <v-btn text color="primary" @click="dialogOpen = false">Cancel</v-btn>
                <v-btn color="primary" :disabled="!task.name" @click="submit">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import InputDate from '~/components/InputDate'

    export default {
        components: {
            InputDate,
        },
        props: {
            value: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                dialogOpen: this.value,
                task: this.generateTask(),
            }
        },
        watch: {
            value(value) {
                this.dialogOpen = value
            },
            dialogOpen(value) {
                this.$emit('input', value)
            },
        },
        methods: {
            submit() {
                this.$emit('createTask', this.task)
                this.task = this.generateTask()
                this.dialogOpen = false
            },
            generateTask() {
                return {
                    id: Math.floor(Math.random() * 100000),
                    name: '',
                    completed: false,
                    dueDate: '',
                }
            },
        },
    }
</script>

<style scoped lang="sass">
    .v-card
        background: #eeeeee
</style>
