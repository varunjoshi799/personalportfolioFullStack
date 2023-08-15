import React from "react";

function Experience() {
    const experienceStyle = "text-primary";

    const pdfDownload =
        "https://resumebucketvarun.s3.us-west-1.amazonaws.com/Joshi_Varun_Resume.pdf";

    return (
        <div className="component d-flex flex-column">
            <div className="row featurette d-flex flex-row justify-content-around p-5">
                <div className="col-md-4">
                    <h1 className="featurette-heading fw-normal lh-1 display-6 text-white pb-1 mb-5 mb-md-0">
                        Experience
                    </h1>
                </div>
                <div className="col-md-8 d-flex flex-column text-white">
                    <div className="featurette text-start">
                        <h6 className={experienceStyle}>
                            B.S. in Science, Technology, and International
                            Affairs | Minor in Computer Science
                        </h6>
                        <h4>
                            <strong className={experienceStyle}>
                                Georgetown University
                            </strong>
                            , Graduated 2023
                        </h4>
                        <p>
                            Georgetown gave me the opportunity to discover
                            myself and the type of individual I wanted to be.
                            Both in-person and online, I was given opportunities
                            to rise above challenges and forge unique solutions.
                        </p>
                        <p>
                            My experience founding and dancing with Guzaarish
                            showed me how to create, lead, and execute on a
                            vision, all while expanding my comfort zone. My time
                            at Georgetown Ventures taught me how to use
                            technology to support startup growth. My internships
                            at DigiSure, Ashoka, and others helped me discover
                            my passion for creating products people love,
                            especially in the renewable space.
                        </p>
                    </div>
                    <hr className="featurette-divider mb-5"></hr>
                    <div className="featurette text-start">
                        <h6 className={experienceStyle}>
                            Software Engineer Intern
                        </h6>
                        <h4>
                            <strong className={experienceStyle}>
                                Digisure
                            </strong>
                            , Summer 2022
                        </h4>
                        <p>
                            As a SWE intern, I worked closely with the head of
                            engineering to develop internal tools aimed at
                            increasing engineering productivity and minimizing
                            lag time between critical bugs being discovered and
                            then solved. My ultimate project was developing and
                            deploying a REST API powered Slackbot to automate
                            and record assignment of 7 engineers to client
                            tickets.
                        </p>
                    </div>
                    <hr className="featurette-divider mb-5"></hr>
                    <div className="featurette text-start">
                        <h6 className={experienceStyle}>
                            Product Management Intern
                        </h6>
                        <h4>
                            <strong className={experienceStyle}>
                                Digisure
                            </strong>
                            , Summer 2022
                        </h4>
                        <p>
                            I led the process on redesigning the entire claims
                            process workflow involving both front-end and
                            back-end modifications. As the startup was beginning
                            it’s international launch, I developed a product
                            strategy that targeted ideal European countries and
                            narrowed down our best matching potential clients.
                        </p>
                        <p>
                            Digisure was my first taste of product management,
                            and it’s turned into an unquenchable thirst.
                        </p>
                    </div>
                    <hr className="featurette-divider mb-5"></hr>
                    <div className="featurette text-start">
                        <h6 className={experienceStyle}>
                            Founder (2019) | Co-manager (2019-2022) | Dancer
                            (2022-2023)
                        </h6>
                        <h4>
                            <strong className={experienceStyle}>
                                Georgetown Guzaarish
                            </strong>
                            , Fall 2019 - Spring 2023
                        </h4>
                        <p>
                            I co-founded Guzaarish (competitive Bollywood-fusion
                            dance team) to create a home on Georgetown, where
                            South Asian students didn’t have to choose between
                            feeling at home and pursuing academic success. I
                            spent three years doing anything and everything to
                            make our team flourish:
                        </p>
                        <ul>
                            <li>
                                recruit new members (in-person and virtually)
                            </li>
                            <li>organize and hold practices</li>
                            <li>learn to make music for competitive sets</li>
                            <li>branding and marketing</li>
                            <li>fundraising</li>
                            <li>costume and set design</li>
                            <li>(of course) learn how to dance</li>
                        </ul>
                        <p>
                            Within four years, we’ve attended circuit-recognized
                            competitions, and travelled to five states to
                            compete.
                        </p>
                        <p>
                            Oh, and we were invited to dance for Vice President
                            Kamala Harris at her residence for Diwali in 2022.
                        </p>
                    </div>
                    <hr className="featurette-divider mb-5"></hr>
                    <div className="featurette text-start">
                        <h6 className={experienceStyle}>
                            Analyst (2020-2021) | Senior Analyst (2021-2022) |
                            Project Manager (2022)
                        </h6>
                        <h4>
                            <strong className={experienceStyle}>
                                Georgetown Ventures
                            </strong>
                            , Fall 2020 - Fall 2022
                        </h4>
                        <p>
                            Georgetown Ventures is a student-run
                            incubation-style club that grows Georgetown-founded
                            startups into businesses selling products people
                            want.
                        </p>
                        <p>
                            As an analyst, I increased click-through rates by
                            20% using targeted Snapchat ads, produced $10,000 in
                            partnerships with local bars, and helped the club
                            adopt new tools like Figma, Pitch, and Notion into
                            workflows.
                        </p>
                    </div>
                </div>
            </div>
            <hr className="featurette-divider mb-2"></hr>
            <div className="my-5"></div>
            <a
                type="button"
                href={pdfDownload}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-lg mx-auto mb-2">
                My Resume
            </a>

            <div className="my-5"></div>
        </div>
    );
}

export default Experience;
