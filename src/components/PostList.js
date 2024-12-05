import React, { useEffect, useRef, useState } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import convertFirebaseDate from "../helper/firebaseDate";
import SkeletonCard from "../components/SkeletonCard";
import { ToastContainer, toast } from "react-toastify";

const PostList = ({ authorName }) => {
  const [posts, setPosts] = useState([false, false, false, false]);
  const postsRef = useRef(collection(db, "posts"));

  const onDeletePost = (postId) => {
    setPosts((posts) => posts.filter((post) => post.id !== postId));
    toast("Post Deleted");
  };

  useEffect(() => {
    async function getPosts() {
      getDocs(postsRef.current)
        .then((data) => {
          let temp = [];

          const author = authorName && authorName.toLowerCase();

          data.docs.forEach((element) => {
            let date = new Date(element.data().createdAt);
            let data = element.data();

            if (!authorName || data.author.name.toLowerCase().indexOf(author) >= 0) {
              temp.push({
                ...data,
                id: element.id,
                createdAt: convertFirebaseDate(date),
              });
            }
          });
          setPosts(temp);
        })
        .catch((error) => console.log(error));
    }
    getPosts();
  }, [postsRef, authorName]);

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

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default PostList;
