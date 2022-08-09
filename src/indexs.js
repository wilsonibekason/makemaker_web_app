import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Navigate,
  Router,
  Routes,
} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import { Toaster } from "react-hot-toast";

// layouts

import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth.js";

// views without layouts

import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";
import { HomeContext } from "oncontext/OnLandingContext";
import { AboutProvider } from "./oncontext/aboutContext/onAboutContext";
import { ContactProvider } from "./oncontext/contactContext/onContactContext";
import { ProductProvider } from "./oncontext/productContext/onProductContext";
import Product from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import { EcomProvider } from "./oncontext/productContext/onEcomContext";
import { BlogDetails, Blog } from "./views/blog";
import { BlogContextProvider } from "./oncontext/blogContext/OnBlogContext";
import { Blogs } from "./views/blogs";

ReactDOM.render(
  <BrowserRouter>
    <AboutProvider>
      <HomeContext>
        <ContactProvider>
          <ProductProvider>
            <EcomProvider>
              <BlogContextProvider>
                <Routes>
                  {/* add routes with layouts */}
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/auth" element={<Auth />} />
                  {/* add routes without layouts */}
                  <Route path="/ABOUTUS" exact element={<Landing />} />
                  <Route path="/profile" exact element={<Profile />} />
                  <Route path="/products" element={<Product />} />

                  <Route
                    path="/productdetails/:id"
                    element={<ProductDetails />}
                  />
                  <Route path="/Blogs" element={<Blog />} />
                  <Route path="/blogpost/:id" element={<BlogDetails />} />
                  <Route path="/" exact element={<Index />} />
                  {/* add redirect for first page */}
                  <Route path="/" element={<Navigate replace to="/" />} />
                  {/*******************************Blogs************** */}
                  {/* <Route path="/blogs" element={<Blogs />} /> */}
                </Routes>
              </BlogContextProvider>
            </EcomProvider>
          </ProductProvider>
        </ContactProvider>
      </HomeContext>
    </AboutProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
