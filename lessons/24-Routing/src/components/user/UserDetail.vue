<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <!-- Here the object passed to the "to" attribute points to the "name" property defined in routes js.
        params.id here is the user profile id. -->
        <router-link class="btn btn-primary" 
            tag="button" 
            :to="link">Edit User</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: {
                    name: 'userEdit',
                    params: {
                        id: this.$route.params.id
                    },
                    query: {
                        locale: 'en',
                        q: 100
                    },
                    hash: '#data'
                }
            }
        },
        /**
         * Note that data will not be usable untill after next() is called since this component 
         * has not been created untill after next() is called.
         */
        beforeRouteEnter(to, from, next) {
            // you could check something to determine if the user is allowed to access this page then run the following...
            if (true) {
                next()  // allow component to be rendered
            } else {
                next(false)  // block rendering of component
            }
        }
    }
</script>
