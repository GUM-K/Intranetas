import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { LogIn } from './login';
import { SideBar } from './SideNav';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/login'} component={LogIn}/>  
                <Route path={'/SideNav'} component={SideBar} />
                <Redirect exact from={'/'} to={'/SideNav'} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
