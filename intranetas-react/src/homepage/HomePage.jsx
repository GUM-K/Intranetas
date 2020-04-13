import React, { useState } from 'react'
import { SideBar } from '../Components'
import { Header } from '../Components'

export default () => {
    return (
        <div className="homePageWrapper">
            <Header />
            <SideBar />            
        </div>
    )
}