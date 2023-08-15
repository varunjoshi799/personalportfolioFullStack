import React from "react";

function Picture(props) {
    return (
        <div className="col">
            <img
                src={props.image}
                className="img-fluid rounded mx-auto d-block"
                alt="..."
            />
        </div>
    );
}

export default Picture;
