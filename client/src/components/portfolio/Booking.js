import React from "react";
function Booking() {
    return (
        <div className="px-4 py-5 my-5 text-center text-white">
            <h1 className="display-5 fw-bold pb-3 text-white">
                Interested In Booking?
            </h1>
            <div className="col-lg-7 mx-auto">
                <p className="lead mb-4 pb-2">
                    With almost 8 years of photography experience, I'm confident
                    I can meet your needs. Book me for your next event,
                    photoshoot, or marketing opportunity. I'm excited to bring
                    your vision to life!
                </p>
                <p className="lead mb-4 pb-3">
                    Unsure or have some specific quesitons? Reach out on my
                    socials!
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <a
                        className="btn btn-outline-primary btn-lg px-4 gap-3"
                        href="https://www.fiverr.com/varunjoshi301?public_mode=true"
                        target="_blank"
                        rel="noreferrer"
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
            <div className="my-5 py-5"></div>
        </div>
    );
}

export default Booking;
