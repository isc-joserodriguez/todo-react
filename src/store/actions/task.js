import axios from 'axios';

import * as actionTypes from './actionTypes';


export const createTaskStart = () => {
    return {
        type: actionTypes.CREATE_TASK_START
    };
};

export const createTaskSuccess = (task) => {
    return {
        type: actionTypes.CREATE_TASK_SUCCESS,
        newTodo: task
    };
}

export const createTaskFail = (error) => {
    return {
        type: actionTypes.CREATE_TASK_FAIL,
        error
    }
}

export const createTask = (data) => {
    return dispatch => {
        dispatch(createTaskStart());
        axios.post(`${process.env.REACT_APP_API}/task`, data, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            dispatch(createTaskSuccess(response.data.detail));
        }).catch(err => {
            dispatch(createTaskFail('Unable to add Tasks'));
        });
    };
};


export const getTasksStart = () => {
    return {
        type: actionTypes.GET_TASKS_START
    };
};

export const getTasksSuccess = (tasks) => {
    return {
        type: actionTypes.GET_TASKS_SUCCESS,
        tasks
    };
}

export const getTasksFail = (error) => {
    return {
        type: actionTypes.GET_TASKS_FAIL,
        error
    }
}

export const getTasks = () => {
    return dispatch => {
        dispatch(getTasksStart());
        axios.get(`${process.env.REACT_APP_API}/task`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            dispatch(getTasksSuccess(response.data.detail));
        }).catch(err => {
            dispatch(getTasksFail('Tasks not found!'));
        });
    };
};

export const updateTaskStart = () => {
    return {
        type: actionTypes.UPDATE_TASK_START
    };
};

export const updateTaskSuccess = (task) => {
    return {
        type: actionTypes.UPDATE_TASK_SUCCESS,
        task
    };
}

export const updateTaskFail = (error) => {
    return {
        type: actionTypes.UPDATE_TASK_FAIL,
        error
    }
}


export const updateTask = (id, data) => {
    return dispatch => {
        dispatch(updateTaskStart());
        axios.put(`${process.env.REACT_APP_API}/task/${id}`, data, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            dispatch(updateTaskSuccess(response.data.detail));
        }).catch(err => {
            dispatch(updateTaskFail('Tasks not found!'));
        });
    };
};

export const deleteTaskStart = () => {
    return {
        type: actionTypes.DELETE_TASK_START
    };
};


export const deleteTaskSuccess = (task) => {
    return {
        type: actionTypes.DELETE_TASK_SUCCESS,
        task
    };
}


export const deleteTaskFail = (error) => {
    return {
        type: actionTypes.DELETE_TASK_FAIL,
        error
    }
}



export const deleteTask = (id) => {
    return dispatch => {
        dispatch(deleteTaskStart());
        axios.delete(`${process.env.REACT_APP_API}/task/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        }).then(response => {
            dispatch(deleteTaskSuccess(response.data.detail));
        }).catch(err => {
            dispatch(deleteTaskFail('Tasks not found!'));
        });
    };
};