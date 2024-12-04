import { Button } from "../components";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pageNotFound.png";
import darkPageNotFoundImage from "../assets/darkPageNotFound.jpeg";
import { useTitle } from "../hooks/useTitle";

const PageNotFound = ({ title }) => {
  useTitle(title);

  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <div className="max-w-lg">
          <img
            className="rounded dark:invisible dark:h-0"
            src={PageNotFoundImage}
            alt="404 Page Not Found"
          />
          <img
            className="rounded invisible h-0 dark:visible dark:h-full"
            src={darkPageNotFoundImage}
            alt="404 Page Not Found"
          />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
          <Button classname="w-64 text-xl">Back To Home Page</Button>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
