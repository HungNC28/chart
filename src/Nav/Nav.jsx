import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/line">Line</Link>
                </li>
                <li>
                    <Link to="/bar">Bar</Link>
                </li>
                <li>
                    <Link to="/multi">Multi</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
