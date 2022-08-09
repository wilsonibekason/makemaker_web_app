import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useReducer,
} from "react";
import { BsArrowLeftSquare, BsArrowRightSquare, BsCart3 } from "react-icons/bs";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineShopping,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillStar,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { format, set } from "date-fns";
import moment from "moment";
import { urlFor, client } from "../../client";
import { useParams } from "react-router-dom";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const categoryID = useParams();
  const [products, setProducts] = useState([]);
  const [productBanner, setProductsBanner] = useState([]);
  const [productHeader, setProductHeader] = useState([]);
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [productIsLoaded, setProductIsLoaded] = useState(false);
  const [productError, setProductError] = useState(false);
  const [productSuccess, setProductSuccess] = useState(false);
  const [productErrorMsg, setProductErrorMsg] = useState("");
  const [productSuccessMsg, setProductSuccessMsg] = useState("");
  // STATES FOR FILTERING PRODUCTS
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterProducts, setFilterProducts] = useState([]);
  const [animateFilter, setAnimateFilter] = useState("All");
  // declaring reducer actions
  //
  // declaring acti
  // const [product, dispatch] = useReducer(reducer, { count: 0 });
  // // calling the function
  // dispatch({ type: DECREMENT });
  useEffect(() => {
    const productBannerQuery = '*[_type == "banner"]';
    client.fetch(productBannerQuery).then((data) => setProductsBanner(data));
    // querying for product header

    const productHeaderQuery = '*[_type == "productHeader"]';
    client.fetch(productHeaderQuery).then((data) => setProductHeader(data));
    // querying for product
    const productQuery = '*[_type == "product"]';
    client.fetch(productQuery).then((data) => setProducts(data));
  }, []);
  // destructuring and converting product published time
  const publishedAt = productBanner?.map((item) => item?.publishedAt);
  const productBannerID = productBanner?.map((item) => item?._id);
  const convertedDate = publishedAt
    ? moment(publishedAt).utc().format("YYYY-MM-DD")
    : "";

  // SECTION FOR FILTERING PRODUCTS

  const filterStocks = (stocks) => {
    const filteredStocks = stocks.filter((item) => {
      return item.status === "ACTIVE";
    });
    return filteredStocks ? filteredStocks : [];
  };

  const handleProductFilter = (productItem) => {
    setAnimateFilter(productItem);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 100 });
      productItem === "All"
        ? setFilterProducts(productBanner)
        : setFilterProducts(
            productBanner?.filter((product) =>
              product?.tags?.includes(productItem)
            )
          );
    }, 1000);
  };
  // SECTION FOR FILTERING PRODUCTS

  // FILTER BUTTON ACTIONS

  const activeFilterBtn =
    "hover:text-blueGray-200 hover:bg-blueGray-900 text-sm font-semibold inline-block py-1 px-2 rounded-full text-blueGray-900 bg-blueGray-200 uppercase last:mr-0 mr-2 mt-4";
  const inActiveFilterBtn =
    "hover:text-blueGray-200 hover:bg-blueGray-900 text-sm font-semibold inline-block py-1 px-2 rounded-full text-blueGray-900 bg-red-200 uppercase last:mr-0 mr-2 mt-4 ";

  // FILTER BUTTON ACTIONS
  return (
    <ProductContext.Provider
      value={{
        productBanner,
        productHeader,
        BsArrowLeftSquare,
        BsArrowRightSquare,
        BsCart3,
        AiOutlineLeft,
        AiOutlineRight,
        AiOutlinePlus,
        AiOutlineMinus,
        TiDeleteOutline,
        AiOutlineShopping,
        AiFillStar,
        products,
        convertedDate,
        handleProductFilter,
        activeFilterBtn,
        inActiveFilterBtn,
        animateFilter,
        productBannerID,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useStateContextProduct = () => useContext(ProductContext);
