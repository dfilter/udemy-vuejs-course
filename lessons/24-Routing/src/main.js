import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)  // the router plugin is added globally from import

const router = new VueRouter({
  routes,  // normally "routes: routes" but es6 allows for shorthand definition as simply "routes"
  mode: 'history',  // this will remove the default behaviour of adding the "/#/" to the route url
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition  // if the positon on the page has been saved scroll to that position
    }
    if (to.hash) {
      return { selector: to.hash }  // if there is a hash in the url scroll down to it
    }
    return { x: 0, y: 0 }  // scroll to top of page
  }
})


/**
 * This code will execute before navigating to a new route
 */
router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()  // you can pass next(false) to abort navigation and stay on curren page, you can also pass an object with a route within. See UserDetails.vue
})

new Vue({
  el: '#app',
  router,  // here the router object is added to the vue app
  render: h => h(App)
})
