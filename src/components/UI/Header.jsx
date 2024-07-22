import React,{useEffect, useRef} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Timer from './Timer';
import { setHeaderHeight } from '../../app/dlSlice';

const Header = () => {  
  const headerHeight = useSelector((state) => state.dl.headerHeight)
  const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled); 
  const punctele = useSelector((state) => state.dl.punctele) 
  const dispatch = useDispatch()
  const headerRef = useRef(null);

  useEffect(() => {
    dispatch(setHeaderHeight(headerRef.current.clientHeight)) ;
    console.log('headerHeight from header ',headerHeight)
  },[])

  useEffect(() => {
    dispatch(setHeaderHeight(headerRef.current.clientHeight)) ;
  },[fieldsDisabled])

  return (
    <div ref={headerRef} className='headerMain' style={{background : punctele >=21 ? 'var(--background-header-main-failed)' : 'var(--background-header-main)' }}>
      <div style={{maxWidth : '1280px', margin : '0 auto', paddingLeft : '1rem', paddingRight : '1rem'}}>
        <Timer />
      </div>
    </div>
  );
}

export default Header;