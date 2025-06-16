"use client";
import { BrowserRouter, Route, Routes } from "react-router";

import LandingPage from "@/frontend/routes/landing-page";
import RootPage from "@/frontend/routes/root";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootPage />} />
            </Routes>
            <Routes>
                <Route path="/landing-page" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
