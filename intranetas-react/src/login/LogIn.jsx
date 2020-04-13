import React, { useState } from 'react'
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';

export default () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login-form">
                <FormGroup controlId="email" bsSize="large">
                    <label>Email</label>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <label>Password</label>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Link to="/home">
                    <Button block bsSize="large" disabled={!validateForm()} type="submit">
                            Login
                    </Button>
                </Link>
            </form>
        </div>
        )
}