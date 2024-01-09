import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
              <Link to={"/"} className="text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="text-lg">
                About
              </Link>
              {/* <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul> */}
            </li>
            <li>
              <Link to={"/blog"} className="text-lg">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-2xl">
          सुंदरम भैया पौधा वाले
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="text-lg">
              About
            </Link>
          </li>
          <li>
            <Link to={"/blog"} className="text-lg">
              Blog
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className="text-lg">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/donate"} className="btn text-lg">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Header;
