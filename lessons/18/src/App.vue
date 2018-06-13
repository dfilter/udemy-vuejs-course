<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- the pipe symbol impliments the 'to-uppercase' filter defined in the vue instance 
                Note that this will only chage the data as it appears for the user, the data its self 
                will remain the same-->
                <p>{{ text | toUppercase | to-lowercase}}</p>
                <hr>
                <!-- when trying to filter large datasets such as a list it is better to use a 
                computed property. See filtereredFruits in vue instance. -->
                <input type="text" v-model="filterText">
                <ul>
                  <li v-for="fruit in filteredFruits" v-bind:key="fruit">{{ fruit }}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue'
    import { fruitMixin } from './fruitMixin'

    export default {
      // dispite using tupicate properties as the mixin vuejs will merge the vue instance properties together
      mixins: [fruitMixin],
      components: {
        appList: List
      },
      data() {
        return {
          text: 'Hello there!'
        }
      },
      filters: {
        // filters will always get a value since they will always convert some data
        toUppercase(value) {
          return value.toUpperCase()
        }
      },
      created() {
        console.log('Created hook')
      }
    }
</script>

<style>

</style>
