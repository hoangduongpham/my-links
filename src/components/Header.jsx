import React from "react";
import "../assets/css/header.css";
import profilePic from "../assets/img/profile.jpg";

const Header = () => {
    return (
        <header className="header">
            <img
                className="profile-pic"
                src={profilePic}
                alt="Profile picture"
            />
            <h1 className="name">Phạm Hoàng Dương</h1>
            <p className="description">
                Final year university student; web developer
            </p>
        </header>
    );
};

export default Header;
