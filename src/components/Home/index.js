import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';
import * as actions from '../../store/actions';

import { Row, Col } from 'antd';
import { Image, Button } from 'antd';

import Icon from '../../assets/img/icon.png';
import WelcomeLeft from '../../assets/img/welcome-left.png';
import WelcomeRight from '../../assets/img/welcome-right.png';
import WelcomeCenter from '../../assets/img/welcome-center.png';

import classes from './index.module.css'

const Home = () => {
    const dispatch = useDispatch();
    const onShowModal = useCallback((tab) => dispatch(actions.authModal('1', true)), [dispatch]);

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
                <Button type='primary' className={classes.StartButton} onClick={onShowModal}>
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

export default Home
