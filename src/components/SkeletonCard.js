import Logo from "../assets/logo.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <figure className="flex flex-col items-start justify-start p-8 bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="min-w-full max-w-2xl mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
        <div className="flex flex-row justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            <Skeleton width="70px" />
          </h3>
          <span className="min-w-4"></span>
        </div>
        <p className="my-4 text-left">
          <Skeleton count={4} />
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center ">
        <img className="rounded-full w-9 h-9" src={Logo} alt="img" />
        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
          <div>
            <Skeleton width="70px" />
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 ">
            <Skeleton width="100px" />
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default SkeletonCard;
