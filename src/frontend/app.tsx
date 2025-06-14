import {BrowserRouter, Route, Routes} from "react-router";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<div>Testing</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;