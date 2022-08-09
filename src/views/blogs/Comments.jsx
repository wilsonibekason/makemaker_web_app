import React from "react";

const Comments = () => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-1/2 mb-6 shadow-lg rounded-lg bg-white my-4 mx-auto">
        <div className="flex items-start p-3 border-b border-solid border-blueGray-200 rounded-t ">
          <h1 className="text-xs mx-4 text-blueGray-400 font-semibold">
            {` wilson ibekason .`}
          </h1>
          <span className="text-xs text-blueGray-400 font-semibold">
            20/8/2005
          </span>
        </div>
        <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
          <h1 className="text-xs text-lightBlue-400 font-semibold  w-4/12">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            nostrum quos. Velit quia, nesciunt temporibus atque nulla quo magnam
            ratione!
          </h1>
          <span className="text-xs">jjjjj</span>
        </div>
      </div>
    </>
  );
};

export default Comments;
