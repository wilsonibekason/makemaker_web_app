import React from "react";
import { createPopper } from "@popperjs/core";
import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import Cart from "../../views/Cart";
import { useStateContextEcom } from "../../oncontext/productContext/onEcomContext";

const UserDropdown = () => {
  const { BsCart3 } = useStateContextProduct();
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const { showCart, setShowCart, totalQuantities } = useStateContextEcom();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <span className="absolute -right-2 text-sm text-blueGray-200 w-5 rounded-full text-center font-semibold h-4 bg-blueGray-600">
          {totalQuantities}
        </span>
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <BsCart3 width={40} />
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("../../assets/img/cart.png").default}
              //src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964__340.png"
            />
          </span>
        </div>
      </a>
      <Cart
        popoverDropdownRef={popoverDropdownRef}
        dropdownPopoverShow={dropdownPopoverShow}
        btnDropdownRef={btnDropdownRef}
        closeDropdownPopover={closeDropdownPopover}
        openDropdownPopover={openDropdownPopover}
      />
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          // "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
          ""
        }
      >
        {/* <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a> */}
      </div>
    </>
  );
};

export default UserDropdown;
