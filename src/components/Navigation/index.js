import React from 'react';
import { PageHeader, Button } from 'antd';

import Icon from '../../assets/img/icon.png';

const Nav = () => {
    return (
        <>
            <PageHeader
                className="header"
                title="TO-DO List"
                extra={[
                    <Button key="3">Register</Button>,
                    <Button key="2" type="primary">
                        Logout
                    </Button>,
                    <Button key="1" type="primary">
                        Login
                    </Button>,
                ]}
                avatar={{ src: Icon }}
            />
        </>
    )
}

export default Nav;
