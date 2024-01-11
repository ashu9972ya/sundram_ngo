import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, Element, scroller } from "react-scroll";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isHeaderSticky = scrollPosition > 0;

      setIsSticky(isHeaderSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className={`navbar bg-base-100 gradient-header ${
        isSticky ? "sticky top-0 z-50" : ""
      }`}
    >
      {" "}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ScrollLink
                to="home"
                onClick={() => scrollTo("home")}
                className="text-lg"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                onClick={() => scrollTo("about")}
                className="text-lg"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="blog"
                onClick={() => scrollTo("blog")}
                className="text-lg"
              >
                Blog
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                onClick={() => scrollTo("contact")}
                className="text-lg"
              >
                Contact
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="donate"
                onClick={() => scrollTo("donate")}
                className="text-lg"
              >
                Donate
              </ScrollLink>
            </li>
            {/* <li>
              <Link to={"/login"} className="text-lg">
                Login
              </Link>
            </li> */}
          </ul>
        </div>
        <ScrollLink
          to="home"
          onClick={() => scrollTo("home")}
          className="btn btn-ghost text-2xl"
        >
          सुंदरम
        </ScrollLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ScrollLink
              to="home"
              onClick={() => scrollTo("home")}
              className="text-lg"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              onClick={() => scrollTo("about")}
              className="text-lg"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              onClick={() => scrollTo("blog")}
              className="text-lg"
            >
              Blog
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              onClick={() => scrollTo("contact")}
              className="text-lg"
            >
              Contact us
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-1">
        <ScrollLink
          to="donate"
          onClick={() => scrollTo("donate")}
          className="bg-green-500 text-black px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
        >
          Donate
        </ScrollLink>
        {/* <Link
          to={"/Login"}
          className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
        >
          Login
        </Link> */}
      </div>
    </div>
  );
};

export default Header;
