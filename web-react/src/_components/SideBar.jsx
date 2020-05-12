import React, { useState } from 'react';
import '../css/components/sidebar.css';


export const SideBar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
   
    return (
        <div>            
            <div id="mySidenav" className="sidenav">
                <a href="/home">Home</a>
                <a href="#" >Finances</a>
                <a href="#">Settings</a>
                <a href="#" >Courses</a>
                <a href="/profile" >Edit profile</a>
                <a href="#">Paychecks</a>
                <a href="#" >Teams</a>                
                <a href="#" >Vacation</a>
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