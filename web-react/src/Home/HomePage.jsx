import React from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import {Footer} from '../_components'
import { userActions } from '../_actions';
import { connect } from 'react-redux';
import '../css/index.css';
import '../css/main.css';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

class HomePage extends React.Component {
    render() {
        return (
            <div className="homePageWrapper">
                {console.log(JSON.parse(localStorage.getItem('user')))}
                <Header />
                <SideBar />
                <div className="content">
                    <div className="col-md-offset-3 carousel-content">
                        <Carousel autoplay>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                                    <img className="mx-auto" src="https://create-react-app.dev/img/logo-og.png" width="100%" height="300px" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://material-ui.com/">
                                    <img className="mx-auto" src="https://miro.medium.com/max/3374/1*_mdpsmNUZ05vQb-q09t3jA.png" width="100%" height="300px" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.informatics-europe.org/news.html">
                                    <img className="mx-auto" src="https://www.informatics-europe.org/images/news/news-general.jpg" width="100%" height="300px" />
                                </a>
                            </div>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href="https://hub.packtpub.com/category/programming/">
                                    <img className="mx-auto" src="https://lh3.googleusercontent.com/hRd7I3RiY891nK1U6enY3ZCuN21HRiHnFNu7r7Jn-hDMwEooJY5Ie5cyEPcLlFihvQ" width="100%" height="300px" />
                                </a>
                            </div>
                        </Carousel>
                    </div>
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