import React from "react";
import "../assets/css/links.css";

const LinkItem = ({ name, link, icon }) => {
    return (
        <section className="link-item">
            <a className="link" href={link} target="_blank" rel="noreferrer">
                <div className="icon-wrapper">
                    <img className="icon" src={icon} alt={name} />
                </div>
                <p>{name}</p>
            </a>
        </section>
    );
};

export default LinkItem;
