<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myOn:click="alertMe">Click Me!</button>
                <canvas v-bind:style="{backgroundColor: color}" v-myOn:mouseover="changeColor" width="200" height="100"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                color: 'green'
            }
        },
        methods: {
            alertMe() {
                alert('You clicked Me!')
            },
            changeColor() {
                this.color == 'green' ? this.color = 'red' : this.color = 'green'
            }
        },
        directives: {
            myOn: {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, binding.value, false)
                }
            }
        }
    }
</script>

<style>
canvas {
    border: 2px solid black;
}
</style>
