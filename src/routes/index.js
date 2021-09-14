import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import TodoList from '../containers/TodoList';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/todo' exact={true} component={TodoList} />
        </Switch>
    )
}

export default Routes
