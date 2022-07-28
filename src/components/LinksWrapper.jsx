import React from "react";
import LinkItem from "./LinkItem";
import linkData from "../data/link-data.json";
import "../assets/css/links.css";

const LinksWrapper = () => {
    return (
        <section className="links-wrapper">
            {linkData.map((data) => (
                <LinkItem
                    key={data.name.toLowerCase()}
                    name={data.name}
                    link={data.link}
                    icon={data.icon}
                />
            ))}
        </section>
    );
};

export default LinksWrapper;
