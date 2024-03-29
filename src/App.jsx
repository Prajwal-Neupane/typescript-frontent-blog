import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import PrivateRoute from "./services/ProtectedRoute";
import Profile from "./components/Profile";
import { CreatePost } from "./pages/CreatePost";
import UserProfile from "./pages/UserProfile";
import UpdatePost from "./pages/UpdatePost";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/edit/:id" element={<UpdatePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
