<template>
    <v-menu v-model="menuOpen" :close-on-content-click="false" offset-y>
        <template v-slot:activator="{on}">
            <v-text-field
                v-on="on"
                ref="input"
                v-model="formattedDate"
                :label="label"
                clearable
                hide-details
                @click:clear="formattedDate = ''"
                @keypress.enter="parseFormattedDate"
                @blur="parseFormattedDate"
            />
        </template>
        <v-date-picker
            v-model="date"
            first-day-of-week="1"
            show-current
            no-title
            @input="menuOpen = false"
        />
    </v-menu>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            value: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                menuOpen: false,
                date: this.value,
                formattedDate: this.parseToMaskString(this.value),
            }
        },
        watch: {
            value(value) {
                this.formattedDate = this.parseToMaskString(value)
                this.date = value
            },
            date(date) {
                this.$emit('input', date)
            },
        },
        methods: {
            parseFormattedDate() {
                this.date = this.parseFromMaskString(this.formattedDate)
            },
            // Takes ISO String and converts it to the '##. ##. ####' masked format
            parseToMaskString(value) {
                const date = moment(value)

                if (!date.isValid()) {
                    return ''
                }

                return date.format('DD. MM. YYYY')
            },
            // Takes the '##. ##. ####' masked value and parses it back to ISO
            parseFromMaskString(value) {
                const date = moment(value, ['D.M.YYYY', 'D.MM.YYYY', 'DD.M.YYYY', 'DD.MM.YYYY', 'D. M. YYYY', 'D. MM. YYYY', 'DD. M. YYYY', 'DD. MM. YYYY'])

                if (!date.isValid()) {
                    this.formattedDate = ''
                    return null
                }

                return date.format('YYYY-MM-DD')
            },
        },
    }
</script>

<style scoped lang="sass">
</style>
