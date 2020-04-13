import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LogIn } from './login';
import { HomePage } from './homepage';
import { Helmet } from 'react-helmet';

function App() {
    return (
        <BrowserRouter>
            <Helmet>
                <title>Dewbridge</title>
            </Helmet>
            <Switch>
                <Route path={'/login'} component={LogIn}/>  
                <Route path={'/home'} component={HomePage} />
                <Redirect exact from={'/'} to={'/login'} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
