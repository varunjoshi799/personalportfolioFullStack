//Components
import Header from "../header/Header";
import BookMeAlbum from "./BookMeAlbum";
import React from "react";


// Photos
import photo1 from "../assets/images/eventAlbum/event1.webp";
import photo2 from "../assets/images/eventAlbum/event2.webp";
import photo3 from "../assets/images/eventAlbum/event3.webp";
import photo4 from "../assets/images/eventAlbum/event4.webp";
import photo5 from "../assets/images/eventAlbum/event5.webp";
import photo6 from "../assets/images/eventAlbum/event6.webp";
// import photo7 from "../assets/images/eventAlbum/event7.webp";
// import photo8 from "../assets/images/eventAlbum/event8.webp";
// import photo9 from "../assets/images/eventAlbum/event9.webp";
// import photo10 from "../assets/images/eventAlbum/event10.webp";
import photo11 from "../assets/images/eventAlbum/event11.webp";
import photo12 from "../assets/images/eventAlbum/event12.webp";
import photo13 from "../assets/images/eventAlbum/event13.webp";
import photo14 from "../assets/images/eventAlbum/event14.webp";
import photo15 from "../assets/images/eventAlbum/event15.webp";
import Picture from "./Picture";

function EventAlbum() {
    return (
        <>
            <Header />
            <BookMeAlbum
                title="Event Album"
                tagline="It was the only way they'd invite me..."
                description="A collection of my favorite moments at events. My goal was to capture genuine moments that would have existed regardless of the camera's presence"
                link="https://www.fiverr.com/varunjoshi301?public_mode=true"
            />
            <div className="album py-5 bg-body-black">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <Picture image={photo1} />
                        <Picture image={photo2} />
                        <Picture image={photo3} />
                        <Picture image={photo4} />
                        <Picture image={photo5} />
                        <Picture image={photo6} />
                        {/* <Picture image={photo7} />
                        <Picture image={photo8} />
                        <Picture image={photo9} />
                        <Picture image={photo10} /> */}
                        <Picture image={photo11} />
                        <Picture image={photo12} />
                        <Picture image={photo13} />
                        <Picture image={photo14} />
                        <Picture image={photo15} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventAlbum;
