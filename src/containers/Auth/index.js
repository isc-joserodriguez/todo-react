import React from 'react';
import PropTypes from 'prop-types';

import Register from './Register';
import Login from './Login';

import { Tabs } from 'antd';
const Auth = ({ tab, changeTab }) => {
    const { TabPane } = Tabs;

    return (
        <Tabs activeKey={tab} onChange={(key) => { changeTab(key) }} >
            <TabPane tab='Login' key='1'>
                <Login />
            </TabPane>
            <TabPane tab='Register' key='2'>
                <Register />
            </TabPane>
        </Tabs>
    )
}

Auth.propTypes = {
    tab: PropTypes.string.isRequired,
    changeTab: PropTypes.func.isRequired
}

export default Auth
