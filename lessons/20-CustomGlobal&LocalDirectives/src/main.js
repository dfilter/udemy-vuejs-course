import Vue from 'vue'
import App from './App.vue'

/**
 * el: param used to select the element the directive is attached to
 * biding: param used to retrive data passed as a paramenter of the directive
 * binding.value retrives the passed value from the directive
 * binding.arg lets the same directive have mutiple uses.
 * binding.modifiers will are accessed with the ".modifier" for the vuejs directive
 */
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    //el.style.backgroundColor = 'green'
    //el.style.backgroundColor = binding.value
    var delay = 0
    if (binding.modifiers['delayed']) {
      delay = 3000
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value
      } else {
        el.style.color = binding.value
      }
    }, delay)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
