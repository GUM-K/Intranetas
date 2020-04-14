import React, { useState } from 'react'
import { SideBar } from '../Components'
import { Header } from '../Components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default () => {

    return (
        <div className="homePageWrapper">
            <Header />
            <SideBar />
        </div>
    )
}