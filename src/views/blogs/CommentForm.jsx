import React from "react";
import { Comments } from ".";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";

const CommentForm = () => {
  const {
    handleSubmit,
    handleChange,
    isError,
    setIsError,
    fullName,
    email,
    title,
    message,
    isCommented,
    loading,
  } = useStateBlogContext();
  return (
    <>
      <section className="relative block py-24 lg:pt-0 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:mt-2 mt-2">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 my-4">
                {/** form  */}
                {!isCommented ? (
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-md lg:text-lg font-semibold">
                      Contact us
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-500 text-xs lg:text-sm ">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto beatae sequi tempore eligendi nisi est
                      reprehenderit!
                    </p>
                    <>
                      <>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Enter your full Name"
                            required
                            name="name"
                            value={fullName}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="Enter your email address"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Title
                            <span className="lowercase font-semibold">
                              {" "}
                              (optional){" "}
                            </span>
                          </label>
                          <input
                            type="text"
                            className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="Enter the title of your comment"
                            required
                            name="name"
                            value={title}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type in your  message..."
                            onChange={handleChange}
                            required
                            name="message"
                            value={message}
                          />
                        </div>

                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleSubmit}
                          >
                            {loading ? "sending" : "send"}
                          </button>
                        </div>
                      </>
                    </>
                  </div>
                ) : (
                  // {/** end of form */}
                  <div>
                    <h4 className="text-gray ">
                      Thanking you for getting in touch
                    </h4>
                  </div>
                )}
              </div>
              {/** comments section with a minimum length of three  */}

              {/** comments section with a minimum length of three  */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-3  px-2">
          <Comments />
          <Comments />
          <Comments />
          <Comments />
        </div>
      </section>
    </>
  );
};
export default CommentForm;
