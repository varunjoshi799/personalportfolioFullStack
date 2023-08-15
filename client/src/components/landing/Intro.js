// Images
import intro1 from "../assets/images/index/landing1.webp";
import intro2 from "../assets/images/index/landing2.webp";
import React from "react";


function Intro() {
    return (
        <div className="container text-center">
            <hr className="featurette-divider mb-5" />
            <div className="row featurette">
                <div className="col-md-7 d-flex flex-column justify-content-center px-3">
                    <h2 className="featurette-heading fw-normal lh-1 text-primary display-6">
                        Web Design and Machine Learning
                    </h2>
                    <p className="lead text-white pt-3">
                        My primary passion is technology. Front-end web
                        development lets me creatively express an idea.
                        Deciphering data through machine learning techniques
                        adds justification to that idea.
                    </p>
                </div>
                <div className="col-md-5">
                    <img
                        className="img-fluid mx-auto"
                        alt="placeholder"
                        src={intro1}></img>
                </div>
            </div>
            <div className="my-5 py-5"></div>
            <div className="row featurette d-sm-flex flex-col-reverse">
                <div className="col-md-5">
                    <img
                        className="img-fluid mx-auto"
                        alt="placeholder"
                        src={intro2}></img>
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center px-3">
                    <h2 className="featurette-heading fw-normal lh-1 text-primary display-6 mt-5">
                        Photography and Videography
                    </h2>
                    <p className="lead text-white pt-3">
                        My second passion is using a camera to capture feelings.
                        From behind the lens, I make moments last forever.
                        Having done it for almost 8 years, I continue to
                        challenge myself to learn new techniques in creating and
                        representing powerful scenes.
                    </p>
                </div>
            </div>
            <div className="my-5 py-5"></div>

        </div>
    );
}

export default Intro;
