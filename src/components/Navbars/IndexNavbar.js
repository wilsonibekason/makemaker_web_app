/*eslint-disable*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import { useStateContext } from "../../oncontext/OnLandingContext";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const { navComponents, reachImg, Navcomponents } = useStateContext();
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-1 py-2 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className=" inline-block mr-3 py-0 whitespace-nowrap  px-2"
            >
              jjs
              <img
                src={reachImg}
                alt=""
                className="shadow-md rounded-full max-w-full  w-24 h-72 mx-auto p-0 bg-white"
                //className="max-w-full w-full h-71 mx-auto p-0 h-auto align-middle my-0"
              />
              {/**shadow-md rounded-full max-w-full w-16 mx-auto p-0 bg-white */}
            </Link>
            <button
              className="cursor-pointer  text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              {navComponents?.map((navItems, index) => (
                <li
                  className="flex items-center"
                  key={index + navItems}
                  onClick={() => navigate(`${navItems}`, { replace: true })}
                >
                  {/* <Link to={`${navItems}`}> */}
                  <a className="hover:text-blue-300 text-blue-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                    {/**far fa-file-alt */}
                    <i className="text-blue-400  text-lg leading-lg mr-2" />{" "}
                    {navItems}
                  </a>
                  {/* </Link> */}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-instagram text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
                <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-right"></i> Get Started
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
