import React, { useState } from 'react';
import {  Button, Form, Input, Flex, Spin  } from 'antd';
// import {useNavigate} from 'react-router-dom'
import { login } from '../http/userApi';
//import {setIsAuth,setRoles,setUser} from '../app/authSlice'
import {setIsAuth,setUser} from '../app/authSlice'
import { useDispatch } from 'react-redux';
import {LoginOutlined} from '@ant-design/icons'

const buttonStyle = {
  fontSize: '20px', // Размер шрифта
  fontWeight: 'bold', // Жирность шрифта
  
};

const Auth = () => {

  const [email,setEmail] = useState('nenov.dumitru')
  const [password,setPassword] = useState('nenov')
  const [loading, setLoading] = useState(false)

  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const click = async () => {
    try {
      setTimeout(() => {
        setLoading(true)
      },300);
      
      // let data = await login(email,password)  
      // console.log('click response data', data)

      // let roles = []

      // for(let i = 0; i < data.roles.length; i++){
      //   let objectRole = {}
      //   let role = data.roles[i].value
      //   let description = data.roles[i].description
      //   roles.push({'role' : role, 'description' : description})
      // }

      //let roles = data.roles.map(({value}) => value)
      //console.log('roles',roles)
      dispatch(setIsAuth(true))

      // dispatch(setRoles(roles))
      // dispatch(setUser(data.email))           
      // navigate('/')
      
    } catch (error) {
      setLoading(false)
      // alert(error.response.data.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='modal' > 
      {
        loading ? 
          <Spin /> :
            <Flex align='center' justify='center'>
            {/* <Flex style={{height : window.innerHeight - 60}} align='center' justify='center'> */}

              <Form
                fontSize='20'
                name="basic"   
                initialValues={{ username: email,  password}}             
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  maxWidth: 600,
                }}          
                // onFinish={click}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                {/* <h3 style={{display : "table", margin : "0 auto", padding : "10px"}}>Authorization</h3> */}
                <Form.Item
                  label="Username"
                  name="username"   
                  value={email}                               
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input style={buttonStyle} value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password" 
                  value={password}                 
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password style={buttonStyle}  value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Item>

                <Form.Item
                  wrapperCol={{                    
                    // offset: 8,
                    // span: 16,
                  }}
                > 
                  {/* <Button type="primary" htmlType="submit" style={{float : 'right'}}> */}
                  <Button 
                    icon={<LoginOutlined style={{ fontSize: '1.5em' }} />} 
                    type="primary" 
                    onClick={click} 
                    style={{position:'absolute', right : '0'}} 
                    className='authButton'
                  >
                    Autentificare
                  </Button>
                </Form.Item>
              </Form>
            </Flex>
      }

    </div>

  )
}

export default Auth
