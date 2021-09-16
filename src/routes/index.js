import { Route, Switch, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import Home from '../components/Home';
import MainTodo from '../containers/MainTodo';
import Logout from '../containers/Auth/Logout';

const Routes = () => {
    const isAuthenticated = useSelector(state => !!state.auth.token);

    const routes = isAuthenticated ?
        <>
            <Route path='/' exact={true} component={Home} />
            <Route path='/todos' exact={true} component={MainTodo} />
            <Route path='/logout' exact={true} component={Logout} />
            <Route>
                <Redirect to='/todos' />
            </Route>
        </> :
        <>
            <Route path='/' exact={true} component={Home} />
            <Route>
                <Redirect to='/' />
            </Route>
        </>
    return (
        <Switch>
            {routes}

        </Switch>
    )
}

export default Routes
