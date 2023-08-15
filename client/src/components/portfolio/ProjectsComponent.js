import { Link } from "react-router-dom";
import React from "react";

function ProjectsComponent(props) {
    const cardStyle = {
        backgroundColor: "black",
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <Link to={props.redirection} className="text-decoration-none">
            <div
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={cardStyle}>
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-center">
                    <h3 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold">
                        {props.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
}

export default ProjectsComponent;
