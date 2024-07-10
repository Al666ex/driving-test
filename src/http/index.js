import axios from 'axios'

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log('backendUrl',backendUrl)

const $authHost = axios.create({
    baseURL : backendUrl
})

// const authInterceptor = config => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// }

// $authHost.interceptors.request.use(authInterceptor)

export {
    // $host,
    $authHost
}