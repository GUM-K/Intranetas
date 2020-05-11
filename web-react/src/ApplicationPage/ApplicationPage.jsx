import React, { useState } from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'
import { Button, TextField } from '@material-ui/core'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { authHeader } from '../_helpers';
import axios from 'axios';

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

export default () => {
    const [CV, setCV] = useState();
    const [motivational, setMotivational] = useState();
    const [additionalInfo, setAdditionalInfo] = useState();

    const handleCVChange = event => {
        event.preventDefault();
        const file = event.target.files[0];

        if (file){
            setCV(file);
        }
    }

    const handleMotivationalChange = event => {
        event.preventDefault();
        const file = event.target.files[0];

        if (file){
            setMotivational(file);
        }
    }

    const handleChange = (event) => {
        event.preventDefault();

        setAdditionalInfo(event.target.value);
    }

    const handleSubmit = () => {
        if (CV && motivational){
            const formData = new FormData();

            formData.append('CV', CV);
            formData.append('Motivational', motivational);
            formData.append('AdditionalInfo', additionalInfo);

            return axios({
                method: 'post',
                url: 'http://localhost:4000/applications/upload',
                headers: {'Content-Type': 'multipart/form-data' },
                data: formData,
                })
                .then(function (response) {
                    //handle success
                    console.log(response);
                })
                .catch(function (response) {
                    //handle error
                    console.log(response);
                });
        }
    }

    const useStyles = makeStyles((theme) => ({
            butt: {
                width: '220px',
                height: '70px',
                fontSize: '14px',
                fontFamily: 'Arial, Helvetica, sans-serif',
            },
            input: {
                width: '300px',
                height: '200px',
                fontSize: '16px',
            },
            textarea: {
                width: '300px',
            },
            lastButt: {
                marginBottom: '20px',
            }
        }));

    const classes = useStyles(theme);
    return(
        <div className="page-wrapper">
            <Header />
            <SideBar />
            <div className="content">
                <form onSubmit={handleSubmit} noValidate>
                    <ThemeProvider theme={theme}>

                        <h3>Upload your CV:</h3>

                        <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        className={classes.butt}
                        >
                        {CV ? CV.name : 'Upload CV...'}
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange = {handleCVChange}
                        />
                        </Button>

                        <h3>Upload your motivational letter:</h3>

                        <Button
                        variant="contained"
                        component="label"
                        color="primary"
                        className={classes.butt}
                        >
                        {motivational ? motivational.name : 'Upload motivational...'}
                        <input
                            type="file"
                            style={{ display: "none" }}
                            onChange = {handleMotivationalChange}
                        />
                        </Button>

                        <h3>Other additional information about yourself:</h3>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            rows={7}
                            inputProps = {{classes: {input: classes.textfield}}}
                            placeholder = "Additional info"
                            id="info"
                            name="info"
                            multiline
                            InputProps={{
                                className: classes.input,
                            }}
                            onChange={handleChange}
                        />
                        <div className={classes.lastButt}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.butt}
                            >
                                Submit
                            </Button>
                        </div>
                    </ThemeProvider>
                </form>
            </div>
            <Footer />
        </div>
    );
}