import React from "react";
import Logo from "../assets/logo.png";

const PostCard = () => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Very easy this was to integrate
        </h3>
        <p className="my-4">If you care for your time, I hands down would go with this."</p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <img className="rounded-full w-9 h-9" src={Logo} alt="img" />
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div>
            Bonnie Green
            <i className="bi bi-trash3"></i>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 ">Date</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PostCard;
