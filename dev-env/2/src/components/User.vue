<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change My Name</button>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- we bind the property expected by the component and pass the parementer name which is defined in this component-->
                <app-user-detail 
                    v-bind:myName="name" 
                    v-on:nameReset="name = $event" 
                    v-bind:resetFn="resetName" 
                    v-bind:userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    v-bind:userAge="age" 
                    @ageEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data() {
            return {
                name: 'Jane Doe',
                age: 23
            }
        },
        methods: {
            changeName() {
                this.name = 'John Doe'
            },
            resetName() {
                this.name = 'Jane Doe'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
