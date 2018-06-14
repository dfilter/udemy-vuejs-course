<template>
    <div class="container">
        <form v-if="!isSubmitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <app-full-name v-model="fullName"></app-full-name>
                    <!-- Mail -->
                    <div class="form-group">
                        <label for="age">Mail:</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userInfo.email">
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label for="age">Password:</label>
                        <input
                                type="password"
                                id="password"
                                class="form-control"
                                v-model="userInfo.password">
                    </div>
                    <!-- Store Data? Yes/No -->
                    <label for="store-data-yes">
                        <input
                                type="radio"
                                id="store-data-yes"
                                value="true"
                                v-model="storeData"> Yes
                    </label>
                    <label for="store-data-no">
                        <input
                                type="radio"
                                id="store-data-no"
                                value="false"
                                v-model="storeData"> No
                    </label>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary"
                            @click.prevent="submitForm">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ fullName }}</p>
                        <p>Mail: {{ userInfo.email }}</p>
                        <p>Password: {{ userInfo.password }}</p>
                        <p>Store in Database?: {{ storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue';

    export default {
        data() {
            return {
                userInfo: {
                    password: '',
                    email: ''
                },
                fullName: 'Dirk Filter',
                storeData: true,
                isSubmitted: false
            }
        },
        methods: {
            submitForm() {
                this.isSubmitted = !this.isSubmitted
            }
        },
        components: {
            appFullName: FullName
        }
    }
</script>

<style>
</style>
