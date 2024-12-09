import Logo from "../assets/logo.png";
import { auth, db } from "../firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import { useCart } from "../context-reducer/context/LoginContext";
import parse from "html-react-parser";

const PostCard = ({ post, onDeletePost }) => {
  const { isLogin } = useCart();
  const postRef = doc(db, "posts", post.id);

  const deletePost = () => {
    console.log("deletePost");
    deleteDoc(postRef).then(() => {
      onDeletePost(post.id);
    });
  };

  return (
    <figure className="flex flex-col items-start justify-start p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="min-w-full max-w-2xl mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{post.title}</h3>
          <span className="min-w-4">
            {isLogin && post.author.id === auth.currentUser.uid && (
              <i className="bi bi-trash3 text-red-700" onClick={() => deletePost()}></i>
            )}
          </span>
        </div>
        <p className="my-4 text-left">{parse(post.description)}</p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <img className="rounded-full w-9 h-9" src={post.author?.photoURL || Logo} alt="img" />
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div>{post.author?.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 ">
            {post.createdAt.toString()}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PostCard;
