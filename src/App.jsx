import React, { useState, useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Timer from './components/UI/Timer';
import Auth from './components/Auth';
import Header from './components/UI/Header';
import Coll from './components/UI/Coll';


function App() {  

  const isAuth = useSelector((state) => state.auth.isAuth)
  const punctele = useSelector((state) => state.dl.punctele)

  return (
    <div>
      {
        !isAuth ? 
          <div className='modal'><Auth /></div> :
            <div >              
                <div className={punctele >=21 ? 'headerMainFailed' : 'headerMain'}>
                  <Header />
                </div>
                <Coll />
            </div>
      }
    </div>
    
  );
}

export default App;