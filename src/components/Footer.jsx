import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <div className="footer fixOnBottom">
        <span className="icon">
            <FontAwesomeIcon icon="home" size="2x" />
        </span>
        <span className="icon">
            <FontAwesomeIcon icon="tv" size="2x" />
        </span>
        <span className="icon">
            <FontAwesomeIcon icon="list-alt" size="2x" />
        </span>
        <span className="icon">
            <FontAwesomeIcon icon="history" size="2x" />
        </span>
        <span className="icon">
            <FontAwesomeIcon icon="book-reader" size="2x" />
        </span>
    </div>
)
export default Footer;