import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";

function App() {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="donate">
        <Donate />
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>

      <Footer />
    </>
  );
}

export default App;
