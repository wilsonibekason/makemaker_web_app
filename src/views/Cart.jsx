import { useStateContextProduct } from "../oncontext/productContext/onProductContext";
import { useStateContextEcom } from "../oncontext/productContext/onEcomContext";

import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../client";

const Cart = ({
  popoverDropdownRef,
  dropdownPopoverShow,
  openDropdownPopover,
  closeDropdownPopover,
  btnDropdownRef,
}) => {
  const {
    AiOutlineLeft,
    AiOutlineShopping,
    AiOutlineRight,
    AiOutlinePlus,
    AiOutlineMinus,
    TiDeleteOutline,
  } = useStateContextProduct();
  const {
    increaseQuantity,
    decreQuantity,
    onRemove,
    decreaseQuantity,
    inQTY,
    onAdd,
    productQuantity,
    totalQuantities,
    totalPrice,
    toggleCartItemsQuantities,
    showCart,
    cartItems,
    setShowCart,
  } = useStateContextEcom();
  console.log("====================================");
  console.log(cartItems);
  console.log("====================================");
  return (
    <>
      <main
        className={` ${dropdownPopoverShow ? "block" : "hidden"} bg-gray-100 `}
        ref={popoverDropdownRef}
      >
        <div className="w-4/12 h-full bg-blueGray-400 fixed right-0 top-0 z-100 ease-linear transition-all duration-150 ">
          <div className="w-full h-full bg-white shadow-xl float-right p-3 relative">
            <button
              className="flex center text-sm font-bold gap-2 ml-2 border-none bg-transparent mt-4"
              ref={btnDropdownRef}
              onClick={(e) => {
                e.preventDefault();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <AiOutlineRight size={30} />
              <span className="ml-2 font-base text-xl sm:text-sm md:text-md">
                Your Cart
              </span>
              <span className="ml-2 text-gray-600 text-xl sm:text-sm md:text-md">
                {totalQuantities}
              </span>
            </button>

            {/** render the empty cart content */}

            {cartItems?.length < 1 && (
              <div className="m-24 text-center align-center">
                <div className="pl-16 ">
                  <AiOutlineShopping size={150} className="" />
                </div>
                <h3 className="font-bold text-sm">
                  Your Shopping Cart Is Empty
                </h3>
                <Link to={"/products"}>
                  <button className="w-full max-w-screen-2xl hover:max-w-prose p-2 rounded-full border-none text-sm mx-12 uppercase bg-lightBlue-500 hover:bg-lightBlue-200 active:bg-teal-600 cursor-pointer transition-all scale-100 hover:scale-105 mt-12">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            )}
            {/** render the empty cart content */}
            {/**container */}
            <div>
              {cartItems?.length >= 1 && (
                <>
                  <div className="container px-4 mx-auto mt-12">
                    {cartItems?.map((cartItem, index) => {
                      // const { image } = cartItem;
                      return (
                        <div className="flex justify-between" key={index}>
                          <div className="w-1/3 px-4">
                            <div className="w-full sm:w-4/12 p-4 bg-blueGray-500">
                              {/**CARTiMAGE */}
                              <img
                                className=" max-w-100-px rounded-lg bg-lightBlue-400 shadow-xl"
                                src={urlFor(cartItem?.image)}
                                alt="Shopping Cart"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex">
                              <div
                                className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md  my-4 py-3 text-lg"
                                onClick={() =>
                                  toggleCartItemsQuantities(
                                    cartItem?._id,
                                    "increase"
                                  )
                                }
                              >
                                <AiOutlinePlus />
                              </div>
                              <div className="w-1/6 bg-gray-500 h-12 px-4 border border-solid font-bold  shadow-md my-4 py-3 text-lg">
                                <span className="my-4 text-blueGray-600">
                                  {cartItem?.quantity}
                                </span>
                              </div>
                              <div
                                className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-4 py-3 text-lg"
                                onClick={() =>
                                  toggleCartItemsQuantities(
                                    cartItem?._id,
                                    "decrease"
                                  )
                                }
                              >
                                <AiOutlineMinus />
                              </div>
                            </div>
                            <div className="flex mx-auto">
                              <h1 className="text-blueGray-400 font-semibold uppercase">
                                {cartItem?.title && cartItem?.title}
                              </h1>
                            </div>
                          </div>

                          <div className=" flex flex-col px-4 ml-16">
                            <div className="w-1/6 bg-gray-400 h-12 px-4 border border-solid  shadow-md my-1 py-3 rounded-tr-full text-center">
                              {cartItem?.quantity}
                            </div>
                            <div
                              className="w-1/6 bg-gray-500 h-12 px-4 border border-solid  shadow-xl my-1 py-3 rounded-tr-full text-2xl"
                              onClick={() => onRemove(cartItem)}
                            >
                              <TiDeleteOutline />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/**container */}

                  {/** cart bottom */}
                  {cartItems?.length >= 1 && (
                    <div className="absolute bottom-0 right-2  w-full p-16 text-center my-4">
                      <div className="flex justify-between">
                        <h3 className="text-md sm:text-sm text-blueGray-900 font-bold">
                          Subtotal
                        </h3>
                        <h3 className="text-md sm:text-sm text-blueGray-900 mr-4 font-bold">
                          {totalPrice}
                        </h3>
                      </div>
                      <div className="w-40 m-auto ">
                        <button
                          className=" w-1/2 text-lightBlue-500  bg-transparent border border-solid border-lightBlue-500 hover:bg-lightBlue-500 hover:text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          pay with stripe
                        </button>
                      </div>
                    </div>
                  )}
                  {/** cart bottom */}
                </>
              )}
            </div>
            {/**container for show ends here */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
