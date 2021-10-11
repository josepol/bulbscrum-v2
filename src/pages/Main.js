import { Route, Switch } from "react-router-dom";
import Home from './Home';
import { HOME_ROUTE } from '../constants';

const Main = () => {
  return (
    <div className="bg-background h-screen flex">
        <Switch>
          <Route exact path={HOME_ROUTE}>
            <Home />
          </Route>
        </Switch>
    </div>
  );
};

export default Main;
