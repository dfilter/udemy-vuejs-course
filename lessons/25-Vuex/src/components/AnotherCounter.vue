<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    /**The following is an example of Vuex use of mutations
     */
    import {mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        methods: {
            ...mapActions({
                asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
                asyncDecrement: types.COUNTER_DECREMENT_ASYNC
            })
        }
    }
</script>