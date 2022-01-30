import axios from 'axios'

const API_BASE_URL = 'https://drugapi.herokuapp.com/api/v1'

axios.defaults.baseURL = API_BASE_URL

export default axios