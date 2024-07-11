import React,{useEffect, useRef} from 'react';
import { Flex, Modal } from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import SelectCandidat from './SelectCandidat';
import SelectAuto from './SelectAuto';
import Timer from './Timer';
import {LogoutOutlined } from '@ant-design/icons'
import { setIsAuth, setUser } from '../../app/authSlice';
import { setList, setPunctele, setIsRunning, setStopExamen, setCarnumber, setCandidat, setFieldsDisabled, setStatistics } from '../../app/dlSlice';


const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled);
  const dispatch = useDispatch()
  const headerRef = useRef(null);

  const showConfirm = () => {
    Modal.confirm({
      title: 'Confirmați Ieșirea',
      content: 'Sigur doriți să părăsiți aplicația?',
      onOk() {
        setTimeout(() => {
          dispatch(setIsAuth(false));
          dispatch(setUser(null));
          dispatch(setCarnumber(null));
          dispatch(setPunctele(0));
          dispatch(setIsRunning(false));
          dispatch(setCandidat(null));
          dispatch(setStopExamen(false));
          dispatch(setFieldsDisabled(false));
          dispatch(setStatistics([]));
        }, 100);
        location.reload();        
      },
      onCancel() {
        console.log('Canceled exit');
      },
    });
  };

  const handleClick = () => {
    if (!fieldsDisabled) {
      showConfirm();
    }
  };

  useEffect(() => {
    // const headerHeight = headerRef.current.clientHeight;
    // console.log('headerHeight from header ',headerHeight)
  },[])

  return (
    <div  style={{ display: 'block', color: 'white', margin: '0 auto', maxWidth: '1280px', minWidth: '600px', position: 'relative', padding: '15px' }}>
      <Flex justify='space-between' align='center' style={{ maxWidth: '1280px', fontSize: '1rem' }}>
        <div onClick={handleClick} className='examiner'>
          {/* <span className='text_static_header'>Ex. </span> */}
          <span className='text_static_header'>{!fieldsDisabled && <LogoutOutlined />} </span>
          <span style={{ paddingRight: '5px' }}>
            {user.slice(0, user.indexOf('.')).toUpperCase()} {user.slice(user.indexOf('.') + 1).toUpperCase()}
          </span>
        </div>
        <Flex align='center'>
          <div><SelectCandidat width={'auto'} /></div>
          <div style={{ marginLeft: '0.8rem' }}><SelectAuto width={'auto'} /></div>
        </Flex>
      </Flex>
      <Timer />
    </div>
  );
}

export default Header;