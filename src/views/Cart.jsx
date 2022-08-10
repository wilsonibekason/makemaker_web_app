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
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill,
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
        <div className="w-full md:w-6/12 lg:w-4/12 h-full bg-blueGray-400 fixed right-0 top-0 z-100  overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 ">
          <div className="w-full h-full bg-white shadow-xl float-right p-3 relative">
            <button
              className="flex flex-wrap center text-sm font-bold gap-2 ml-2 border-none bg-transparent mt-4"
              ref={btnDropdownRef}
              onClick={(e) => {
                e.preventDefault();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <AiOutlineRight size={30} />
              <span className="ml-2 font-base text-sm md:text-md lg:text-xl">
                Your Cart
              </span>
              <span className="ml-2 text-gray-600 text-sm md:text-md lg:text-xl">
                {totalQuantities}
              </span>
            </button>

            {/** render the empty cart content */}

            {cartItems?.length < 1 && (
              <>
                <div className="flex flex-col mt-4">
                  <div className=" mx-auto">
                    <AiOutlineShopping size={150} className="" />
                  </div>
                  <div className="w-3/6 text-center mx-auto">
                    <h3 className=" font-bold text-sm">
                      Your Shopping Cart Is Empty
                    </h3>
                  </div>
                  <div className="flex mx-auto items-end">
                    <Link to={"/products"}>
                      <button className=" w-full max-w-screen-2xl hover:max-w-prose px-4 py-2 rounded-full border-none text-sm  uppercase bg-blue-500 hover:bg-blue-200 active:bg-teal-600 cursor-pointer transition-all scale-100 hover:scale-105 mt-12 shadow-lg">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
            {/** render the empty cart content */}
            {/**container */}
            <div>
              {cartItems?.length >= 1 && (
                <>
                  {/** */}
                  {cartItems.map((cartItem, index) => {
                    const { title, description, _id, quantity, image, price } =
                      cartItem;
                    return (
                      <>
                        <div
                          className="md:flex items-center mt-14 py-8 border-t border-gray-200"
                          key={index}
                        >
                          <div className="w-1/4 shadow">
                            <img
                              src={urlFor(image)}
                              alt
                              className="w-full h-full object-center object-cover"
                            />
                          </div>
                          <div className="md:pl-3 md:w-3/4">
                            <div className="flex items-center justify-between w-full pt-1">
                              <p className="text-base font-black leading-none text-gray-800">
                                {title}
                              </p>

                              <div className="flex-col mt-8">
                                <BsFillArrowDownCircleFill
                                  size={20}
                                  className="mx-auto"
                                  onClick={() =>
                                    toggleCartItemsQuantities(_id, "decrease")
                                  }
                                />
                                <span className="font-bold text-center ml-1">
                                  {quantity}
                                </span>
                                <BsFillArrowUpCircleFill
                                  size={20}
                                  className="mx-auto"
                                  onClick={() =>
                                    toggleCartItemsQuantities(_id, "increase")
                                  }
                                />
                              </div>
                            </div>
                            <p className="text-xs leading-3 text-gray-600 pt-2">
                              Height: 10 inches
                            </p>
                            <p className="text-xs leading-3 text-gray-600 py-4">
                              Color: Black
                            </p>
                            <p className="w-96 text-xs leading-3 text-gray-600">
                              Composition: 100% calf leather
                            </p>
                            <div className="flex items-center justify-between pt-5 pr-6">
                              <div className="flex itemms-center">
                                <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
                                  Add to favorites
                                </p>
                                <p
                                  className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                  onClick={() => onRemove(cartItem)}
                                >
                                  Remove
                                </p>
                              </div>
                              <p className="text-base font-black leading-none text-gray-800">
                                {`$${price}`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  {/** */}

                  {/**container */}

                  {/** cart bottom */}
                  {cartItems?.length >= 1 && (
                    <>
                      <div className="absolute bottom-0 right-2  w-full p-16 text-center my-4">
                        <div className="flex justify-between">
                          <h3 className="text-md sm:text-sm text-blueGray-900 font-bold">
                            Subtotal
                          </h3>
                          <h3 className="text-md sm:text-sm text-blueGray-900 mr-4 font-bold">
                            {totalPrice}
                          </h3>
                        </div>
                        <div className="w-full m-auto ">
                          <button
                            className="  text-blue-500  bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            pay with stripe
                          </button>
                        </div>
                      </div>
                    </>
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
