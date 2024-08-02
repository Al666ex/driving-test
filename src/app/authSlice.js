import {createSlice} from '@reduxjs/toolkit'
import {convertStringToBoolean} from '../utils/convertStringToBoolean'
export const authSlice = createSlice({
    name : 'auth',
    initialState : {
        isAuth : false,
        user : 'nenov.dumitru',              
    },
    reducers : {
        setIsAuth : (state,action) => {
            if(action.payload === true){
                localStorage.setItem("isAuth",true)
                state.isAuth = action.payload;
                return;
            }
            // localStorage.setItem("isAuth", JSON.stringify(action.payload));            
            
            // let isAuth = convertStringToBoolean(JSON.parse(localStorage.getItem("isAuth")))

            if(action.payload === false){
                localStorage.setItem("isAuth", action.payload)  
                state.isAuth = action.payload;                
                return;
            }

            let isAuth = localStorage.getItem("isAuth")
            if(isAuth === 'false'){
                // localStorage.setItem("isAuth", true)
                isAuth = localStorage.getItem("isAuth")
            }

            console.log('reducer setIsAuth',isAuth)
            // state.isAuth = convertStringToBoolean(isAuth);
            
            if(isAuth){
                state.isAuth = convertStringToBoolean(isAuth);
                return;
            }
            //localStorage.setItem("isAuth", action.payload);        
            state.isAuth = action.payload;
            return;
        },
        setUser : (state,action) => {
            state.user = action.payload;
            return
        }
    }    
})

export const { 
    setIsAuth,
    setUser,    
} = authSlice.actions

export default authSlice.reducer