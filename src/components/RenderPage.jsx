import React from 'react'
import Auth from './Auth'
import Candidat from './Candidat'
import Header from './UI/Header'
import Coll from './UI/Coll'

const RenderPage = (isAuth,page,punctele) => {


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

export default RenderPage
