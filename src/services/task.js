import axios from 'axios';

const URL = `${process.env.REACT_APP_API}/task`;

export const createTask = ({ data }) => {
    axios.post(URL, data, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        //Do Some
    }).catch(err => {

    });
}

export const getTasks = () => {
    axios.get(URL, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        //Do Some
    }).catch(err => {

    });
}
export const updateTask = ({ data, idTask }) => {
    axios.put(`${URL}/${idTask}`, data, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        //Do Some
    }).catch(err => {

    });
}

export const deleteTask = ({ idTask }) => {
    axios.delete(`${URL}/${idTask}`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => {
        //Do Some
    }).catch(err => {

    });
}