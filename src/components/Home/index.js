import React from 'react';
import { Row, Col } from 'antd';
import { Image, Button } from 'antd';
import PropTypes from 'prop-types';

import Icon from '../../assets/img/icon.png';
import WelcomeLeft from '../../assets/img/welcome-left.png';
import WelcomeRight from '../../assets/img/welcome-right.png';
import WelcomeCenter from '../../assets/img/welcome-center.png';

import classes from './index.module.css'

const Home = ({
    showModal,
    changeTab
}) => {
    const clicked = () => {
        showModal();
        changeTab('1');
    }
    return (
        <Row justify='center' align='bottom'>
            <Col className={classes.Left}>
                <Image
                    preview={false}
                    height={458}
                    src={WelcomeLeft}
                />
            </Col>
            <Col className={classes.Home}>
                <Image
                    preview={false}
                    height={79}
                    width={79}
                    src={Icon}
                />
                <h1>TODO APP</h1>
                <div className={classes.ImageCenter}>
                    <Image
                        preview={false}
                        height={183}
                        src={WelcomeCenter}
                    />
                </div>
                <Button type='primary' className={classes.StartButton} onClick={clicked}>
                    START
                </Button>
            </Col>
            <Col className={classes.Right}>
                <Image
                    preview={false}
                    height={515}
                    src={WelcomeRight}
                />
            </Col>
        </Row>
    )
}

Home.propTypes = {
    showModal: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
}

export default Home
