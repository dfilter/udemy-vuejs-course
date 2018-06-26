import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})  // returns the axios instance

//instance.defaults.headers.common['ANOTHERHEADER'] = 'something'

export default instance
