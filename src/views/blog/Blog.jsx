import Navbar from "../../components/Navbars/AuthNavbar";
import React from "react";
import BlogNavbar from "../../components/Navbars/BlogNavbar";
import { useStateContext } from "../../oncontext/OnLandingContext";
import Footer from "../../components/Footers/Footer";
import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import { Link } from "react-router-dom";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";
import moment from "moment";
import { urlFor } from "../../client";
import { blogDetailQuery } from "../../utils/data";
import FeaturedPosts from "./FeaturedPosts";

const Blog = () => {
  const { nextSlide, prevSlide, current, BiLeftArrow, BiRightArrow } =
    useStateContext();

  const {
    blogAuthor,
    moreBlogs,
    setMoreBlogs,
    loading,
    setLoading,
    BlogDetails,
    setBlogDetails,
  } = useStateBlogContext();

  const {
    animateFilter,
    handleProductFilter,
    activeFilterBtn,
    inActiveFilterBtn,
  } = useStateContextProduct();

  // image carousel slide
  const showImg = "absolute top-0 w-full h-full bg-center bg-cover";
  const hideImg = "absolute top-0 w-full h-full bg-center bg-cover hidden";
  console.log("====================================");
  console.log(blogAuthor);
  console.log("====================================");
  return (
    <>
      <Navbar transparent />
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          // className={index === current ? showImg : hideImg}
          className={showImg}
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            // backgroundImage: `url(${urlFor(headerImage)})`,
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
                <h1 className="text-white font-bold text-4xl">
                  Makemaker Blogs
                </h1>
                <p className="mt-4 text-sm text-blueGray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur fugit rerum nemo expedita omnis eligendi tenetur
                  cum commodi porro ea?
                </p>
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      {/** CATEGORIES SECTION */}
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="w-full md:w-4/12 px-6 md:px-4 ml-auto mr-auto mt-6">
          <h3 className="text-2xl  text-blueGray-900 font-semibold mb-1 leading-normal align-center uppercase">
            Filter Blog Posts
            {/* <FeaturedPosts /> */}
          </h3>
          <div className="block pb-6">
            {["All", "STEM", "CAD", "Electronics"]?.map((item, index) => (
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
      {/** CATEGORIES SECTION */}
      {/**FEATUREDPOST SECTION */}

      {/* <FeaturedPosts /> */}
      {/**FEATUREDPOST SECTION */}
      {/**BLOGS SECTION */}
      {/** add products for makeMaker */}
      <section className="block relative z-1 bg-blue-400 ">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap md:flex-col">
            <div className="w-full lg:w-12/12 px-4 mt-24 mb-24">
              <div className="flex flex-wrap">
                {blogAuthor?.map((item, INDEX) => {
                  const {
                    _id,
                    title,
                    author,
                    description,
                    publishedAt,
                    mainImage,
                    slug,
                  } = item;
                  const displayDate = publishedAt
                    ? moment(publishedAt).utc().format("YYYY-MM-DD")
                    : "";
                  const desc =
                    description === "undefined"
                      ? `${description?.slice(0, 10)}..`
                      : "description";
                  return (
                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                      <Link to={`/blogpost/${_id}`}>
                        {/* <Link to={`/blogpost/${slug?.current}`}> */}
                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-xl rounded-lg bg-lightBlue-500 ease-linear transition-all duration-150">
                          <img
                            alt="..."
                            src={urlFor(mainImage)}
                            //src="https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg"
                            className="w-full align-middle rounded-t-lg"
                          />
                          <blockquote className="relative p-8 mb-4">
                            <svg
                              preserveAspectRatio="none"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 583 95"
                              className="absolute left-0 w-full block h-95-px -top-94-px"
                            >
                              <polygon
                                points="-30,95 583,95 583,65"
                                className="text-white fill-current"
                              ></polygon>
                            </svg>
                            <div className="flex justify-between sm:flex-row lg:flex md:flex-row mx:mx-auto mx-auto">
                              <div className="px-4 ">
                                <h4 className="text-sm font-bold text-white">
                                  {title}
                                </h4>
                                <p className="text-sm font-light mt-2 text-white">
                                  {desc}
                                </p>
                              </div>
                              <div className="mx-0 md:mx-auto ">
                                <h4 className="text-sm font-bold text-white">
                                  {author && author?.name}
                                </h4>
                                <p className="text-sm font-light mt-2 text-white">
                                  {displayDate}
                                </p>
                              </div>
                            </div>
                          </blockquote>
                        </div>
                      </Link>
                    </div>
                  );
                })}

                {/** end of product item */}

                {/** end of product Items */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**BLOGS SECTION */}

      <Footer />
    </>
  );
};

export default Blog;
