import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import {
  blogDetailMoreQuery,
  blogDetailQuery,
  blogRecentPost,
  tagsCategories,
} from "../../utils/data";
import { client, urlFor } from "../../client";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";
import Navbar from "../../components/Navbars/AuthNavbar";
import { useStateContext } from "../../oncontext/OnLandingContext";
import Footer from "../../components/Footers/Footer";
import { CommentForm } from "../../views/blogs";
import PortableText from "react-portable-text";
import MoreBlogs from "./MoreBlogs";
const BlogDetails = () => {
  const {
    blogAuthor,
    moreBlogs,
    setMoreBlogs,
    loading,
    setLoading,
    BlogDetails,
    setBlogDetails,
    recentBlogs,
    setRecentBlogs,
    tags,
    setTags,
  } = useStateBlogContext();
  const { BiLeftArrow, BiRightArrow } = useStateContext();
  ///// set global variables
  let blogid;
  let query;

  let queryMore;
  let Id = useParams();
  blogid = Id?.id;
  let blogQuery;
  ///// defining states
  const fetchBlogsDetailTags = () => {
    setLoading(true);
    blogQuery = tagsCategories(blogid);
    if (blogQuery) {
      client
        .fetch(blogQuery)
        .then((data) => setTags(data))
        .catch((error) =>
          console.log(error?.response.body?.error?.description)
        );
    }
  };

  const fetchBlogDetails = () => {
    setLoading(true);

    query = blogDetailQuery(blogid);
    if (query) {
      client.fetch(query).then((data) => {
        setBlogDetails(data);
        setLoading(false);
        console.log(data[0]);
        console.log(data);
        if (data[0]) {
          queryMore = blogDetailMoreQuery(data[0]);
          client
            .fetch(queryMore)
            .then((moreData) => {
              setMoreBlogs(moreData);
              setLoading(false);
            })
            .catch((error) =>
              console.log(error?.response?.body?.error?.description)
            );
          if (data[0]) {
            queryMore = blogRecentPost(data[0]);
            client
              .fetch(queryMore)
              .then((recentDATA) => setRecentBlogs(recentDATA))
              .catch((error) =>
                console.log(error?.response?.body?.error?.description)
              );
          }
        }
      });
    }
  };

  useEffect(() => {
    fetchBlogDetails();
    fetchBlogsDetailTags();
  }, [blogid]);
  // LOGS
  const item = BlogDetails?.map((item, index) => item?.title);
  const itemsrc = BlogDetails?.map((item, index) => item?.mainImage);
  console.log("====================================");
  // console.log(BlogDetails);
  console.log(recentBlogs);
  console.log(moreBlogs);
  console.log(blogid);
  console.log("====================================");

  const showImg = "absolute top-0 w-full h-full bg-center bg-cover";
  const hideImg = "absolute top-0 w-full h-full bg-center bg-cover hidden";
  return (
    <>
      <Navbar />
      {BlogDetails?.map((item, index) => {
        const { mainImage, title, description, body } = item;
        return (
          <>
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
              <div
                //={index === current ? showImg : hideImg}
                className={showImg}
                style={{
                  // backgroundImage:
                  // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                  backgroundImage: `url(${urlFor(mainImage).url()})`,
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
                      <p className="mt-4 text-sm text-gray-200">
                        {description}
                      </p>
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
                    className="text-gray-200 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
            </div>

            {/** BLOGDETAILS COMPONENT */}
            <div className="container mx-auto my-4 dark:bg-gray-800">
              <div className="flex justify-between items-center flex-col  lg:flex-row md:flex-row sm:flex-col">
                {/** BLOG DETAILS COMPONENT */}
                <div className="w-full md:w-6/12 lg:w-10/12 px-2 md:px-4 lg:px-4 mx-auto lg:mx-2 mt-12">
                  {/* <img
                    src={require("assets/img/profile.jpg").default}
                    className="shadow-lg rounded-lg"
                  /> */}

                  <div className="md:pr-12 mx-4">
                    <PortableText
                      dataset={"production"}
                      projectId={"yfhcl1lq"}
                      content={body}
                      serializers={{
                        h1: (props) => (
                          <h1
                            className="text-2xl font-bold my-5 text-white"
                            {...props}
                          />
                        ),
                        h2: (props) => (
                          <h2
                            className="text-xl font-bold my-5 text-white"
                            {...props}
                          />
                        ),
                        p: (props) => (
                          <p
                            className="text-sm font-semibold text-white"
                            {...props}
                          ></p>
                        ),
                        li: ({ children }) => (
                          <li className="ml-4 list-none text-gray-100">
                            {children}
                          </li>
                        ),
                        link: ({ href, children }) => (
                          <a
                            href={href}
                            className="inline-block py-2 text-base leading-7 text-white hover:text-gray-800 dark:text-gray-300 dark:hover hover:underline "
                          >
                            {children}
                          </a>
                        ),
                      }}
                    />
                  </div>
                </div>
                {/** BLOG DETAILS COMPONENT */}

                {/** BLOG CATEGORY COMPONENT */}
                <div className="  w-full md:w-4/12 lg:w-4/12 px-4 mx-4 md:px-4 mt-32 sticky bg-gray-900 rounded-md">
                  <div className="border border-gray-400 border-solid p-4 my-4 ">
                    {" "}
                    <div className="mb-4">
                      <p className="text-sm text-gray-900 dark:text-dark dark:hover:text-white dark:bg-gray-200  dark:hover uppercase text-center font-semibold ">
                        newsletter
                      </p>
                      <div className="border-t bg-gray-800 mt-2"></div>
                      {/**email input for newletters */}
                      <div class="relative flex w-full flex-wrap items-stretch mb-3 mt-4">
                        <input
                          type="email"
                          placeholder="Send us your email to receive daily newsletters"
                          class="px-2 py-1 placeholder-gray-900 text-gray-600
                      bg-white rounded text-sm border border-gray-800 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                          name="email"
                          // value={email}
                          required
                          // onChange={handleChange}?
                        />
                        <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                          <i class="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    {/**Recent post section */}
                    <div className="mb-4 ">
                      <div className="border-t bg-gray-300 mt-2"></div>
                      <div className="border border-solid shadow-md ">
                        <p className="text-sm text-gray-900 dark:text-black dark:hover:text-white dark:bg-gray-200  dark:hover uppercase text-center font-semibold mt-2">
                          recent post
                        </p>
                        {/**Recent post section */}
                        {recentBlogs?.map((item, index) => {
                          const { _id, title, description, publishedAt } = item;
                          const displayDate = publishedAt
                            ? moment(publishedAt).utc().format("YYYY-MM-DD")
                            : "";
                          return (
                            <>
                              <div className="border-t bg-gray-300 mt-2"></div>
                              <div className="flex flex-col  items-center mx-auto">
                                <h4 className="text-sm uppercase font-semibold  text-lightBlue-400  ">
                                  {title}
                                </h4>
                                <p className="text-xs text-lightBlue-400 font-semibold">
                                  {" "}
                                  {description && description.length < 50
                                    ? description.slice(0, 30)
                                    : "no description"}
                                </p>
                                <div className="border-t bg-lightBlue-300 mt-2"></div>
                                <div class="flex flex-col md:flex-row lg:flex-row  items-start">
                                  <span class="mb-1 text-sm font-bold mx-2">
                                    {displayDate}
                                  </span>
                                  <a
                                    href="https://stackdiary.com/"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    class="text-sm"
                                  >
                                    3mins read
                                  </a>
                                </div>
                              </div>
                              {/**djdjdjddd */}
                            </>
                          );
                        })}
                      </div>
                      {/**Recent post section */}
                    </div>
                    {/**Recent post section */}
                    {/**tags and categories section */}
                    <div className="mb-4 ">
                      <div className="border-t bg-gray-300 mt-2"></div>
                      <div className="border border-solid shadow-md ">
                        <p className="text-sm text-gray-600 dark:text-black dark:hover:text-white dark:bg-gray-200  dark:hover uppercase text-center font-semibold mt-2">
                          tags and categories
                        </p>
                        {/**Recent post section */}

                        <div className="border-t bg-gray-300 mt-2"></div>
                        <div className="flex flex-col  items-center mx-auto">
                          <div className="block mb-2">
                            <span className="text-xs font-semibold inline-block py-1 px-2  rounded-lg bg-gray-400 text-white  uppercase last:mr-0 mr-2 ml-2 mt-2">
                              hdhhd
                            </span>
                            <span className="text-xs font-semibold inline-block py-1 px-2  rounded-lg bg-gray-400 text-white uppercase last:mr-0 mr-2 ml-2 mt-2">
                              hdhhd
                            </span>
                          </div>
                        </div>

                        {/**Recent post section */}
                      </div>
                    </div>
                    {/**tags and categories section */}
                  </div>
                </div>
                {/** BLOG CATEGORY COMPONENT */}
              </div>
            </div>
            {/**moreblogs */}
            <div className="mx-auto my-2">
              <h2 className="text-3xl md:text-xl lg:text-3xl font-bold text-gray-500 text-center underline">
                More Posts Like This
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-3 px-2">
              <MoreBlogs />
              <MoreBlogs />
              <MoreBlogs />
              <MoreBlogs />
            </div>
            {/**moreblogs */}
            {/* <CommentForm /> */}
            <CommentForm />
          </>
        );
      })}
      {/** BLOGDETAILS COMPONENT */}
      <Footer />
    </>
  );
};

export default BlogDetails;
