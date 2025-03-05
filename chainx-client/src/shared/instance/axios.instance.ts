import axios from 'axios'

export const Axios = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})
