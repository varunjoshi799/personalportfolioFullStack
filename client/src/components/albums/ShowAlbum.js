// Components
import React from "react";

import Header from "../header/Header";
import BookMeAlbum from "./BookMeAlbum";

// Photos
import photo1 from "../assets/images/showAlbum/show1.webp";
import photo2 from "../assets/images/showAlbum/show2.webp";
import photo3 from "../assets/images/showAlbum/show3.webp";
import photo4 from "../assets/images/showAlbum/show4.webp";
import photo5 from "../assets/images/showAlbum/show5.webp";
import photo6 from "../assets/images/showAlbum/show6.webp";
import photo7 from "../assets/images/showAlbum/show7.webp";
import photo8 from "../assets/images/showAlbum/show8.webp";
import photo9 from "../assets/images/showAlbum/show9.webp";
import photo10 from "../assets/images/showAlbum/show10.webp";
import photo11 from "../assets/images/showAlbum/show11.webp";
import photo12 from "../assets/images/showAlbum/show12.webp";
import photo13 from "../assets/images/showAlbum/show13.webp";
import photo14 from "../assets/images/showAlbum/show14.webp";
import photo15 from "../assets/images/showAlbum/show15.webp";
import Picture from "./Picture";

function ShowAlbum() {
    return (
        <>
            <Header />
            <BookMeAlbum
                title="Show Album"
                tagline="If I could dance like them, I wouldn't be doing photography..."
                description="A collection of my favorite scenes from collegiate dance competitions around the U.S., focusing on a fusion of South Asian and Western styles"
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
                        <Picture image={photo7} />
                        <Picture image={photo8} />
                        <Picture image={photo9} />
                        <Picture image={photo10} />
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

export default ShowAlbum;
