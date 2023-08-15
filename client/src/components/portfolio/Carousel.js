import carousel1 from "../assets/images/portfolio/carousel1.jpg";
import carousel2 from "../assets/images/portfolio/carousel2.jpg";
import carousel3 from "../assets/images/portfolio/carousel3.jpg";
import carousel4 from "../assets/images/portfolio/carousel4.jpg";
import photo from "../assets/images/title.jpg";
import CarouselComponent from "./CarouselComponent";
import React from "react";

// import photo from "../assets/images/title.jpg";
// import photo from "../assets/images/title.jpg";
// import photo from "../assets/images/title.jpg";

function Carousel() {
    return (
        <div className="container">
            <div className="my-5 py-5"></div>
            <h5 className="text-center text-primary ">
                Of all shapes and sizes...
            </h5>
            <h1 className="text-center mb-5 display-4 text-white">
                From event, show, portrait, lifestyle, and landscape... I'm
                trying to cover it all
            </h1>
            <div className="my-5 py-5"></div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <CarouselComponent
                            title="Event"
                            description="It was the only way I'd be invited..."
                            image={carousel1}
                        />
                    </div>
                    <div className="carousel-item">
                        <CarouselComponent
                            title="Show"
                            description="If I could dance like them, I wouldn't
                            be doing photography..."
                            image={carousel2}
                        />
                    </div>
                    <div className="carousel-item">
                        <CarouselComponent
                            title="Portrait"
                            description="A reminder of why I should stay behind
                            the camera..."
                            image={carousel3}
                        />
                    </div>
                    <div className="carousel-item">
                        <CarouselComponent
                            title="Lifestyle"
                            description="God I wish I could look that cool..."
                            image={carousel4}
                        />
                    </div>
                    <div className="carousel-item">
                        <CarouselComponent
                            title="Landscape"
                            description="Say Cheese! Wait..."
                            image={carousel4}
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="my-5 py-5"></div>
        </div>
    );
}

export default Carousel;
