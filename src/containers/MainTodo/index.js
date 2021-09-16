import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import classes from './index.module.css';

const MainTodo = () => {
    return (
        <main className={classes.Main}>
            <TodoForm />
            <TodoList />
        </main>
    )
}

export default MainTodo;
