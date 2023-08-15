import Cover from "../landing/Cover";
import Technologies from "./Technologies";
import Experience from "./Experience";
import photo from "../assets/images/work/cover.webp";
import React from "react";


function Resume() {
    return (
        <div>
            <Cover title="Get To Know Me" image={photo} />
            <Technologies />
            <Experience />
        </div>
    );
}

export default Resume;
