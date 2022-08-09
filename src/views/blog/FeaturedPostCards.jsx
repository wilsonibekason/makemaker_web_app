import { urlFor } from "../../client";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const FeaturedPostCards = ({ post }) => {
  console.log("====================================");
  console.log(post);
  console.log("====================================");
  const { title, description, author, mainImage, publishedAt, slug } = post;
  const { name, image } = author;
  return (
    <>
      <div className="relative h-72">
        <div
          className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
          style={{ backgroundImage: `url('${urlFor(mainImage)}')` }}
        />
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
          <p className="text-white mb-4 text-shadow font-semibold text-xs">
            {moment(publishedAt).format("MMM DD, YYYY")}
          </p>
          <p className="text-white mb-4 text-shadow font-semibold text-2xl text-center">
            {title}
          </p>
          <div className="flex items-center absolute bottom-5 w-full justify-center">
            <img
              //unoptimized
              alt="{post.author.name}"
              height="30px"
              width="30px"
              className="align-middle drop-shadow-lg rounded-full"
              src={urlFor(image)}
            />
            <p className="inline align-middle text-white text-shadow ml-2 font-medium">
              {name}
            </p>
          </div>
        </div>
        <Link to={`/post/${slug}`}>
          <span className="cursor-pointer absolute w-full h-full" />
        </Link>
      </div>
    </>
  );
};

export default FeaturedPostCards;
