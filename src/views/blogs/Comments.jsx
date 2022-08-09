import React from "react";

const Comments = () => {
  return (
    <>
      <div
        class="max-w-lg px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800"
        style={{ cursor: "auto" }}
      >
        <div class="flex items-center justify-between">
          <span class="text-sm font-light text-gray-600 dark:text-gray-400">
            Jan 15, 2022
          </span>
          <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
            JavaScript
          </a>
        </div>
        <div class="mt-2">
          <a
            href="https://stackdiary.com/"
            class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
          >
            How to sanitiz array() in JS
          </a>
          <p class="mt-2 text-gray-600 dark:text-gray-300">
            Dui urna vehicula tincidunt pretium consequat luctus mi, platea
            fermentum conubia tempus ac orci. Pellentesque dictum malesuada
            cubilia faucibus dignissim mi nascetur senectus, augue ad libero
            efficitur dolor duis lobortis, non etiam sociosqu.
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
