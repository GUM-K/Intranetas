import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { UsersPage } from '../UsersPage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { UpdatePage } from '../UpdatePage';
import { HomePage } from '../home';
import { Helmet } from 'react-helmet';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="homepage-wrapper">
                <Helmet>
                    <title>Dewbridge</title>
                </Helmet>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <PrivateRoute exact path="/update" component={UpdatePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/users" component={UsersPage} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };