import { useStateContextEcom } from "../oncontext/productContext/onEcomContext";
import React, { useState } from "react";

const ProductDetailsMore = ({ description }) => {
  const [openTab, setOpenTab] = useState(1);
  const {
    handleReviewSubmit,
    handleReviewChange,
    handleChange,
    name,
    email,
    review,
    isReviewCreated,
    reviewLoaded,
  } = useStateContextEcom();

  return (
    <>
      <div className="flex flex-wrap">
        <div className=" mx-auto w-1/2 mt-16">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sm:flex-col"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                description
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                additional information
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                reviews{" "}
                <span className="text-teal-400 font-semibold"> (0)</span>
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-blueGray-400 text-sm font-semibold">
                    {description}
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className="text-blueGray-500 text-sm font-semibold font-sans">
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  {/** Title */}
                  <div className="mb-4">
                    <p className="text-blueGray-400 text-lg font-semibold uppercase">
                      send us a review it's worth it
                    </p>
                  </div>

                  {/** username */}
                  <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      value={name}
                      name="name"
                      onChange={handleChange}
                    />
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  {/** useremail */}
                  <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600
                      bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      name="email"
                      value={email}
                      required
                      onChange={handleChange}
                    />
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  {/** userreview */}
                  <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <textarea
                      rows={3}
                      cols={6}
                      type="text"
                      placeholder="type in your review ..."
                      class="px-2 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                      name="review"
                      value={review}
                      onChange={handleChange}
                    />
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300  bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-1">
                      <i class="fas fa-star"></i>
                    </span>
                  </div>
                  {/**button */}
                  {!isReviewCreated ? (
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                      <button
                        className=" border border-lightBlue-500 text-blueGray-600 active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleReviewSubmit}
                      >
                        {`${!reviewLoaded ? "submit review" : "sending"} `}
                      </button>
                    </div>
                  ) : (
                    <div className="relative flex w-full flex-wrap items-stretch mb-3">
                      <p className="text-md text-blueGray-600 font-bold">
                        Thanks for your review
                      </p>
                    </div>
                  )}

                  {/**button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsMore;
