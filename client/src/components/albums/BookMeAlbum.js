import React from "react";

function BookMeAlbum(props) {
    return (
        <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <p className="text-primary pb-4">{props.tagline}</p>
                    <h1 className="fw-light text-white pb-4 display-3">{props.title}</h1>
                    {/* <p className="lead text-body-primary text-white">
                        {props.description}
                    </p> */}
                    {/* <p className="lead text-body-primary text-white">
                        Does something like this meet your needs?
                    </p> */}
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a
                            href={props.link}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline-primary btn-lg px-5 gap-3"
                            type="button">
                            Book me
                        </a>
                        {/* <button
                                className="btn btn-outline-secondary btn-lg px-4"
                                type="button">
                                Contact me
                            </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BookMeAlbum;
