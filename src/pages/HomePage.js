import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const postsRef = collection(db, "posts");
  // const postsRef = useRef(collection(db, "posts"));

  useEffect(() => {
    async function getPosts() {
      getDocs(postsRef)
        .then((data) => {
          let temp = [];
          data.docs.forEach((element) => {
            temp.push({ ...element.data(), id: element.id });
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
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
