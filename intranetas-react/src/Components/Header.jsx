import React, { useState } from "react";
import '../css/components/header.css';
import Calendar from 'react-calendar'


export default () => {
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
    return (
        <div className="header-wrapper">
            <div class="header">
                <a href="/home" class="logo">dewbridge</a>
                <div class="header-right">
                    <a href="/home">Home</a>
                    <a onClick={handleClick}>Calendar</a>
                    <a href="#contact">Profile</a>
                </div>
            </div>
            <div id="header-calendar">
                <Calendar className='header-calendar' />
            </div>
        </div>
        )
}
