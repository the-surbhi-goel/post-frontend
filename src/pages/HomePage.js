import React, { useEffect, useRef, useState } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import convertFirebaseDate from "../helper/firebaseDate";
import { useTitle } from "../hooks/useTitle";
import SkeletonCard from "../components/SkeletonCard";

const HomePage = () => {
  const [posts, setPosts] = useState([false, false, false, false]);
  const postsRef = useRef(collection(db, "posts"));
  useTitle("Home");

  const onDeletePost = (postId) => {
    setPosts((posts) => posts.filter((post) => post.id !== postId));
  };

  useEffect(() => {
    async function getPosts() {
      getDocs(postsRef.current)
        .then((data) => {
          let temp = [];
          data.docs.forEach((element) => {
            let date = new Date(element.data().createdAt);

            temp.push({
              ...element.data(),
              id: element.id,
              createdAt: convertFirebaseDate(date),
            });
          });
          setPosts(temp);
        })
        .catch((error) => console.log(error));
    }
    getPosts();
  }, [postsRef]);

  return (
    <section>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {posts &&
          posts.map((post, index) =>
            post ? (
              <PostCard key={index} post={post} onDeletePost={onDeletePost} />
            ) : (
              <SkeletonCard key={index} />
            )
          )}
      </div>
    </section>
  );
};

export default HomePage;
