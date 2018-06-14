<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName()">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    // props is used to hold properties set outside of this component
    // props are norlammy an array but are validated using an object
    props: {
        // here the type is defined this can be more then one type if defined as an array eg [String, Array]
        // it can also be defined as an object and have it be required etc
        myName: {
            type: String,
            //default: 'Fellow Dude' // defualt needs to be a function if returning an object or array
            //required: true,
            /*
            type: Object,
            default() {
                return {
                    name: 'Max'
                }
            }
            */ 
        },
        resetFn: Function,
        userAge: Number
    },
    methods: {
        switchName() {
            return this.myName.split('').reverse().join('')
        },
        resetName() {
            this.myName = 'Mad Max'
            this.$emit('nameReset', this.myName)
        }
    },
    created() {
        eventBus.$on('ageEdited', (age) => {
            this.userAge = age
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
