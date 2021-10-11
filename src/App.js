import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROOT_ROUTE, REGISTER_ROUTE, LOGIN_ROUTE } from "./constants";

const Main = React.lazy(() => import("./pages/Main"));
const Register = React.lazy(() => import("./pages/Register"));
const Login = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="font-circularLight bg-background h-screen">
      <Router>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path={LOGIN_ROUTE}>
              <Login />
            </Route>
            <Route exact path={REGISTER_ROUTE}>
              <Register />
            </Route>
            <Route path={ROOT_ROUTE}>
              <Main />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
