import React, { useState } from 'react';
import { Button, Form, Input, Spin } from 'antd';
import { useDispatch } from 'react-redux';
import { LoginOutlined } from '@ant-design/icons';
import { setIsAuth, setUser } from '../app/authSlice';

const buttonStyle = {
  fontSize: '1.25rem', 
  fontWeight: 'bold',
};

const Auth = () => {
  const [email, setEmail] = useState('nenov.dumitru');
  const [password, setPassword] = useState('nenov');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const click = async () => {
    try {
      setLoading(true);
      setTimeout(() => {
        dispatch(setIsAuth(true));
        dispatch(setUser(email));
        setLoading(false);
      }, 300);
    } catch (error) {
      setLoading(false);
      // alert(error.response.data.message);
    }
  };

  return (
    //  <div className='modal'>
     <div>
      {loading ? (
        <Spin />
      ) : (
        <Form
          name="basic"
          initialValues={{ username: email, password }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{  maxWidth: '375px' }} // Используем процентную ширину и максимальную ширину
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value={email} onChange={e => setEmail(e.target.value)} style={buttonStyle} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password value={password} onChange={e => setPassword(e.target.value)} style={buttonStyle} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: 'right' }}>
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