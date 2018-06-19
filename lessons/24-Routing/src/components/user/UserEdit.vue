<template>
    <div>
        <h3>Edit the User</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px;"></div>
        <p id="data">Some Extra data</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
    /** Here it is ok to use properties defined in data since the component
     * has already been created once this is called.
     * This use case is if you want to make sure that the user does not navigate 
     * away by mistake. 
     */
    beforeRouteLeave(to, from, next) {
        if (this.confirmed) {
            next()
        } else {
            if (confirm('Are you sure?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>
