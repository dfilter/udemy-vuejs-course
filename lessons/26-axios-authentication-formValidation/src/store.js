import Vue from 'vue'
import Vuex from 'vuex'
/**
 * Here we use the instance of axios created in axios-auth
 */
import axios from './axios-auth'
/**
 * Note: importing axios mutiple times does not incrase the 
 * bundle size. The same instance of axios is used each time 
 * it is imported here.
 * Axios is not like other vue plugins where you import and add
 * it to the vue instance in main.js You must install it with 
 * npm and import it like this.
 */
import globalAxios from 'axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null 
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer({dispatch}, experationTime) {
      setTimeout(() => {
        dispatch('logout')
      }, experationTime * 1000)
    },
    signup({commit, dispatch}, authData) {
      /**
       * Here we make a "post" request as we are sending some data and expecting 
       * some back.
       * Axios usualy expects two arguments: 'url/route' and data.
       * Optionally you can pass a third argument, an object to configure the 
       * request.
       * Axios will also automatically stringify any data passed to it
       * then() runs when the async axios call is finished this type of function 
       * is called a promise.
       * catch() runs when an error occurs during the http request
       * Because the url has been configured in main.js we only need to access 
       * test of the route specific url part. This will be appended.
       */
      axios.post('/signupNewUser?key=AIzaSyBimc7ytsvt_vFI1duZ6MPVx_fdKAX5bcU', { 
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response)
          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId
          })
          const now = new Date()
          const experationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('userId', response.data.localId)
          localStorage.setItem('experationDate', experationDate)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', response.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    login({commit, dispatch}, authData) {
      axios.post('/verifyPassword?key=AIzaSyBimc7ytsvt_vFI1duZ6MPVx_fdKAX5bcU', { 
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response)
          const now = new Date()
          const experationDate = new Date(now.getTime() + response.data.expiresIn * 1000)
          localStorage.setItem('token', response.data.idToken)
          localStorage.setItem('userId', response.data.localId)
          localStorage.setItem('experationDate', experationDate)
          commit('authUser', {
            token: response.data.idToken,
            userId: response.data.localId
          })
          dispatch('setLogoutTimer', response.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    tryAutoLogin({commit}) {
      /**
       * Retrive the token from local storage, if it is empty return
       * see if the token is expired return
       */
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const experationDate = localStorage.getItem('experationDate')
      const now = new Date()
      if (now >= experationDate) {
        return
      }
      const userId = localStorage.getItem('userId')
      commit('authUser', { token: token, userId: userId })
    },
    logout({commit}) {
      commit('clearAuthData')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('expirationDate')
      router.replace('/signin')  // redirect to this route
    },
    storeUser({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      /**
       * In this case since we are using firebase the user token needs to 
       * be passed by being appended to the url, other APIs may require 
       * it to be done differently.
       */
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    fetchUser({commit, state}) {
      if (!state.idToken) {
        return
      }
      /**
       * get() only requires one argument: the url/route
       * Optionally you can pass an object to configure the request.
       * Note: with es6 arrow functions it is not nessessary to use 
       * braces to encapsulate the function
       * Note: the response object is only availible inside of the 
       * then() callback
       */
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(response => {
          console.log(response)
          const data = response.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0])
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})