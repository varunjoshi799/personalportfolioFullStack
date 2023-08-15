import React from "react";
function Technologies() {

    const listItemStyle = "list-group-item bg-black text-white"

    return (
        <div className="component">
            <div className="row featurette d-flex flex-row p-5">
                <div className="col-md-4">
                    <h1 className="featurette-heading fw-normal lh-1 text-white display-6">
                        Technologies
                    </h1>
                </div>
                <div className="col-md-8 row">
                    <div className="col-md-4 p-3 me-5">
                        <h5 className="text-primary pb-3">Comfortable</h5>
                        <ul className="list-group list-group-flush">
                            <li className={listItemStyle}>Python</li>
                            <li className={listItemStyle}>C++ / C</li>
                            <li className={listItemStyle}>HTML5/CSS3</li>
                            <li className={listItemStyle}>Bootstrap</li>
                            <li className={listItemStyle}>JavaScript</li>
                            <li className={listItemStyle}>React.js</li>
                            <li className={listItemStyle}>Figma</li>
                            <li className={listItemStyle}>Git</li>
                            <li className={listItemStyle}>
                                Adoble Lightroom / Premiere Pro
                            </li>
                            <li className={listItemStyle}>DaVinci Resolve</li>
                            <li className={listItemStyle}>
                                Responsive Design
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 p-3 ">
                        <h5 className="text-primary pb-3">Have Used</h5>
                        <ul className="list-group list-group-flush">
                            <li className={listItemStyle}>Java</li>
                            <li className={listItemStyle}>Node.js</li>
                            <li className={listItemStyle}>Swift</li>
                            <li className={listItemStyle}>Agile</li>
                            <li className={listItemStyle}>REST</li>
                            <li className={listItemStyle}>SQL</li>
                            <li className={listItemStyle}>
                                Adoble Photoshop / After Effects
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Technologies;
