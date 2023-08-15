import event from "../assets/images/portfolio/favorites/event.webp";
import show from "../assets/images/portfolio/favorites/show.webp";
import portrait from "../assets/images/portfolio/favorites/portrait.webp";
import React from "react";

import ProjectsComponent from "./ProjectsComponent";

function Favorites() {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <div className="my-5 py-5"></div>
            <h5 className="text-primary">
                For as long as I can remember, I love capturing moments
            </h5>
            <h1 className="pb-3 border-bottom text-white display-4">
                Check out my styles
            </h1>
            <div className="my-5 py-lg-5"></div>
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5 justify-content-around">
                <div className="col">
                    <ProjectsComponent
                        image={event}
                        title="Event"
                        redirection="/eventalbum"
                    />
                </div>
                <div className="col">
                    <ProjectsComponent
                        image={show}
                        title="Show"
                        redirection="/showalbum"
                    />
                </div>
                <div className="col">
                    <ProjectsComponent
                        image={portrait}
                        title="Portrait"
                        redirection="/portraitalbum"
                    />
                </div>
                {/* <div className="col">
                    <ProjectsComponent
                        image={lifestyle}
                        title="Lifestyle"
                        redirection="/album"
                    />
                </div> */}
            </div>
            <div className="my-2 py-5"></div>
        </div>
    );
}

export default Favorites;
