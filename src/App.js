import React, { useState, useCallback, useEffect } from 'react';

import Nav from './components/Navigation';
import Routes from './routes';

import { Modal } from 'antd';

import Auth from './containers/Auth';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/actions';


function App() {
  const dispatch = useDispatch();

  const isAuthModalVisible = useSelector(state => !!state.auth.showModal);
  const isAuthenticated = useSelector(state => !!state.auth.token);
  const onTryAutoSignup = useCallback(() => dispatch(actions.authState()), [dispatch]);
  const onHideModal = useCallback(() => dispatch(actions.authModal('1', false)), [dispatch]);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
    <div className='App'>
      <Nav />
      <Routes />
      <Modal
        visible={isAuthModalVisible}
        onCancel={onHideModal}
        footer={null}
      >
        <Auth />
      </Modal>
    </div>
  );
}

export default App;