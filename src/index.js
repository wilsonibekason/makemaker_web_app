import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { HomeContext } from "./oncontext/OnLandingContext";
import { AboutProvider } from "./oncontext/aboutContext/onAboutContext";
import { ContactProvider } from "./oncontext/contactContext/onContactContext";
import { ProductProvider } from "./oncontext/productContext/onProductContext";
import Product from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import { EcomProvider } from "./oncontext/productContext/onEcomContext";
import { BlogDetails, Blog } from "./views/blog";
import { BlogContextProvider } from "./oncontext/blogContext/OnBlogContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AboutProvider>
        <HomeContext>
          <ContactProvider>
            <ProductProvider>
              <EcomProvider>
                <BlogContextProvider>
                  <App />
                </BlogContextProvider>
              </EcomProvider>
            </ProductProvider>
          </ContactProvider>
        </HomeContext>
      </AboutProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>
);
reportWebVitals();
