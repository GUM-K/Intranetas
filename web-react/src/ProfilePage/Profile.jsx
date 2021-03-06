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
import Button from '@material-ui/core/Button';




const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },

  });

function createData(rowName, data)
{
    return {rowName, data};
}

const getUserRows = (user) => {
    const rows = 
    [
        createData('First name:', user.firstName),
        createData('Last name:', user.lastName),
        createData('Email address:', user.email),
        createData('Contact phone number:', user.phoneNumber),
        createData('Here since:', user.workingSince?.substr(0,10))
    ];
    return rows;
}

class ProfilePage extends React.Component {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const rows = getUserRows(user);
        return (
            <div className="ProfilePageWrapper">
                {console.log(user)}
                <Header pageName='Profile'/>
                <SideBar />
                <div className="content">
                    <Grid container spacing={1}
                          container direction="column" 
                          justify ="space-between" 
                          alignItems="center">
                     <Grid>
                        <TableContainer component={Paper}>
                            <Table className={useStyles.table} aria-label="simple table">
                                <TableHead className="TableHead">
                                    <TableRow>
                                        <TableCell align="center" colSpan="3"><div className='headCell' >My information</div></TableCell>            
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.rowName}>
                                            <TableCell component="th" scope="row"><div className="tableCell">{row.rowName}</div></TableCell>                                                                  
                                            <TableCell align="right"><div className="tableCell">{row.data}</div></TableCell>
                                        </TableRow>
                                    ))}
                                     <TableRow>
                                     <TableCell align='center' colSpan='3'>
                                         <Button 
                                            variant="contained"
                                            fullWidth 
                                            className='buttonColor'
                                            style={{ fontSize: '14px', backgroundColor: "#5b3034", borderColor: "#5b3034", color: "white" }}
                                            href='/update'>
                                                Update
                                        </Button>
                                     </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                     </Grid>   
                    </Grid>                                      
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

const connectedProfile = connect(mapState, actionCreators)(ProfilePage);
export { connectedProfile as Profile };