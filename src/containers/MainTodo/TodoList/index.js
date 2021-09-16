import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';

import Spinner from '../../../components/Spinner';

import TodoInfo from './TodoInfo';

import { List, Tooltip, Modal, Button } from 'antd';

import classes from './index.module.css'

const TodoList = () => {
    const dispatch = useDispatch();
    const onGetTasks = useCallback(() => dispatch(actions.getTasks()), [dispatch]);
    const onUpdateTasks = useCallback((id, data) => dispatch(actions.updateTask(id, data)), [dispatch]);
    const todoList = useSelector(state => state.task.todos);
    const isLoading = useSelector(state => state.task.loading);

    const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);

    const [fields, setFields] = useState([
        {
            name: ['title'],
            value: 'Leche',
        },
        {
            name: ['description'],
            value: 'Descripción',
        },
    ]);

    const [id, setId] = useState('');


    const onShowModal = (id) => {
        let todos = [...todoList];
        let index = todos.findIndex(el => el._id === id);
        setId(id);
        setFields(
            [
                {
                    name: ['title'],
                    value: todos[index].title,
                },
                {
                    name: ['description'],
                    value: todos[index].description,
                },
            ])
        setIsTaskModalVisible(true);
    }
    const onHideModal = () => setIsTaskModalVisible(false);

    useEffect(() => {
        onGetTasks();
    }, [onGetTasks]);
    return (
        isLoading ?
            <Spinner /> :
            <div className={classes.TodoList}>
                <List
                    itemLayout="horizontal"
                    dataSource={todoList}
                    renderItem={item => (
                        <Tooltip title={`Click to set ${item.status ? 'incomplete' : 'complete'}`} >
                            <List.Item
                                className={` ${classes.Click} ${classes.Item} ${item.status ? classes.Complete : new Date(item.dueDate) < new Date() ? classes.Expired : 'hi'}`}
                            >
                                <List.Item.Meta
                                    title={<p className={
                                        item.status ?
                                            classes.CompleteTitle : ''
                                    }>{item.title}</p>}
                                    description={<p>{item.description}</p>}
                                    onClick={() => { onUpdateTasks(item._id, { status: !item.status }) }}
                                />
                                <div>
                                    {`Expiration: ${new Date(item.dueDate).toISOString().split('T')[0]}`}
                                    <br />
                                    <br />
                                    <Button type='primary' className={classes.StartButton} onClick={() => onShowModal(item._id)}>
                                        Info
                                    </Button>
                                </div>
                            </List.Item>
                        </Tooltip>
                    )}
                />

                <Modal
                    title='Info'
                    visible={isTaskModalVisible}
                    onCancel={onHideModal}
                    footer={null}
                >
                    <TodoInfo
                        fields={fields}
                        id={id}
                        closeModal={onHideModal}
                    />
                </Modal>

            </div>
    )
}

export default TodoList;