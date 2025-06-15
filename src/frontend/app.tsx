"use client"
import {BrowserRouter, Route, Routes} from "react-router";
import RootPage from "@/frontend/routes/root";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;