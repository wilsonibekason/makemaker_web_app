import { client } from "../../client";
import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

import { getFeaturedPosts } from "../../utils/data";
import Slider from "react-slick";
import FeaturedPostCards from "./FeaturedPostCards";

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

/////////////////////////

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  let query;
  // fetch detailed queries
  const fetchFeaturedPost = () => {
    query = getFeaturedPosts();
    client
      .fetch(query)
      .then((result) => {
        setFeaturedPosts(result);
        setDataLoaded(true);
      })
      .catch((error) => console.log(error?.response?.body?.error?.description));
  };

  useEffect(() => {
    fetchFeaturedPost();
  }, []);
  /// logs
  console.log(featuredPosts);

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {dataLoaded &&
          featuredPosts.map((post, index) => (
            <FeaturedPostCards key={index} post={post} />
          ))}
      </Slider>
    </div>
  );
};

export default FeaturedPosts;
