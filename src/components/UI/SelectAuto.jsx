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
  const candidat = useSelector((state) => state.dl.candidat)
  const dispatch = useDispatch()

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
            // defaultValue={carnumber === null ? '' : defaultValue}
            placeholder={'AUTO'}            
            style={{ width }}
            onChange={handleChange}
            value={carnumber}
            options={options}
            disabled={!candidat ? true : false}
            // disabled={fieldsDisabled}
        />
    </div>
  )
}

export default SelectAuto
