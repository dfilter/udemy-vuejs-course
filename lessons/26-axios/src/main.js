import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'  // global axios

import router from './router'
import store from './store'

// this will be the same instance accessed througout the rest of the app
axios.defaults.baseURL = 'https://vuejs-axios-a928a.firebaseio.com'
// this common token with a key of authorization will be passed each time an axios call is made
axios.defaults.headers.common['Authorization'] = 'somegenerictoken'
// this will define the expected data that is returned
axios.defaults.headers.get['Accepts'] = 'application/json'

// this will intercept all axios requests made and run some logic this is useful for perhaps changing the axios config
const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('Request intecepter: ', config)
  //config.headers['SOMEHEADER']
  return config
})
// this will intercept the response from the server/api
const responseInterceptor = axios.interceptors.response.use(response => {
  console.log('Response intecepter: ', response)
  return response
})

// interceptors can be removed using eject()
axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
