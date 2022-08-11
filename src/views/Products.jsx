// import for thirdparty and external depencies
import Navbar from "../components/Navbars/AdminNavbar";
import { useStateContextProduct } from "../oncontext/productContext/onProductContext";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footers/Footer";
import { urlFor } from "../client";
import ProductItem from "./ProductItem";
import moment from "moment";

// import for components
const Product = () => {
  // const [products, setProducts] = useStateContextProduct();

  // const product = products.find((p) => p.id === Math.floor(Math.random() * 1000)); use
  //const navigate = useHistory();
  const navigate = useNavigate();

  const {
    BsArrowLeftSquare,
    BsArrowRightSquare,
    BsCart3,
    productBanner,
    productHeader,
    products,
    convertedDate,
    handleProductFilter,
    activeFilterBtn,
    inActiveFilterBtn,
    animateFilter,
    productBannerID,
    animateCard,
  } = useStateContextProduct();
  console.log(productHeader);
  console.log(productBannerID);
  console.log(convertedDate);
  console.log(productBanner);
  return (
    <>
      <Navbar transparent BsCart3={BsCart3} />
      <main>
        {productHeader?.map((item, index) => {
          const { name, desc, image } = item;
          return (
            <div
              className="relative pt-40 pb-32 flex content-center items-center justify-center max-h-screen"
              key={index + name}
            >
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage: `url(${urlFor(image)})`,
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
                      <motion.h1
                        className="text-2xl font-bold text-white"
                        animate={{ fontSize: 50, color: "ButtonText" }}
                      >
                        {name}
                      </motion.h1>
                      <p className="text-base leading-relaxed text-white">
                        {" "}
                        {desc}
                      </p>
                      {/* <BsArrowLeftSquare className="absolute left-0 text-3xl md:text-xl sm:text-sm inset-y-1/2 text-white hover:bg-lightBlue-300 cursor-pointer" />
                      <BsArrowRightSquare className="absolute right-0 text-3xl md:text-xl sm:text-sm inset-y-1/2 text-white cursor-pointer" /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-20"
                style={{ transform: "translate3d(50, 50, 70)" }}
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
                    className="text-blueGray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-center bg-gray-300">
          <div className="w-full md:w-4/12 px-6 md:px-4 ml-auto mr-auto mt-6">
            <h3 className="text-2xl  text-black font-semibold mb-1 leading-normal align-center uppercase">
              Filter categories
            </h3>
            <div className="block pb-6">
              {["all", "arduino", "cad", "electronics"]?.map((item, index) => (
                <span
                  className={`${
                    animateFilter === item ? activeFilterBtn : inActiveFilterBtn
                  }`}
                  key={index}
                  onClick={() => handleProductFilter(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/** add products for makeMaker */}
        <section className="block relative z-1 bg-gray-200 ">
          <div className="container mx-auto">
            <div className="justify-center flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4 mt-24 mb-24">
                {/** MOTION DIV ITEM */}
                <motion.div
                  className="flex flex-wrap"
                  animate={animateCard}
                  transition={{
                    duration: 0.5,
                    delayChildren: 0.5,
                  }}
                >
                  {productBanner?.map((item, index) => {
                    const {
                      title,
                      discount,
                      description,
                      price,
                      product,
                      publishedAt,
                      image,
                      _id,
                    } = item;

                    const desc = `${description?.slice(0, 10)}..`;
                    const displayDate = publishedAt
                      ? moment(publishedAt).utc().format("YYYY-MM-DD")
                      : "";
                    return (
                      <motion.div
                        // whileHover={{ opacity: [0, 1] }}
                        // transition={{
                        //   duration: 0.25,
                        //   ease: "easeInOut",
                        //   staggerChildren: 0.5,
                        // }}
                        className="w-full md:w-4/12 px-4 mr-auto ml-auto"
                        key={index}
                      >
                        <Link to={`/productdetails/${_id}`}>
                          <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-400 ease-linear transition-all duration-150">
                            <img
                              alt="..."
                              src={urlFor(image)}
                              className="w-full  h-72 align-middle rounded-t-lg"
                            />
                            <blockquote className="relative p-8 mb-4">
                              <svg
                                preserveAspectRatio="none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 583 95"
                                className="absolute left-0 w-full block h-95-px -top-94-px "
                              >
                                <polygon
                                  points="-30,95 583,95 583,65"
                                  className="text-transparent fill-current"
                                ></polygon>
                              </svg>
                              <div className="flex justify-between sm:flex-row">
                                <div className="px-4 ">
                                  <h4 className="text-xl font-bold text-white">
                                    {title}
                                  </h4>
                                  <p className="text-md font-light mt-2 text-white">
                                    {`$${price}`}
                                  </p>
                                </div>
                                <div className="">
                                  <h4 className="text-xl font-bold text-white">
                                    {desc}
                                  </h4>
                                  <p className="text-md font-light mt-2 text-white">
                                    {displayDate}
                                  </p>
                                </div>
                              </div>
                            </blockquote>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                  {/** end of product item */}
                  {/** end of product Items */}
                </motion.div>
                {/** END OF MOTION DIV */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Product;
