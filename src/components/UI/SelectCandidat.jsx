import React, { useEffect } from 'react'
import {Select} from 'antd'
import { UserAddOutlined } from '@ant-design/icons';
import {setCandidat,setCarnumber} from '../../app/dlSlice'
import {useDispatch,useSelector} from 'react-redux'
import {setKeysOptionForSelect} from '../../utils/setKeysOptionForSelect'

// const SelectType = ({field,values,width = 100,defaultValue=null}) => {  
const SelectCandidat = ({width = 100, defaultValue=null}) => {    
  const candidat = useSelector((state) =>state.dl.candidat)
  const mocksSolicitants = useSelector((state) => state.dl.mocksSolicitants);
  const options = setKeysOptionForSelect(mocksSolicitants.map(function(solicitant) {
    return  solicitant.name ;
  }))      
  const fieldsDisabled = useSelector((state) => state.dl.fieldsDisabled)  
  const dispatch = useDispatch()

  useEffect(() =>{    
     localStorage.setItem('carnumber','') 
     dispatch(setCarnumber(''))
    
  },[candidat])

  const handleChange = (value) => { dispatch(setCandidat(value)) };
  
  useEffect(() => {
    handleChange(defaultValue)
  },[])

  return (
    <div className={'dynamic__components'}>                
        <div className='query__params'><UserAddOutlined  /></div>
        <Select
            showSearch            
            defaultValue={defaultValue}
            placeholder={'CANDIDAT'}            
            style={{ width }}
            onChange={handleChange}
            options={options}
            disabled={fieldsDisabled}
        />
    </div>
  )
}

export default SelectCandidat
