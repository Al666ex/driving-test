import React,{useEffect, useRef} from 'react';
import { Flex, Modal } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import SelectCandidat from './SelectCandidat';
import SelectAuto from './SelectAuto';
import Timer from './Timer';
import {LogoutOutlined } from '@ant-design/icons'
import { setIsAuth, setUser } from '../../app/authSlice';
import { setList, setIsRunning, setStopExamen, setCarnumber, setCandidat, setFieldsDisabled, setHeaderHeight } from '../../app/dlSlice';


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const headerHeight = useSelector((state) => state.dl.headerHeight)
  const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled);  
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
    <div ref={headerRef}  style={{ display: 'block', color: 'white', margin: '0 auto', maxWidth: '1280px', position: 'relative', padding: '15px' }}>
      <Flex justify='space-between' align='center'>
      </Flex>
      <Timer />
    </div>
  );
}

export default Header;