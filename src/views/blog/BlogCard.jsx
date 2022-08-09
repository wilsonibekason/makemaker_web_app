import React from "react";

const BlogCard = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-20">
          <div style="background-color:rgb(167, 139, 250)">
            <div
              className="p-3 px-6 min-h-48 flex justify-center items-center"
              style="cursor: auto;"
            >
              <div>
                <div className="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
                  <div
                    className="flex items-center justify-between p-3"
                    style="cursor: auto;"
                  >
                    <div
                      className="flex items-center space-x-2"
                      style="cursor: auto;"
                    >
                      <img
                        src="https://stackdiary.com/140x100.png"
                        alt=""
                        className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700"
                        style="cursor: auto;"
                      />
                      <div className="-space-y-1" style="cursor: auto;">
                        <h2
                          className="text-sm font-semibold leading-none"
                          style="cursor: auto;"
                        >
                          External_
                        </h2>
                        <span
                          className="inline-block text-xs leading-none text-coolGray-400"
                          style="cursor: auto;"
                        >
                          New York City
                        </span>
                      </div>
                    </div>
                    <button title="Open options" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                        style="cursor: auto;"
                      >
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                      </svg>
                    </button>
                  </div>
                  <img
                    src="https://stackdiary.com/140x100.png"
                    alt=""
                    className="object-cover object-center w-full h-72 bg-coolGray-500"
                    style="cursor: auto;"
                  />
                  <div className="p-3" style="cursor: auto;">
                    <div
                      className="flex items-center justify-between"
                      style="cursor: auto;"
                    >
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          title="Like post"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          title="Add a comment"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          title="Share post"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 fill-current"
                          >
                            <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                          </svg>
                        </button>
                      </div>
                      <button
                        type="button"
                        title="Bookmark post"
                        className="flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current"
                        >
                          <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                        </svg>
                      </button>
                    </div>
                    <div
                      className="flex flex-wrap items-center pt-3 pb-1"
                      style="cursor: auto;"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="flex -space-x-1">
                          <img
                            alt=""
                            className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800"
                            src="https://stackdiary.com/140x100.png"
                          />
                          <img
                            alt=""
                            className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800"
                            src="https://stackdiary.com/140x100.png"
                          />
                          <img
                            alt=""
                            className="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800"
                            src="https://stackdiary.com/140x100.png"
                          />
                        </div>
                        <span className="text-sm">
                          {" "}
                          Liked by
                          <span className="font-semibold">Pixels</span> and
                          <span className="font-semibold">20 others</span>
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3" style="cursor: auto;">
                      <p className="text-sm" style="cursor: auto;">
                        <span className="text-base font-semibold">
                          External_
                        </span>{" "}
                        It's getting cold out there!
                      </p>
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-coolGray-100"
                        style="cursor: auto;"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**start of card component */}
      <div
        class="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        style={{ cursor: auto }}
      >
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            Jan 15, 2022
          </span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            JavaScript
          </a>
        </div>
        <div class="mt-2">
          <a
            href="https://stackdiary.com/"
            class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            How to sanitiz array() in JS
          </a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">
            Dui urna vehicula tincidunt pretium consequat luctus mi, platea
            fermentum conubia tempus ac orci. Pellentesque dictum malesuada
            cubilia faucibus dignissim mi nascetur senectus, augue ad libero
            efficitur dolor duis lobortis, non etiam sociosqu.
          </p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">
            Read more ⟶
          </a>
          <div class="flex items-center">
            <img
              src="https://stackdiary.com/140x100.png"
              alt="Author Photo"
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              John Doe
            </a>
          </div>
        </div>
      </div>
      {/**end of card components */}
      <div class="container mx-auto px-20">
        <div style="background-color:rgb(248, 250, 255)">
          <div
            class="md:mt-12 flex flex-wrap blue-box relative text-lg p-4"
            style="cursor: auto;"
          >
            <blockquote class="w-full sm:w-1/2 p-6" style="cursor: auto;">
              <div class="mb-4">
                <img
                  srcset=""
                  src="https://stackdiary.com/140x100.png"
                  alt="Company Logo"
                />
              </div>
              <p class="mb-4">
                <span class="text-primary-900">"</span>Metus potenti velit
                sollicitudin porttitor magnis elit lacinia tempor varius, ut
                cras orci vitae parturient id nisi vulputate consectetur, primis
                venenatis cursus tristique malesuada viverra congue risus.
                <span class="text-primary-900">"</span>
              </p>
              <div class="flex items-center">
                <img
                  alt="John Doe"
                  class="w-12 mr-4 rounded-full bg-neutral-500"
                  src="https://stackdiary.com/140x100.png"
                />
                <div class="flex flex-col items-start">
                  <span class="mb-1 text-sm font-bold">Robert Smith</span>
                  <a
                    href="https://stackdiary.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    class="text-sm"
                  >
                    {" "}
                    Facebook{" "}
                  </a>
                </div>
              </div>
            </blockquote>
            <blockquote class="w-full sm:w-1/2 p-6" style="cursor: auto;">
              <div class="mb-4 mt-1">
                <img
                  srcset=""
                  src="https://stackdiary.com/140x100.png"
                  alt="Company Logo"
                />
              </div>
              <p class="mb-4">
                <span class="text-primary-900">"</span>Metus potenti velit
                sollicitudin porttitor magnis elit lacinia tempor varius, ut
                cras orci vitae parturient id nisi vulputate consectetur, primis
                venenatis cursus tristique malesuada viverra congue risus.
                <span class="text-primary-900">"</span>
              </p>
              <div class="flex items-center">
                <img
                  alt="John Doe"
                  class="w-12 mr-4 rounded-full bg-neutral-500"
                  srcset=""
                  src="https://stackdiary.com/140x100.png"
                />
                <div class="flex flex-col items-start">
                  <span class="mb-1 text-sm font-bold">John Doe</span>
                  <a
                    href="https://stackdiary.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    class="text-sm"
                  >
                    {" "}
                    Google{" "}
                  </a>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
