import React from 'react';
import { SideBar } from '../_components'
import { Header } from '../_components'
import { Footer } from '../_components'


class Courses extends React.Component {
    render() {
        return (
            <div className="careerPageWrapper">
                <Header pageName='Courses' />
                <SideBar />
                <div className="content">
                    <div className="empty" />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Courses