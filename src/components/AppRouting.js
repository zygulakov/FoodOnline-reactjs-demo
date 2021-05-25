import { BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Restaurants from './Restaurants';
import TopMenu from './TopMenu';

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Restaurants} />
            </Switch>
        </BrowserRouter>
    );
}
export default AppRouting;