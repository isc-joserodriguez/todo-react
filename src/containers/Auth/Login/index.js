import React from 'react'

import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    const onFinish = (values) => {
        alert('Please enter')
    };

    return (
        <Form
            name='normal_login'
            className='login-form'
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name='email'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            >
                <Input prefix={<MailOutlined />} placeholder='Email' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type='password'
                    placeholder='Password'
                />
            </Form.Item>
            <br />
            <Form.Item>
                <Button type='primary' htmlType='submit' block>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login
