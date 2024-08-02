import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import SelectCandidat from './UI/SelectCandidat';
import SelectAuto from './UI/SelectAuto';
import { Flex, Modal, Alert } from 'antd';
import {LogoutOutlined,HomeOutlined,CheckOutlined,RightOutlined,PropertySafetyOutlined } from '@ant-design/icons'
import { setIsAuth, setUser } from '../app/authSlice';
import {setCandidatFields,setMocksCars, setList, setPunctele, setIsRunning, setStopExamen, setCarnumber, setCandidat, setFieldsDisabled, setStatistics,setHeaderHeight, setPage } from '../app/dlSlice';

const Candidat = () => {
  // const [candidatFields, setCandidatFields] = useState(null)  
  const [worning,setWarning] = useState('')
  const [nextPage, setNextPage] = useState(false)
    const mocksSolicitants = useSelector((state) => state.dl.mocksSolicitants)
    const user = useSelector((state) => state.auth.user);    
    const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled);  
    const candidat = useSelector((state) => state.dl.candidat)
    const carnumber = useSelector((state) => state.dl.carnumber)
    const mocksArrCars = useSelector((state) => state.dl.mocksArrCars)
    const candidatFields = useSelector((state) => state.dl.candidatFields)
    const dispatch = useDispatch()

    useEffect(() =>{
      if(!candidat ){
        dispatch(setCarnumber(null))
      }
    },[])

    useEffect(() => {
      if(candidat !== null){
        const findCandidat = mocksSolicitants.find((item) => item.name === candidat)
        if(findCandidat){        
          dispatch(setCandidatFields({category : findCandidat.category, typeCV : findCandidat.typeCV}))
          dispatch(setMocksCars(mocksArrCars.find(({category}) => category === findCandidat.category).carsNumb))          
        }

        return 
      }
    },[candidat])

    const showConfirm = () => {
        Modal.confirm({
          title: 'Confirmați Ieșirea',
          content: 'Sigur doriți să părăsiți aplicația?',
          onOk() {
            setTimeout(() => {
              dispatch(setIsAuth(false));
              dispatch(setPage(1))
              dispatch(setUser(null));
              dispatch(setCarnumber(null));
              dispatch(setPunctele(0));
              dispatch(setIsRunning(false));
              dispatch(setCandidat(null));
              dispatch(setStopExamen(false));
              dispatch(setFieldsDisabled(false));
              dispatch(setStatistics([]));
            }, 100);
            localStorage.clear();
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
        if(candidat === null || carnumber === null || carnumber === ''){
          setWarning(`Completați cîmpuri CANDIDAT și AUTO`)          
          return
        }

        setNextPage(true)
        dispatch(setPage(3))
      }
    
  return (
    <div style={{width : '100%', display : 'flex', flexDirection : 'row', position : 'relative', justifyContent : 'space-between', padding : '1.5rem'}}>
      {(worning )  &&
        <Alert
          message="Text de avertizare"
          style={{position : 'absolute', zIndex : '10', width : '75%'}}
          description={worning}
          showIcon
          type="warning"        
          onClose={() => {setWarning('')}}
          closable
        />} 
      <div className='candidat'>
          <div style={{width : '100%', display : 'flex', flexDirection : 'row', position : 'relative', justifyContent : 'space-between', paddingBottom : '1.5rem'}} >
            <div onClick={handleClick} className='logout'>{!fieldsDisabled && <LogoutOutlined />} </div>
            <div onClick={handleClickRight} className='stepRight'>{!fieldsDisabled && <RightOutlined />} </div>
          </div>
          
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
            <SelectCandidat width={'100%'} defaultValue={candidat ? candidat : null} />          
          </div>
          {candidatFields && (

              <Flex className='examiner' >  
                <PropertySafetyOutlined className='text_static_header' />                         
                <Flex justify='space-between' gap={'1rem'} style={{paddingLeft : '5px'}} >                    
                  <span> {candidatFields && candidatFields.category}</span> <span> {candidatFields && candidatFields.typeCV}</span>
                </Flex>
              </Flex>

          )}
          <div className='examiner'>
            <SelectAuto width={'100%'} defaultValue={carnumber ? carnumber : null} />
          </div>      
      </div>
    </div>
  )
}

export default Candidat
