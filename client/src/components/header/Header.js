import Logo from "../assets/Logo";
import NavButton from "./NavComponent";
import React from "react";

function Header() {
    // const headerLeft = {
    //     marginRight: "70px",
    // };

    // const headerRight = {
    //     display: "flex",
    //     flex: "1",
    //     justifyContent: "space-between",
    //     marginRight: "35px",
    //     maxWidth: "700px",
    //     alignItems: "center",
    // };

    return (
        <nav className="container navbar navbar-expand-sm p-3">
            <div className="container-fluid border-bottom">
                <div className=" navbar-brand">
                    <Logo />
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse flex-row-reverse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavButton href="/work" name="Resume" />
                        </li>
                        <li className="nav-item">
                            <NavButton href="/portfolio" name="Portfolio" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;
