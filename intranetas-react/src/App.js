import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LogIn } from './login';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={LogIn} />
                <Redirect exact from={'/'} to={'/login'} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
