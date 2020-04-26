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
        const user = this.state.user;
        return (
            <div>
                <UserForm formTitle="Update" userInfo={user} />
            </div>
        );
    }
}

export default UpdatePage;