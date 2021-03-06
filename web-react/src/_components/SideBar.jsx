﻿import React, { useState } from 'react';
import '../css/components/sidebar.css';


export const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
   
    return (
        <div>            
            <div id="mySidenav" className="sidenav">
                <a href="/home">Home</a>
                <a href="/courses" >Courses</a>
                <a href="/profile" >Profile</a>
                <a href="/paychecks">Paychecks</a>
                <a href="/application" >Application</a>
                <a href="/career">Career</a>
            </div>

            <div id="main" style={{ backgroundColor: '#faf4f4' }}>
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>☰</span>
            </div>
        </div>
    )

    function openNav() {
        if (!sideBarOpen) {
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
            setSideBarOpen(true);
        }
        else {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
            setSideBarOpen(false);
        }
    }   
}