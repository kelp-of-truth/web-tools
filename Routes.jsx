// src/Routes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import TLMaker from "./pages/TlMaker.jsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tl-maker" element={<TLMaker />} />
        </Routes>
    )
}