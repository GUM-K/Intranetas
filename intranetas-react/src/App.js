import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LogIn } from './login';
import { HomePage } from './homepage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={LogIn}/>  
                <Route path={'/home'} component={HomePage} />
                <Redirect exact from={'/'} to={'/login'} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
