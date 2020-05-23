import React from 'react';
import { UserForm, Header, SideBar, Footer } from '../_components'

class UpdatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        };
    }

    render() {
        const user = this.state.user;
        return (
            <div>
                <Header pageName='Profile Edit'/>
                <SideBar />
                <div className="content">
                    <UserForm formTitle="Update" userInfo={user} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default UpdatePage;