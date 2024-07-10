import {$authHost} from './index'
import {jwtDecode} from "jwt-decode"

export const login = async (email,password) => {
    // const response = await $host.post('/auth/login',{email,password})
    const {data} = await $authHost.post('/auth/login',{email,password})
    //localStorage.setItem('token', data.token)
    
    return jwtDecode(data.token);
}

//export const check = await $authHost.get