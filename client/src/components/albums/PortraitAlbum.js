// Components
import React from "react";

import Header from "../header/Header";
import BookMeAlbum from "./BookMeAlbum";

// Photos
import photo1 from "../assets/images/portraitAlbum/portrait1.webp";
import photo2 from "../assets/images/portraitAlbum/portrait2.webp";
// import photo3 from "../assets/images/portraitAlbum/portrait3.webp";
import photo4 from "../assets/images/portraitAlbum/portrait4.webp";
// import photo5 from "../assets/images/portraitAlbum/portrait5.webp";
import photo6 from "../assets/images/portraitAlbum/portrait6.webp";
import photo7 from "../assets/images/portraitAlbum/portrait7.webp";
// import photo8 from "../assets/images/portraitAlbum/portrait8.webp";
import photo9 from "../assets/images/portraitAlbum/portrait9.webp";
import photo10 from "../assets/images/portraitAlbum/portrait10.webp";
import photo11 from "../assets/images/portraitAlbum/portrait11.webp";
import photo12 from "../assets/images/portraitAlbum/portrait12.webp";
import photo13 from "../assets/images/portraitAlbum/portrait13.webp";
import photo14 from "../assets/images/portraitAlbum/portrait14.webp";
import Picture from "./Picture";

function EventAlbum() {
    return (
        <>
            <Header />
            <BookMeAlbum
                title="Show Album"
                tagline="I reminder of why I'm on the other side of the camera..."
                description="A collection of my favorite scenes from collegiate dance competitions around the U.S., focusing on a fusion of South Asian and Western styles"
                link="https://www.fiverr.com/varunjoshi301?public_mode=true"
            />
            <div className="album py-5 bg-body-black">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                        <Picture image={photo1} />
                        <Picture image={photo2} />
                        {/* <Picture image={photo3} /> */}
                        <Picture image={photo4} />
                        {/* <Picture image={photo5} /> */}
                        <Picture image={photo6} />
                        <Picture image={photo7} />
                        {/* <Picture image={photo8} /> */}
                        <Picture image={photo9} />
                        <Picture image={photo10} />
                        <Picture image={photo11} />
                        <Picture image={photo12} />
                        <Picture image={photo13} />
                        <Picture image={photo14} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventAlbum;
