import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import TodoList from '../containers/TodoList';
import Logout from '../containers/Auth/Logout';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/todo' exact={true} component={TodoList} />
            <Route path='/logout' exact={true} component={Logout} />
        </Switch>
    )
}

export default Routes
