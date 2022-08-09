import { useStateContextEcom } from "../oncontext/productContext/onEcomContext";
import React from "react";

const Carts = () => {
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
  return (
    <div className="cart-wrapper" ref={"cartRef"}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={""}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">(2 items)</span>
        </button>

        <div className="empty-cart">
          <AiOutlineShopping size={150} />
          <h3>Your shopping cart is empty</h3>
          <Link href="/">
            <button type="button" onClick={""} className="btn">
              Continue shopping
            </button>
          </Link>
        </div>

        <div className="product-container">
          <div className="product" key={"item._id"}>
            <img
              // src={urlFor(item?.image[0])}
              alt=""
              className="cart-product-image"
            />
            <div className="item-desc">
              <div className="flex top">
                <h5>rfjfrfer</h5>
                <p>$3</p>
              </div>
              <div className="flex bottom">
                <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={""}>
                      {" "}
                      <AiOutlineMinus />
                    </span>
                    <span className="num" onClick={() => {}}>
                      {" "}
                      {item.quantity}
                    </span>
                    <span className="plus" onClick={""}>
                      {" "}
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className="remove-item"
                  onClick={"() => onRemove(item)"}
                >
                  <TiDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal</h3>
            <h3>u7s7wduwdhwudhwdw</h3>
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={"handleCheckout"}>
              Pay With Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
