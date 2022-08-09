import React from "react";
import { Route, Routes } from "react-router-dom";
import { Categories, Layout, PostCard, PostWidget } from ".";
import { FeaturedPosts } from "./section";

const Blog = () => {
  return (
    <>
      <Layout>
        <div className="container mx-auto px-10 mb-8">
          <FeaturedPosts />
          <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1 bg-blueGray-200">
              <PostCard />
            </div>
            <div className="w-8/12 px-4 bg-blueGray-300">
              <PostWidget />
              <Categories />
            </div>
            <div className="w-full px-4 flex-1 bg-blueGray-400">
              {" "}
              cdcdudhuivdiuvfiuvher
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
