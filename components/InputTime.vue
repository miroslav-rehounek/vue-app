<template>
    <v-text-field
        ref="input"
        v-model="time"
        v-mask="'##:##'"
        :readonly="readOnly"
        solo
        flat
        hide-details
        @blur="emitChanges"
    />
</template>

<script>
    import {padStart} from '~/utils/time'

    export default {
        props: {
            value: {
                type: Number,
                required: true,
            },
            readOnly: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                time: this.parseToMaskString(this.value),
            }
        },
        watch: {
            value(value) {
                this.time = this.parseToMaskString(value)
            },
        },
        methods: {
            emitChanges() {
                const parsedBack = this.parseFromMaskString(this.time)
                this.$emit('input', parsedBack)
            },
            // Takes time in seconds and converts it to the '##:##' masked format
            parseToMaskString(value) {
                // 59:59, can't exceed that value
                const maxValue = 59 * 60 + 59

                let min
                let sec

                if (value > maxValue) {
                    min = '59'
                    sec = '59'
                } else {
                    min = String(Math.floor(value / 60))
                    sec = String(value % 60)
                }

                min = padStart(min, 2, '0')
                sec = padStart(sec, 2, '0')

                return `${min}:${sec}`
            },
            // Takes the '##:##' masked value and parses it back to seconds
            parseFromMaskString(value) {
                const parts = value.split(':')
                let min = parseInt(parts[0])
                let sec = parseInt(parts[1])

                if (min > 59) {
                    min = 59
                }
                if (sec > 59) {
                    sec = 59
                }

                if (Number.isNaN(min)) {
                    min = 0
                }
                if (Number.isNaN(sec)) {
                    sec = 0
                }
                return min * 60 + sec
            },
        },
    }
</script>

<style scoped lang="sass">
    .v-text-field
        padding: 5px 0
        font-size: 48px

        ::v-deep input
            text-align: center
            max-height: unset
</style>
