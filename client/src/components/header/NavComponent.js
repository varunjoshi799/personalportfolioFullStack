import { Link } from "react-router-dom";
import React from "react";


function NavComponent(props) {
    return (
        <Link
            to={props.href}
            className="nav-link text-light"
            aria-current="page">
            {props.name}
        </Link>
    );
}

export default NavComponent;
