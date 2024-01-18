import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
