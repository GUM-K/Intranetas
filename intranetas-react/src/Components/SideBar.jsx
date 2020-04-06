import React, { useState } from 'react';
import '../css/components/sidebar.css';


export default () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
   
    return (
        <div>            
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">Home</a>
                <a href="#">Finances</a>
                <a href="#">Settings</a>
                <a href="#">Courses</a>
                <a href="#">Edit profile</a>
                <a href="#">Screaming tutorials</a>
                <a href="#">Teams</a>
                <a href="#">Career</a>
                <a href="#">Vacation</a>
            </div>

            <div id="main">
                <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>☰ open</span>
            </div>
        </div>
    )

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";


    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";

    } 

   
}