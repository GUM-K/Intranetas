import React, { useEffect } from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import '../css/main.css';
import '../css/career.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import { applicationActions } from '../_actions';
import { useDispatch } from 'react-redux';



const Career = () => {
    const dispatch = useDispatch();
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        dispatch(applicationActions.getPosition(user.id));
        dispatch(applicationActions.getPositions());
        dispatch(applicationActions.getApplications(user.id));
    }, []);
    const positions = useSelector((state) => state.applications.positions);
    const position = useSelector((state) => state.applications.position);
    const applications = useSelector((state) => state.applications.applications);
    return (
        <div className="careerPageWrapper">
            {console.log(user)}
            <Header pageName='Career' />
            <SideBar />
            <div className="content">
                <div className="heading1"> Current position </div>
                <Grid item xs={12} sm={4}>
                    {position && (<div className="pap">
                        <div className="heading2">{position.name}</div>
                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                            <div className="text"> Current pay: {position.pay} </div>
                            <div className="text"> Time: {position.hoursPerDay} </div>
                        </Grid>
                    </div>)}
                </Grid>
                <div className="heading1"> Available positions </div>
                <div className="empty" />
                <Grid item xs={12} sm={8}>
                    <TableContainer component={Paper} >
                        <Table className={useStyles.table} aria-label="simple table">
                        <TableHead className="TableHead">
                                <TableRow>
                                    <TableCell > <div className="headCell">Position</div></TableCell>
                                    <TableCell align="right" > <div className="headCell">Pay, eur</div></TableCell>
                                    <TableCell align="right" ><div className="headCell">Hours / day</div></TableCell>
                                    <TableCell align="right" ><div className="headCell">Required things</div></TableCell>                                    
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {positions && positions.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <div className="tableCell">{row.name}</div>
                                    </TableCell>
                                    <TableCell align="right"><div className="tableCell">{row.pay}</div></TableCell>
                                    <TableCell align="right"><div className="tableCell">{row.hoursPerDay}</div></TableCell>
                                    <TableCell align="right"><div className="tableCell">{row.requirements}</div></TableCell>                                        
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Grid>

                <div className="empty" />
                <div className="heading1"> My applications </div>
                <div className="empty" />
                <Grid item xs={12} sm={6}>
                    <TableContainer component={Paper}>
                        <Table className={useStyles.table} aria-label="simple table">
                            <TableHead className="TableHead">
                                <TableRow>
                                    <TableCell > <div className="headCell">Position</div></TableCell>
                                    <TableCell align="right" > <div className="headCell">Status</div></TableCell>                                        
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {applications && applications.map((row) => (
                                    <TableRow key={row.position}>
                                        <TableCell component="th" scope="row">
                                            <div className="tableCell">{row.position}</div>
                                        </TableCell>
                                        <TableCell align="right"><div className="tableCell">{row.status}</div></TableCell>                                            
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <div className="empty" />
            </div>
            <Footer />
        </div>
    )
}

export default Career