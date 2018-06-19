<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button class="btn btn-primary" @click="navigateToHome">Got to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' })  // this object corisponds to the name property of the homepage route defined in routes.js
        }
    }
}
</script>
