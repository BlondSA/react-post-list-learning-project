import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/navbar";
import AppRouter from "./components/UI/app-router/app-router";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
