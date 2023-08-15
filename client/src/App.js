import "./App.css";
import LandingPage from "./components/landing/LandingPage";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import ShowAlbum from "./components/albums/ShowAlbum";
import EventAlbum from "./components/albums/EventAlbum";
import PortraitAlbum from "./components/albums/PortraitAlbum";
import React from "react";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/work" element={<Resume />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/showalbum" element={<ShowAlbum />}></Route>
                <Route path="/eventalbum" element={<EventAlbum />}></Route>
                <Route
                    path="/portraitalbum"
                    element={<PortraitAlbum />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
