import Vue from 'vue'
import App from './App.vue'

// Globally defined filter
Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase()
})

/**
 * This mixin will be added to every vue instance without needing an import
 * For this reason it's not recomended to use this unless creating a vuejs plugin
 */
Vue.mixin({
  created() {
    console.log('global mixin created')
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
