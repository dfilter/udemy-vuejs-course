import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vuejs-axios-a928a.firebaseio.com'
})  // returns the axios instance

instance.defaults.headers.common['ANOTHERHEADER'] = 'something'

export default instance
