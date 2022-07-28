import React from "react";
import "../assets/css/footer.css";

const FooterLink = () => {
    return (
        <footer className="footer">
            © 2022 Copyright: Phạm Hoàng Dương
            <br />
            Icons made by{" "}
            <a
                href="https://www.flaticon.com/authors/freepik"
                target="_blank"
                rel="noreferrer"
            >
                Freepik
            </a>{" "}
            from{" "}
            <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noreferrer"
            >
                www.flaticon.com
            </a>
        </footer>
    );
};

export default FooterLink;
