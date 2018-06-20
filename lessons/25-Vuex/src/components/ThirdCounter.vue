<template>
    <div>
        <hr>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    /**The following is an example of Vuex use of actions
     */
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ]),
            /* the above does the following:
            increment(by) {
                this.$store.dispatch('increment', by)
            },
            decrement() {
                this.$store.dispatch('decrement')
            }
            */
        }
    }
</script>