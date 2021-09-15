import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { useHistory } from "react-router-dom";

import Spinner from '../../../components/Spinner';

import { Form, Input, Button } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const onLogin = useCallback((data) => dispatch(actions.auth(data, false, history)), [dispatch]);

    const isLoading = useSelector(state => state.auth.loading);

    const errorMessage = useSelector(state => state.auth.error);

    const onFinish = (values) => {
        onLogin(values)
    };

    return (
        isLoading ?
            <Spinner /> :
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
                {errorMessage ? <span style={{ color: 'red' }}>{errorMessage}</span> : null}
            </Form>
    );
};

export default Login
