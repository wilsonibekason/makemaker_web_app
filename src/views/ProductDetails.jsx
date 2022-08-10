//import for thirdparty dependencies

import { client, urlFor } from "../client";
import Footer from "../components/Footers/Footer";
import Navbar from "../components/Navbars/AdminNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import { useStateContextEcom } from "../oncontext/productContext/onEcomContext";
import { productDetailQuery, productDetailMoreQuery } from "../utils/data";
// import { productDetailMoreQuery } from "utils/data";
import { useEffect, useState } from "react";
import moment from "moment";
import ProductDetailsMore from "./ProductDetailsMore";

const {
  useStateContextProduct,
} = require("../oncontext/productContext/onProductContext");

// import for internal dependencies

const ProductDetails = () => {
  const { pinId } = useParams();
  let id = useParams();
  let productId = id?.id;

  const { AiFillStar } = useStateContextProduct();
  const {
    renderMoreProductsItems1,
    renderMoreProductsItems2,
    index,
    setIndex,
    increaseQuantity,
    decreQuantity,
    increQty,
    decreaseQuantity,
    inQTY,
    onAdd,
    productQuantity,
  } = useStateContextEcom();
  // main items
  const items = renderMoreProductsItems1?.concat(renderMoreProductsItems2);
  ///////////////
  // DEFINE STATES
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [productDetailsMore, setProductDetailsMore] = useState();

  const [error, setError] = useState(null);

  // DEFINE STATES

  // fetching productDetails
  const fetchProductDetails = () => {
    const query = productDetailQuery(productId);
    if (productDetailQuery(productId)) {
      client
        .fetch(query)
        .then((data) => {
          setProductDetails(data[0]);
          console.log(data);
          setLoading(false);
          if (data[0]) {
            const queryMore = productDetailMoreQuery(data[0]);
            client
              .fetch(queryMore)
              .then((data) => {
                setProducts(data);
                console.log(data);
              })
              .catch((error) => {
                console.log("====================================");
                console.log(error);
                console.log("====================================");
                setError(error?.response?.message);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(error?.response?.message);
        });
    }
  };

  // CALL FUNCTIONS
  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  // destructuring for related products
  const { publishedAt, title, image, description } = products;
  return (
    <>
      <Navbar Transparent />

      <section className="relative py-20  bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20 "
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className=" flex flex-col w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-2xl"
                //src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                src={
                  productDetails
                    ? productDetails?.productImage &&
                      urlFor(
                        productDetails?.productImage &&
                          productDetails?.productImage[index]
                      ).url()
                    : "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                }
                // src={urlFor(headImageUrl)}
              />

              <div className="flex flex-row gap-4 mt-4 mx-auto px-4">
                {productDetails?.productImage &&
                  productDetails?.productImage?.map((image, index) => (
                    <img
                      src={urlFor(image).url()}
                      alt=""
                      key={index}
                      className="rounded-lg bg-red-500 w-16 h-16 cursor-pointer mr-4"
                      onMouseEnter={() => setIndex(index)}
                      onClick={() => setIndex(index)}
                    />
                  ))}
              </div>
            </div>

            <div className="w-full md:w-5/12 ml-auto mr-auto ">
              <div className="md:pr-12 mb-12 mt-32 lg:mt-20">
                <h1 className=" text-2xl font-bold">
                  {productDetails ? productDetails?.title : "Title"}
                </h1>
                <div className="text-Amber-400 mt-4 flex gap-2 align-center">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  {"  "}
                  <p className="mb-4 text-sm">(20)</p>
                </div>
                <h4 className=" text-gray-500 text-sm font-semibold">
                  Description
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {productDetails ? productDetails?.description : "Description"}
                </p>
                <div className="flex flex-wrap">
                  <div className="flex">
                    <div className="w-1/2  h-12 px-4 border border-solid  shadow hover:shadow-lg my-4 py-3 bg-lightBlue-500 text-white active:bg-lightBlue-600  ease-linear transition-all duration-150">
                      <h2 className="font-bold text-md">Quantity</h2>
                    </div>
                    <div
                      className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-auto py-3 font-bold  mx-auto"
                      onClick={decreQuantity}
                    >
                      -
                    </div>
                    <div className="w-1/6 bg-gray-500 h-12 px-4 border border-solid   shadow-md my-4 py-3 font-bold">
                      {productQuantity}
                    </div>
                    <div
                      className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-4 py-3 font-bold text-gray-500"
                      onClick={inQTY}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => onAdd(productDetails, productQuantity)}
                  >
                    Add To Cart
                  </button>
                  <button
                    className="border border-lightBlue-500 text-lightBlue-500 active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Buy Now
                  </button>
                </div>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">
                          <span className="uppercase text-red-200">
                            {" "}
                            Date Added
                          </span>{" "}
                          :{"  "}
                          {productDetails
                            ? moment(productDetails?.publishedAt)
                                .utc()
                                .format("YYYY-MM-DD")
                            : "DATE ADDED"}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">
                          WHEN TO BUY :{" "}
                          {productDetails
                            ? productDetails?.saleTime
                            : "Always Available"}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500 text-sm">
                          {ProductDetails?.discount
                            ? ProductDetails?.discount
                            : "No discount for now"}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <ProductDetailsMore description={productDetails?.description} />

        {/**   other products components  */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-6/12 px-6 md:px-4 ml-auto mr-auto mt-6">
            <h3 className="text-2xl font-semibold mb-1 leading-normal">
              <div className="py-2  items-center justify-center">
                <nav className="block">
                  <ul className="flex pl-0 rounded list-none flex-wrap">
                    {renderMoreProductsItems1?.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#pablo"
                          className="first:ml-0 text-xs font-bold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500 uppercase"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                    {"  "}
                    {renderMoreProductsItems2?.map((item, index) => (
                      <li key={index}>
                        <a
                          href="#pablo"
                          className="first:ml-0 text-xs flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid font-bold border-lightBlue-500 bg-white text-lightBlue-900 uppercase"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </h3>
          </div>
        </div>
             <di
        {/**   other products components  */}
      </section>

      <Footer />
    </>
  );
};

export default ProductDetails;
