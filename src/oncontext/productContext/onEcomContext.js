import { client } from "../../client";
import React, { useState, useEffect, createContext, useContext } from "react";
import { productDetailQuery, productDetailMoreQuery } from "../../utils/data";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const EcomContext = createContext({});

export const EcomProvider = ({ children }) => {
  const renderMoreProductsItems1 = ["r", "e", "l", "a", "t", "e", "d"];
  const renderMoreProductsItems2 = ["p", "r", "o", "d", "u", "c", "t", "s"];
  let id = useParams();
  let productId = id?.id;
  // DEFINE STATES
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState();
  const [productDetailsMore, setProductDetailsMore] = useState();
  const [productDetail, setProductDetail] = useState();
  const [productDetailMore, setProductDetailMore] = useState();
  const [error, setError] = useState(null);
  // products hover state
  const [index, setIndex] = useState(0);

  // LOGIC STATES
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  // LOGIC STATES

  // REVIEWS STATES
  const [reviewData, setReviewData] = useState({
    name: "",
    email: "",
    review: "",
  });
  const [isReviewCreated, setIsReviewCreated] = useState(false);
  const [reviewLoaded, setReviewLoaded] = useState(false);

  // RVIEWS STATES

  // DEFINE STATES

  // fetching productDetails
  const fetchProductDetails = () => {
    const query = productDetailQuery(productId);
    if (query) {
      client
        .fetch(`${query}`)
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
  // CALL FUNCTIONS

  // LOGS
  console.log("====================================");
  console.log(products);
  console.log(productDetails);
  console.log(productId);
  console.log("====================================");
  // LOGS
  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  let itemIndex;
  let foundProduct;
  //-----------------------ADDING LOGIC---------------------//
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item?._id === product?._id
    );
    setTotalPrice((previousPrice) => previousPrice + product?.price * quantity);
    setTotalQuantities((previousQuantity) => previousQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct?._id == product?._id) {
          return { ...cartItems, quantity: cartProduct?.quantity + quantity };
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${quantity} ${product?.title} added to the cart`);
  };
  //-----------------------ADDING LOGIC---------------------//

  //-----------------------REMVING LOGIC---------------------//
  const onRemove = (product) => {
    foundProduct = cartItems?.find((item) => item?._id === product?._id);
    const newCartItem = cartItems?.filter((item) => item?._id !== product?._id);
    setTotalPrice(
      (previousPrice) =>
        previousPrice - foundProduct?.price * foundProduct?.quantity
    );
    setTotalQuantities(
      (previousQuantity) => previousQuantity - foundProduct?.quantity
    );
    setCartItems(newCartItem);
    toast.success(
      `${foundProduct?.quantity} ${product?.title} removed from the cart`
    );
  };
  //-----------------------REMOVING LOGIC---------------------//
  //-----------------------CART_ITEMS TOGGLE LOGIC---------------------//

  const toggleCartItemsQuantities = (id, value) => {
    foundProduct = cartItems?.find((item) => item._id === id);
    itemIndex = cartItems.findIndex((product) => product?._id === id);
    const newCartItem = cartItems.filter((item) => item?._id != id);
    if (value === "increase") {
      let newCartItems = [
        ...newCartItem,
        {
          ...foundProduct,
          quantity: foundProduct?.quantity + 1,
        },
      ];
      setCartItems(newCartItems);
      setTotalPrice((previousPrice) => previousPrice + foundProduct?.price);
      setTotalQuantities((previousQuantity) => previousQuantity + 1);
    } else if (value === "decrease") {
      if (foundProduct?.quantity > 1) {
        let newCartItems = [
          ...newCartItem,
          {
            ...foundProduct,
            quantity: foundProduct?.quantity - 1,
          },
        ];
        setCartItems(newCartItems);
        setTotalPrice((previousPrice) => previousPrice - foundProduct?.price);
        setTotalQuantities((previousQuantity) => previousQuantity - 1);
      }
    }
  };
  //-----------------------CART_ITEMS TOGGLE LOGIC---------------------//
  //-----------------------ADDING LOGIC---------------------//
  const increaseQuantity = () => {
    let newCartItem = {
      ...cartItems[0],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalPrice((previousPrice) => previousPrice + (cartItems.length - 1));
  };

  const increQty = () => {
    let newCartItem = {
      ...cartItems[cartItems.length - 1],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalQuantities((previousQuantity) => previousQuantity + 1);
    setTotalPrice(0);
  };
  // ----------------------- MAIN INCREASE LOGIC---------------------//
  const inQTY = () => {
    setProductQuantity((previousQuantity) => previousQuantity + 1);
  };
  //-----------------------MAIN INCREASE LOGIC---------------------//
  const decreaseQuantity = () => {
    let newCartItem = {
      ...cartItems[0],
      quantity: cartItems.length - 1,
    };
    setCartItems(newCartItem);
    setTotalPrice((previousPrice) => previousPrice - (cartItems.length - 1));
  };
  //----------------------- MAIN DECREASE LOGIC---------------------//
  const decreQuantity = () => {
    setProductQuantity((previousQuantity) =>
      previousQuantity - 1 < 1 ? 1 : previousQuantity - 1
    );
  };
  //-----------------------MAIN DECREASE LOGIC---------------------//
  //-----------------------increase && decrease products  LOGIC---------------------//

  ////////// ***************************************************************************************    PRODUCTS MAIN LOGIC ***************************************** ////////////////

  ////////// ***************************************************************************************    REVIEWS MAIN LOGIC ***************************************** ////////////////
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviewLoaded(true);
    const reviewDetails = {
      _type: "reviews",
      name,
      email,
      review,
    };

    client
      .create(reviewDetails)
      .then(() => {
        console.log("Successfully created review");
        setIsReviewCreated(true);
        setReviewLoaded(false);
        setReviewData({ name: "", email: "", review: "" });
        toast.success("Successfully created review");
      })
      .catch((error) => {
        console.log("Error creating review", error);
        toast.error("Error creating review");
        setIsReviewCreated(false);
        setReviewLoaded(false);
      });
  };

  ///  --------------- onchange for reviews contents
  // destructure reviewdata
  const { name, email, review } = reviewData;
  const handleReviewChange = (event) => {
    const name = reviewData.name.trim();
    const email = reviewData.email.trim();
    const review = reviewData.review.trim();
    setReviewData({
      ...reviewData,
      [name]: { ...reviewData[name], review },
    });
  };

  const handleChange = (event) => {
    setReviewData({ ...reviewData, [event.target.name]: event.target.value });
  };
  ///  --------------- onchange for reviews contents
  ////////// ***************************************************************************************    REVIEWS MAIN LOGIC ***************************************** ////////////////

  return (
    <EcomContext.Provider
      value={{
        renderMoreProductsItems1,
        renderMoreProductsItems2,
        productDetails,
        products,
        productId,
        index,
        setIndex,
        increaseQuantity,
        decreQuantity,
        increQty,
        decreaseQuantity,
        inQTY,
        onAdd,
        productQuantity,
        totalQuantities,
        totalPrice,
        toggleCartItemsQuantities,
        showCart,
        setShowCart,
        onRemove,
        cartItems,
        handleReviewSubmit,
        handleReviewChange,
        handleChange,
        name,
        email,
        review,
        isReviewCreated,
        reviewLoaded,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
export const useStateContextEcom = () => useContext(EcomContext);
