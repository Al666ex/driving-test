import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Timer from './components/UI/Timer';
import Auth from './components/Auth';
import Header from './components/UI/Header';
import Coll from './components/UI/Coll';
import Candidat from './components/Candidat';

const Render = (isAuth,page,punctele) => {
  if(!isAuth && page === 1) {return  <Auth /> }
  if(isAuth && page === 2) {return <Candidat />}
  if(isAuth && page === 3) {return (
    <div className='main'>              
      <div className={punctele >=21 ? 'headerMainFailed' : 'headerMain'}>
        <Header />
      </div>
      <Coll />
    </div>
  )}
}

function App() {  
  const isAuth = useSelector((state) => state.auth.isAuth)
  const punctele = useSelector((state) => state.dl.punctele)
  const page = useSelector((state) => state.dl.page)
  return Render (isAuth,page,punctele)  
}

export default App;

// {
//   !isAuth ? 
//     <Auth /> :
//       <div className='main'>              
//           <div className={punctele >=21 ? 'headerMainFailed' : 'headerMain'}>
//             <Header />
//           </div>
//           <Coll />
//       </div>
// }