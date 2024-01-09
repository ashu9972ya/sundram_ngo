import React from "react";
import homeImg from "../assets/home.avif";
import About from "./About";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Home = () => {
  return (
    <>

    <div
      className="text-white h-screen flex flex-col justify-center items-center gradient-header"
      style={{
        background: `url(${homeImg}) no-repeat`,
        backgroundSize: "cover",
        width : "100%",
        height: "400px"
      }}
    >
      <h1 className="text-5xl font-extrabold mb-4">
        Protecting Our Environment
      </h1>
      <p className="text-lg mb-8">
        Join us in making a difference for a sustainable future.
      </p>
      <a
        href="#"
        className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        Get Involved
      </a>
    </div>
    </>
  );
};

export default Home;
