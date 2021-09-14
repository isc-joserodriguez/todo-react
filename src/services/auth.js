import axios from 'axios';

const URL = `${process.env.REACT_APP_API_Connect}/user`;

export const login = ({ data }) => {
    axios.post(
        `${URL}/login`, data).then(res => {
            localStorage.setItem('token', `Bearer ${res.data.detail.token}`);
            localStorage.setItem('id', res.data.detail._id);
        }).catch(err => {

        });
}

export const signup = ({ data }) => {
    axios.post(`${URL}/signup`, data).then(res => {
        localStorage.setItem('token', `Bearer ${res.data.detail.token}`);
        localStorage.setItem('id', res.data.detail.idUser);
    }).catch(err => {

    });
}