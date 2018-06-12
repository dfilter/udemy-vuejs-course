<template>
    <div class="container">
        <!-- kebab case in dom with camel case in the js -->
        <head-component></head-component>
        <hr>
        <div class="row">
            <!-- camel case in the dom and kebab case in the js -->
            <serversComponent></serversComponent>
            <!-- The name will match that of the js and will be case insensitive in the dom -->
            <ServerDetails></ServerDetails>
        </div>
        <hr>
        <foot-component></foot-component>
    </div>
</template>

<script>
import Head from './components/Head.vue'
import Servers from './components/Servers.vue'
import ServerDetails from './components/ServerDetails.vue'
import Foot from './components/Foot.vue'

export default {
    components: {
        headComponent: Head, // camel case and kebab case are interchangable in the js however you cannont have a kebab case in the js and and a camel case in the dom.
        serversComponent: Servers,
        ServerDetails, // this will transpile to ServerDetails: ServerDetails
        'foot-component': Foot
    }
}
</script>

<style>

</style>
