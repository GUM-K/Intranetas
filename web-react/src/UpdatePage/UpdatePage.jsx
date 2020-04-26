import React from 'react';
import { UserForm } from '../_components'

class UpdatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        };
    }

    render() {
        return (
            <UserForm formTitle="Update" userInfo={this.state.user} />
        );
    }
}

export default UpdatePage;