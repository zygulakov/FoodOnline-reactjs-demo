import { BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Restaurants from './Restaurants';
import RestaurantPage from './RestaurantPage';


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/restaurants' exact component={ Restaurants} />
                <Route path='/restaurants/:id'  exact component={ RestaurantPage} />
            </Switch>
        </BrowserRouter>
    );
}
export default AppRouting;