import React from "react";
import '../css/components/header.css';


export default () => {
    return (
        <div>
            <div class="header">
                <a href="#default" class="logo">dewbridge</a>
                <div class="header-right">
                    <a href="/home">Home</a>
                    <a href="#contact">Profile</a>
                </div>
            </div>
        </div>
        )
}
