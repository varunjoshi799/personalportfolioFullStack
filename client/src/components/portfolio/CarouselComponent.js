import { Link } from "react-router-dom";
import React from "react";


function CarouselComponent(props) {

    const carouselStyle = {
        backgroundColor: "#D86532",
        backgroundImage: `url(${props.image})`,
        height: "400px",
        backgroundSize: "cover",
    };

    return (
        <Link to="/album">
            <div className="d-block w-100 bg-image" style={carouselStyle}>
                <div className="carousel-caption d-none d-md-block">
                    <h3>{props.title}</h3>
                    <h6>{props.description}</h6>
                </div>
            </div>
        </Link>
    );
}

export default CarouselComponent;
