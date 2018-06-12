import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'

// this component has been registered globally therefore it can be used anywhere in the project.
Vue.component('app-servers', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
