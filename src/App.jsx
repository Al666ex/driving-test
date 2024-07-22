import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import Header from './components/UI/Header';
import Coll from './components/UI/Coll';
import Candidat from './components/Candidat';

const Render = (isAuth,page) => {
  if(!isAuth && page === 1) {return  <Auth /> }
  if(isAuth && page === 2) {return <Candidat />}
  if(isAuth && page === 3) {return (
    <>
      <header style={{position : 'fixed', top :'0',left : '0',width : '100%', zIndex : '101'}}>
        <Header />        
      </header>  

      <div className='main'>
        <Coll />
      </div>
    </>
  )}
}

function App() {  
  const isAuth = useSelector((state) => state.auth.isAuth)  
  const page = useSelector((state) => state.dl.page)
  return Render (isAuth,page)  
}

export default App;
