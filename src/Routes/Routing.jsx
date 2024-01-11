import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Login from "../pages/Login";
import Donate from "../pages/Donate"

const Routing = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/blog" element={<Blog />} /> */}
      {/* <Route path="/contact" element={<ContactUs />} /> */}
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
};

export default Routing;
