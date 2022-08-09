// import "./App.css";

import { Route, Navigate, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";
import Product from "./views/Products";
import ProductDetails from "./views/ProductDetails";
import { Blogs } from "./views/blogs";
import { Blog, BlogDetails } from "./views/blog";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/ABOUTUS" exact element={<Landing />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/products" element={<Product />} />

        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/Blogs" element={<Blog />} />
        <Route path="/blogpost/:id" element={<BlogDetails />} />
        <Route path="/" exact element={<Index />} />

        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      {/* <h1 className="text-sm py-2 px-4 font-semibold underline">hello world</h1> */}
    </div>
  );
}

export default App;
