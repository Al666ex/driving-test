import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import RenderPage from './components/RenderPage';
import { setCandidat, setCarnumber, setPage, setList, setPunctele, setStatistics } from './app/dlSlice';
import { setIsAuth } from './app/authSlice';
import {convertStringToBoolean} from './utils/convertStringToBoolean'
import { list } from './list/list'; 

function App() {  
  const isAuth = useSelector((state) => state.auth.isAuth)
  const punctele = useSelector((state) => state.dl.punctele)
  const page = useSelector((state) => state.dl.page)
  const dispatch = useDispatch()

  useEffect(() => {

    const initList = JSON.parse(JSON.stringify(localStorage.getItem('list'))) 
    let accPunctele = [];

    if(initList){
      accPunctele = initList
      dispatch(setList(accPunctele))  
    }else{
      accPunctele = list;
      localStorage.setItem('list',JSON.stringify(list))
      dispatch(setList(list))
    }

    if(!localStorage.getItem('isAuth')){
      localStorage.setItem("isAuth", convertStringToBoolean(JSON.stringify(false)));
      dispatch(setIsAuth(false))
      localStorage.setItem("user", JSON.stringify("nenov.dumitru"));
      localStorage.setItem("carnumber", JSON.stringify());
      localStorage.setItem("punctele", JSON.stringify(0));
      localStorage.setItem("isRunning", JSON.stringify(false));
      localStorage.setItem("mocksCars", JSON.stringify([]));
      localStorage.setItem("candidat", JSON.stringify());
      localStorage.setItem("stopExamen", JSON.stringify(false));
      localStorage.setItem("fieldsDisabled", JSON.stringify(false));
      localStorage.setItem("statistics", JSON.stringify([]));
      localStorage.setItem("headerHeight", JSON.stringify(null));      
      localStorage.setItem("page", JSON.stringify(1));
      localStorage.setItem("candidatFields", JSON.stringify(null));
      localStorage.setItem("statistics", JSON.stringify([]))    
      
    } else {
      const authStorage = localStorage.getItem("isAuth");      
      dispatch(setIsAuth(authStorage));
      dispatch(setPage(Number(JSON.parse(localStorage.getItem("page")))));
      const candidat = localStorage.getItem('candidat')
      if(candidat === 'undefined'){
        dispatch(setCandidat(''))
      }else{dispatch(setCandidat(candidat))}
      const carnumber = localStorage.getItem('carnumber')
      if(carnumber === 'undefined'){
        dispatch(setCarnumber(''))
      }else{dispatch(setCarnumber(carnumber))}

      dispatch(setPunctele())

      const statistics = JSON.parse(JSON.stringify('statistics'))
                         
      dispatch(setStatistics(statistics))      
      
    } 
   

  },[])

  return RenderPage (isAuth,page,punctele)  
}
export default App;

