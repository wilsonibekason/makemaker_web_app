import React from "react";
import { createPopper } from "@popperjs/core";
import { useStateContextProduct } from "../../oncontext/productContext/onProductContext";
import Cart from "../../views/Cart";
import CartModal from "../../views/cart/Cart";
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
        <span className="absolute right-12 text-sm text-gray-200 w-5 rounded-lg text-center font-semibold h-4 bg-gray-600 px-auto">
          {totalQuantities}
        </span>
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-200 inline-flex items-center justify-center rounded-full">
            <BsCart3 width={40} />
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={
                "https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png"
              }
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
      <CartModal
        popoverDropdownRef={popoverDropdownRef}
        dropdownPopoverShow={dropdownPopoverShow}
        btnDropdownRef={btnDropdownRef}
        closeDropdownPopover={closeDropdownPopover}
        openDropdownPopover={openDropdownPopover}
      />
      <div
        ref={popoverDropdownRef}
        className={(dropdownPopoverShow ? "block " : "hidden ") + ""}
      ></div>
    </>
  );
};

export default UserDropdown;
