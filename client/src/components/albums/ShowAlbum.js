import React, { Fragment, useState, useEffect } from "react";

// Components
import Header from "../header/Header";
import BookMeAlbum from "./BookMeAlbum";
import Picture from "./Picture";

function ShowAlbum() {
    const [photos, setPhotos] = useState([]);

    const getPhotos = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/images/showAlbum"
            );
            const jsonData = await response.json();

            setPhotos(jsonData);
            console.log(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getPhotos();
    }, []);
    return (
        <Fragment>
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
                        {photos.map((photo) => (
                            <Picture image={photo.image_url} />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShowAlbum;
