import React from "react";

const Comments = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-8 gap-3 px-2">
        {/* <div className="relative flex flex-col min-w-0 break-words w-1/2 mb-6 shadow-lg rounded-lg bg-white my-4 mx-auto"> */}
        <div className="max-w-lg px-8 py-4 mx-auto shadow-lg rounded-lg bg-white">
          <div className="flex items-start p-3 border-b border-solid border-gray-200 rounded-t ">
            <h1 className="text-xs mx-4 text-gray-400 font-semibold w-1/2">
              wilson ibekason
            </h1>
            <span className="text-xs text-gray-400 font-semibold">
              20/8/2005
            </span>
          </div>
          <div className="flex items-start justify-between p-3 border-b border-solid border-gray-200 rounded-t">
            <div className="w-5/6">
              <h1 className="text-xs text-blue-400 font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
                nostrum quos. Velit quia, nesciunt temporibus atque nulla quo
                magnam ratione!
              </h1>
            </div>
            <div className="1/6">
              <span className="text-xs">jjjjj</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
