<template>
    <v-card max-width="400">
        <v-tabs
            :value="currentMode === 'work' ? 0 : 1"
            grow
            color="primary"
        >
            <v-tab @click="currentMode = 'work'">Work</v-tab>
            <v-tab @click="currentMode = 'break'">Break</v-tab>
        </v-tabs>
        <v-card-text>
            <input-time v-model="time" :read-only="!!activeCountdown" />
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
            <v-btn dark color="primary" @click="toggleStartPause">
                <v-icon >mdi-play-pause</v-icon>
            </v-btn>
            <v-btn dark color="primary" @click="resetTimer(defaultTimeValues[currentMode])">
                <v-icon>mdi-stop</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import {Howl} from 'howler'

    import InputTime from '~/components/InputTime'

    export default {
        components: {
            InputTime,
        },
        props: {
            defaultTimeValues: {
                type: Object,
                default: () => {
                    return {
                        work: 15,
                        break: 10,
                    }
                },
            },
        },
        data() {
            return {
                time: this.defaultTimeValues.work,
                currentMode: 'work',
                activeCountdown: false,
            }
        },
        computed: {},
        watch: {
            currentMode(newMode, oldMode) {
                if (newMode !== oldMode) {
                    const resetValue = this.defaultTimeValues[newMode]
                    this.resetTimer(resetValue)
                }
            },
        },
        methods: {
            toggleStartPause() {
                if (!this.activeCountdown) {
                    this.activeCountdown = setInterval(this.updateTime, 1000)
                    this.updateTime()
                } else {
                    clearInterval(this.activeCountdown)
                    this.activeCountdown = null
                }
            },
            async updateTime() {
                if (this.time > 0) {
                    this.time -= 1
                } else {
                    const sound = new Howl({
                        src: '/alarm.mp3',
                    })
                    sound.play()
                    this.currentMode = this.currentMode === 'work' ? 'break' : 'work'
                    await this.$nextTick()
                    this.toggleStartPause()
                }
            },
            resetTimer(resetValue = this.defaultTimeValues.work) {
                clearInterval(this.activeCountdown)
                this.activeCountdown = null
                this.time = resetValue
            },
        },
    }
</script>

<style scoped lang="sass">
</style>
