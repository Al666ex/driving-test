import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import SelectCandidat from './UI/SelectCandidat';
import SelectAuto from './UI/SelectAuto';
import { Flex, Modal } from 'antd';
import {LogoutOutlined,HomeOutlined,CheckOutlined,RightOutlined } from '@ant-design/icons'
import { setIsAuth, setUser } from '../app/authSlice';
import { setList, setPunctele, setIsRunning, setStopExamen, setCarnumber, setCandidat, setFieldsDisabled, setStatistics,setHeaderHeight, setPage } from '../app/dlSlice';

const Candidat = () => {
    const user = useSelector((state) => state.auth.user);    
    const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled);  
    const dispatch = useDispatch()

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

      const handleClickRight = () => {
        dispatch(setPage(3))
      }
    
  return (
    <>
    <div onClick={handleClick} className='logout'>{!fieldsDisabled && <LogoutOutlined />} </div>
    <div onClick={handleClickRight} className='stepRight'>{!fieldsDisabled && <RightOutlined />} </div>
    <div className='candidat'>
        
        <div  className='examiner' >          
        <span className='text_static_header'>{<CheckOutlined /> } </span>
          <span style={{ paddingRight: '5px' }}>
            {user.slice(0, user.indexOf('.')).toUpperCase()} {user.slice(user.indexOf('.') + 1).toUpperCase()}
          </span>
        </div>

        <div className='examiner'>          
          <span className='text_static_header'>{!fieldsDisabled && <HomeOutlined /> } </span>
          <span style={{ paddingRight: '5px' }}> SCCA CHIŞINĂU </span>
        </div>
        <div className='examiner'>
          <SelectCandidat width={'100%'} />          
        </div>
        <div className='examiner'>
          <SelectAuto width={'100%'} />
        </div>      
    </div>
    </>
  )
}

export default Candidat
