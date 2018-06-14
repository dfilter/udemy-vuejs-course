<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponenet = 'appQuote'">Quote</button>
        <button @click="selectedComponenet = 'appAuthor'">Author</button>
        <button @click="selectedComponenet = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponenet }}</p>
        <!-- the keep-alive reserved term makes sure that the component is not destroyed 
        when navigating/rendering a different component in its place. Note that this will 
        negate the "destroyed()" lifecycle hook -->
        <keep-alive>
          <!-- componenet is reserved and can have other component bound to it dynamically -->
          <component v-bind:is="selectedComponenet">
            <!-- this content will appear in the default slot of the Quote componenet and 
            none others since they have a defined template -->
            <p>Default Content</p>
          </component>
        </keep-alive>
        <!-- placing data inside of the component tags will pass the html to that component. -->
        <!-- <app-quote> -->
          <!-- despite being passed down to the child applying data to the dom like this will still work. -->
          <!-- <h1 slot="title">{{ quoteTitle }}</h1> -->
          <!-- <p class="subtitle" slot="subtitle">Different subtitle</p> -->
          <!-- <p>This is a quote!</p> -->
        <!-- </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import New from './components/New.vue'
import Author from './components/Author.vue'

export default {
  data() {
    return {
      quoteTitle: 'The Quote',
      selectedComponenet: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style scoped>
/* if the parent element is scoped it will not apply styles to any html elements passed to another component.  
if the parent componenet is not scoped it will apply its styles to all child components. Child componenets may overwrite it however. */
h1 {
  /* color: red; */
}
.subtitle{
    background-color: #ccc;
}
</style>
