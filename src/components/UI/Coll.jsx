import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Button, Modal, message, notification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuth, setUser } from '../../app/authSlice';
import { SendOutlined,SaveOutlined } from '@ant-design/icons';
import { setList, setPunctele, setIsRunning, setStopExamen, setCarnumber, setCandidat, setFieldsDisabled, setStatistics } from '../../app/dlSlice';

const { confirm, info } = Modal;

const Coll = () => {
  const [failedExam,setFailedExam] = useState(false)
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.error({
      message: (        
        <span style={{ color: 'black' }}>
          EXAMEN NU A FOST SUSȚINUT
        </span>
      ),
      description: (        
        <span style={{ color: 'black' }}>
          Ați atins limita de puncte de penalizare. Examenul a eșuat.
        </span>
      ),
      style: {
        backgroundColor : 'var(--color-white)'
      },
    });
  };

  const list = useSelector((state) => state.dl.list);
  const isRunning = useSelector((state) => state.dl.isRunning);
  const stopExamen = useSelector((state) => state.dl.stopExamen);
  const punctele = useSelector((state) => state.dl.punctele);
  const statistics = useSelector((state) => state.dl.statistics);
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const headerRef = useRef(null);
  const headerHeight = useSelector((state) => state.dl.headerHeight)

  useEffect(() => {
    if(failedExam === false && punctele >= 21){
      failedExam,setFailedExam(true)
      openNotification()
    }
  },[punctele])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (stopExamen && punctele >= 21) {
      // showModal('EXAMEN NU A FOST SUSȚINUT', `Ați atins limita de puncte de penalizare. TOTAL: ${punctele}. Examenul a eșuat`);
      showModal('EXAMEN NU A FOST SUSȚINUT', `Ați atins limita de puncte de penalizare ${punctele}. Examenul a eșuat`,'error');
      return;
    } 
    if (stopExamen && punctele < 21) {
      showModal('SUSȚINUT', 'Examenul a fost promovat cu succes!','success');
      return;
    }
  }, [stopExamen, punctele]);

  const handleItemClick = (id, text) => {
    setSelectedId(id);
    showConfirm(id, text);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.penalizare-item') && 
        !event.target.closest('.ant-modal') && 
        !event.target.closest('.ant-modal-wrap')) {
      setSelectedId(null);
    }
  };

  const showConfirm = (id, text) => {
    confirm({
      title: (
        <div>
          <div>Ești sigur că dorești să adaugi punctele de penalizare??</div>
          <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{id}. {text}</div>
        </div>
      ),
      width: '900px',
      centered: true,
      content: null,
      modalRender: (modal) => (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%'
        }}>
          {modal}
        </div>
      ),
      onOk() {
        console.log('Confirmed add for id:', id);
        dispatch(setList(id));
        dispatch(setPunctele());
        dispatch(setStatistics(id));
        setActiveKey(null);  // Close the collapse section
      },
      onCancel() {
        console.log('Cancel');
        setActiveKey(null);  // Close the collapse section
      },
    });
  };

  const showModal = (title, content,status) => {
    Modal[status]({
      title: title,      
      content: (
        <div>
          <p>{content}</p>
          {
            statistics.length ?
            <div>
              <h3>Lista erorilor</h3>
              <ul>
                {statistics.map(({time, text, result},index, array) => 
                  <li 
                    key={Math.random() * Date.now()}
                    style={{
                      ...(index % 2 === 0 ? {background : '#D3D3D3', borderRadius : '0.2rem' } : {}),
                      fontSize : '0.9rem',
                      paddingBottom : '0.3rem'
                    }}
                  >                    
                    {time}. {text}. Penalizare: {result}
                  </li>
                )}
              </ul>
            </div> : <h2>Bravo nici o eroare</h2>
          }
        </div>
      ),            
      okText: (
      <>
        <SaveOutlined /> Close
      </>
      ),
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
        console.log('EXITTTTTT');
      },
    });
  };

  useEffect(() => {
    if (activeKey !== null) {
      const timer = setTimeout(() => {
        if (activeKey.length > 0) {
          //const headerHeight = headerRef.current.clientHeight;
          const targetElement = document.querySelectorAll(".ant-collapse-item")[Number(activeKey[0]) - 1];

          console.log(activeKey[0] - 1);
          console.log('targetElement: ', targetElement.offsetTop);
          console.log('headerHeight: ', headerHeight);
          console.log('-----');

          window.scroll({
            top: targetElement.offsetTop - headerHeight ,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [activeKey]);

  const items = list.map((param) => ({
    key: param.id,
    label: `${param.id}. ${param.title}`,
    style: { fontSize: '1.3rem', color: 'white' },
    children: (
      <>
        {param.penalizare.map((penalizare, index, array) => (
          <div
            key={penalizare.id}
            className={'notSelectedId'}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              transition: 'transform 0.3s',
              cursor: 'pointer',
              position: 'relative',
              fontSize :'1.3rem',
              paddingTop : '0.8rem',
              paddingBottom : '0.8rem',              
              ...(index % 2 === 0 ? {background : '#D3D3D3', borderRadius : '0.2rem' } : {}) // even index / odd index 
            }}
            onClick={() => handleItemClick(penalizare.id, penalizare.text)}
          >
            {(penalizare.id === selectedId && stopExamen === false) ?
              <>
                <div style={{ width: '76%', textAlign: 'left', fontSize: 'x-large' }}>{penalizare.id} {penalizare.text}</div>
                <div style={{ width: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                </div>
              </>
              :
              <>
                <div style={{ width: '10%' }}><strong>{penalizare.id}</strong></div>
                <div style={{ width: '76%', textAlign: 'left' }}>{penalizare.text}</div>
              </>
            }
            <div style={{ width: '7%' }}>{penalizare.result}</div>
            <div style={{ width: '7%' }}>{penalizare.count}</div>
          </div>
        ))}
      </>
    ),
  }));

  return (
    <div style={{marginTop : headerHeight}}>
      <div ref={headerRef} className='headerMain'></div>
      {contextHolder}      
      <div className={(isRunning === false && stopExamen === false) || (stopExamen === true) ? 'disabledbutton' : ''}>        
        <Collapse          
          style={{ height: 'auto', scroll: 'auto', }}
          accordion
          items={items}
          activeKey={activeKey}
          onChange={(key) => setActiveKey(key)}
        />
      </div>
    </div>
  );
};

export default Coll;