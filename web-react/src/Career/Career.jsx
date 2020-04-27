import React from 'react'
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'
import { userActions } from '../_actions';
import { connect } from 'react-redux';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, pay, hours, needed) {
    return { name, pay, hours, needed };
}

function createData1(position, status) {
    return { position, status };
}

const rows = [
    createData('Software Engineer', 1590, 6.0, 'IT bachelor`s degree'),
    createData('Profesional procrastinator', 15900, 8.0, 'Being a procrastinator certificate'),
    createData('Lel', 100, 1.0, 'X)'),
    createData('Software Engineer', 1590, 6.0, 'IT bachelor`s degree'),
    createData('Software Engineer', 1590, 6.0, 'IT bachelor`s degree'),
];

const rows1 = [
    createData1('Software Engineer', 'Ne'),
    createData1('Profesional procrastinator', 'Accepted'),
];

class Career extends React.Component {
    render() {

        const user = JSON.parse(localStorage.getItem('user'));
        return (
            <div className="careerPageWrapper">
                <Header pageName='Career' />
                <SideBar />
                <div className="content">
                    <div className="heading1"> Current position </div>
                    <Grid item xs={12} sm={4}>
                        <div className="pap">
                            <div className="heading2"> Piece of shit</div>
                            <Grid container direction="column" justify="left" alignItems="left">
                                <div className="text"> Current pay: 0 </div>
                                <div className="text"> Time: all </div>
                            </Grid>
                        </div>
                    </Grid>
                    <div className="heading1"> Available positions </div>
                    <div className="empty" />
                    <Grid item xs={12} sm={8}>
                        <TableContainer component={Paper} >
                            <Table className={useStyles.table} aria-label="simple table">
                            <TableHead className="TableHead">
                                    <TableRow>
                                        <TableCell > <div className="headCell">Position</div></TableCell>
                                        <TableCell align="right" > <div className="headCell">Pay</div></TableCell>
                                        <TableCell align="right" ><div className="headCell">Hours / day</div></TableCell>
                                        <TableCell align="right" ><div className="headCell">Required things</div></TableCell>                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <div className="tableCell">{row.name}</div>
                                        </TableCell>
                                        <TableCell align="right"><div className="tableCell">{row.pay}</div></TableCell>
                                        <TableCell align="right"><div className="tableCell">{row.hours}</div></TableCell>
                                        <TableCell align="right"><div className="tableCell">{row.needed}</div></TableCell>                                        
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
                                    {rows1.map((row) => (
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