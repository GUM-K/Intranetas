import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5b3034',
        },
        secondary: {
            light: '#0066ff',
            main: '#770606',
            contrastText: '#ffcc00',
        },
    },
});

const loggedIn = false;


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        //const useStyles = makeStyles((theme) => ({
        //    paper: {
        //        marginTop: theme.spacing(8),
        //        display: 'flex',
        //        flexDirection: 'column',
        //        alignItems: 'center',
        //    },
        //    avatar: {
        //        margin: theme.spacing(1),
        //        backgroundColor: theme.palette.secondary.main,
        //    },
        //    form: {
        //        width: '100%', // Fix IE 11 issue.
        //        marginTop: theme.spacing(1),
        //    },
        //    submit: {
        //        margin: theme.spacing(3, 0, 2),
        //    },
        //}));
        //const classes = useStyles();
        const classes = {};
        return (
            loggedIn ? (
                <Redirect to="/home" />
            ) :
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" style={{ fontSize: '14px'}}>
                            Login
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                            <ThemeProvider theme={theme}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    style={{ fontSize: '14px'}}
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    style={{ fontSize: '12px'}}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ fontSize: '12px'}}
                                    className={classes.submit}
                                >
                                    Login
                        </Button>
                            </ThemeProvider>
                        </form>
                    </div>
                    <Box mt={8}>
                    </Box>
                </Container>
        )
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };