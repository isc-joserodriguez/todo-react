import React from 'react'

import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const Signup = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
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
                name='name'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Name!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder='Name' />
            </Form.Item>

            <Form.Item
                name='lastname'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Lastname!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder='Lastname' />
            </Form.Item>

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

            <Form.Item
                name='confirmPassword'
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your Password!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type='password'
                    placeholder='Confirm Password'
                />
            </Form.Item>

            <br />
            <Form.Item>
                <Button type='primary' htmlType='submit' block>
                    Signup
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Signup
