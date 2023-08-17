import React, { Fragment, useState, useEffect } from "react";

// Components
import Header from "../header/Header";
import BookMeAlbum from "./BookMeAlbum";
import Picture from "./Picture";
import baseURL from "../BaseURL";

function EventAlbum() {
    const [photos, setPhotos] = useState([]);
    const getPhotos = async () => {
        try {
            const response = await fetch(`${baseURL}/images/eventAlbum`);
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
                title="Event Album"
                tagline="It was the only way they'd invite me..."
                description="A collection of my favorite moments at events. My goal was to capture genuine moments that would have existed regardless of the camera's presence"
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

export default EventAlbum;
