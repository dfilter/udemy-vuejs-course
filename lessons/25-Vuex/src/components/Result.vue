<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    // Here is an example of using getters from vuex
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            // the three dots are es6 syntax (spreader) that tell js to pull out all the properties of this array - or object
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        }
    }
</script>