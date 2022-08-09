/*eslint-disable*/
// create imports for internal dependencies
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "@sefailyasoz/react-carousel";
import { motion } from "framer-motion";
// create import for external dependencies

/**
 *
 *    CREATE IMPORTS FOR SANITY INTEGRATION
 *
 */

import { client, urlFor } from "../client";
// import home context
//import {homeContext } from '../../onContext/onHomeContext';

//import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer";
//import { HomeContext } from "oncontext/OnHomeContext";
import { useStateContext } from "../oncontext/OnLandingContext";
import Context from "../oncontext/OnLandingContext";
import MotionWrap from "../wrapper/MotionWrap";

const cssComponent = [
  "Buttons",
  "Index",
  "Labels",
  "Menus",
  "Navbars",
  "Pagination",
  "ProgressBar",
  "Typography",
];
const Index = () => {
  const {
    header,
    setHeader,
    currentIndex,
    navComponents,
    sections,
    setSections,
    sectionContents,
    setSectionContents,
    aboutContents,
    setAboutContents,
    aboutTitle,
    aboutDesc,
    aboutImageUrl,
    aboutTitleIcon,
    strengthContent,
    strengthTitle,
    strengthDesc,
    strengthHREF,
    strengthTitleIcon,
    strengthImage,
    strengthTopic,
    strengthImageCheck,
    inspireContentImage,
    inspireContentDesc,
    inspireContentTitle,
    reachImg,
    reachTitle,
    reachDesc,
    productSecTitle,
    productSecDesc,
    productSecImage,
    ImageSecTitle,
    prevSlide,
    nextSlide,
    current,
    BiLeftArrow,
    BiRightArrow,
  } = useStateContext();

  console.log(header);
  useEffect(() => {
    // sanity fetch headers
    const headerQuery = '*[_type == "header"]';
    // sanity fetch sections
    const sectionsQuery = '*[_type == "section"]';
    // sanity fetch sectionscontent
    const sectionContentQuery = '*[_type == "sectionContent"]';
    // fetching headers from sanity stidio headerImage?.asset?._ref
    try {
      client?.fetch(headerQuery)?.then((headerData) => {
        setHeader(headerData);
        console.log(headerData);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    try {
      client?.fetch(sectionsQuery)?.then((sectionData) => {
        setSections(sectionData);
        console.log(sectionData);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
    try {
      client?.fetch(sectionContentQuery)?.then((itemData) => {
        setSectionContents(itemData);
        console.log(itemData);
        console.log(itemData[0]);
        console.log(sectionContents[3]?.description);
      });
    } catch (error) {
      console.log(
        `The Error Message ${error?.response?.body?.error?.description}`
      );
      throw new error();
    }
  }, []);
  console.log(aboutContents);
  console.log(
    aboutContents?.map((item, index) => (
      <img alt=".." src={urlFor(item?.sectionImage)} />
    ))
  );
  console.log(aboutContents?.map((item, index) => urlFor(item?.sectionIcons)));
  console.log(aboutContents.map((item, index) => item?.description));
  console.log(urlFor(aboutImageUrl?.sectionIcons));
  console.log(aboutImageUrl?.sectionIcons?.asset?._ref);
  const sectionImg = aboutImageUrl?.sectionIcons?.asset?._ref;
  const sectionImage = urlFor(aboutImageUrl?.sectionIcons);
  const sectionImageURL = aboutContents?.map((item, index) =>
    urlFor(item?.sectionIcons)
  );

  const strengthHREFs = strengthContent[0]?.linkUrl?.map((item, index) => item);

  {
    /**fgrr */
  }
  const headers = header[currentIndex];
  const aboutSectionItems = aboutContents[0]?.categoriesItem;
  const sectionItem1 = sectionContents[0];
  const sectionItem2 = sectionContents[1];
  const sectionItem3 = sectionContents[2];
  const sectionItem4 = sectionContents[3];

  const imageSlider = header?.map((item) => item?.imageSlide);

  const showImg = "absolute top-0 w-full h-full bg-center bg-cover bg-red-500";
  const hideImg = "absolute top-0 w-full h-full bg-center bg-cover hidden";
  return (
    <>
      <Navbar transparent />
      <>
        {header?.map((item, index) => {
          const { headerImage, description, title, imageSlide } = item;
          return (
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
              <div
                className={index === current ? showImg : hideImg}
                style={{
                  backgroundImage: `url(${urlFor(headerImage)})`,
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-75 bg-black"
                ></span>
              </div>
              <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div className="pr-12">
                      <h1 className="text-white font-bold text-4xl">{title}</h1>
                      <p className="mt-4 text-sm text-white">{description}</p>
                      <BiLeftArrow
                        className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                        onClick={prevSlide}
                      />
                      <BiRightArrow
                        className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
                        onClick={nextSlide}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style={{ transform: "translateZ(0)" }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-blue-800 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
          );
        })}
        <section className="mt-48 md:mt-40 pb-40 relative bg-gray-300">
          <div
            className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 bg-blue-400"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-green-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          {/** sections componnets  */}

          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              {sections?.map((item, index) => (
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blue-100">
                    <img
                      alt="..."
                      src={urlFor(item?.sectionImage)}
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4 bg-green-300">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-transparent fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        {item?.title}
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        {item?.description}
                      </p>
                    </blockquote>
                  </div>
                </div>
              ))}
              <div className="w-full md:w-6/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem1?.icons} `}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem1?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem1?.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem2?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem2?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem2?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem3?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {" "}
                          {sectionItem3?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem3?.description}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className={`fas ${sectionItem4?.icons}`}></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          {sectionItem4?.title}
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          {sectionItem4?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/** end of sections components  */}
          <div className="container mx-auto overflow-hidden pb-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className={`fas ${aboutTitleIcon} text-xl`}></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  {aboutTitle}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  {aboutDesc}
                </p>
                <div className="block pb-6">
                  {aboutSectionItems?.map((cssItem, index) => (
                    <span
                      className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2"
                      key={index + cssItem}
                    >
                      {cssItem}
                    </span>
                  ))}
                </div>
                <Link
                  to="/AboutUs"
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                >
                  View All{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </Link>
              </div>

              <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    className=" w-full align-middle rounded-lg absolute shadow-2xl max-w-800-px -left-0-px -top-225-px "
                    src={sectionImageURL}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 pb-32 pt-48">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    {inspireContentTitle}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    {inspireContentDesc}
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src={inspireContentImage}
                />
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-6/12 px-12 md:px-4">
              <h2 className="font-semibold text-4xl">{productSecTitle}</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                {productSecDesc}
              </p>
            </div>
          </div>
        </section>

        <section className="block relative z-1 bg-blueGray-600">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4  -mt-24">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Our Products
                    </h5>
                    <Link to="/products">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={inspireContentImage}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      About Us
                    </h5>
                    <Link to="/ABOUTUS">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={productSecImage}
                          //src={require("assets/img/login.jpg").default}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      Our Blogs
                    </h5>
                    <Link to="/blogs">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={require("../assets/img/login.jpg").default}
                          //src={""}
                        />
                      </div>
                    </Link>
                  </div>
                  ;
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

      <Footer />
    </>
  );
};

export default MotionWrap(Index);
