import React, { useEffect } from 'react'
import {Select} from 'antd'
import { CarOutlined } from '@ant-design/icons';
import {setCarnumber} from '../../app/dlSlice'
import {useDispatch,useSelector} from 'react-redux'
import {setKeysOptionForSelect} from '../../utils/setKeysOptionForSelect'


// const SelectType = ({field,values,width = 100,defaultValue=null}) => {  
const SelectAuto = ({width = 100, defaultValue=null}) => {    
  const carnumber = useSelector((state) =>state.dl.carnumber)
  const mocksCars = useSelector((state) => state.dl.mocksCars);
  const options = setKeysOptionForSelect(mocksCars)      
  const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled)  
  const dispatch = useDispatch()

  // const inputStyle = {
  //   width: carnumber === null ? 130 :  carnumber.lenght,
    
  //   fontWeight: 'bolder',
  //   fontSize: 'large',
  //   padding: '0px 5px',    
  //   color: fieldsDisabled ? '#000000e0' : 'black',
  //   backgroundColor: fieldsDisabled ? '#d9d9d9' : 'white', 
  // };

  const handleChange = (value) => { dispatch(setCarnumber(value)) };
  
  useEffect(() => {
    handleChange(defaultValue)
  },[])

  return (
    <div className={'dynamic__components'}>                
        <div className='query__params'><CarOutlined  /></div>
        <Select
            showSearch            
            defaultValue={defaultValue}
            placeholder={'AUTO'}            
            style={{              
              width
              //width: carnumber === null ? 100 :  carnumber.lenght,
              // backgroundColor: fieldsDisabled ? '#d9d9d9' : 'white',
            }}
            onChange={handleChange}
            options={options}
            disabled={fieldsDisabled}
        />
    </div>
  )
}

export default SelectAuto
