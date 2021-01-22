import axios from 'axios'

const api = axios.create({
  baseURL: 'https://proffy-server-nodejs.herokuapp.com/',
})

export default api