import React from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import {Footer} from '../_components'
import 'react-calendar/dist/Calendar.css';
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import '../css/main.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homePageWrapper">
                {console.log(JSON.parse(localStorage.getItem('user')))}
                <Header />
                <SideBar />
                <div className="content">
<<<<<<< HEAD
                    <div> WIP </div>

=======
                    
>>>>>>> 3dc7c362f299ddd05a702da280291b5e627acafa
                </div>
                <Footer />
            </div>
        )
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };