import {configureStore} from '@reduxjs/toolkit'
import dlReducer from './dlSlice'
import authReducer from './authSlice'

export default configureStore({
    reducer : {
        auth : authReducer,        
        dl : dlReducer
    }
})