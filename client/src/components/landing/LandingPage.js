import Cover from "./Cover";
import Intro from "./Intro";
import React from "react";


import photo from "../assets/images/index/landing3.webp";

function LandingPage() {
    return (
        <div>
            <Cover
                title="Technology Enthusiast &#38; Photographer"
                image={photo}
            />
            <Intro />
        </div>
    );
}

export default LandingPage;
