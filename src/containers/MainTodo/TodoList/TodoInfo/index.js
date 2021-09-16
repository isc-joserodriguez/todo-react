import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions';

import { Form, Input, Button } from 'antd';

import classes from './index.module.css';

const CustomizedForm = ({ onChange, fields, id, closeModal }) => {

    const dispatch = useDispatch();
    const onUpdateTasks = useCallback((data) => dispatch(actions.updateTask(id, data)), [dispatch, id]);
    const onDeleteTasks = useCallback(() => dispatch(actions.deleteTask(id)), [dispatch, id]);

    const finish = (values) => {
        onUpdateTasks(values)
        closeModal()
    }
    return (
        <Form
            name="global_state"
            fields={fields}
            onFinish={finish}
            onFieldsChange={(_, allFields) => {
                onChange(allFields);
                
            }}
        >
            <Form.Item
                name="title"
                label="Title"
                rules={[
                    {
                        required: true,
                        message: 'Title is required!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="description"
                label="Description"
                rules={[
                    {
                        required: true,
                        message: 'Description is required!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit" >
                    Save
                </Button>
                <Button type="danger" style={{ marginLeft: '20px' }} onClick={() => { onDeleteTasks(); closeModal(); }}>
                    Delete
                </Button>
            </Form.Item>
        </Form>
    )
};

const TodoForm = ({ fields, id, closeModal }) => {
    return (
        <div className={classes.Form}>
            <CustomizedForm
                fields={fields}
                onChange={(newFields) => {
                    //setFields(newFields);
                }}
                id={id}
                closeModal={closeModal}
            />
        </div>
    )
}

export default TodoForm
