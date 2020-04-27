import React, { useState, useRef } from "react";
import '../css/components/header.css';
import Calendar from 'react-calendar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

export const Header = ({ pageName }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [displayCalendar, setDisplayCalendar] = useState(false);

    function handleClick() {
        setDisplayCalendar(displayCalendar ? false : true);
        if (!displayCalendar) {
            document.getElementById("header-calendar").style.height = "272px";
        }
        else {
            document.getElementById("header-calendar").style.height = "0";
        }
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className="header-wrapper">
            <div className="header">
                <a href="/" className="logo menu-component">dewbridge</a>
                <p className="pagename"> &emsp;&emsp;&emsp;&emsp;&emsp;{pageName} </p>
                <div className="header-right">
                    <p className="menu-user">
                        Hi, {user.firstName}
                    </p>
                    <a href="/" className="menu-component">Home</a>
                    <a onClick={handleClick} className="menu-component">Calendar</a>
                    <a
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className="menu-component"
                    >
                        Profile
                    </a>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList id="menu-list-grow">
                                            <MenuItem onClick={handleClose}><a href="/update">My account</a></MenuItem>
                                            <MenuItem onClick={handleClose}><a href="/login">Logout</a></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
            <div id="header-calendar">
                <Calendar className='header-calendar' />
            </div>
        </div>
        )
}
