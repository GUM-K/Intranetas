import React from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import '../css/main.css';
import '../css/career.css';

class Career extends React.Component {
    render() {
        return (
            <div className="careerPageWrapper">
                <Header />
                <SideBar />
                <div className="content">
                    <div className="heading1"> Current position </div>
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

const connectedCareer = connect(mapState, actionCreators)(Career);
export { connectedCareer as Career };