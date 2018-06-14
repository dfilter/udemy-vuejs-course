<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{ text | reverseString }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | stringLength }}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Computed:</h3>
                <p>{{ reversedString }}</p>
                <p>{{ stringsLength }}</p>
                <hr>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>Mixin Filter:</h3>
                <p>{{ stringLengthMxn }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { reverseStringMixin } from './mixins/reverseString'

    export default {
        mixins: [reverseStringMixin],
        data() {
            return {
                text: 'Hello World!'
            }
        },
        filters: {
            reverseString(value) {
                return value.split('').reverse().join('')
            }
        },
        computed: {
            reversedString() {
                return this.text.split('').reverse().join('')
            },
            stringsLength() {
                return this.text + ' (' + this.text.length + ')'
            }
        }
    }
</script>

<style>
</style>
