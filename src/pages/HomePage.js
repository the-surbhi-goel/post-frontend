import React from "react";
import PostCard from "../components/PostCard";

const HomePage = () => {
  return (
    <section>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <PostCard />
      </div>
    </section>
  );
};

export default HomePage;
