import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../components/Home';
import TodoList from '../containers/TodoList';

const Routes = ({
    showModal,
    changeTab
}) => {
    return (
        <Switch>
            <Route path='/' exact={true}>
                <Home
                    showModal={showModal}
                    changeTab={changeTab}
                />
            </Route>
            <Route path='/todo' exact={true} component={TodoList} />
        </Switch>
    )
}

Routes.propTypes = {
    showModal: PropTypes.func.isRequired,
    changeTab: PropTypes.func.isRequired
}

export default Routes
