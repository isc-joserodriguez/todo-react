import React, { useState, useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions';

import Signup from './Signup';
import Login from './Login';

import { Tabs } from 'antd';
const Auth = () => {
    const dispatch = useDispatch();

    const activeTab = useSelector(state => state.auth.tabActive);

    const onChangeTab = useCallback((tab) => dispatch(actions.toggleAuthModal(tab, true)), [dispatch]);

    const { TabPane } = Tabs;

    return (
        <Tabs activeKey={activeTab} onChange={(key) => { onChangeTab(key) }} >
            <TabPane tab='Login' key='1'>
                <Login />
            </TabPane>
            <TabPane tab='Signup' key='2'>
                <Signup />
            </TabPane>
        </Tabs>
    )
}

export default Auth
