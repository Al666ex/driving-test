import React, { useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { LoginOutlined } from '@ant-design/icons';
import { setIsAuth, setUser } from '../app/authSlice';
import { setPage } from '../app/dlSlice'

const Auth = () => {
  const [email, setEmail] = useState('nenov.dumitru');
  const [password, setPassword] = useState('nenov');
  const [loading, setLoading] = useState(false);
  const page = useSelector((state) => state.dl.page)
  const dispatch = useDispatch();

  const click = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        dispatch(setIsAuth(true));
        // localStorage.setItem("isAuth", true)
        dispatch(setUser(email));
        setLoading(false);
        dispatch(setPage(2))
      }, 300);
    } catch (error) {
      setLoading(false);
      // alert(error.response.data.message);
    }
  };

  return (
    //  <div className='modal'>
     <div className='modal'>
      {loading ? (
        <div className='spinner-container'>
          <Spin size='large' />
        </div>
      ) : (
        <Form
          name="basic"
          initialValues={{ username: email, password }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}          
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              className='inputSize' 
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className='inputSize' 
            />
          </Form.Item>

          <Form.Item 
            wrapperCol={{ span: 24 }} 
            style={{ textAlign: 'right' }}
          >
            <Button
              icon={<LoginOutlined style={{ fontSize: '1.5rem' }} />}
              type="primary"
              onClick={click}
              className='authButton'
            >
              Autentificare
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default Auth;