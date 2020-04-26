import React from 'react';
import { UserForm } from '../_components'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UserForm formTitle="Register" />
        );
    }
}

export default RegisterPage;