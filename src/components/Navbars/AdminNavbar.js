import React from "react";

import UserDropdown from "../Dropdowns/UserDropdown.js";
import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import { Link } from "react-router-dom";
import { useStateContext } from "../../oncontext/OnLandingContext";

export default function Navbar() {
  const { BsCart3 } = useStateContextProduct();
  const { reachImg } = useStateContext();
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            to={"/"}
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
          >
            <img
              src={reachImg}
              alt=""
              className="max-w-full mx-auto p-0 h-auto align-middle my-0"
              width={110}
              height={10}
            />
          </Link>

          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <div className=" fas fa-cart  "></div>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
