import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';

import Spinner from '../../../components/Spinner';

import { Form, Input, Button, DatePicker } from 'antd';

import classes from './index.module.css';

const TodoForm = () => {
    const dispatch = useDispatch();
    const onCreateTasks = useCallback((data) => dispatch(actions.createTask(data)), [dispatch]);
    const isLoading = useSelector(state => state.task.loading);

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 },
    };

    const finish = (values) => {
        let newValues = { ...values, dueDate: values.dueDate.toDate() }
        onCreateTasks(newValues);
    }

    return (
        isLoading ?
            <Spinner /> :
            <div className={classes.Form}>
                <Form {...layout} name="new-todo" onFinish={finish}>
                    <Form.Item name={'title'} label="Title" rules={[
                        {
                            required: true,
                            message: 'Please input a Title!',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={'description'} label="Description" rules={[
                        {
                            required: true,
                            message: 'Please input a Description!',
                        },
                    ]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={'dueDate'} label="Due date" rules={[
                        {
                            required: true,
                            message: 'Please input a Due Date!',
                        },
                    ]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
    )
}

export default TodoForm
