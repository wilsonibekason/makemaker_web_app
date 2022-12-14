import { urlFor } from "../../client";
import moment from "moment";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const MoreBlogs = ({
  title,
  desc,
  author,
  id,
  mainImage,
  publishedAt,
  more,
}) => {
  const { name, image } = author;
  console.log("morproducts: " + more);
  const navigate = useNavigate();

  return (
    <>
      {/**start of card component */}
      <motion.div
        class="max-w-lg px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        style={{ cursor: "auto" }}
        whileHover={{
          scale: 1.1,
        }}
        initial={{
          y: -80,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 0.1,
          type: "spring",
          stiffness: 500,
        }}
      >
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            {moment(publishedAt).format("MMM DD, YYYY")}
          </span>
          <a class="px-3 py-1 text-sm font-base text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            {title}
          </a>
        </div>
        <div class="mt-2">
          <a
            href="https://stackdiary.com/"
            class="text-2xl font-base text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            {title}
          </a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
        <div class="flex items-center justify-between mt-4">
          <a
            href="#"
            class="text-blue-600 dark:text-blue-400 hover:underline"
            onClick={() => navigate(`/blogpost/${id}`, { replace: true })}
          >
            Read more ⟶
          </a>
          <div class="flex items-center">
            <img
              //src="https://stackdiary.com/140x100.png"
              src={urlFor(image)}
              alt="Author Photo"
              class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <a class="font-base text-gray-700 cursor-pointer dark:text-gray-200">
              {name}
            </a>
          </div>
        </div>
      </motion.div>
      {/**end of card components */}
    </>
  );
};

export default MoreBlogs;
