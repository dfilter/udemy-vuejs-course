import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store';

new Vue({
  el: '#app',
  store,  // this is the same as store: store es6 will reslove to the same thing
  render: h => h(App)
})
