import React, { useState, useEffect } from 'react';
import { Button, Modal, Flex, Alert } from 'antd';
import {toAddZero} from '../../utils/toAddZero'
import {useSelector,useDispatch} from 'react-redux'
import {setIsRunning,setStopExamen,setFieldsDisabled,setPage} from '../../app/dlSlice'
import {ClockCircleOutlined, PlayCircleOutlined, LeftOutlined} from '@ant-design/icons'
import StyledComponent from './StyledComponent' 


const Timer = () => {
  // const [categoria, setCategoria] = useState(null)
  const [candidatFields, setCandidatFields] = useState(null)
  const [worning,setWarning] = useState('')
  const [clickStart,setClickStart] = useState(false)
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [differenceInMinutes, setDifferenceInMinutes] = useState(0);
  const [differenceInSeconds, setDifferenceInSeconds] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const [hideButton,setHideButton] = useState(false)

  const [finalDifferenceInMinutes, setFinalDifferenceInMinutes] = useState(0);
  const [finalDifferenceInSeconds, setFinalDifferenceInSeconds] = useState(0);

  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const punctele = useSelector((state) => state.dl.punctele)
  const isRunning = useSelector((state) => state.dl.isRunning)
  const candidat = useSelector((state) => state.dl.candidat)
  const carnumber = useSelector((state) => state.dl.carnumber)
  const mocksSolicitants = useSelector((state) => state.dl.mocksSolicitants)

  // useEffect(() => {
  //   if(punctele > 20){
  //     handleStop()
  //   }
    
  // },[punctele])

  // useEffect(() => {
  //   if(candidat !== null){
  //     const findCandidat = mocksSolicitants.find((item) => item.name === candidat)
  //     if(findCandidat){        
  //       setCandidatFields({category : findCandidat.category, typeCV : findCandidat.typeCV})
  //     }
      
  //     return 
  //   }
  // },[candidat])

  const confirmStart = () => {
    // candidat === null ?
    //   <Alert style={{zIndex : '10000', position : 'absolute'}} message="Warning" type="warning" showIcon closable /> :
    if(candidat === null || carnumber === null){
      setWarning(`Completați cîmpuri CANDIDAT și AUTO`)
      setClickStart(true)
      return
    }

    Modal.confirm({
      title: 'Începe testul practic pentru permisul de conducere?',      
      width : '900px',
      fontSize : '1.2rem',
      onOk: handleStart,
      okText: 'Da',
      cancelText: 'Nu'
    });
  };

  const confirmStop = () => {
    Modal.confirm({
      title: 'Finaliza examenul pentru obținerea permisului de conducere?',
      onOk: handleStop,
      okText: 'Da',
      cancelText: 'Nu'
    });
  };

  const handleStart = () => {
    setStartTime(new Date());
    dispatch(setIsRunning(true));
    dispatch(setFieldsDisabled(true))

    const id = setInterval(() => {
      setEndTime(new Date());
    }, 1000);

    setIntervalId(id);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    dispatch(setIsRunning(false));
    dispatch(setStopExamen(true))

    if (startTime && endTime) {
      let difference = endTime.getTime() - startTime.getTime();
      let minutes = Math.floor(difference / (1000 * 60));
      let seconds = Math.floor((difference / 1000) % 60);

      setFinalDifferenceInMinutes(minutes);
      setFinalDifferenceInSeconds(seconds);
    }

    setStartTime(null);
    setEndTime(null);
    setDifferenceInMinutes(0);
    setDifferenceInSeconds(0);
    setHideButton(true)
  };

  useEffect(() => {
    if (startTime && endTime) {
      let difference = endTime.getTime() - startTime.getTime();
      let minutes = Math.floor(difference / (1000 * 60));
      let seconds = Math.floor((difference / 1000) % 60);

      setDifferenceInMinutes(minutes);
      setDifferenceInSeconds(seconds);
    }
  }, [startTime, endTime]);

  return (
    // <div style={{marginTop : '1rem'}}>
    <div >

      {/* {((candidat === null || carnumber === null) && clickStart === true)  &&
      <Alert
        message="Text de avertizare"
        style={{position : 'absolute', zIndex : '10', width : '75%'}}
        description={worning}
        showIcon
        type="warning"        
        onClose={() => {setClickStart(false)}}
        closable
      />}  */}
 
      <Flex align='center' justify='space-between' style={{display :'contents', width : '100%', color : 'white', margin : '5px 0px'}}>
        
        <div style={{marginBottom : '0.5rem'}} className={hideButton === true ? 'hideTime' : ''}>
          {
            !isRunning ? (
            <div className='main_timer'>
              <div onClick={() => {dispatch(setPage(2))}} style={{fontSize : '3rem', color: 'var(--color-static-text)'}}> <LeftOutlined /></div>
              <div>
                <Button 
                  className='start-button' 
                  icon={<PlayCircleOutlined style={{ fontSize: '1rem' }} />}                  
                  size='large' 
                  type='primary' 
                  onClick={confirmStart}
                >START EXAMENUL
                </Button>
              </div>
            </div>  
          ) : (
            <Button 
              className='start-button'               
              size='large' 
              type='primary' 
              onClick={confirmStop}
            >FINALIZAREA EXAMENULUI
            </Button>
          )
          }
        </div>
      </Flex>

      {startTime && (
        <div className='main_timer'>
          <Flex justify='start' align='center'>
            <ClockCircleOutlined  className='custom-icon' />
            <div className='timer'> {toAddZero(differenceInMinutes)}:{toAddZero(differenceInSeconds)}</div>
          </Flex>
          <div className='puncteleAcumulate'>Punctele <StyledComponent punctele={punctele} /></div>
          {/* <div className='puncteleAcumulate'>Punctele acumulate <StyledComponent punctele={punctele} /></div> */}
        </div>
      )}

      {!isRunning && (finalDifferenceInMinutes > 0 || finalDifferenceInSeconds > 0) && (
        <div className='header'>
          <div className='timer'>Durata examenului {toAddZero(finalDifferenceInMinutes)}:{toAddZero(finalDifferenceInSeconds)} </div>
          {/* <div className='puncteleAcumulate'>Punctele acumulate <StyledComponent punctele={punctele} /> */}
          <div className='puncteleAcumulate'>Punctele <StyledComponent punctele={punctele} />
          </div>          
        </div>          
      )}
    </div>
  );
};

export default Timer;