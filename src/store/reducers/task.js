import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    todos: [],
    error: null,
    loading: false,
    showModal: false
}

const createTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}

const createTaskSuccess = (state, action) => {
    let todos = [...state.todos];
    todos.push(action.newTodo);
    return updateObject(state, {
        todos,
        error: null,
        loading: false
    });
}

const createTaskFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const getTasksStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}

const getTasksSuccess = (state, action) => {
    return updateObject(state, {
        todos: action.tasks,
        error: null,
        loading: false
    });
}

const getTasksFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const updateTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}

const updateTaskSuccess = (state, action) => {
    let todos = [...state.todos];
    let index = todos.findIndex(el => el._id === action.task._id);
    todos[index] = action.task;
    return updateObject(state, {
        todos,
        error: null,
        loading: false
    });
}

const updateTaskFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const deleteTaskStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}

const deleteTaskSuccess = (state, action) => {
    let todos = [...state.todos].filter(el => el._id !== action.task._id);
    return updateObject(state, {
        todos,
        error: null,
        loading: false
    });
}

const deleteTaskFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_TASK_START: return createTaskStart(state, action);
        case actionTypes.CREATE_TASK_SUCCESS: return createTaskSuccess(state, action);
        case actionTypes.CREATE_TASK_FAIL: return createTaskFail(state, action);
        case actionTypes.GET_TASKS_START: return getTasksStart(state, action);
        case actionTypes.GET_TASKS_SUCCESS: return getTasksSuccess(state, action);
        case actionTypes.GET_TASKS_FAIL: return getTasksFail(state, action);
        case actionTypes.UPDATE_TASK_START: return updateTaskStart(state, action);
        case actionTypes.UPDATE_TASK_SUCCESS: return updateTaskSuccess(state, action);
        case actionTypes.UPDATE_TASK_FAIL: return updateTaskFail(state, action);
        case actionTypes.DELETE_TASK_START: return deleteTaskStart(state, action);
        case actionTypes.DELETE_TASK_SUCCESS: return deleteTaskSuccess(state, action);
        case actionTypes.DELETE_TASK_FAIL: return deleteTaskFail(state, action);
        default: return state;
    }
}

export default reducer;