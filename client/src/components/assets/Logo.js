import logo from "../assets/images/WatermarkTitle.png";
import { Link } from "react-router-dom";
import React from "react";


function Logo() {

    const logoStyle = {
        backgroundColor: "transparent",
        width: "200px",
        border: "none",
        paddingTop: "10px",
        cursor: "pointer",
    }

    const logoImg = {
        maxWidth: "100%",
        height: "auto",
        objectFit: "fill",
    }


    return (
        <Link to="/">
            <button className="logo" style={logoStyle}>
                <img src={logo} alt="Varun's Logo" style={logoImg}/>
            </button>
        </Link>
    );
}

export default Logo;
