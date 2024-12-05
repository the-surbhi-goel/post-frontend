import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import convertFirebaseDate from "../helper/firebaseDate";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");

  const onDeletePost = (postId) => {
    setPosts((posts) => posts.filter((post) => post.id !== postId));
    console.log(posts);
  };

  useEffect(() => {
    async function getPosts() {
      getDocs(postsRef)
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
          console.log(" movies ", temp);
        })
        .catch((error) => console.log(error));
    }
    getPosts();
  }, []);

  return (
    <section>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        {posts &&
          posts.map((post, index) => (
            <PostCard key={index} post={post} onDeletePost={onDeletePost} />
          ))}
      </div>
    </section>
  );
};

export default HomePage;
