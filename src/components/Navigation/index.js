import React from 'react';
import { PageHeader, Button } from 'antd';
import PropTypes from 'prop-types';

import Icon from '../../assets/img/icon.png';

const Nav = ({
    auth,
    logout,
    showModal,
    changeTab
}) => {
    const showAuth = (tab) => {
        showModal();
        changeTab(tab);
    }
    
    let buttons = auth ? [
        <Button key='1' type='primary' onClick={logout} >
            Logout
        </Button>
    ] : [
        <Button key='1' type='primary' onClick={()=>showAuth('1')}>
            Login
        </Button>,
        <Button key='3' onClick={()=>showAuth('2')} >Signup</Button>,
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

Nav.propTypes = {
    auth: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
}

export default Nav;
