import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { useHistory } from "react-router-dom";

import Spinner from '../../../components/Spinner';

import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const Signup = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const onSignup = useCallback((data) => dispatch(actions.auth(data, true, history)), [dispatch]);

    const isLoading = useSelector(state => state.auth.loading);

    const errorMessage = useSelector(state => state.auth.error);


    const onFinish = (values) => {
        onSignup(values)
    };

    return (
        isLoading ?
            <Spinner /> :
            <Form
                name='normal_signup'
                className='signup-form'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name='firstName'
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
                    name='lastName'
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

                {errorMessage ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
            </Form>

    );
}

export default Signup
