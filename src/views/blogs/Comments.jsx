import React from "react";
import { useStateBlogContext } from "../../oncontext/blogContext/OnBlogContext";
// import moment from "moment";

const Comments = ({ createdAt, fullName, title, message, key }) => {
  const { blogComment } = useStateBlogContext();
  console.log(blogComment);

  return (
    <>
      <div
        class="max-w-lg px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        style={{ cursor: "auto" }}
        key={key}
      >
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            {createdAt}
          </span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            {fullName}
          </a>
        </div>
        <div class="mt-2">
          <a
            href="https://stackdiary.com/"
            class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            {title}
          </a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
