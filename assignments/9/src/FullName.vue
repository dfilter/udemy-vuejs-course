<template>
    <div>
        <div class="form-group">
            <label for="first-name">First Name:</label>
            <input
                    type="text"
                    id="first-name"
                    class="form-control"
                    v-bind:value="firstName"
                    @input="nameChanged(true, $event)">
        </div>
        <div class="form-group">
            <label for="last-name">Last Name:</label>
            <input
                    type="text"
                    id="last-name"
                    class="form-control"
                    v-bind:value="lastName"
                    @input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            firstName() {
                return this.value.split(' ')[0];
            },
            lastName() {
                return this.value.split(' ')[1];
            }
        },
        methods: {
            nameChanged(isFirst, event) {
                let name = ''
                if (isFirst) {
                    name = event.target.value + ' ' + this.lastName
                } else {
                    name = this.lastName + ' ' + event.target.value
                }
                this.value = name
                this.$emit('input', name)
            }
        }
    }
</script>

<style>

</style>
