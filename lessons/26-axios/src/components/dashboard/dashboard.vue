<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address: {{ email }}</p>
  </div>
</template>

<script>
  /**
   * Note: importing axios mutiple times does not incrase the 
   * bundle size. The same instance of axios is used each time 
   * it is imported here.
   * Axios is not like other vue plugins where you import and add
   * it to the vue instance in main.js You must install it with 
   * npm and import it like this.
   */
  import axios from 'axios'

  export default {
    data() {
      return {
        email: ''
      }
    },
    created() {
      /**
       * get() only requires one argument: the url/route
       * Optionally you can pass an object to configure the request.
       * Note: with es6 arrow functions it is not nessessary to use 
       * braces to encapsulate the function
       * Note: the response object is only availible inside of the 
       * then() callback
       */
      axios.get('/users.json')
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
          this.email = users[0].email
        })
        .catch(error => console.log(error))
    }
  }
</script>


<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>