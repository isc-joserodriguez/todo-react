import React, { useState } from 'react';

import Nav from './components/Navigation';
import Routes from './routes';

import { Modal } from 'antd';

import Auth from './containers/Auth';


function App() {
  const [token, setToken] = useState(null);

  const [tab, setTab] = useState('1');

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const showModal = () => setAuthModalVisible(true);

  const hideModal = () => setAuthModalVisible(false);

  const changeTab = (tab) => setTab(tab);

  const logout = () => setToken(null);

  return (
    <div className="App">
      <Nav
        auth={!!token}
        logout={logout}
        showModal={showModal}
        changeTab={changeTab}
      />
      <Routes />
      <Modal
        visible={authModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <Auth
          tab={tab}
          changeTab={changeTab}
        />
      </Modal>
    </div>
  );
}

export default App;