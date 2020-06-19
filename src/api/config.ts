import axios from 'axios'

const BASE_URL = process.env.REACT_APP_SHOP_DATA_ENDPOINT_URL

let client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/ld+json',
    'Content-Type': 'application/ld+json'
  }
})

export default client