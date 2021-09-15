import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

import { PageHeader, Button } from 'antd';

import Icon from '../../assets/img/icon.png';

const Nav = () => {
    const dispatch = useDispatch();
    const onShowModal = useCallback((tab) => dispatch(actions.authModal(tab, true)), [dispatch]);

    const isAuthenticated = useSelector(state => !!state.auth.token);

    const history = useHistory();

    const onLogout = useCallback(() => history.push('/logout'), [history]);


    let buttons = isAuthenticated ? [
        <Button key='1' type='primary' onClick={onLogout} >
            Logout
        </Button>
    ] : [
        <Button key='1' type='primary' onClick={() => onShowModal('1')}>
            Login
        </Button>,
        <Button key='3' onClick={() => onShowModal('2')} >Signup</Button>,
    ];
    return (
        <>
            <PageHeader
                className='header'
                title='TO-DO List'
                extra={buttons}
                avatar={{ src: Icon }}
            />
        </>
    )
}

export default Nav;
