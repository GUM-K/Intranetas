import React, { useState, useRef } from "react";
import '../css/components/header.css';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

export const Header = ({ pageName }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

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
                    <a className="menu-user" href="/profile">
                        Hi, {user.firstName}
                    </a>
                    <a href="/" className="menu-component">Home</a>
                    <a
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className="acc menu-component">                    
                        My account 
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
                                            <MenuItem onClick={handleClose} ><a href="/profile" className="menu-item">Profile</a></MenuItem>
                                            <MenuItem onClick={handleClose}><a href="/login" className="menu-item">Logout</a></MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
        )
}
