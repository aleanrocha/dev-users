import axios from 'axios'

const api = axios.create({
  baseURL: 'https://node-prisma-api.vercel.app'
})

export default api