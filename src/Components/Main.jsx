import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Home/Home";
import Work from "./Work/Work";
import Footer from "./Footer";
import BoxElement from "./Core/MBox";
import Navbar from "./Navbar";

const Main = () => {
    return (
        <BrowserRouter basename="/portfolio">
            <Navbar />
            <BoxElement />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/work" element={<Work />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Main