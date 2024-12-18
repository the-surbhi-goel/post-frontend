import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";

const CreatePostPage = () => {
  const navigate = useNavigate();
  const postRef = collection(db, "posts");
  useTitle("Create Post");

  const handleSubmit = async (e) => {
    e.preventDefault();

    addDoc(postRef, {
      title: e.target.title.value,
      description: e.target.desc.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        photoURL: auth.currentUser.photoURL,
      },
      createdAt: new Date().getTime(),
    }).then(() => {
      toast("Post Added");
      setTimeout(() => navigate("/"), 3000);
      navigate("/");
    });
  };

  return (
    <section>
      <form className="form max-w-sm mx-auto" onSubmit={handleSubmit}>
        <h1 className="text-2xl mb-10 dark:text-white">Create Post</h1>
        <div className="mb-5 text-left">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Post Title
          </label>
          <input
            type="title"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required
            autoComplete="off"
          />
        </div>

        <div className="mb-5 text-left">
          <label
            htmlFor="desc"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Post Description
          </label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Description..."
            required
            autoComplete="off"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
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

export default CreatePostPage;
