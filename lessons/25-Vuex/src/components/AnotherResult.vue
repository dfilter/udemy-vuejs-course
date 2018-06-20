<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
// Here is an example of using getters from vuex
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            // the three dots are es6 syntax (spreader) that tell js to pull out all the properties of this array - or object
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER,  // these can also pass an object instead with property keys value pairs
                stringCounter: types.CLICK_COUNTER
            })
        }
    }
</script>