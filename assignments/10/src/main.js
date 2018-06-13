import Vue from 'vue'
import App from './App.vue'

// Vue.directive('myOn', {
//   bind(el, binding, vnode) {
//     el.addEventListener(binding.arg, () => {
//       el.style.backgroundColor = 'green'
//     }, false)
//   }
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
