import Header from "../header/Header";
import React from "react";


function Cover(props) {
    const coverStyle = {
        backgroundColor: "#DB6532",
        backgroundImage: `url(${props.image})`,
        height: "400px",
        backgroundSize: "cover",
    };

    return (
        <div
            className="cover-container d-flex w-100 vh-100 mx-auto flex-column"
            style={coverStyle}>
            <Header />
            <main className="px-3 text-center mx-auto my-auto">
                <h1 className="display-1 text-white bs-light-border-subtle">
                    <strong>{props.title}</strong>
                </h1>
            </main>
        </div>
    );
}

export default Cover;
