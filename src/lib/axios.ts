import { url } from "./constants"
import axios from "axios"

const api = axios.create({
    baseURL: url.API_BASE_URL
})
  
api.interceptors.request.use(
    config => {
        // manipulate request info here
        //config.headers!.authToken = ''

        return config
    },
    error => Promise.reject(error)
)

api.interceptors.response.use(
    response => response,
    error => {
        // if (error.response?.status === 401) {
        //     // handle unauthorized access
        // }
        return Promise.reject(error)
    }
)
  
export default api