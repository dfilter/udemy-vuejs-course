import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard/dashboard.vue'
import SignupPage from './components/auth/signup.vue'
import SigninPage from './components/auth/signin.vue'

Vue.use(VueRouter)
/**
 * The "beforeEnter" method in the "/dashboard" route is passed three params:
 * "to" which is the route we are navigating to.
 * "from" which is the route we are navigining from.
 * "next" which is a function that has to be executed in order to continue 
 * to the route
 */
const routes = [
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { 
    path: '/dashboard', 
    component: DashboardPage, 
    beforeEnter(to, from, next) {
      if (store.state.idToken) { 
        next()  // continue to route if the user has a valid token...
      } else {
        next('/signin')  // else redirect to the "/signin" route
      }
    }
  }
]

export default new VueRouter({mode: 'history', routes})